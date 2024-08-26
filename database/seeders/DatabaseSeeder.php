<?php

namespace Database\Seeders;

use App\Models\Image;
use App\Models\Project;
use App\Models\ProjectLink;
use App\Models\Technology;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $laravel = Technology::create([
            'name' => 'Laravel',
            'url' => 'images/icons/laravel.svg',
        ]);
        $livewire = Technology::create([
            'name' => 'Livewire',
            'url' => 'images/icons/livewire.svg',
        ]);
        $inertia = Technology::create([
            'name' => 'InertiaJS',
            'url' => 'images/icons/inertia.svg',
        ]);
        $javascript = Technology::create([
            'name' => 'JavaScript',
            'url' => 'images/icons/javascript.svg',
        ]);
        $typescript = Technology::create([
            'name' => 'TypeScript',
            'url' => 'images/icons/typescript.svg',
        ]);
        $php = Technology::create([
            'name' => 'PHP',
            'url' => 'images/icons/php.svg',
        ]);
        $stripe = Technology::create([
            'name' => 'Stripe',
            'url' => 'images/icons/stripe.svg',
        ]);
        $vite = Technology::create([
            'name' => 'Vite',
            'url' => 'images/icons/vite.svg',
        ]);
        $tailwind = Technology::create([
            'name' => 'Tailwind',
            'url' => 'images/icons/tailwind.svg',
        ]);
        $saas = Technology::create([
            'name' => 'Saas',
            'url' => 'images/icons/saas.svg',
        ]);
        $unity = Technology::create([
            'name' => 'Unity',
            'url' => 'images/icons/unity.svg',
        ]);
        $react = Technology::create([
            'name' => 'React',
            'url' => 'images/icons/react.svg',
        ]);

        $photoGallery = Project::create([
            'name' => "photo-gallery",
            'year' => 2024,
            'content' =>
            '
            <p>
                photo-gallery is a personal image gallery designed for
                sharing and viewing photos. It features a unique design and
                robust admin tools.
            </p>
            <p>Explore and enjoy the beautifully crafted interface.</p>
            '
        ]);

        ProjectLink::create([
            'project_id' => $photoGallery->id,
            'title' => 'Website',
            'redirect' => "https://photos.amixam.id.lv",
            "type" => 'demo'
        ]);

        ProjectLink::create([
            'project_id' => $photoGallery->id,
            'title' => 'GitHub repo',
            'redirect' => "https://github.com/amixaam/photo-gallery",
        ]);

        Image::create([
            'project_id' => $photoGallery->id,
            'path' => "images/photo-gallery-promo/promo-1"
        ]);
        Image::create([
            'project_id' => $photoGallery->id,
            'path' => "images/photo-gallery-promo/promo-2"
        ]);
        Image::create([
            'project_id' => $photoGallery->id,
            'path' => "images/photo-gallery-promo/promo-3"
        ]);

        $photoGallery->technologies()->attach([$laravel->id, $inertia->id, $react->id, $tailwind->id, $php->id, $javascript->id]);
    }
}
