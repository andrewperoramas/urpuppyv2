<?php

namespace App\Http\Controllers;

class SellerController extends Controller
{
    public function index()
    {
        return inertia('Seller/Dashboard');
    }

    public function create()
    {
        return inertia('Seller/Registration');
    }

    public function store()
    {

        /* dd(request()->all()); */

    }
}
