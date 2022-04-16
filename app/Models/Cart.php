<?php

namespace App;
use App\Models\Product;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $casts = [
        'quantity' => 'integer'
    ];

    public function product() {
        return $this->belongsTo(Product::class);
    }
}
