import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('link', { name: 'Hero' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('.s-widget-container.s-spacing-small.s-widget-container-height-small.celwidget.slot\\=MAIN.template\\=SEARCH_RESULTS.widgetId\\=search-results_3 > div > .rush-component.s-featured-result-item > span > .puis-card-container > .a-section.a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal').click();
  const page1 = await page1Promise;
});