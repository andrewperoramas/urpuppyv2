<?php

namespace App\Http\Controllers;

use App\Data\CommentData;
use App\Data\PostData;
use App\Models\Post;
use Cog\Laravel\Love\ReactionType\Models\ReactionType;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        return inertia()->render('Post/Index', [
            'posts' => PostData::collect(Post::with(['category', 'author'])->paginate(12))
        ]);
    }

    public function show(Request $request, string $slug)
    {
        $user = $request->user();
        $post = PostData::from($post_model = Post::with(['category', 'author', 'comments', 'comments.reviewer'])->where('slug', $slug)->firstOrFail());

        defer(function () use ($post_model) {
            $post_model->logView();
        });



         if ($user && !$user?->isRegisteredAsLoveReacter()) {
            $user->registerAsLoveReacter();

            $reacterFacade = $user->viaLoveReacter();
         }




        if ( !$post_model?->isRegisteredAsLoveReactant()) {
        $post_model->registerAsLoveReactant();
        }


        return inertia()->render('Post/Show',

            ['post' => $post,
                'comments' => CommentData::collect($post_model->comments()->with('reviewer')->paginate(12)),

                'is_liked' => $user ? $reacterFacade?->hasReactedTo($post_model, 'Like'): false,
                'is_unliked' => $user ? $reacterFacade?->hasReactedTo($post_model, 'Unlike') : false
        ]);
    }

    public function comment(Request $request, int $id)
    {
        Post::find($id)->comments()->create([
            'user_id' => $request->user()->id,
            'body' => $request->body
        ]);
        return redirect()->back()->with([
            'message.success' => 'Comment added successfully'
        ]);

    }

       public function toggleReaction(Request $request, $postId, $reactionType)
    {
        $user = $request->user();
        $post = Post::findOrFail($postId);



         if (!$user->isRegisteredAsLoveReacter()) {
            $user->registerAsLoveReacter();
         }


        $reacterFacade = $user->viaLoveReacter();


        if (!$post->isRegisteredAsLoveReactant()) {
        $post->registerAsLoveReactant();
        }

        /* $post->viaLoveReactant(); */

        if (!in_array($reactionType, ['Like', 'Unlike'])) {
            return response()->json(['error' => 'Invalid reaction type'], 400);
        }

         if (!ReactionType::where('name', $reactionType)->exists()) {
        return response()->json(['error' => "Reaction type `{$reactionType}` not exists."], 400);
    }

        $oppositeType = $reactionType === 'Like' ? 'Unlike' : 'Like';


          if ($reacterFacade->hasReactedTo($post, $oppositeType)) {
        $reacterFacade->unreactTo($post, $oppositeType);
    }

    // Step 2: Toggle the current reaction
    if ($reacterFacade->hasReactedTo($post, $reactionType)) {
        // If the user has already reacted with this type, unreact
        $reacterFacade->unreactTo($post, $reactionType);
    } else {
        // If the user hasn't reacted with this type, react to it
        $reacterFacade->reactTo($post, $reactionType);
    }

/*         return inertia()->render('Post/Show', [ */

/*         ]); */

        return back();
        /* return to_route('posts.show', $post->slug)->with([ */
        /*     'message' => "{$reactionType} toggled", */
        /*     /1* 'like_count' => $post->like_count, *1/ */
        /*     /1* 'unlike_count' => $post->unlike_count *1/ */
        /* ]); */
    }

}
