import { test } from '@playwright/test';

test('select govt page dropdowns', async ({ page }) => {
  await page.goto('https://www.pib.gov.in/allRel.aspx?reg=3&lang=1');

  const minister = await page.locator('#ContentPlaceHolder1_ddlMinistry');
  await minister.selectOption({ value: '3' });

  const date = await page.locator('#ContentPlaceHolder1_ddlday');
  await date.selectOption({ value: '3' });

  const month = await page.locator('#ContentPlaceHolder1_ddlMonth');
  await month.selectOption({ label: 'March' });

  const year = await page.locator('#ContentPlaceHolder1_ddlYear');
  await year.selectOption({ label: '2025' });
});
