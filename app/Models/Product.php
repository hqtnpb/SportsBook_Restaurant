<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'description',
        'price',
        'description',
        'meal_time',
        'img_url',
        'rate',
        'daily_offer',
        'category_id',
    ];
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
