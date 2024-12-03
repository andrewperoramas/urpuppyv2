<?php

namespace App\Http\Controllers;

use App\Models\Puppy;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    public function store(Request $request, string $slug)
    {
        $validated = $request->validate([
            'reason' => 'required|string|max:255',
            'customOptionInput' => 'max:255|nullable'
        ]);

        $puppy = Puppy::where('slug', $slug)->first();

        if ($validated['reason'] == 'other') {
            $validated['reason'] = $validated['customOptionInput'];
        }

        $report = $puppy->reports()->create([
            'reason' => $validated['reason'],
            'user_id' => auth()->id(),
        ]);

        return redirect()->back()->with('message.success', 'Report created successfully.');
    }

    public function create(string $slug)
    {
        return inertia()->modal('Report', [
            'slug' => $slug
        ])->baseRoute('puppies.show', $slug);
    }
}
