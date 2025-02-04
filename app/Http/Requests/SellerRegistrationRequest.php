<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class SellerRegistrationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(Request $request): array
    {
        $user = $request->user();
        $rules =  [
            'first_name' => ['required', 'string', 'max:100'],
            'last_name' => ['required', 'string', 'max:100'],
            'email' => ['required', 'string', 'max:100'],
            'phone' => ['max:100'],
            'website' => ['max:100', 'nullable'],
            'social_fb' => ['string', 'nullable',  'max:100'],
            'social_ig' => ['string', 'nullable',  'max:100'],
            'social_tiktok' => ['string', 'nullable',  'max:100'],
            'social_x' => ['string', 'nullable', 'max:100'],
            'city' => ['nullable' ],
            'state_id' => ['nullable' ],
            'zip_code' => ['nullable' ],
            'puppy_name' => ['required', 'string', 'max:100'],
            'puppy_price' => ['required', 'numeric'],
            'puppy_gender' => ['required', 'string'],
            'puppy_about' => ['required', 'string'],
            'puppy_birth_date' => ['required', 'string'],
            'puppy_patterns' => ['required', 'array'],
            'puppy_breeds' => ['required', 'array'],
            'puppy_colors' => ['required', 'array'],
            'puppy_siblings' => ['array' ],
            'has_vaccine' => [''],
            'has_health_certificate' => [''],
            'has_vet_exam' => [''],
            'has_travel_ready' => [''],
            'has_delivery_included' => [''],
               'images' => 'required|array', // Ensure 'gallery' is an array
    'images.*' => [
        'required',
        'image',
        'mimes:jpeg,png,jpg',
        'max:12048'
    ],
   'videos' => 'nullable|array', // Ensure 'gallery' is an array
    'videos.*' => [
        'mimes:mpeg,mp4,ogg,webm',
        'max:50512'
    ],
        ];

        $puppies_count = $request->user()->puppies()->count();

        if (!$puppies_count) {
            $rules['phone'] = ['required', 'string', 'max:100'];
            $rules['city'] = ['required'];
            $rules['zip_code'] = ['required'];
            $rules['state_id'] = ['required'];
        } else {

            $plan = $user?->premium_plan?->plan;

            if ($plan) {
                $rules['images'] = "required|array|max:$plan->image_per_listing";
                $rules['videos'] = "required|array|max:$plan->video_per_listing";
            }

            /* dd($rules); */

        }

        return $rules;
    }

    public function messages()
    {
        return [
            'phone.required' => 'Phone number is required',
            'city.required' => 'City field is required',
            'state_id.required' => 'State field is required',
        ];
    }
}
