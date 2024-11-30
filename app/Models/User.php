<?php

namespace App\Models;

use App\Observers\UserObserver;
use Fico7489\Laravel\Pivot\Traits\PivotEventTrait;
/* use Filament\Models\Contracts\FilamentUser; */
/* use Filament\Models\Contracts\HasName; */
/* use Filament\Panel; */
use Hashids\Hashids;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Cashier\Billable;
use Milwad\LaravelAttributes\Traits\Attributable;
use Overtrue\LaravelFavorite\Traits\Favoriter;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\Permission\Traits\HasRoles;
use Spatie\Sitemap\Contracts\Sitemapable;
use Spatie\Sitemap\Tags\Url;

#[ObservedBy([UserObserver::class])]
class User extends Authenticatable implements  HasMedia,  MustVerifyEmail, Sitemapable
{
    //FilamentUser
    //HasName

    use Billable, Favoriter, HasFactory, HasRoles, InteractsWithMedia, Notifiable;

    /* use PivotEventTrait; */

    /*  public static function boot() */
    /* { */
    /*       parent::boot(); */

    /*  } */

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'first_name',
        'last_name',
        'has_federal_license',
        'has_state_license',
        'email',
        'password',
        'x_id',
        'state_id',
        'city_id',
        'trial_ends_at',
        'pm_last_four',
        'pm_type',
        'zip_code',
        'is_breeder',
        'stripe_id',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $appends = [
        'has_password',
        'is_subscribed',
        /* 'active_subscriptions', */
        'avatar',
        'member_since',
        'address',
        'gallery',
        'full_name',
        /* 'custom_attributes', */
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function toSitemapTag(): Url|string|array
    {
        return route('breeder.show', $this->slug);
    }

    public function getActiveSubscriptions()
    {
        return Subscription::whereNull('ends_at')
            ->where('stripe_status', 'active')
            ->get();
    }

    public static function decodeSlug($slug)
    {
        $hashedId = substr(strrchr($slug, '-'), 1);
        $hashids = new Hashids('urpuppy449958', 10);
        $decoded = $hashids->decode($hashedId);

        return ! empty($decoded) ? $decoded[0] : null;
    }

    public function registerMediaCollections(): void
    {
        // Define an 'images' media collection
        $this->addMediaCollection('gallery');

        /* $this->addMediaCollection('videos'); */
    }

    public function getGalleryAttribute()
    {
        return $this->getMedia('gallery')->sortBy('order_column')->map(function ($media) {
            return $media->getUrl();
        });
    }

    public function registerMediaConversions(?Media $media = null): void
    {
        $this->addMediaConversion('avatar')
            ->width(100)
            ->height(100)
            ->sharpen(10);
    }

    public function getFilamentName(): string
    {
        return "{$this->first_name} {$this->last_name}";
    }

    /* public function canAccessPanel(Panel $panel): bool */
    /* { */
    /*     return str_ends_with($this->email, '@urpuppy.com'); */
    /* } */

    public function scopeBreeders($query)
    {
        $query->where('is_breeder', true);
    }

    public function getHasPasswordAttribute()
    {
        return ! is_null($this->password);
    }

    public function getMemberSinceAttribute()
    {
        return $this->created_at->diffForHumans();
    }

    public function getAvatarAttribute()
    {
        return $this->getFirstMediaUrl('avatars');
    }

    public function state()
    {
        return $this->belongsTo(State::class);
    }

    public function city()
    {
        return $this->belongsTo(City::class);
    }

    /* public function stripeAddress() */
    /* { */
    /*     return [ */
    /*         'line_1' */
    /*     ]; */
    /* } */

    public function customSubscriptions()
    {
        return $this->hasMany(Subscription::class, 'user_id', 'id');
    }

    public function getIsSubscribedAttribute()
    {
        return $this->active_subscriptions_count > 0;
    }

    public function getAddressAttribute()
    {
        return $this->city?->name ? "{$this->city->name}, {$this->state->name}, US" : $this->state?->name.', US';
    }

    public function isSubscribed()
    {
        return $this->subscriptions()->active()->count();
    }

    public function puppies()
    {
        return $this->hasMany(Puppy::class);
    }

    /*     public function getAttributesAttribute($value) */
    /*     { */
    /*         dd($value); */
    /*     } */

    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function breeds()
    {
        return $this->belongsToMany(Breed::class);
    }

    public function getFullNameAttribute()
    {
        return "{$this->first_name} {$this->last_name}";
    }

    /*      static::pivotUpdated(function ($model, $relationName, $pivotIds, $pivotIdsAttributes) { */
    /*         echo 'pivotUpdated'; */
    /*         echo get_class($model); */
    /*         echo $relationName; */
    /*         print_r($pivotIds); */
    /*         print_r($pivotIdsAttributes); */
    /*     }); */

    /* public function getCustomAttributesAttribute() */
    /* { */
    /*     return $this->attributes()->get()->pluck('value', 'title'); */
    /* } */
}
