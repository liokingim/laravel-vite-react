<?php

namespace App\Services;

use App\Repositories\BankRepository;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

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

    public function storeAccountInfo(array $validatedData)
    {

        return [];
    }

    public function storeAccountInfo2(string $accountId)
    {
        // 구현 내용...

        // JSON 형식의 GET 요청 보내기
        $response = Http::get('http://localhost/ci4-test/public/bank/balance', [
            'accountId' => $accountId,
        ]);

        // 응답 확인
        if ($response->successful()) {
            // 응답 처리...
            Log::debug("responseData => " . var_export($response->json(), true));

            return $response->json();
        } else {
            // 오류 처리...
        }
    }
}
