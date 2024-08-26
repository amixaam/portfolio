<?php

use App\Http\Controllers\UserController;
use App\Models\Project;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Landing');
})->name('Landing');

Route::get('/about', function () {
    return Inertia::render('About');
})->name('About');

Route::get('/projects', function () {
    $projects = Project::with(['technologies', 'images', 'projectLinks'])->get();

    // marks wether project has a live demo
    foreach ($projects as $project) {
        $hasDemo = false;
        foreach ($project->projectLinks as $link) {
            if ($link->type == "demo") {
                $hasDemo = true;
            }
        }

        $project['hasDemo'] = false;
        if ($hasDemo) {
            $project['hasDemo'] = true;
        }
    }

    return Inertia::render('Projects')->with(['projects' => $projects]);
})->name('Projects');

Route::get('/contacts', function () {
    return Inertia::render('Contacts');
})->name('Contacts');

Route::get('/education', function () {
    return Inertia::render('Education');
})->name('Education');
