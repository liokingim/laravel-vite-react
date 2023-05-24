<?php

namespace Tests\Unit;

use App\Services\BankService;
use App\Repositories\BankRepository;
use Tests\TestCase;
use Mockery;

class BankServiceTest extends TestCase
{
    public function testGetBalance()
    {
        // Mockery를 사용하여 BankRepository를 모의 객체로 만듭니다.
        $bankRepoMock = Mockery::mock(BankRepository::class);
        $bankRepoMock->shouldReceive('getBalance')->once()->with(1)->andReturn(1000);

        // 모의 객체를 사용하여 BankService를 만듭니다.
        $bankService = new BankService($bankRepoMock);

        // 잔고를 조회하고 예상대로 잔고가 반환되는지 확인합니다.
        $balance = $bankService->getBalance(1);
        $this->assertEquals(1000, $balance);
    }
}