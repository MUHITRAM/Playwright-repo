import{test}from '@playwright/test'
import { Shoppingfacade } from './Shoppingfacade';
test('Buying Product',async({page})=>{

    await page.goto('https://www.saucedemo.com/')


    const shopping=new Shoppingfacade(page)

    await shopping.login();

})