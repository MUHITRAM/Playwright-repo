import { test } from '@playwright/test';

test('Handle Radio Button', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    
    await page.check('#male');

    const status = await page.locator('#male').isChecked();

    console.log(status);
     await page.waitForTimeout(3000);
});