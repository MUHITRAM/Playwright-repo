import {test,expect} from '@playwright/test'




const minister=await page.locator('#ContentPlaceHolder1_ddlMinistry ');
await minister.selectOption({value:'3'})

const date=await page.locator('#ContentPlaceHolder1_ddlday');
await date.selectOption({value:'3'})

const month=await page.locator('#ContentPlaceHolder1_ddlMonth');
await month.selectOption({label:'March'})

const year= await page.locator('#ContentPlaceHolder1_ddlYear');
await year.selectOption({label:'Year'})


