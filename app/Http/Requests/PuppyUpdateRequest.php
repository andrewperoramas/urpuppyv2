<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PuppyUpdateRequest extends FormRequest
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
    public function rules(): array
    {
        $rules =  [
            /* 'first_name' => ['required', 'string', 'max:100'], */
            /* 'last_name' => ['required', 'string', 'max:100'], */
            /* 'email' => ['required', 'string', 'max:100'], */
            /* 'phone' => ['max:100'], */
            /* 'website' => ['max:100', 'nullable'], */
            /* 'social_fb' => ['string', 'nullable',  'max:100'], */
            /* 'social_ig' => ['string', 'nullable',  'max:100'], */
            /* 'social_tiktok' => ['string', 'nullable',  'max:100'], */
            /* 'social_x' => ['string', 'nullable', 'max:100'], */
            /* 'city_id' => ['nullable' ], */
            /* 'state_id' => ['nullable' ], */
            /* 'zip_code' => ['nullable' ], */
            'puppy_name' => ['required', 'string', 'max:100'],
            'puppy_price' => ['required', 'numeric'],
            'puppy_gender' => ['required', 'string'],
            'puppy_about' => ['required', 'string', 'max:255', 'min:20'],
            'puppy_birth_date' => ['required', 'string', 'before_or_equal:today' ],
            'puppy_patterns' => ['required', 'array'],
            'puppy_breeds' => ['required', 'array'],
            'puppy_colors' => ['required', 'array'],
            'puppy_siblings' => ['array' ],
            'has_vaccine' => [''],
            'has_health_certificate' => [''],
            'has_vet_exam' => [''],
            'has_travel_ready' => [''],
            'has_delivery_included' => [''],
            'images' => ['array', 'required'],
            'videos' => ['array'],
        ];
        $user = $this->user();
        $plan = $user?->premium_plan?->plan;

        if ($plan) {
            $rules['images'] = "required|array|max:$plan->image_per_listing";
            $rules['videos'] = "array|max:$plan->video_per_listing";
        }

        return $rules;
    }

    public function messages()
    {
        return [
            /* 'phone.required' => 'Phone number is required', */
            /* 'city_id.required' => 'City field is required', */
            /* 'state_id.required' => 'State field is required', */
        ];
    }
}
