import {test,expect} from '@playwright/test';
import { log } from 'console';

test('Autocomplete',async({page})=>{

    await page.goto('https://www.amazon.in/')

    await page.getByText('Continue shopping').nth(1).click()

    await page.waitForTimeout(4000);
    await page.locator('#twotabsearchtextbox').fill('iphone')

    const suggest=await page.locator('.s-suggestion');

    await expect(suggest.first()).toBeVisible()

    for(const suggestion of await suggest.all()){

       const text1= await suggestion.innerText()
       console.log(text1);

       if(text1.includes('iphone 17 256gb'))
       {

        await suggestion.click()

        break;

        await page.waitForTimeout(4000);
       }
       
    }


})