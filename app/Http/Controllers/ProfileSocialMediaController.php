<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfileSocialMediaController extends Controller
{
    public function update(Request $request)
    {
        $validations = [];

        if ($request->has('facebook') && $request['facebook'] != null) {
            $validations['facebook'] = 'url';
        }

        if ($request->has('instagram') && $request['instagram'] != null) {
            $validations['instagram'] = 'url';
        }

        if ($request->has('twitter') && $request['twitter'] != null) {
            $validations['twitter'] = 'url';
        }

        if ($request->has('tiktok') && $request['tiktok'] != null) {
            $validations['tiktok'] = 'url';
        }

        $input = $request->validate($validations);

        $user = auth()->user();
        $user->deleteAttributeByTitle('facebook');
        $user->deleteAttributeByTitle('twitter');
        $user->deleteAttributeByTitle('instagram');
        $user->deleteAttributeByTitle('tiktok');

        if (@$input['facebook']) {
            $user->attachAttribute('facebook', @$input['facebook']);
        }

        if (@$input['twitter']) {
            $user->attachAttribute('twitter', @$input['twitter']);
        }

        if (@$input['instagram']) {
            $user->attachAttribute('instagram', @$input['instagram']);
        }

        if (@$input['tiktok']) {
            $user->attachAttribute('tiktok', @$input['tiktok']);
        }

        /* $user->attachAttribute('facebook', @$input['facebook']); */
        /* $user->attachAttribute('twitter', @$input['twitter']); */

        /* $user->attachAttribute('instagram', @$input['instagram']); */
        /* if (@$input['tiktok']) { */
        /*     $user->attachAttribute('tiktok', @$input['tiktok']); */
        /* } */

        /* $user->attachAttributes('social_media', json_encode($input)); */

        /* if ($user->hasMedia('avatars')) { */
        /*     $user->getFirstMedia('avatars')->delete(); */
        /* } */

        /* $wew = $user->addMedia($request->file('avatar')) */
        /*     ->toMediaCollection('avatars'); */

        /* dd($user->hasAttributeTitle('facebook')) ; */

        cache()->flush();

        return redirect()->back();
    }
}
