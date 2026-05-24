import {test,expect} from '@playwright/test';

test('Dropdown',async({page})=>{

    await page.goto('https://artoftesting.com/samplesiteforselenium')
    await page.mouse.wheel(0,800);
    const dropdown = await page.locator('#testingDropdown');
    dropdown.selectOption({value:'Performance'});

    await page.waitForTimeout(4000);
    dropdown.selectOption({label:'Manual Testing'});

await page.pause();
    await page.waitForTimeout(3000);
})