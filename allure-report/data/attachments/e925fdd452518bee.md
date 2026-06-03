# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dragdrop.spec.js >> Basic lines
- Location: e2e/dragdrop.spec.js:3:5

# Error details

```
Error: page.waitForTimeout: Test ended.
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | 
  3  | test('Basic lines',async({page})=>{
  4  | 
  5  |     await page.goto('https://the-internet.herokuapp.com/drag_and_drop')
  6  |     const source12=await page.locator('#column-a');
  7  |     const destination =await page.locator('#column-b');
  8  | 
  9  |     await source12.dragTo(destination);
  10 | 
> 11 |     await page.waitForTimeout(3000);
     |                ^ Error: page.waitForTimeout: Test ended.
  12 | })
```