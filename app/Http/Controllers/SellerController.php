<?php

namespace App\Http\Controllers;

use App\Actions\CreatePuppy;
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
use App\Models\User;
use Exception;
use Illuminate\Http\Request;

class SellerController extends Controller
{
    public function show(Request $request, string $slug)
    {
        $seller = User::where('slug', $slug)->firstOrFail();

        return inertia('Seller/AllPuppies', [
            'seller_name' => $seller?->company_name ?? $seller->full_name,
            'all_puppies' => PuppyData::collect($seller->puppies()->with(['media', 'siblings', 'breeds', 'seller', 'puppy_patterns', 'puppy_colors'])->paginate(12)),
        ]);
    }

    public function destroy(int $id) {

        $puppy = Puppy::findOrFail($id);
        $puppy->delete();

        success('register.seller', 'Puppy deleted successfully');
    }

    public function create(Request $request,?int $id = null)
    {
        if (!$request->user()?->breeder_plan && $request->user()?->roles?->contains('breeder')) {
            return error('breeders.create', 'Register as a breeder to create puppies');
        }

        if (!$request->user()) {
            return error('register.seller', 'You are not logged in');
        }

        if (! $request->user()?->roles->contains('seller') && ! $request->user()->roles?->contains('breeder')) {
            return error('home', 'You are not a seller/breeder');
        }

        if (
        !$request->user()?->premium_plan && $request->user()->puppies()->count() == 1  &&
            $request->user()->roles?->contains('seller')
    ) {
            return success('plans.index', 'Subscribe to any plan to activate your listing');
        }


        /* dd($request->user()?->isSubscribed()); */
        /* if (!$request->user()?->isSubscribed() && */
        /*     $request->user()?->puppies()?->count() > 0 */
        /* ) { */
        /*     return redirect()->route('plans.index')->with([ */
        /*    'message.error' => 'You have to subscribe to to activate your listing' */

        /*     ]); */
        /* } */

        if (!auth()->user()) {
            return success('register');
            /* return inertia_location(route('register')); */
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
        if (
         !$request->user()?->breeder_plan &&
        !$request->user()?->premium_plan && $request->user()->puppies()->count() > 1) {
            return success('plans.index', 'Subscribe to any plan to activate your listing');

        }

        $data = $request->validated();
        $user = $request->user();

        if (!$request->user()?->premium_plan || $request->user()?->breeder_plan && $request->user()->puppies()->count() == 0) {

            $user->update([
                'phone' => $data['phone'],
                'website' => $data['website'],
                'social_fb' => $data['social_fb'],
                'social_ig' => $data['social_ig'],
                'social_tiktok' => $data['social_tiktok'],
                'social_x' => $data['social_x'],
                'city' => $data['city'],
                'state_id' => $data['state_id'],
                'zip_code' => $data['zip_code'],
            ]);

        }

        $created_puppy = $user->puppies()->create([
            'name' => ucwords($data['puppy_name']),
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

        if (isset($data['videos'])) {
        collect($data['videos'])->each(function ($image) use ($created_puppy) {
            try {
            $media = $created_puppy->addMedia($image)->toMediaCollection('video');
            GenerateVideoThumbnail::dispatch($media);

} catch (\Exception $e) {
    \Log::error('Error adding media: ' . $e->getMessage());
}
            /* $media = $created_puppy->addMedia($image)->toMediaCollection('video'); */


        });
}

        collect($data['images'])->each(function ($image) use ($created_puppy) {
            $created_puppy->addMedia($image)->toMediaCollection('puppy_files');
        });

        if (
        !$request->user()?->breeder_plan &&
        !$request->user()?->premium_plan && $request->user()->puppies()->count() > 0

    ) {
            return success('plans.index', 'Subscribe to any plan to activate your listing');

        }


        return success('puppies.show', 'Puppy created successfully', $created_puppy->slug);
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

        /* collect($data['videos'])->each(function ($image) use ($update_puppy) { */
        /*     $media = $update_puppy->addMedia($image)->toMediaCollection('video'); */
        /*     GenerateVideoThumbnail::dispatch($media); */
        /* }); */

        if (isset($data['videos'])) {
            $update_puppy->clearMediaCollection('video');
        collect($data['videos'])->each(function ($image) use ($update_puppy) {
            try {
            $media = $update_puppy->addMedia($image)->toMediaCollection('video');
            GenerateVideoThumbnail::dispatch($media);

} catch (\Exception $e) {
    \Log::error('Error adding media: ' . $e->getMessage());
}
            /* $media = $created_puppy->addMedia($image)->toMediaCollection('video'); */


        });
}

        if (isset($data['images'])) {

            $update_puppy->clearMediaCollection('puppy_files');

            collect($data['images'])->each(function ($image) use ($update_puppy) {
                $update_puppy->addMedia($image)->toMediaCollection('puppy_files');
            });
        }

        /* if (!$request->user()->premium_plan && $request->user()->puppies()->count() == 1) { */
        /*     return redirect()->to(route('plans.index'))->with([ */
        /*         'message.success' => 'Subscribe to any plan to activate your listing' */
        /*     ]); */
        /* } */

        return success('puppies.show', 'Puppy updated successfully', $update_puppy->slug);



    }
}
