import{test,expect} from '@playwright/test';
test("Login Page",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    // await page.locator('#female').check();
    // await page.pause();
  
    await page.mouse.wheel(0,700);
    const dropdown=await page.locator('#country')
    dropdown.selectOption({label:'United Kingdom'})
    await page.pause();

   
})


