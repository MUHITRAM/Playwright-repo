import {test,expect} from '@playwright/test';

test('Basic lines',async({page})=>{

    await page.goto('https://artoftesting.com/samplesiteforselenium')
    await page.mouse.wheel(0,600)
    const checkbox1= await page.getByRole('checkbox').first();
    await checkbox1.check();
    await page.waitForTimeout(3000);
})
