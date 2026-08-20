import{test as base}from '@playwright/test'

export const test=base.extend({

    myFixture:async({page},use)=>{

        console.log("Fixture Started");
        await use(page);

        console.log("Fixture Complete"); 
    }

})