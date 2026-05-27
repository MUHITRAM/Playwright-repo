import { test, expect } from '@playwright/test';

test('Window Handle', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/windows');

    
    const [newPage] = await Promise.all([

        page.waitForEvent('popup'),
        page.locator('text=Click Here').click()

    ]);
    
    console.log(await newPage.title());
    await expect(newPage.locator('h3')).toHaveText('New Window');
    await newPage.waitForTimeout(5000);
});