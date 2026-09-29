import { test } from '@playwright/test';
import { mainpro } from './mainpro.js';

test('Amazon Product', async ({ page }) => {

    await page.goto('https://www.amazon.in/');

    const amazon1 = new mainpro(page);

    await amazon1.search();

    await amazon1.clickproduct();

    await amazon1.addtocart();

    

});