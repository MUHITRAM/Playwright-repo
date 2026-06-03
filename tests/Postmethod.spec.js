import { test, expect } from '@playwright/test';

test('API Response', async ({ request }) => {

  const response = await request.post('https://dummy.restapiexample.com/api/v1/create',
    {
      data: {
        title: 'playwrightt',
        body: 'api test post methoddd', 
        userId: 12,
        id: 102
      }
    }
  );

  
  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.title).toBe('playwrightt');
  expect(body.userId).toBe(12);
  expect(body.id).toBe(102);
});