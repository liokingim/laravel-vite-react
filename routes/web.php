<?php

use App\Http\Controllers\MemberController;
use App\Http\Controllers\BankController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/mamber/input', [MemberController::class, 'input'])->name('bank.input');
Route::get('/bank/balance', [BankController::class, 'balance'])->name('bank.balance');

Route::get('/bank/store', [BankController::class, 'store'])->name('bank.store');

Route::get('/bank/balance2', [BankController::class, 'balance2'])->name('bank.balance2');
