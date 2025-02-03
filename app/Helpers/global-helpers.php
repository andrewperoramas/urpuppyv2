<?php

use App\Data\BreedOptionData;
use App\Data\ColorData;
use App\Data\PatternData;
use App\Data\PuppyCardData;
use App\Data\SiblingData;
use App\Data\VideoData;
use App\Models\Breed;
use App\Models\Puppy;
use App\Models\PuppyColor;
use App\Models\PuppyPattern;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

if (!function_exists('guest_puppy')) {
    function guest_puppy() : PuppyCardData {
        return PuppyCardData::optional(Puppy::with(['breeds', 'seller'])->whereHas('seller')->whereHas('breeds')->inRandomOrder()->first());
    }
}


if (!function_exists('get_videos')) {
    function get_videos() : Collection {
        return collect([]);

         $user = User::query()->with(['media' => function ($query) {

        }])->get()->map(function ($user) {
                if ($user->getMedia('videos')->isEmpty()) {
                    return ;
                }

                return ['url' => $user->getFirstMediaUrl('videos'), 'title' => ucwords($user->comany_name ?? $user->full_name ?? ""), 'video_thumbnail'  => $user->getFirstMediaUrl('thumbnails')];
        })->filter(function ($data) {
                if ($data &&$data['url'] && $data['video_thumbnail']) {
                    return $data;
                }
        })->values();

         $puppy = Puppy::query()->with(['media' => function ($query) {

        }])->get()->map(function ($puppy) {
                if ($puppy->getMedia('video')->isEmpty()) {
                    return ;
                }

            return ['url' => $puppy->getFirstMediaUrl('video'), 'title' => ucwords($puppy->name ??  ""),
                'video_thumbnail' =>$puppy->getFirstMediaUrl('thumbnails')
            ];
        })->filter(function ($data) {
                if ($data &&$data['url'] && $data['video_thumbnail']) {
                    return $data;
                }
        })->values();

        return VideoData::collect($user->merge($puppy)->take(3)->values());
    }
}




if (!function_exists('pattern_options')) {

    function pattern_options() {
        return PatternData::collect(PuppyPattern::all());
    }

}


if (!function_exists('color_options')) {

    function color_options() {
        return ColorData::collect(PuppyColor::all());
    }

}


/* if (!function_exists('sibling_options')) { */

    function sibling_options(Request $request, ?int $id) {
        return SiblingData::collect($request->user()->puppies()->where('id', '!=', $id)->get());
    }

/* } */


if (!function_exists('breed_options')) {

    function breed_options() {
        return BreedOptionData::collect(Breed::select('id', 'name')->get());
    }

}



