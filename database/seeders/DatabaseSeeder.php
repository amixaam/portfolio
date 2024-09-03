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
        $alpine = Technology::create([
            'name' => "Alpine",
            'url' => 'images/icons/alpine.svg',
        ]);
        $javascript = Technology::create([
            'name' => 'JavaScript',
            'url' => 'images/icons/javascript.svg',
        ]);
        $typescript = Technology::create([
            'name' => 'TypeScript',
            'url' => 'images/icons/typescript.svg',
        ]);
        $csharp = Technology::create([
            'name' => 'C#',
            'url' => 'images/icons/csharp.svg',
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
        $expo = Technology::create([
            'name' => 'Expo',
            'url' => 'images/icons/expo.svg',
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

        $flora = Project::create([
            'name' => "Flora",
            'year' => 2024,
            'content' =>
            '
            <p>Flora is an opinionated, design-first local music player built with React Native. It combines the best features from various music apps to create the perfect UI and UX tailored to my preferences.</p>
            <p>My goal was to craft an exceptional user experience by focusing on design and usability.</p>
            '
        ]);

        ProjectLink::create([
            'project_id' => $flora->id,
            'title' => 'GitHub repo',
            'redirect' => "https://github.com/amixaam/Flora",
        ]);

        Image::create([
            'project_id' => $flora->id,
            'path' => "images/flora-promo/promo-1"
        ]);
        Image::create([
            'project_id' => $flora->id,
            'path' => "images/flora-promo/promo-2"
        ]);
        Image::create([
            'project_id' => $flora->id,
            'path' => "images/flora-promo/promo-3"
        ]);
        Image::create([
            'project_id' => $flora->id,
            'path' => "images/flora-promo/promo-4"
        ]);
        $flora->technologies()->attach([$react->id, $typescript->id, $expo->id]);

        $ruckasMuiza = Project::create([
            'name' => "Ruckas Muiža",
            'year' => 2024,
            'content' =>
            '
            <p>Ruckas Muiža is a team project built using the Tallstack framework for Ruckas Muiža. I took on the role of design lead, ensuring the website’s aesthetics and user experience were top-notch.</p>
            <p>Collaboratively created with a focus on elegant design and functionality.</p>
            '
        ]);

        ProjectLink::create([
            'project_id' => $ruckasMuiza->id,
            'title' => 'Website',
            'redirect' => "https://ruckasmuiza.lv",
            "type" => 'demo'
        ]);

        Image::create([
            'project_id' => $ruckasMuiza->id,
            'path' => "images/ruckas-muiza-promo/promo-1"
        ]);
        Image::create([
            'project_id' => $ruckasMuiza->id,
            'path' => "images/ruckas-muiza-promo/promo-2"
        ]);
        Image::create([
            'project_id' => $ruckasMuiza->id,
            'path' => "images/ruckas-muiza-promo/promo-3"
        ]);
        Image::create([
            'project_id' => $ruckasMuiza->id,
            'path' => "images/ruckas-muiza-promo/promo-4"
        ]);

        $ruckasMuiza->technologies()->attach([$laravel->id, $alpine->id, $livewire->id, $saas->id, $php->id, $javascript->id]);

        $cene = Project::create([
            'name' => "CENE",
            'year' => 2024,
            'content' =>
            '
            <p>CENE is a ticket-selling platform for theatrical and cinema releases. Users can view new and upcoming events, select seats, leave reviews, and download PDFs of their ticket QR codes.</p>
            <p>Experience a seamless way to purchase and manage event tickets.</p>
            '
        ]);

        ProjectLink::create([
            'project_id' => $cene->id,
            'title' => 'GitHub repo',
            'redirect' => "https://github.com/amixaam/cene",
        ]);

        Image::create([
            'project_id' => $cene->id,
            'path' => "images/cene-promo/promo-1"
        ]);
        Image::create([
            'project_id' => $cene->id,
            'path' => "images/cene-promo/promo-2"
        ]);
        Image::create([
            'project_id' => $cene->id,
            'path' => "images/cene-promo/promo-3"
        ]);
        Image::create([
            'project_id' => $cene->id,
            'path' => "images/cene-promo/promo-4"
        ]);

        $cene->technologies()->attach([$laravel->id, $react->id, $stripe->id, $php->id, $javascript->id]);

        $typomancer = Project::create([
            'name' => "Typomancer",
            'year' => 2024,
            'content' =>
            '
            <p>Typomancer is an online Unity 2D endless dungeon runner game. It features Laravel as the backend to manage logins, leaderboards, and Stripe integration.</p>
            <p>Enjoy fun gameplay with robust backend support.</p>
            '
        ]);

        ProjectLink::create([
            'project_id' => $typomancer->id,
            'title' => 'GitHub repo',
            'redirect' => "https://github.com/amixaam/typomancer",
        ]);

        Image::create([
            'project_id' => $typomancer->id,
            'path' => "images/typomancer-promo/promo-1"
        ]);
        Image::create([
            'project_id' => $typomancer->id,
            'path' => "images/typomancer-promo/promo-2"
        ]);

        $typomancer->technologies()->attach([$unity->id, $laravel->id, $stripe->id, $php->id, $csharp->id]);
    }
}
