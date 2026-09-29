import{test,expect}from '@playwright/test';
const searchData=['tv','mobile','ac']

for(const data of searchData){

test(`Search for ${data}`,async({page})=>{

  await page.goto('https://www.amazon.in')

  await page.getByPlaceholder('Search Amazon.in').fill(data)


  await page.locator('#nav-search-submit-button').click();

  await page.waitForTimeout(3000);

})


}