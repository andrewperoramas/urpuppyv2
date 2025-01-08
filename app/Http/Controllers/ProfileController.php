<?php

namespace App\Http\Controllers;

use App\Data\PlanData;
use App\Http\Requests\ProfileUpdateRequest;
use App\Http\Resources\BreedResource;
use App\Models\Breed;
use App\Models\Country;
use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
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

        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'plan' => PlanData::optional($subscription?->plan),
            'next_billing' => $subscription != null ? Carbon::parse($subscription?->asStripeSubscription()?->current_period_end)->format('d M Y') : null,
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

        return Redirect::route('profile.edit');
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

        inertia()->clearHistory();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
