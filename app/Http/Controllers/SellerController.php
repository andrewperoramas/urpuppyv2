<?php

namespace App\Http\Controllers;

use App\Data\BreedOptionData;
use App\Data\ColorData;
use App\Data\PatternData;
use App\Data\PuppyData;
use App\Data\SiblingData;
use App\Http\Requests\SellerRegistrationRequest;
use App\Models\Breed;
use App\Models\Puppy;
use App\Models\PuppyColor;
use App\Models\PuppyPattern;
use Illuminate\Http\Request;

class SellerController extends Controller
{
    public function index()
    {

        return inertia('Seller/Dashboard');
    }

    public function create(Request $request)
    {
        /* dd($request->user()?->isSubscribed()); */
        if (!$request->user()?->isSubscribed() &&
            $request->user()?->puppies()?->count() > 0
        ) {
            return redirect()->route('plans.index')->with([
           'message.error' => 'You have to subscribe to to activate your listing'

            ]);
        }

        if (!$request->user()) {
            return redirect()->route('register');
        }

        $patterns = PatternData::collect(PuppyPattern::all());
        $colors = ColorData::collect(PuppyColor::all());
        $siblings = SiblingData::collect($request->user()->puppies);
        $breeds = BreedOptionData::collect(Breed::select('id', 'name')->get());

        return inertia('Seller/Registration', [
            'puppy_count' => $request->user()->puppies()->count(),
            'patterns' => $patterns,
            'breeds' => $breeds,
            'colors' => $colors,
            'siblings' => $siblings
        ]);
    }

    public function store(SellerRegistrationRequest $request)
    {
        $data = $request->validated();
        $user = $request->user();

        if (!$user->puppies()->count()) {

            $user->update([
                'phone' => $data['phone'],
                'website' => $data['website'],
                'social_fb' => $data['social_fb'],
                'social_ig' => $data['social_ig'],
                'social_tiktok' => $data['social_tiktok'],
                'social_x' => $data['social_x'],
                'city_id' => $data['city_id'],
                'state_id' => $data['state_id'],
                'zip_code' => $data['zip_code'],
            ]);

        }

        $created_puppy = $user->puppies()->create([
            'name' => $data['puppy_name'],
            'gender' => $data['puppy_gender'],
            'description' => $data['puppy_about'],
            'birth_date' => $data['puppy_birth_date'],
            'price' => $data['puppy_price'],
            'has_vaccine' => $data['has_vaccine'] == 'yes' ? true : false,
            'has_health_certificate' => $data['has_health_certificate'] == 'yes' ? true : false,
            'has_vet_exam' => $data['has_vet_exam'] == 'yes' ? true : false,
            'has_travel_ready' => $data['has_travel_ready'] == 'yes' ? true : false,
            'has_delivery_included' => $data['has_delivery_included']   == 'yes' ? true : false,
        ]);

        $created_puppy->puppy_patterns()->attach($data['puppy_patterns']);
        $created_puppy->breeds()->attach($data['puppy_breeds']);
        $created_puppy->puppy_colors()->attach($data['puppy_colors']);
        if (isset($data['puppy_siblings']) && $data['puppy_siblings']) {
            $created_puppy->attachSiblings($data['puppy_siblings']);
        }

        /* if ($request->hasFile('video')) { */
        /*     $created_puppy->addMedia($request->file('video'))->toMediaCollection('videos'); */
        /* } */

        collect($data['videos'])->each(function ($image) use ($created_puppy) {
            $created_puppy->addMedia($image)->toMediaCollection('video');
        });

        collect($data['images'])->each(function ($image) use ($created_puppy) {
            $created_puppy->addMedia($image)->toMediaCollection('puppy_files');
        });

/*         if (!$request->user()->is_subscribed && $request->user()->puppies()->count() == 1) { */
/*             return redirect()->to(route('plans.index'))->with([ */
/*                 'message.error' => 'You are not subscribed to any plan yet' */
/*             ]); */
/*         } */
        if (!$request->user()->premium_plan && $request->user()->puppies()->count() == 1) {
            return redirect()->to(route('plans.index'))->with([
                'message.success' => 'Subscribe to any plan to activate your listing'
            ]);
        }


        return redirect()->to(route('puppies.show', $created_puppy->slug))->with([
            'message.success' => 'Puppy created successfully'
        ]);

    }
}
