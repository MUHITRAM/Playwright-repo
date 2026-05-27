import { test, expect } from '@playwright/test';

test('Window Handle', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/windows');

    const [newPage] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByText('Click Here').click()
    ]);
    await newPage.waitForLoadState();
    console.log(await newPage.title());

    await expect(newPage.getByText('New Window')
    ).toHaveText('New Window');

    await page.waitForTimeout(3000);
});