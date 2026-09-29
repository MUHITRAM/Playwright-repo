# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Sample.spec.js >> Iframes ex
- Location: tests/Sample.spec.js:3:1

# Error details

```
ReferenceError: dialog is not defined
```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e4]:
    - link "Fork me on GitHub":
      - /url: https://github.com/tourdedave/the-internet
      - img "Fork me on GitHub" [ref=e5] [cursor=pointer]
    - generic [ref=e7]:
      - heading "JavaScript Alerts" [level=3] [ref=e8]
      - paragraph [ref=e9]: Here are some examples of different JavaScript alerts which can be troublesome for automation
      - list [ref=e10]:
        - listitem [ref=e11]:
          - button "Click for JS Alert" [ref=e12] [cursor=pointer]
        - listitem [ref=e13]:
          - button "Click for JS Confirm" [ref=e14] [cursor=pointer]
        - listitem [ref=e15]:
          - button "Click for JS Prompt" [active] [ref=e16] [cursor=pointer]
      - heading "Result:" [level=4] [ref=e17]
      - paragraph [ref=e18]: "You entered: null"
  - generic [ref=e20]:
    - separator [ref=e21]
    - generic [ref=e22]:
      - text: Powered by
      - link "Elemental Selenium" [ref=e23] [cursor=pointer]:
        - /url: http://elementalselenium.com/
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Iframes ex', async ({ page }) => {
  4  | 
  5  |     await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
  6  | 
  7  | 
  8  |     
  9  |     page.on('dialog',async()=>{
  10 | 
> 11 |         await dialog.message.accept('Hi Ashika')
     |         ^ ReferenceError: dialog is not defined
  12 |         
  13 |     })
  14 |     await page.getByText('Click for JS Prompt').click()
  15 |     
  16 | 
  17 | 
  18 |     await page.pause()
  19 | });
```