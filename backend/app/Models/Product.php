<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\Product_category;
class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'id',
        'prod_name',
        'prod_descriptions',
        'prod_category_id',
        'img_url'
     ];
    public function category(): HasMany
    {
        return $this->hasMany(Product_category::class, 'id', 'prod_category_id');
    }
}
