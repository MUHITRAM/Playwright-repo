import {test,expect} from '@playwright/test';

test('Basic lines',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/drag_and_drop')
    const source=await page.locator('#column-a');
    const destination =await page.locator('#column-b');

    await source.dragTo(destination);

    await page.waitForTimeout(3000);
})