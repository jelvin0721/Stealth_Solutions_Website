<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\Product;

class Product_category extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'category_name',
        'active',
        'img'
     ];
     public function products(): BelongsTo
     {
        return $this->belongsTo(Product::class);
     }
}
