import { test, expect } from '@playwright/test';

test('API Response', async ({ request }) => {

  const response = await request.put(
    'https://jsonplaceholder.typicode.com/posts/1',
    {
      data: {
        id: 1,
        title: "Anirudh Ravichander",
        body: "Hello",
        userId: 1
      }
    }
  );

  expect(response.status()).toBe(200);

  const body = await response.json();
  console.log(body);

  expect(body.title).toBe("Anirudh Ravichander");
});