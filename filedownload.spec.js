import { test, expect } from '@playwright/test';

test('Basic lines', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/download');

    const download = await Promise.all([
        page.waitForEvent('download'),
        page.getByText('random_data.txt').click()
    ]);

    await download.saveAs('/Users/muhitramms/Downloads/random.txt');

    await page.waitForTimeout(5000);
});