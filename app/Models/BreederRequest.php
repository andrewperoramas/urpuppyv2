<?php

namespace App\Models;

use App\Mail\BreederAccountApproved;
use App\Mail\BreederAccountRejected;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Mail;

class BreederRequest extends Model
{
    /** @use HasFactory<\Database\Factories\BreederRequestFactory> */
    use HasFactory;

    protected $fillable = [
        'user_id',
        'message',
        'status',
    ];

    public static function booted()
    {
        static::saved(function ($model) {

            if ($model->wasChanged('status')) {

                if ($model->status == 'approved') {
                    Mail::queue(new BreederAccountApproved($model->user));
                }

                if ($model->status == 'rejected') {
                    Mail::queue(new BreederAccountRejected($model->user, $model->message));
                }

            }

        });

    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
