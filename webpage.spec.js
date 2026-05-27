import {test,expect} from '@playwright/test';

test('lines',async({page})=>{
    await page.goto('https://www.amazon.in')

    await page.getByRole('searchbox').fill('Crocs');
    await page.locator('#nav-search-submit-button').click();
    await page.goBack();
    await page.goForward(); 
})