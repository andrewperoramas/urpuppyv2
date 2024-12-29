<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PrivacyPolicyController extends Controller
{

    public function index()
    {
        return inertia()->render('PrivacyPolicy');
    }

    public function terms()
    {
        return inertia()->render('TermsConditions');
    }

}
