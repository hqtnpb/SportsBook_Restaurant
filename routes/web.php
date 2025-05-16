<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::inertia('/', 'Home')->name('home');
Route::inertia('/contact', 'Contact')->name('contact');

Route::get('/products', [ProductController::class, 'index'])->name('products.index');
Route::get('/', [ProductController::class, 'showTop3'])->name('home');
// Route::resource('products', ProductController::class)->except(['index', 'showtop3']);
