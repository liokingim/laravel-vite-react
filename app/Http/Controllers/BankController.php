<?php

namespace App\Http\Controllers;

use App\Services\BankService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

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
        $balance = $this->bankService->getBalance2($accountId);

        return response()->json(['balance' => $balance]);
    }

    public function balance2(Request $request)
    {
        $accountId = $request->get('accountId');

        $balance = $this->bankService->storeAccountInfo2($accountId);

        return response()->json(['balance' => $balance]);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'bank_name' => 'required|string',
            'bank_code' => 'required|string|size:4',
            'branch_number' => 'required|string|size:3',
            'account_number' => 'required|numeric|digits:7',
            'account_type' => 'required|numeric|between:1,3'
        ]);

        // 서비스 호출
        $this->bankService->storeAccountInfo($validatedData);
    }
}
