<?php

namespace App\Repositories;

use App\Models\Account; // Account는 예시로 사용하는 모델입니다. 실제 모델 이름으로 변경해주세요.

class BankRepository
{
    public function getBalance($accountId)
    {
        // 이 예제에서는 간단하게 하기 위해 모델에서 직접 조회하지만, 실제로는 복잡한 로직이 들어갈 수 있습니다.
        return Account::find($accountId)->balance;
    }
}