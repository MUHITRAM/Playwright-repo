import {test,expect} from '@playwright/test';

test('Webtables',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/tables')
    const rows=await page.locator('#table1 tbody tr').all();

    for(const row of rows){

        console.log(await row.textContent());
        
    }

})