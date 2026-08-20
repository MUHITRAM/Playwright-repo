# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Sample.spec.js >> Basic lines
- Location: tests/Sample.spec.js:3:1

# Error details

```
Error: locator.screenshot: Target page, context or browser has been closed
Call log:
  - waiting for locator('#imageDoodle')

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Basic lines', async ({ page }) => {
  4  | 
  5  |     await page.goto('https://google.com');
  6  | 
> 7  |     await page.locator('#imageDoodle').screenshot({path:'screenshots/google.png'})
     |                                        ^ Error: locator.screenshot: Target page, context or browser has been closed
  8  | 
  9  | 
  10 |     await page.waitForTimeout(5000);
  11 | })
  12 | 
  13 |    
  14 | 
```