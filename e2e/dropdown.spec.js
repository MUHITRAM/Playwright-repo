const { test, expect } = require('@playwright/test');

test('Page1', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');
  await page.mouse.wheel(0, 500);
  const dropdown = page.locator('#country');
  await dropdown.selectOption({ value: 'uk' });
  await dropdown.selectOption({ label: 'Japan' });
  await page.pause;

});