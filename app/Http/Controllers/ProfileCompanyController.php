<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfileCompanyController extends Controller
{
    public function update(Request $request)
    {
        $validations = [];

        /* if ($request->has('about_me') && $request['about_me'] != null) { */
        /*     $validations['about_me'] = 'string'; */
        /* } */

        $validations['company_name'] = 'string';
        $validations['company_address'] = 'string';
        $validations['company_age'] = 'integer';

        $input = $request->validate($validations);

        $user = $request->user();

        $user->deleteAttributeByTitle('company_name');
        $user->deleteAttributeByTitle('company_address');
        $user->deleteAttributeByTitle('company_age');

        if (@$input['company_name']) {
            $user->attachAttribute('company_name', @$input['company_name']);
        }

        if (@$input['company_address']) {
            $user->attachAttribute('company_address', @$input['company_address']);
        }

        if (@$input['company_age']) {
            $user->attachAttribute('company_age', @$input['company_age']);
        }

        cache()->flush();

        return redirect()->back();
    }
}
