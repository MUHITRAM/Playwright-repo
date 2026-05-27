import {test,expect,chromium} from '@playwright/test';



test('Mini Project',async({page})=>{

   const context= await browser.newContext ({viewport:'width: 1280, height: 720'})
    await page.goto('https://demowebshop.tricentis.com/')

    await page.locator("//a[@class='ico-register']").click();
    await page.locator('#FirstName').fill('Muhit')
    await page.locator('#LastName').fill('RamMS')
     await page.locator('#Email').fill('Muhit1010505000000000@gmail.com')
  await page.locator('#Password').fill('RamMS1@123')
     await page.locator('#ConfirmPassword').fill('RamMS1@123')
  await page.locator('#register-button').click();
  await page.locator("//input[@class='button-1 register-continue-button']").click();
  await page.locator('#small-searchterms').fill('Laptop');
  await page.keyboard.press('Enter');
await page.locator("//input[@value='Add to cart']").click();

await page.waitForTimeout(3000)
await page.locator("//span[@class='cart-label']").first().click();

const check = await page.locator('#termsofservice')
await check.check();

await page.locator('#checkout').click();
await page.waitForTimeout(3000);
await page.goBack();

await page.locator("//span[@class='cart-label']").first().click();
const check2=await page.locator("//input[@name='removefromcart']");
await check2.check();
await page.locator("//input[@name='updatecart']").click();
await page.waitForTimeout(3000);
await page.getByText('Log out').click();
console.log("Logged Out Successfully");   
});