<?php

namespace App\Models;

use App\Formatter\NoDecimal;
use App\Models\Traits\LogsView;
use App\Observers\PuppyObserver;
use Carbon\Carbon;
use Cknow\Money\Money;
use Cog\Contracts\Love\Reactable\Models\Reactable as ReactableInterface;
use Cog\Laravel\Love\Reactable\Models\Traits\Reactable;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model; // Correct Media class
use Stephenjude\FilamentBlog\Models\Post as ModelsPost;

use Stephenjude\FilamentBlog\Tests\Database\Factories\PostFactory;

class Post extends ModelsPost implements ReactableInterface
{
    use Reactable;
    use LogsView;


    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable')->orderBy('created_at', 'desc');
    }

      // Accessor for like count
    public function getLikeCountAttribute()
    {
        return $this->viaLoveReactant()
            ->getReactionCounterOfType('Like')
            ?->getCount() ?? 0;
    }

    // Accessor for unlike count
    public function getUnlikeCountAttribute()
    {
        return $this->viaLoveReactant()
            ->getReactionCounterOfType('Unlike')
            ?->getCount() ?? 0;
    }

}
