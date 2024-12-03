<?php

namespace App\Http\Controllers;

class SellerController extends Controller
{
    public function index()
    {
        return inertia('Seller/Dashboard');
    }
}
