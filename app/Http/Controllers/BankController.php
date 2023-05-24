<?php

namespace App\Http\Controllers;

use App\Services\BankService;
use Illuminate\Http\Request;

class BankController extends Controller
{
    protected $bankService;

    public function __construct(BankService $bankService)
    {
        $this->bankService = $bankService;
    }

    public function balance(Request $request)
    {
        $accountId = $request->get('accountId');
        $balance = $this->bankService->getBalance($accountId);

        return response()->json(['balance' => $balance]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'bank_code' => 'required|numeric|digits:4',
            'branch_number' => 'nullable|numeric|digits:3'
        ]);

        // 이후 로직...
    }
}
