import {test,expect} from '@playwright/test'


test('govt website',async({page})=>{
await page.goto('https://www.pib.gov.in/allRel.aspx?reg=3&lang=1')
const region = await page.locator('//select[@class="classic form-control"]');
    await region.selectOption({value:'6'});

    const language = await page.locator('//select[@aria-label="Language Selection"]');
    language.selectOption({value:'1'});

await page.mouse.wheel(0,3000)

await page.on('dialog', async dialog => {
    console.log(dialog.message());
    await dialog.dismiss();
});

await page.locator('//li[@class="col-md-0"]').nth(3).click();

await page.waitForTimeout(3000);
await page.pause();
    
    


})



// const minister=await page.locator('#ContentPlaceHolder1_ddlMinistry ');
// await minister.selectOption({value:'3'})

// await page.waitForTimeout(2000)
// const date=await page.locator('#ContentPlaceHolder1_ddlday');
// await date.selectOption({value:'3'})

// await page.waitForTimeout(2000)
// const month=await page.locator('#ContentPlaceHolder1_ddlMonth');
// await month.selectOption({label:'March'})

// await page.waitForTimeout(2000)
// const year= await page.locator('#ContentPlaceHolder1_ddlYear');
// await year.selectOption({label:'2025'})

// await page.waitForTimeout(2000)

// const [newWindow]=await Promise.all([
//   page.waitForEvent('popup'),
//   page.getByText('PM to participate in three Post- Budget webinars on 4th March').click()
// ])

// await page.waitForTimeout(2000)

// const text=await newWindow.locator('//*[@id="Titleh2"]').textContent()

// console.log(text);

// await expect(newWindow.locator('#Titleh2')).toHaveText('PM to participate in three Post- Budget webinars on 4th March');




