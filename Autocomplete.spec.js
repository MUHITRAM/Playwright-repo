import { test, expect } from '@playwright/test';

test('Amazon autocomplete using for...of', async ({ page }) => {

 await page.goto('https://www.amazon.in/');
 await page.getByText('Continue shopping').nth(1).click()
 await page.locator('#twotabsearchtextbox').fill('iphone')
const suggestions=await page.locator('.s-suggestion-container')
    

await expect(suggestions.first()).toBeVisible()
for(const suggest of await suggestions.all()){

    const text=await suggestions.innerText();
    console.log(text);

    if(text.includes('iphone 17 pro')){

        await suggestions.click();

        break

    }}});