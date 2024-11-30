<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    /** @use HasFactory<\Database\Factories\ReviewFactory> */
    use HasFactory;

    protected $guarded = [
        'id',
    ];

    protected $appends = ['date'];

    public function breeder()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function getDateAttribute()
    {
        return $this->created_at->diffForHumans();
    }
}
