<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Landing');
})->name('Landing');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('About');

Route::get('/projects', function () {
    return Inertia::render('Projects');
})->name('Projects');

Route::get('/contacts', function () {
    return Inertia::render('Contacts');
})->name('Contacts');

Route::get('/education', function () {
    return Inertia::render('Education');
})->name('Education');

