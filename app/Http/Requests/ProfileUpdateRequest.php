<?php

namespace App\Http\Requests;

use App\Models\User;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class ProfileUpdateRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(Request $request): array
    {
        $rules = [
            'first_name' => [ 'string', 'max:40'],
            'last_name' => [ 'string', 'max:40'],
            'state_id' => [''],
            'avatar' => ['nullable', 'max:4096'],
            'current_password' => ['nullable',  'current_password'],
            'new_password' => ['nullable', 'string', 'min:8', 'confirmed'],
            'city' => [''],
            'zip_code' => [''],

            'social_fb' => [''],
            'enable_notification' => [''],
            'social_ig' => [''],
            'social_tiktok' => [''],
            'social_x' => [''],
            'phone' => [''],
            'email' => [
                'string',
                'lowercase',
                'email',
                'max:255',
                Rule::unique(User::class)->ignore($this->user()->id),
            ],
        ];

        $user = $request->user();

        if ($user?->breeder_plan) {
            $rules['kennel_name'] = ['required', 'string', 'max:100'];
            $rules['company_zip_code'] = ['required'];
            $rules['company_email_address'] = ['required'];
            $rules['company_name'] = ['required'];
            $rules['company_about'] = ['required'];
            $rules['company_state'] = ['required'];
            $rules['company_city'] = ['required'];
            /* $rules['company_city_id'] = ['']; */
            $rules['company_address'] = ['required'];
            $rules['company_established_on'] = ['required'];
            $rules['company_logo'] = [''];
        }

        return $rules;
    }
}
