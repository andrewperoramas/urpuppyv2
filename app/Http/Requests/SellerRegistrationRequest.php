<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

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
    public function rules(): array
    {
        return [
            'first_name' => ['required', 'string', 'max:100'],
            'last_name' => ['required', 'string', 'max:100'],
            'email' => ['required', 'string', 'max:100'],
            'phone' => ['string', 'max:100', 'nullable'],
            'website' => ['max:100', 'nullable'],
            'social_fb' => ['string', 'nullable',  'max:100'],
            'social_ig' => ['string', 'nullable',  'max:100'],
            'social_tiktok' => ['string', 'nullable',  'max:100'],
            'social_x' => ['string', 'nullable', 'max:100'],
            'city_id' => ['numeric', 'nullable'],
            'state_id' => ['numeric', 'nullable'],
            'zip_code' => ['numeric' , 'nullable'],
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
            'images' => ['array', 'required'],
            'videos' => ['array', 'required'],
        ];
    }
}
