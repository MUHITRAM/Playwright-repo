import {test as base} from '@playwright/test'

export const test=base.extend({

    loginPage:async({page},use)=>{


        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        await page.fill('input[name="username"]', 'Admin');

        await page.fill('input[name="password"]', 'admin123');

        await page.click('button[type="submit"]');

       await use(page)
    }
})
export {expect} from '@playwright/test'
