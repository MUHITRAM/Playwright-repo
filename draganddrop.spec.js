import { test, expect } from '@playwright/test';

test('Basic lines', async ({ page }) => {

    await page.goto('https://jqueryui.com/resources/demos/droppable/default.html');

   
    const box12 = page.locator('#draggable');
    const box2 = page.locator('#droppable');

   
    await box12.dragTo(box2);

    await page.waitForTimeout(5000);

    await page.pause();
});