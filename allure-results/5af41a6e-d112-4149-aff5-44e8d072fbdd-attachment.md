# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Sample.spec.js >> Iframes ex
- Location: tests/Sample.spec.js:3:1

# Error details

```
TypeError: Cannot read properties of undefined (reading 'locator')
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link "image not displaying" [ref=e7] [cursor=pointer]:
        - /url: http://www.automationtesting.in
        - img "image not displaying" [ref=e8]
      - heading "Automation Demo Site" [level=1] [ref=e10]
    - navigation [ref=e11]:
      - list [ref=e14]:
        - listitem [ref=e15]:
          - link "Home" [ref=e16] [cursor=pointer]:
            - /url: Index.html
        - listitem [ref=e17]:
          - link "Register" [ref=e18] [cursor=pointer]:
            - /url: Register.html
        - listitem [ref=e19]:
          - link "WebTable" [ref=e20] [cursor=pointer]:
            - /url: WebTable.html
        - listitem [ref=e21]:
          - link "SwitchTo" [ref=e22] [cursor=pointer]:
            - /url: SwitchTo.html
          - generic [ref=e23]: 
        - listitem [ref=e24]:
          - link "Widgets" [ref=e25] [cursor=pointer]:
            - /url: Widgets.html
          - generic [ref=e26]: 
        - listitem [ref=e27]:
          - link "Interactions" [ref=e28] [cursor=pointer]:
            - /url: Interactions.html
          - generic [ref=e29]: 
        - listitem [ref=e30]:
          - link "Video" [ref=e31] [cursor=pointer]:
            - /url: SwitchTo.html
          - generic [ref=e32]: 
        - listitem [ref=e33]:
          - link "WYSIWYG" [ref=e34] [cursor=pointer]:
            - /url: WYSIWYG.html
          - generic [ref=e35]: 
        - listitem [ref=e36]:
          - link "More" [ref=e37] [cursor=pointer]:
            - /url: "#"
          - generic [ref=e38]: 
        - listitem [ref=e39]:
          - link "Practice Site" [ref=e40] [cursor=pointer]:
            - /url: http://practice.automationtesting.in/
  - generic [ref=e41]:
    - generic [ref=e45]:
      - list [ref=e48]:
        - listitem [ref=e49]:
          - link "Single Iframe" [ref=e50]:
            - /url: "#Single"
        - listitem [ref=e51]:
          - link "Iframe with in an Iframe" [ref=e52] [cursor=pointer]:
            - /url: "#Multiple"
      - iframe [ref=e54]: <p>Your browser does not support iframes.</p>:
        - generic [ref=f1e3]:
          - heading "iFrame Demo" [level=5] [ref=f1e4]
          - textbox [ref=f1e7]
    - generic [ref=e56]:
      - insertion [ref=e59]:
        - generic [ref=e62]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e64]: Discover more
          - link "Manual testing services" [ref=e65] [cursor=pointer]:
            - generic "Manual testing services" [ref=e66]
            - img [ref=e68]
          - link "Factory Automation" [ref=e70] [cursor=pointer]:
            - generic "Factory Automation" [ref=e71]
            - img [ref=e73]
          - link "Selenium automation framework" [ref=e75] [cursor=pointer]:
            - generic "Selenium automation framework" [ref=e76]
            - img [ref=e78]
          - link "Web Browsers" [ref=e80] [cursor=pointer]:
            - generic "Web Browsers" [ref=e81]
            - img [ref=e83]
          - link "Web automation training" [ref=e85] [cursor=pointer]:
            - generic "Web automation training" [ref=e86]
            - img [ref=e88]
          - link "Development Tools" [ref=e90] [cursor=pointer]:
            - generic "Development Tools" [ref=e91]
            - img [ref=e93]
          - link "Software testing services" [ref=e95] [cursor=pointer]:
            - generic "Software testing services" [ref=e96]
            - img [ref=e98]
          - link "Iframe testing guide" [ref=e100] [cursor=pointer]:
            - generic "Iframe testing guide" [ref=e101]
            - img [ref=e103]
      - insertion [ref=e107]:
        - generic [ref=e110]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e112]: Discover more
          - link "Automation testing courses" [ref=e113] [cursor=pointer]:
            - generic "Automation testing courses" [ref=e114]
            - img [ref=e116]
          - link "Selenium Grid setup" [ref=e118] [cursor=pointer]:
            - generic "Selenium Grid setup" [ref=e119]
            - img [ref=e121]
          - link "Internet & Telecom" [ref=e123] [cursor=pointer]:
            - generic "Internet & Telecom" [ref=e124]
            - img [ref=e126]
          - link "Automation consulting services" [ref=e128] [cursor=pointer]:
            - generic "Automation consulting services" [ref=e129]
            - img [ref=e131]
          - link "Test automation tools" [ref=e133] [cursor=pointer]:
            - generic "Test automation tools" [ref=e134]
            - img [ref=e136]
          - link "Automation demo site" [ref=e138] [cursor=pointer]:
            - generic "Automation demo site" [ref=e139]
            - img [ref=e141]
          - link "Performance testing tools" [ref=e143] [cursor=pointer]:
            - generic "Performance testing tools" [ref=e144]
            - img [ref=e146]
          - link "Web application testing" [ref=e148] [cursor=pointer]:
            - generic "Web application testing" [ref=e149]
            - img [ref=e151]
      - insertion [ref=e155]:
        - generic [ref=e158]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e160]: Discover more
          - link "Web development resources" [ref=e161] [cursor=pointer]:
            - generic "Web development resources" [ref=e162]
            - img [ref=e164]
          - link "UI testing tools" [ref=e166] [cursor=pointer]:
            - generic "UI testing tools" [ref=e167]
            - img [ref=e169]
          - link "Programming" [ref=e171] [cursor=pointer]:
            - generic "Programming" [ref=e172]
            - img [ref=e174]
          - link "Software quality assurance" [ref=e176] [cursor=pointer]:
            - generic "Software quality assurance" [ref=e177]
            - img [ref=e179]
          - link "Process automation software" [ref=e181] [cursor=pointer]:
            - generic "Process automation software" [ref=e182]
            - img [ref=e184]
          - link "Browser compatibility testing" [ref=e186] [cursor=pointer]:
            - generic "Browser compatibility testing" [ref=e187]
            - img [ref=e189]
          - link "Software" [ref=e191] [cursor=pointer]:
            - generic "Software" [ref=e192]
            - img [ref=e194]
          - link "Constitutional Law & Civil Rights" [ref=e196] [cursor=pointer]:
            - generic "Constitutional Law & Civil Rights" [ref=e197]
            - img [ref=e199]
      - insertion [ref=e203]:
        - generic [ref=e206]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e208]: Discover more
          - link "Selenium WebDriver tutorial" [ref=e209] [cursor=pointer]:
            - generic "Selenium WebDriver tutorial" [ref=e210]
            - img [ref=e212]
          - link "Ethics" [ref=e214] [cursor=pointer]:
            - generic "Ethics" [ref=e215]
            - img [ref=e217]
          - link "Automation demo site" [ref=e219] [cursor=pointer]:
            - generic "Automation demo site" [ref=e220]
            - img [ref=e222]
          - link "Selenium automation framework" [ref=e224] [cursor=pointer]:
            - generic "Selenium automation framework" [ref=e225]
            - img [ref=e227]
          - link "Software testing services" [ref=e229] [cursor=pointer]:
            - generic "Software testing services" [ref=e230]
            - img [ref=e232]
          - link "Internet & Telecom" [ref=e234] [cursor=pointer]:
            - generic "Internet & Telecom" [ref=e235]
            - img [ref=e237]
          - link "Test automation tools" [ref=e239] [cursor=pointer]:
            - generic "Test automation tools" [ref=e240]
            - img [ref=e242]
          - link "Programming" [ref=e244] [cursor=pointer]:
            - generic "Programming" [ref=e245]
            - img [ref=e247]
      - generic [ref=e252]:
        - generic [ref=e253]:
          - text: "\"@ 2016\""
          - link "Automation Testing" [ref=e254] [cursor=pointer]:
            - /url: "#"
          - text: "\"All Rights Reserved.\""
        - generic [ref=e255]:
          - link "" [ref=e256] [cursor=pointer]:
            - /url: https://www.facebook.com/automationtesting2016/
            - generic [ref=e257]: 
          - link "" [ref=e258] [cursor=pointer]:
            - /url: https://twitter.com/krishnasakinala
            - generic [ref=e259]: 
          - link "" [ref=e260] [cursor=pointer]:
            - /url: https://www.linkedin.com/nhome/?trk=hb_signin
            - generic [ref=e261]: 
          - link "" [ref=e262] [cursor=pointer]:
            - /url: https://plus.google.com/105286300926085335367
            - generic [ref=e263]: 
          - link "" [ref=e264] [cursor=pointer]:
            - /url: https://www.youtube.com/channel/UCmQRa3pWM9zsB474URz8ESg
            - generic [ref=e265]: 
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('Iframes ex', async ({ page }) => {
  4  | 
  5  |     await page.goto('https://demo.automationtesting.in/Frames.html#google_vignette');
  6  | 
  7  |     const frame1=await page.frameLocator('#singleframe')
> 8  |     await frame1.frame.locator("//input[@type='text']").first().fill('Hello Ashi')
     |                        ^ TypeError: Cannot read properties of undefined (reading 'locator')
  9  | 
  10 | });
```