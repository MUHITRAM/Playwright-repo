import { test, expect } from '@playwright/test';

test('Basic lines', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/upload')

    await page.locator('#file-upload').setInputFiles('/Users/muhitramms/Desktop/Muhit_Ram_QA_Resume.pdf')

    await page.locator('#file-submit').click()

    await page.waitForTimeout(5000);


})
