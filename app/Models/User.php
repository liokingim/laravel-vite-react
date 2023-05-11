<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // 1. 관계 (Relationships) 일대다
    public function posts()
    {
        return $this->hasMany('App\Models\Post');
    }

    // 2. 스코프 (Scopes):
    public function scopeActive($query)
    {
        return $query->where('active', 1);
    }

    // 3. 액세서 (Accessors):
    public function getNameAttribute($value)
    {
        return strtoupper($value);
    }

    // 4. 뮤테이터 (Mutators):
    public function setNameAttribute($value)
    {
        $this->attributes['name'] = strtolower($value);
    }
}
