import { test, expect } from '@playwright/test';

test('Basic lines', async ({ page }) => {


    await page.goto('https://www.google.com/')

    // await page.screenshot({
    //     path:'/Users/muhitramms/Downloads/google1.png',
    //     fullPage:true
    // });


// })

await page.locator('.lnXdpd').screenshot({path:'/Users/muhitramms/Downloads/googlelement.jpeg'})


})
