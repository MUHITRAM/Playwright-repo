import { test, expect } from '@playwright/test';

test('Screenshot', async ({ page }) => {


    await page.goto('https://google.com')

    // await page.screenshot({
    //     path:'/Users/muhitramms/Downloads/screenshotgoogle12.png',
    //     fullPage:true
    // })

    // await page.waitForTimeout(4000);


await page.locator('.gb_Ma gb_Eb gb_Hd gb_Ud gb_e gb_8a gb_J gb_3d').screenshot({path:'/Users/muhitramms/Downloads/screenshotgoogle14.png'})
})