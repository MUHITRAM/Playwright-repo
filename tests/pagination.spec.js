import {test,expect} from '@playwright/test';

test('Books Nation', async({page})=>{

    await page.goto('https://books.toscrape.com/catalogue/page-1.html')

    let count=0;//++0 1 ++1 = 2 ++2 =3 ++3 =
    while(true){

       count += await page.locator('.product_pod').count()

       const nextpage=await page.locator('li.next a')

       if(await nextpage.count()==0){

        break;
       }
      
       await nextpage.click()
    }

    console.log(`Total books :${count}`);

    
    


})
