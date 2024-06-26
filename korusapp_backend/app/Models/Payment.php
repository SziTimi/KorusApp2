<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Payment extends Model

{
    use HasFactory, Notifiable;
    protected $table = 'payments';

    public function user()
    {
        return $this->belongsTo(User::class, 'members_id');
    }
}
