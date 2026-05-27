import { test, expect } from '@playwright/test';

test('Basic lines', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    
    page.on('dialog', async dialog => {

        console.log(dialog.message());

        await dialog.accept('Ashika Yaaro'); 
    });

    
    await page.locator('text=Click for JS Prompt ').click();

    await page.waitForTimeout(5000);
});