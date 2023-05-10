<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'input' => ['required', 'digits:4', 'numeric'],
        ]);

        if ($validator->fails()) {
            return redirect('form')
                ->withErrors($validator)
                ->withInput();
        }

        // 유효성 검사를 통과한 후의 로직
    }
}