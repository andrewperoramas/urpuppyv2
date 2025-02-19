<?php

namespace App\Models;

use Carbon\Carbon;
use Cviebrock\EloquentSluggable\Sluggable;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Sitemap\Tags\Url;
use Spatie\Sitemap\Contracts\Sitemapable;

class Page extends Post implements Sitemapable
{
/* extends Post */
    use Sluggable, InteractsWithMedia;

    protected $table = 'posts';

    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title',
            ],
        ];
    }

     public function toSitemapTag(): Url | string | array
    {
        return route('custom.page', $this->slug);

    }
}
