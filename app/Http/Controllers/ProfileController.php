<?php

namespace App\Http\Controllers;

use App\Data\PlanData;
use App\Data\SavedSearchData;
use App\Http\Requests\ProfileUpdateRequest;
use App\Http\Resources\BreedResource;
use App\Mail\AccountDeletionMail;
use App\Models\Breed;
use App\Models\Country;
use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        $countryState = Country::query()->where('iso2', 'US')->first()?->states();

        $states = [];
        if ($countryState !== null) {

            $states = $countryState->select('id', 'name')->get()->map(function ($state) {
                return [
                    'value' => $state->id,
                    'label' => ucwords($state->name),
                ];
            });
        }

        $selectedStateId = request('state_id') ?: $request->user()->state_id ?? $countryState?->first()?->id;

        $stateCities = $countryState?->where('id', $selectedStateId)?->first();

        if ($stateCities && $stateCities->cities()->exists()) {
            $cities = $stateCities->cities()->select('id', 'name')->get()->map(function ($city) {
                return [
                    'value' => $city->id,
                    'label' => ucwords($city->name),
                ];
            });
        } else {
            $cities = [];
        }

        $breed_query = Breed::select('id', 'name');
        $breeds = BreedResource::collection($breed_query->orderBy('name')->get());

        $subscription = auth()->user()?->getActiveSubscriptions()?->first();

        /* dd($request->user()->saved_searches()->get()); */

        /* dd($request->user()?->breeder_plan); */
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'puppies' => $request->user()->puppies()->with('breeds', 'seller')->paginate(12),
            'status' => session('status'),

            'plan' => PlanData::optional($request->user()?->premium_plan?->plan),
            'breeder_plan' => PlanData::optional($request->user()?->breeder_plan?->plan),
            'saved_searches' => SavedSearchData::collect($request->user()->saved_searches()->latest()->get()),

            'plan_next_billing' => $request->user()?->premium_plan != null ? Carbon::parse($request->user()?->premium_plan?->asStripeSubscription()?->current_period_end)->format('d M Y') : null,
            'plan_cancel_at' =>  $request->user()?->premium_plan != null ? $request->user()?->premium_plan->asStripeSubscription()?->cancel_at_period_end : null,

            'breeder_next_billing' => $request->user()?->breeder_plan != null ? Carbon::parse($request->user()?->breeder_plan?->asStripeSubscription()?->current_period_end)->format('d M Y') : null,

            'breeder_cancel_at' => $request->user()?->breeder_plan  != null ? $request->user()?->breeder_plan?->asStripeSubscription()?->cancel_at_period_end : null,

            /* 'subscription' => $subscription, */
            'tab' => $request->tab ?? 'Account Settings',
            'breeds' => $breeds,
            'states' => $states ?? [],
            'cities' => $cities ?? [],
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {

        /* dd(request()->all()); */
        $input = $request->validated();
        if (is_array(@$input['state_id'])) {
            $input['state_id'] = $input['state_id']['id'];
        }

        if (is_array(@$input['city_id'])) {
            $input['city_id'] = $input['city_id']['id'];
        }

        $request->user()->fill($input);

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        if ($input['avatar']) {
        $request->user()->clearMediaCollection('avatars');
        $request->user()->addMedia($input['avatar'])->toMediaCollection('avatars');
        }

        if ($input['current_password'] != null && $input['new_password']) {
            $request->user()->password = Hash::make($input['new_password']);
        }


        $request->user()->save();

        return Redirect::route('profile.edit')->with([
            'message.success' => 'Profile updated successfully.',
        ]);
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        Mail::queue(new AccountDeletionMail($user));

        /* inertia()->clearHistory(); */

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/')->with([
            'message.success' => 'Account deleted successfully.',
        ]);
    }

    public function destroyAvatar(Request $request)
    {
        $request->user()->clearMediaCollection('avatars');
        return redirect()->back()->with([
            'message.success' => 'Avatar deleted successfully.'
        ]);
    }
}
