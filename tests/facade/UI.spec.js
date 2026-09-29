import{test}from '@playwright/test'
import { Shoppingfacade } from './Shoppingfacade';
import { ScreenshotUtils } from './Screenshotsutils';
import { environmental } from './Environmental';
test('Buying Product',async({page})=>{

    await page.goto(environmental.qa)

    const shopping=new Shoppingfacade(page)

    await shopping.login();

await ScreenshotUtils.takeScreenshot(page,'LoginPage')

})