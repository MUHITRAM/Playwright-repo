import {test} from '@playwright/test'

test.afterAll(async()=>{
    console.log("Run once after all tests");//Runs only one time before any test starts - Before all
    
})

test("Test 1",async()=>{
    console.log("Running Test 1");
    
})
test("Test 2",async()=>{
    console.log("Running Test 2");
    
})

// test.afterEach(async()=>{ //Runs before every test

//     console.log("After Each");
// });

// test("Test 1",async()=>{
//     console.log("Running Test 1");
    
// })
// test("Test 2",async()=>{
//     console.log("Running Test 2");
    
// })


