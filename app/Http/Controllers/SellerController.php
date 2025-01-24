<?php

namespace App\Http\Controllers;

use App\Data\BreedOptionData;
use App\Data\ColorData;
use App\Data\PatternData;
use App\Data\PuppyData;
use App\Data\PuppyEditData;
use App\Data\SiblingData;
use App\Http\Requests\PuppyUpdateRequest;
use App\Http\Requests\SellerRegistrationRequest;
use App\Jobs\GenerateVideoThumbnail;
use App\Models\Breed;
use App\Models\Puppy;
use App\Models\PuppyColor;
use App\Models\PuppyPattern;
use Exception;
use Illuminate\Http\Request;

class SellerController extends Controller
{
    public function index()
    {

        return inertia('Seller/Dashboard');
    }

    public function destroy(int $id) {

        $puppy = Puppy::findOrFail($id);
        $puppy->delete();
        return redirect()->back()->with([
            'message.success' => 'Puppy deleted successfully'
        ]);

    }

    public function create(Request $request,?int $id = null)
    {
        if (!$request->user()) {
           return redirect()->to(route('login'))->with([
                'message.error' => 'You are not logged in',
                'puppy' => Puppy::query()->inRandomOrder()->first()
            ]);
        }

        /* if (!$request->user()?->premium_plan && $request->user()->puppies()->count() > 1) { */
        /*     return redirect()->to(route('plans.index'))->with([ */
        /*         'message.success' => 'Subscribe to any plan to activate your listing' */
        /*     ]); */
        /* } */
        /* dd($request->user()?->isSubscribed()); */
        /* if (!$request->user()?->isSubscribed() && */
        /*     $request->user()?->puppies()?->count() > 0 */
        /* ) { */
        /*     return redirect()->route('plans.index')->with([ */
        /*    'message.error' => 'You have to subscribe to to activate your listing' */

        /*     ]); */
        /* } */

        if (!auth()->user()) {
            return redirect()->route('register');
        }



        return inertia('Seller/Registration', [
            'puppy_count' => $request->user()->puppies()->count(),
            'puppy_edit' => $id ? PuppyEditData::from(Puppy::with(['media', 'siblings', 'breeds', 'seller', 'puppy_patterns', 'puppy_colors'])->findOrFail($id)) : null,
            'patterns' => pattern_options(),
            'breeds' => breed_options(),
            'colors' => color_options(),
            'siblings' => sibling_options($request, $id)
        ]);
    }

    public function store(SellerRegistrationRequest $request)
    {


        if (!$request->user()?->premium_plan && $request->user()->puppies()->count() > 1) {
            return redirect()->to(route('plans.index'))->with([
                'message.success' => 'Subscribe to any plan to activate your listing'
            ]);
        }

        $data = $request->validated();
        $user = $request->user();

        if (!$request->user()?->premium_plan) {

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

        collect($data['videos'])->each(function ($image) use ($created_puppy) {
            $media = $created_puppy->addMedia($image)->toMediaCollection('video');

            GenerateVideoThumbnail::dispatch($media);

        });

        collect($data['images'])->each(function ($image) use ($created_puppy) {
            $created_puppy->addMedia($image)->toMediaCollection('puppy_files');
        });

        if (!$request->user()?->premium_plan && $request->user()->puppies()->count() > 0) {
            return redirect()->to(route('plans.index'))->with([
                'message.success' => 'Subscribe to any plan to activate your listing'
            ]);
        }

        return redirect()->to(route('puppies.show', $created_puppy->slug))->with([
            'message.success' => 'Puppy created successfully'
        ]);

    }

    public function update(PuppyUpdateRequest $request, int $id)
    {
        $data = $request->validated();
        $user = $request->user();

        $user->puppies()->where('id', $id)->update([
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

        $update_puppy = $user->puppies()->where('id', $id)->firstOrFail();

        $update_puppy->puppy_patterns()->detach();
        $patterns_input = $data['puppy_patterns'];
        if (isset(collect($patterns_input)->first()['value'])  ) {
            $patterns_input = collect($patterns_input)->unique('value')->pluck('value');
        }

        $update_puppy->puppy_patterns()->attach($patterns_input);

        $update_puppy->breeds()->detach();
        $breeds_input = $data['puppy_breeds'];
        if (isset(collect($breeds_input)->first()['value'])) {
            $breeds_input = collect($breeds_input)->unique('value')->pluck('value');
        }
        $update_puppy->breeds()->attach($breeds_input);


        $update_puppy->puppy_colors()->detach();
        $colors_input = $data['puppy_colors'];
        if (isset(collect($colors_input)->first()['value'])) {
           $colors_input = collect($colors_input)->unique('value')->pluck('value');
        }

        $update_puppy->puppy_colors()->attach($colors_input );

        if (isset($data['puppy_siblings']) && $data['puppy_siblings']) {
            $siblings_input = $data['puppy_siblings'];
            if (isset(collect($siblings_input)->first()['value'])) {
               $siblings_input = collect($siblings_input)->unique('value')->pluck('value');
            }

            $update_puppy->siblings()->detach();
            $update_puppy->attachSiblings($siblings_input);
        }

        collect($data['videos'])->each(function ($image) use ($update_puppy) {
            $update_puppy->clearMediaCollection('video');
            $media = $update_puppy->addMedia($image)->toMediaCollection('video');
            GenerateVideoThumbnail::dispatch($media);
        });

        collect($data['images'])->each(function ($image) use ($update_puppy) {
            $update_puppy->clearMediaCollection('puppy_files');
            $update_puppy->addMedia($image)->toMediaCollection('puppy_files');
        });

        /* if (!$request->user()->premium_plan && $request->user()->puppies()->count() == 1) { */
        /*     return redirect()->to(route('plans.index'))->with([ */
        /*         'message.success' => 'Subscribe to any plan to activate your listing' */
        /*     ]); */
        /* } */


        return redirect()->to(route('puppies.show', $update_puppy->slug))->with([
            'message.success' => 'Puppy updated successfully'
        ]);

    }
}
