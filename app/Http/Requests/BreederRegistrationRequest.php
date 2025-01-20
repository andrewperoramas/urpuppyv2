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
            'email' => ['required', 'email', 'string', 'max:100'],
            'phone' => ['required','string', 'max:100' ],
            'city_id' => ['required' ],
            'state_id' => ['required', ],
            'zip_code' => ['required' ],
            'breeds' => ['required', 'array', 'max:4'],
            'established_date' => ['required', 'string', 'max:100'],
            'about_company' => ['required', 'string', 'max:100'],

            'has_usda_registration' => [''],
            'company_logo' => ['required'],
               'gallery' => 'required|array', // Ensure 'gallery' is an array
    'gallery.*' => [
        'required',
        'image',
        'mimes:jpeg,png,jpg',
        'max:2048'
    ],
   'videos' => 'required|array', // Ensure 'gallery' is an array
    'videos.*' => [
        'required',
        'mimes:mpeg,mp4,ogg,webm',
        'max:10512'
    ],
        ];
    }

    public function messages()
    {
        return [
            'phone.required' => 'Phone number is required',
            'city_id.required' => 'City field is required',
            'state_id.required' => 'State field is required',

        ];
    }

}
