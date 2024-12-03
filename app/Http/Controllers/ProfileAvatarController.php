<?php

namespace App\Http\Controllers;

use App\Http\Requests\AvatarRequest;

class ProfileAvatarController extends Controller
{
    public function update(AvatarRequest $request)
    {
        $user = auth()->user();

        if ($user->hasMedia('avatars')) {
            $user->getFirstMedia('avatars')->delete();
        }

        $wew = $user->addMedia($request->file('avatar'))
            ->toMediaCollection('avatars');

        cache()->flush();

        return redirect()->back();
    }
}
