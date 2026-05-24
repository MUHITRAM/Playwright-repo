// import{test,expect} from '@playwright/test'

// test('Radiobutton',async({page})=>{
//    await page.goto('https://artoftesting.com/samplesiteforselenium')

//    await page.mouse.wheel(0,500)

//    await page.locator('#male').click();
//    await page.pause()

// })

//Checkbox

import{test,expect} from '@playwright/test'

test('Radiobutton',async({page})=>{
   await page.goto('https://artoftesting.com/samplesiteforselenium')

   await page.mouse.wheel(0,600)
 const check= await page.locator('//input[@type="checkbox"]')
 await check.nth(0).check();

await page.pause()


})

