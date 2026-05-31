import { test, expect } from '@playwright/test';

test('API Response', async ({ request }) => {

  const response = await request.post('api/v1/create',
    {
      data: {
        title: 'playwright',
        body: 'api test post method', 
        userId: 1,
        id: 101
      }
    }
  );

  
  expect(response.status()).toBe(200);

  const body = await response.json();

  expect(body.title).toBe('playwright');
  expect(body.userId).toBe(1);
  expect(body.id).toBe(101);
});