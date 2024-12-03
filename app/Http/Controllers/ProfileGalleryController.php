<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProfileGalleryController extends Controller
{
    public function update(Request $request)
    {
        $validations = [];

        if ($request->has('file') && $request['file'] != null) {
            $validations['file'] = 'required|array|max:5';
            $validations['file.*'] = 'file|max:10548';  // Limit each file to 2MB

            $files = $request->validate($validations)['file'];

            $videoCount = 0;
            $allowedVideoTypes = [];
            $allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml'];

            foreach ($files as $file) {
                $mimeType = $file->getMimeType();

                if (in_array($mimeType, $allowedVideoTypes)) {
                    $videoCount++;
                    if ($videoCount > 1) {
                        return back()->withErrors(['file' => 'You can only upload one video file.']);
                    }
                }

                if (! in_array($mimeType, array_merge($allowedImageTypes, $allowedVideoTypes))) {
                    return back()->withErrors(['file' => 'Files must be of type: jpeg, png, jpg, gif, svg, mp4, mov, avi, webm.']);
                }
            }

            $user = $request->user();
            $user->clearMediaCollection('gallery');

            /* dd($files); */

            foreach ($files as $file) {

                $user->addMedia($file)
                    ->toMediaCollection('gallery');
            }

            /* dd($extensions); */
        }

        /*         if (@$input['public_email']) { */
        /*             $user->attachAttribute('public_email', @$input['public_email']); */
        /*         } */

        /* if (@$input['public_mobile']) { */
        /*    $test =  $user->attachAttribute('public_mobile', @$input['public_mobile']); */
        /* } */

        /* if (@$input['website']) { */
        /*     $user->attachAttribute('website', @$input['website']); */
        /* } */

        cache()->flush();

        return redirect()->back();
    }
}
