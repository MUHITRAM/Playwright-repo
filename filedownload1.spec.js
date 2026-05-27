import { test, expect } from '@playwright/test';

test('File Upload', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/download');

   const downloadevent= await Promise.all([page.waitForEvent('download'),
   await page.getByText('google.png').click()]);

   await downloadevent[0].saveAs('./samplegoogle.png');

   await page.waitForTimeout(4000);

});

