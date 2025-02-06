<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class BreederRegistrationRequest extends FormRequest
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
            'fullname' => ['required', 'string', 'max:100'],
            'kennel_name' => ['required', 'string', 'max:100'],
            /* 'company_email' => ['required', 'email', 'string', 'max:100'], */
            'company_phone' => ['required','string', 'max:100' ],
            'company_address' => ['required' ],
            'company_email_address' => ['required', 'email', 'string' ],
            'city' => ['required' ],
            'state_id' => ['required', ],
            'zip_code' => ['required' ],
            'breeds' => ['required', 'array', 'max:4'],
            'established_date' => ['required', 'string', 'max:100'],
            'about_company' => ['required', 'string', 'max:255'],

            'has_usda_registration' => [''],
            'company_logo' => ['required'],
               'gallery' => 'required|array', // Ensure 'gallery' is an array
    'gallery.*' => [
        'required',
        'image',
        'mimes:jpeg,png,jpg',
        'max:12048'
    ],
   'videos' => 'array', // Ensure 'gallery' is an array
    'videos.*' => [
        'mimes:mpeg,mp4,ogg,webm',
        'max:50512'
    ],
        ];
    }

    public function messages()
    {
        return [
            'company_phone.required' => 'Phone number is required',
            'city.required' => 'City field is required',
            'state_id.required' => 'State field is required',

        ];
    }

}
