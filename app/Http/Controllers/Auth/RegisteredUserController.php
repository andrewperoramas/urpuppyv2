<?php

namespace App\Http\Controllers\Auth;

use App\Data\PuppyData;
use App\Http\Controllers\Controller;
use App\Models\Puppy;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules\Password;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register', [
            'puppy'  => PuppyData::from(Puppy::with(['breeds', 'breeder'])->inRandomOrder()->first())
        ]);
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'first_name' => 'required|string|max:40',
            'last_name' => 'required|string|max:40',
            'state_id' => '',
            'city_id' => '',
            'avatar' => 'required',
            'email' => 'required|string|lowercase|email|max:255|unique:' . User::class,
            'password' => ['required', 'confirmed', Password::defaults()],
            /* 'captcha' => 'required|captcha' */
        ]);


        /* dd($request->all()); */
        $user = User::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'state_id' => $request?->state_id,
            'city_id' => $request?->city_id,
            'zip_code' => $request->zip_code,
            'password' => Hash::make($request->password),
        ]);

        if ($user->hasMedia('avatars')) {
            $user->getFirstMedia('avatars')->delete();
        }

        $user->addMedia($request->file('avatar'))
            ->toMediaCollection('avatars');


        /* $user->assignRole('seller'); */
        /* $user->assignRole('buyer'); */

        event(new Registered($user));

        Auth::login($user);

        /* if ($request->is_seller) { */
            return redirect(route('plans.index', absolute: false))->with('message.success', 'You have to purchase a plan to start selling');
        /* } */

        return redirect(route('dashboard', absolute: false))->with('message.success', 'You have been registered successfully');
    }
}
