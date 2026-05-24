import {test,expect,chromium} from '@playwright/test'

    test('loginpage',async({page})=>    {
        await page.goto('https://www.saucedemo.com/')
        await page.getByPlaceholder('Username').fill('problem_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click({force:true});
        const mini = await page.locator('.product_sort_container');
        await mini.selectOption({label:'Price (low to high)'});
        await page.waitForTimeout(4000);
        await page.pause()
    });