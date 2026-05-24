const {test,expect} = require ('@playwright/test');

test('lines',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.getByRole('presentation').first().click(); //first occurrence

    await page.pause();
    
})