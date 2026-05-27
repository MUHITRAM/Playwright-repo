import { test } from '@playwright/test';

test('Slider using mouse action', async ({ page }) => {

    await page.goto('https://jqueryui.com/slider/');
    const frame = page.frameLocator('.demo-frame');

    const slider = frame.locator('#slider span');

   
    const box = await slider.boundingBox();

    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    await page.mouse.move(box.x + 200, box.y);
    await page.mouse.up();

    await page.waitForTimeout(3000);

});