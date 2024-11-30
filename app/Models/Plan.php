<?php

namespace App\Models;

use Cknow\Money\Money;
use Exception;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;
use Spatie\EloquentSortable\Sortable;
use Spatie\EloquentSortable\SortableTrait;
use Stripe\Plan as StripePlan;
use Stripe\Stripe;

class Plan extends Model implements Sortable
{
    use HasFactory, SortableTrait;

    protected $fillable = [
        'name',
        'price',
        'active',
        'interval',
        'listing_limit',
        'stripe_plan_id',
        'trial_days',
        'is_featured',
        'is_highlight',
        'type',
        'is_breeder',
        'order_column',
        'image_per_listing',
        'video_per_listing',
    ];

    protected $casts = [
        'interval' => 'json',
    ];

    protected $appends = [
        'money_formatted',
        /* 'plan_id', */
    ];

    public static function stripePlan(): array
    {
        Stripe::setApiKey(config('services.stripe.secret'));

        return StripePlan::all()->data;
    }

    protected static function booted(): void
    {
        static::saving(function (self $model): void {
            if (empty($model->stripe_plan_id)) {
                $model->stripe_plan_id = '';
            }
        });

        static::saved(function (self $plan): void {
            Stripe::setApiKey(config('services.stripe.secret'));

            // If the plan does not have a stripe_plan_id and the price is set, create a new Stripe plan
            if (empty($plan->stripe_plan_id) && $plan->price > 0) {
                $stripePlan = self::createStripePlan($plan);
                $plan->updateQuietly(['stripe_plan_id' => $stripePlan->id]);
            } else {
                // If the plan already exists on Stripe, create a new plan if the price has changed
                if ($plan->wasChanged('price')) {
                    $newStripePlan = self::createStripePlan($plan);
                    $plan->updateQuietly(['stripe_plan_id' => $newStripePlan->id]);
                }
            }
        });
    }

    protected static function createStripePlan(self $plan): StripePlan
    {
        $lastCreatedPlan = null;
        $lastCreatedPlan = StripePlan::create([
            'amount' => $plan->money,
            'currency' => $plan->currency_code,
            'interval' => $plan->interval,
            'product' => [
                'name' => $plan->name,
            ],
        ]);

        return $lastCreatedPlan;
    }

    protected static function updateStripePlan(self $plan): void
    {
        if (empty($plan->stripe_plan_id)) {
            return; // No stripe_plan_id available to update
        }

        try {
            // Update the existing Stripe plan
            $stripePlan = StripePlan::update($plan->stripe_plan_id, [
                'amount' => $plan->money,
                'currency' => $plan->currency_code,
            ]);
        } catch (Exception $e) {
            // Handle the exception if something goes wrong
            Log::error('Failed to update Stripe plan: ' . $e->getMessage());
        }
    }

    public function scopeActive(Builder $query): Builder
    {
        return $query->where('active', true);
    }

    public function getCurrencyCodeAttribute(): string
    {
        return Money::USD($this->price)->getMoney()->getCurrency()->getCode();
    }

    /* public function getPlanIdAttribute(): ?string */
    /* { */
    /*     Stripe::setApiKey(config('services.stripe.secret')); */
    /*     $plans = StripePlan::all()->data; */

    /*     return $plans[0]->id ?? null; */
    /* } */

    public function getMoneyAttribute(): int
    {
        return Money::USD($this->price)->getMoney()->getAmount();
    }

    public function getMoneyFormattedAttribute(): string
    {
        return Money::USD($this->price)->formatByIntl();
    }
}
