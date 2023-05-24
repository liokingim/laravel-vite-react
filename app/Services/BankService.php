<?php

namespace App\Services;

use App\Repositories\BankRepository;

class BankService
{
    protected $bankRepository;

    public function __construct(BankRepository $bankRepository)
    {
        $this->bankRepository = $bankRepository;
    }

    public function getBalance($accountId)
    {
        return $this->bankRepository->getBalance($accountId);
    }

    public function getBalance2($accountId)
    {
        // 예시를 위해 임의의 잔고를 반환합니다. 실제로는 데이터베이스 조회 등의 로직이 있을 것입니다.
        return 1000;
    }
}