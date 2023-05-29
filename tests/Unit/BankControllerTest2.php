<?php

namespace Tests\Unit;

use App\Http\Controllers\BankController;
use App\Services\BankService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\ValidationException;
use Mockery;
use Tests\TestCase;

class BankControllerTest2 extends TestCase
{
    public function testStoreValidation()
    {
        $rules = [
            'depositor' => 'required|string',
            'bank_code' => 'required|string|size:4',
            'branch_number' => 'required|string|size:3',
            'account_number' => 'required|numeric|digits:7',
            'account_type' => 'required|numeric|between:1,3'
        ];

        $validator = Validator::make([
            'depositor' => 'John Doe',
            'bank_code' => '0001',
            'branch_number' => '123',
            'account_number' => '1234567',
            'account_type' => '1'
        ], $rules);

        $this->assertTrue($validator->passes());

        $validator = Validator::make([
            'depositor' => 'John Doe',
            'bank_code' => '0001',
            'branch_number' => '123',
            'account_number' => '12345678',
            'account_type' => '4'
        ], $rules);

        $this->assertFalse($validator->passes());

        $validator = Validator::make([
            'depositor' => 'John Doe',
            'bank_code' => '00012',
            'branch_number' => '1234',
            'account_number' => '1234567',
            'account_type' => '1'
        ], $rules);

        $this->assertFalse($validator->passes());
    }

    public function testStoreWithMocks()
    {
        // 서비스 모크 생성
        $mockService = Mockery::mock(BankService::class);
        $mockService->shouldReceive('storeAccountInfo')->once();

        $controller = new BankController($mockService);

        // 요청 생성
        $request = new Request([
            'depositor' => 'John Doe',
            'bank_code' => '0001',
            'branch_number' => '123',
            'account_number' => '1234567',
            'account_type' => '1'
        ]);

        $controller->store($request);

        // 서비스의 storeAccountInfo 메소드가 호출되었는지 확인
        $mockService->shouldHaveReceived('storeAccountInfo');
    }
}