<?php

namespace App\Http\Controllers;

use App\Models\SavedSearch;
use Illuminate\Http\Request;

class SavedSearchController extends Controller
{
    public function destroy(int $id)
    {
        $savedSearch = SavedSearch::find($id);
        $savedSearch->delete();

        return redirect()->back()->with([
            'message.success' => 'Deleted saved search',
            'redirect_tab' =>  'Saved Search',
        ]);
    }
}
