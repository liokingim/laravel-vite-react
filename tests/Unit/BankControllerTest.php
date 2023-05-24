<?php

namespace Tests\Unit;

use App\Http\Controllers\BankController;
use App\Services\BankService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Tests\TestCase;
use Mockery;

class BankControllerTest extends TestCase
{
    public function testBalance()
    {
        // Mockery를 사용하여 BankService를 모의 객체로 만듭니다.
        $bankServiceMock = Mockery::mock(BankService::class);
        $bankServiceMock->shouldReceive('getBalance')->once()->with(1)->andReturn(1000);

        $request = new Request();
        $request->merge(['accountId' => 1]);

        // 모의 객체를 사용하여 BankController를 만듭니다.
        $controller = new BankController($bankServiceMock);

        $response = $controller->balance($request);

        // 응답이 예상대로 이루어졌는지 확인합니다.
        $this->assertEquals(200, $response->status());
        $this->assertEquals(['balance' => 1000], $response->getData(true));
    }

    public function testStoreValidation()
    {
        $rules = [
            'bank_code' => 'required|numeric|digits:4',
            'branch_number' => 'nullable|numeric|digits:3'
        ];

        $validator = Validator::make([
            'bank_code' => '0001',
            'branch_number' => '123'
        ], $rules);

        $this->assertTrue($validator->passes());

        $validator = Validator::make([
            'bank_code' => '0001',
            'branch_number' => '1234'
        ], $rules);

        $this->assertFalse($validator->passes());

        $validator = Validator::make([
            'bank_code' => 'abcd',
            'branch_number' => '123'
        ], $rules);

        $this->assertFalse($validator->passes());

        $validator = Validator::make([
            'bank_code' => '0001',
            'branch_number' => null
        ], $rules);

        $this->assertTrue($validator->passes());
    }
}
