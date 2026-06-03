# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dropdown.spec.js >> Page1
- Location: e2e/dropdown.spec.js:3:5

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://testautomationpractice.blogspot.com/", waiting until "load"

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Page1', async ({ page }) => {
  4  | 
> 5  |   await page.goto('https://testautomationpractice.blogspot.com/');
     |              ^ Error: page.goto: Test ended.
  6  |   await page.mouse.wheel(0, 500);
  7  |   const dropdown = page.locator('#country');
  8  |   await dropdown.selectOption({ value: 'uk' });
  9  |   await dropdown.selectOption({ label: 'Japan' });
  10 |   await page.pause;
  11 | 
  12 | });
```