<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommentRequest;
use App\Models\User;

class CommentController extends Controller
{
    public function store(CommentRequest $request, $breeder_id)
    {
        $breeder = User::find($breeder_id);

        if ($breeder->id == auth()->user()->id) {
            return redirect()->back()->with('message.error', 'You cannot review yourself');
        }

        if ($breeder->comments()->where('user_id', auth()->user()->id)->count()) {
            return redirect()->back()->with('message.error', 'You can only submit one review per breeder');
        }

        $comment = $breeder->comments()->make($request->validated());
        $comment->breeder()->associate(auth()->user());
        $comment->save();

        return redirect()->back()->with('message.success', 'Review submitted successfully');
    }
}
