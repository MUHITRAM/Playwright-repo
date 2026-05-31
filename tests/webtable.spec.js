import {test,expect} from '@playwright/test';

test('Webtables',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/tables')
    const rows=await page.locator('#table1 tbody tr',{

        hasText:'Smith'

    })
   const email= await rows.locator('td').nth(2).textContent()

        console.log(email) 
})