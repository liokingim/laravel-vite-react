<?php

namespace Tests\Unit;

use App\Services\BankService;
use Tests\TestCase;
use Illuminate\Support\Facades\Http;
use Mockery;

class BankControllerTest3 extends TestCase
{
    public function testBalanceWithValidAccountId()
    {
        // Make a request with a valid account ID
        $response = $this->json('GET', '/bank/balance2', ['accountId' => 12345]);

        // var_dump($response['balance']);

        // Assert that the response has a HTTP status code of 200
        $response->assertStatus(200);

        // Assert that the response contains a 'balance' field
        $response->assertJsonStructure(['balance']);

        // Assert that the balance returned by the API is a number and greater than or equal to 0
        $response->assertJson(['balance' => $response['balance'] >= 0]);
    }

    public function testBalanceWithValidAccountId2()
    {
        // Mock the Http facade to return a fake response
        Http::fake([
            'http://localhost/ci4-test/public/bank/balance' => Http::response(['balance' => 100], 200),
        ]);

        // Create a mock of the BankService class
        $bankService = Mockery::mock(BankService::class);

        // Tell the mock to use the fake response when the storeAccountInfo2 method is called
        $bankService->shouldReceive('storeAccountInfo2')
            ->with(12345)
            ->andReturn(100);

        // Replace the real bankService instance with the mock
        $this->app->instance(BankService::class, $bankService);

        // Make a request with a valid account ID
        $response = $this->json('GET', '/bank/balance2', ['accountId' => 12345]);

        // var_dump($response['balance']);

        // Assert that the response has a HTTP status code of 200
        $response->assertStatus(200);

        // Assert that the response contains a 'balance' field
        $response->assertJsonStructure(['balance']);

        // Assert that the balance returned by the API is equal to the mocked value (100)
        $response->assertJson(['balance' => 100]);
    }
}
