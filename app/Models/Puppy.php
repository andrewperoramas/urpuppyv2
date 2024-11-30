<?php

namespace App\Models;

use App\Models\Traits\LogsView;
use App\Observers\PuppyObserver;
use Carbon\Carbon;
use Cknow\Money\Money;
use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model; // Correct Media class
use Laravel\Scout\Searchable;
use Milwad\LaravelAttributes\Traits\Attributable;
use Overtrue\LaravelFavorite\Traits\Favoriteable;
use Spatie\Image\Enums\Fit;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\Sitemap\Contracts\Sitemapable;
use Spatie\Sitemap\Tags\Url;

#[ObservedBy([PuppyObserver::class])]
class Puppy extends Model implements HasMedia, Sitemapable
{
    use Attributable;
    use Favoriteable;

    /** @use HasFactory<\Database\Factories\PuppyFactory> */
    use HasFactory;

    use InteractsWithMedia;
    use LogsView;
    use Searchable;
    use Sluggable;

    protected $appends = ['image', 'images', 'video', 'listed_on', 'age', 'short_description', 'is_favorited_by_current_user', 'thumbnails', 'preview_images'];

    protected $hidden = ['media'];

    protected $guarded = [];

    public static function booted()
    {
        static::saving(function ($model) {
            if ($model->user_id == null && auth()->user()?->id != null) {
                $model->user_id = auth()->user()->id;
            }
            $model->birth_date = Carbon::parse($model->birth_date)->toDateString();
        });
    }

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'name',
            ],
        ];
    }

    public function registerMediaConversions(?Media $media = null): void
    {
        $thumbnailconversion = $this->addmediaconversion('thumb')
            ->nonQueued()
            /* ->crop('crop-center', 50, 50) */
            ->width(125)
            ->quality(75)
            ->height(125);

        if ($media && $media->gettypefrommime() === 'thumb') {
            $thumbnailconversion->extractvideoframeatsecond(50);
        }

        $this->addMediaConversion('grid')
            ->nonQueued()
            /* ->crop('crop-center', 50, 50) */
            ->width(500)
            ->fit(Fit::Contain, desiredWidth: 400, desiredHeight: 500)
            ->quality(80)
            ->optimize()
            ->sharpen(5);

        $this->addMediaConversion('preview')
            ->fit(Fit::Contain, 1280, 720)
            ->nonQueued()
            ->optimize()
            ->quality(80)
            ->sharpen(3);
    }

    public function toSearchableArray()
    {
        $array = $this->toArray();

        // Convert `id` and `breed_id` to strings for consistency
        $array['id'] = (string) $array['id'];
        /* $array['breed_id'] = (string) $array['breed_id']; */

        // Get all associated breeds and extract their names
        $array['breeds'] = $this->breeds->pluck('name')->toArray();

        // Ensure `price` and `created_at` are in the desired format
        $array['price'] = isset($array['price']['amount']) ? (string) $array['price']['amount'] : null;
        $array['created_at'] = (int) Carbon::parse($array['created_at'])->timestamp;

        return $array;
    }

    public function toSitemapTag(): Url|string|array
    {
        return route('puppies.show', $this->slug);
    }

    /* public function getCollectionSchema(): array */
    /* { */
    /*     /1* dd('wew'); *1/ */
    /*     return [ */
    /*         'name' => $this->getTable(), */
    /*         'fields' => [ */
    /*             [ */
    /*                 'name' => 'name', */
    /*                 'type' => 'string', */
    /*             ], */
    /*             [ */
    /*                 'name' => 'created_at', */
    /*                 'type' => 'int32', */
    /*             ], */
    /*         ], */
    /*         'default_sorting_field' => 'created_at', */
    /*     ]; */
    /* } */

    /* public function typesenseQueryBy(): array */
    /* { */
    /*     return [ */
    /*         'name', */
    /*     ]; */
    /* } */

    public function getPriceAttribute($price)
    {
        return Money::USD($price);
    }

    public function getImagesAttribute()
    {
        return $this->getMedia('puppy_files');
    }

    public function breed()
    {
        return $this->belongsTo(Breed::class);
    }

    /* public function media() */
    /* { */
    /*     return $this->hasMany(Media::class); // Adjust as necessary for your setup */
    /* } */

    /* public function breeds() */
    /* { */
    /*     return $this->hasMany(Breed::class); */
    /* } */

    public function breeder()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function getVideoAttribute()
    {
        // Fetch the first media item
        $mediaItem = $this?->getFirstMedia('videos');

        // Check for 'grid' URL, then 'preview', then return null
        if ($mediaItem) {
            try {
                return $mediaItem->getUrl();
            } catch (\Spatie\MediaLibrary\Exceptions\ConversionDoesNotExist $e) {
                // Handle the case where the conversion does not exist
                return null; // or handle as needed
            }

        }

        return null; // Return null if no media item exists
    }

    public function getImageAttribute()
    {
        // Fetch the first media item
        $mediaItem = $this?->getMedia('puppy_files')->sortBy('order_column')->first();

        /* dd($mediaItem->getUrl()); */

        // Check for 'grid' URL, then 'preview', then return null
        if ($mediaItem) {
            try {
                return $mediaItem?->getUrl('grid') ?? $mediaItem?->getUrl('preview') ?? $mediaItem->getUrl();
            } catch (\Spatie\MediaLibrary\Exceptions\ConversionDoesNotExist $e) {
                // Handle the case where the conversion does not exist
                return null; // or handle as needed
            }

        }

        return null; // Return null if no media item exists
    }

    public function getPreviewImagesAttribute()
    {
        $mediaItems = $this->getMedia('puppy_files');

        if ($mediaItems->isNotEmpty()) {
            return $mediaItems->map(function ($item) {
                try {
                    return $item->getUrl('preview');
                } catch (\Spatie\MediaLibrary\Exceptions\ConversionDoesNotExist $e) {
                    // Handle the case where the conversion does not exist
                    return null; // or handle as needed
                }
            });
        }

        return null; // Return null if no media items found
    }

    public function getThumbnailsAttribute()
    {
        // Fetch media items from the 'puppy_files' collection
        $mediaItems = $this->getMedia('puppy_files');

        if ($mediaItems->isNotEmpty()) {
            // Map to get URLs for thumbnail size
            return $mediaItems->map(function ($item) {
                try {
                    return $item->getUrl('thumb');
                } catch (\Spatie\MediaLibrary\Exceptions\ConversionDoesNotExist $e) {
                    // Handle the case where the conversion does not exist
                    return null; // or handle as needed
                }
            });
        }

        return null; // Return null if no media items found
    }

    public function getListedOnAttribute()
    {
        return $this->created_at->diffForHumans();
    }

    public function getAgeAttribute()
    {
        $birthDate = Carbon::parse($this->birth_date);
        $now = Carbon::now();

        $days = (int) $birthDate->diffInDays($now);

        if ($days < 7) {
            $dayWord = $days === 1 ? 'day' : 'days';

            return "{$days} {$dayWord} old";
        }

        $weeks = (int) floor($days / 7);
        $weekWord = $weeks === 1 ? 'week' : 'weeks';

        return "{$weeks} {$weekWord} old";
    }

    public function getShortDescriptionAttribute()
    {
        $limit = 100;
        $description = $this->description;

        if ($description == null) {
            return '';
        }

        if (strlen($description) <= $limit) {
            return $description;
        }

        $shortened = substr($description, 0, $limit);

        return substr($shortened, 0, strrpos($shortened, ' ')).'..';
    }

    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }

    public function getIsFavoritedByCurrentUserAttribute()
    {
        /* dd($this->isFavoritedBy(auth()->user())); */
        /* dd($this->isFavoritedBy(auth()->user())); */
        /* dd(aut)->user()); */
        /* dd($this->isFavoritedBy(auth()->user())); */
        if (auth()->user() != null) {
            return $this->isFavoritedBy(auth()->user());
        }

        return false;
    }

    public function puppy_colors()
    {
        return $this->belongsToMany(PuppyColor::class);
    }

    public function puppy_traits()
    {
        return $this->belongsToMany(PuppyTrait::class);
    }

    public function puppy_patterns()
    {
        return $this->belongsToMany(PuppyPattern::class);
    }

    public function breeds()
    {
        return $this->belongsToMany(Breed::class);
    }

    public function reports()
    {
        return $this->hasMany(Report::class);
    }
}
