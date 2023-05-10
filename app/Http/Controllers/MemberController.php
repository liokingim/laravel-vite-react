<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MemberController extends Controller
{
    public function input()
    {
        return view('input');
    }

    public function confirm(Request $request)
    {
        $data = $request->all();
        return view('confirm', ['data' => $data]);
    }
}