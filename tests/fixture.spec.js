import{test} from './fixtures.js'
test('Fixture',async({myFixture})=>{

    await myFixture.goto('https://www.google.com')
    console.log("Test is running");
    
})

