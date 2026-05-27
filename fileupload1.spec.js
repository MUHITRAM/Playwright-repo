import { test, expect } from '@playwright/test';

test('File Upload', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/upload');
    await page.locator('#file-upload').setInputFiles('/Users/muhitramms/Downloads/google.png')

    await page.locator('#file-submit').click()

    await page.waitForTimeout(4000);
})