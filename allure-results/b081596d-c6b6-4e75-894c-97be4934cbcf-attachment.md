# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Sample.spec.js >> Login Page
- Location: tests/Sample.spec.js:2:1

# Error details

```
Error: page.goto: Target page, context or browser has been closed
Call log:
  - navigating to "https://www.amazon.in/", waiting until "load"

```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test';
  2  | test("Login Page",async({page})=>{
  3  | 
> 4  |     await page.goto("https://www.amazon.in")
     |                ^ Error: page.goto: Target page, context or browser has been closed
  5  | 
  6  | 
  7  |     await page.waitForTimeout(6000);
  8  |     await page.screenshot({path:'screenshots/amazon1.jpeg'})
  9  | 
  10 | })
```