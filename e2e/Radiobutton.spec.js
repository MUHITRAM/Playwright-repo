import { test } from '@playwright/test';

test('Handle Radio Button', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    
    await page.check('#male');

    const status = await page.locator('#male').isChecked();

    console.log(status);
     await page.waitForTimeout(3000);
});

// a=10 b=15

//if(a>b)

//if(10>15)

//console.log(10)