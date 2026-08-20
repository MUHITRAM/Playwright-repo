import { test, expect } from '@playwright/test';

test('Iframes ex', async ({ page }) => {

    await page.goto('https://demo.automationtesting.in/Frames.html#google_vignette');

    const frame = page.frameLocator('#singleframe');

    const reference = frame.locator("//input[@type='text']").first().fill('Hello Jai')

    await page.pause()
});