<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Project extends Model
{
    use HasFactory;

    public function projectLinks(): HasMany
    {
        return $this->hasMany(ProjectLink::class);
    }

    public function images(): HasMany
    {
        return $this->hasMany(Image::class);
    }

    public function technologies()
    {
        return $this->belongsToMany(Technology::class);
    }
}
