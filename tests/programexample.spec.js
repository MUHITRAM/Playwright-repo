import {test,expect} from '@playwright/test';

test('Facebook Title checking', async({page})=>{

    await page.goto('https://www.facebook.com');
    await expect(page).toHaveTitle(/Facebook/);

});