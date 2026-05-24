import {test,expect} from '@playwright/test';

test('Login Facebook',async({page})=>{

    await page.goto('https://www.facebook.com');
    await page.getByLabel('Email address or mobile number').fill('Admin123')
    await page.getByLabel('Password').fill('Admin');
});

