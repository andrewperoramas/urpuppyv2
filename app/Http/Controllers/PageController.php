<?php

namespace App\Http\Controllers;

use App\Http\Resources\PageResource;
use LaraZeus\Sky\Models\Post;

class PageController extends Controller
{
    public function show($slug)
    {
        $breadcrumbs = [
            ['title' => 'Home', 'url' => route('home'), 'is_current_page' => false]
        ];
        $page = Post::where('slug', $slug)->firstOrFail();

        if ($page->parent) {
            $breadcrumbs[] =
            [
                'title' => $page->parent->title,
                'url' => $page->parent->slug,
                'is_current_page' => false
            ];
        }


        $breadcrumbs[] =
        [
            'title' => $page->title,
            'url' => $page->slug,
            'is_current_page' => true
        ];

        /* dd($breadcrumbs); */




        return inertia()->render('CustomPage', [
            'payload' => PageResource::make($page),
            'custom_breadcrumb' => $breadcrumbs
        ])
            ->title($page->title)
            ->description($page->description)
            ->image($page->media()->first()?->getUrl() ?? asset('logo.png'))
            ->ogTitle($page->title)
            ->ogDescription($page->description)
            ->ogImage($page->media()->first()?->getUrl() ?? asset('logo.png'))
            ->ogUrl(route('custom.page', $page->slug))
            ->twitterCard('summary_large_image')
            ->twitterTitle($page->title)
            ->twitterImage($page->media()->first()?->getUrl() ?? asset('logo.png'))
            ->twitterDescription($page->description);
    }
}
