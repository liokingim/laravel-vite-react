<?php

namespace App\Services;

use App\Models\Member; // Member는 예시로 사용하는 모델입니다. 실제 모델 이름으로 변경해주세요.

class MemberService
{
    public function getMembers()
    {
        $members = Member::all();
        return $members;
    }
}