import {test,expect} from '@playwright/test';

test('Basic lines',async({page})=>{

    await page.waitForTimeout(3000);
})