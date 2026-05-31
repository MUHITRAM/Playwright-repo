//Get Method
import { test, expect } from '@playwright/test';

test('API Response', async({request})=>{

   const response= await request.get('https://jsonplaceholder.typicode.com/posts/1')

    expect(response.status()).toBe(200);

    const body=await response.json()

    console.log(body);
    


})

