<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use LaraZeus\Sky\Models\Post;

class NavigationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {

        $navigations = collect($this->children)->map(function ($nav) {
            $pageId = (int) @$nav['data']['page_id'];
            $page = Post::find($pageId);
            $nav['page'] = $page;

            return $nav;
        });
        $navigations = collect($navigations)->map(fn ($nav) => (object) $nav)->values();

        $subLink = NavigationResource::collection($navigations)->resolve();

        return [
            'name' => $this->label,
            'type' => $this->type,
            'href' => $this->page?->slug ?? @$this->data['url'],
            'subLinks' => $subLink,
            'target' => isset($this->data) ?
                @$this->data['target'] :
                 '',
            'auth' => false,
        ];
    }
}
