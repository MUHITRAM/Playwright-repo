import {test,expect} from '@playwright/test';

test('Basic lines',async({page})=>{

    await page.goto('https://www.leafground.com/button.xhtml')
    await page.getByText('Click').nth(1).click();

    await page.waitForTimeout(3000);
})