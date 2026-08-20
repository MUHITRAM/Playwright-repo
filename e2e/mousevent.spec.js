import {test,expect} from '@playwright/test';

test('Basic lines',async({page})=>{

    await page.goto('https://vinothqaacademy.com/mouse-event/')
//    await page.locator('#doubleBtn').dblclick();

//    await page.locator('#rightBtn').click({button:'right'})

await page.mouse.wheel(0,500);
await page.locator('#tooltipTarget').hover();


expect(await page.locator('#tooltipStatus')).toContain('Tooltip Hidden')


    await page.waitForTimeout(6000);

})