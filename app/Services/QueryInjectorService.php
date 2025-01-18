<?php
namespace App\Services;

use Illuminate\Http\Request;
use App\Models\User; // Example model for query logic

class QueryInjectorService
{
    protected $query;

    public function __construct(Request $request)
    {
        // Extract query parameters or set defaults
        $this->query = $request->query();
    }

    public function getQuery()
    {
        return $this->query;
    }

    public function getAllPremium()
    {
        return User::where('is_seller', true)->get();
    }

    /* public function getAllBreeder() */
    /* { */
    /*     return User::where(, 'breeder')->get(); */
    /* } */
}

