<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfileAboutMeController extends Controller
{
    public function update(Request $request)
    {
        $validations = [];

        if ($request->has('about_me') && $request['about_me'] != null) {
            $validations['about_me'] = 'string|max:255';
        }

        $input = $request->validate($validations);

        $user = $request->user();

        $user->deleteAttributeByTitle('about_me');

        if (@$input['about_me']) {
            $user->attachAttribute('about_me', @$input['about_me']);
        }

        cache()->flush();

        return redirect()->back();
    }
}
