import {test,expect} from '@playwright/test';

test('Webhook triggers', async({page})=>{

 await page.goto('https://www.amazon.in/');
 await page.getByText('Continue shopping').nth(1).click()

  await page.locator('#twotabsearchtextbox').fill('iphone')

  



})