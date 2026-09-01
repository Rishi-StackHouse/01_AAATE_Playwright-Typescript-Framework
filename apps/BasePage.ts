/*
--------------------------------------------------------------------------------
PROBLEM STATEMENTS
--------------------------------------------------------------------------------
1. If we use Playwright methods directly in page classes, we need to hardcode waits each and every time.
   - Hard to maintain and changing the wait time will be a nightmare.

2. If page classes are not enforced with a contract (abstract methods), 
   - Chances to use these methods in test file , thats not a good practice.
   - Critical element visibility checks and page load validations may be skipped.
   - Automation engineers - No consistency in how page class extends other classes

--------------------------------------------------------------------------------
SOLUTION / APPROACH
--------------------------------------------------------------------------------
1. Centralizing common base actions with a proper wait mechanism:
   - Wrapping Playwright's inbuilt methods (click, fill, type, etc.) inside custom methods with required parameters.
  and Implementing wait methods BEFORE the actions to ensure element readiness/availability.
   - All page classes will extend this and use these methods for base-level actions (except locators).
   - This provides the solution of "change wait once, reflects in all pages".

2. Abstract class design pattern:
   - Prevents direct instantiation - tests won't be Dumped with BasePage methods.
   - Enforces implementation of abstract methods (critical elements visibility check, page load check, etc.).
   - All page methods extend this class for consistency, stability  across all pages.
--------------------------------------------------------------------------------
OTHER DETAILS
--------------------------------------------------------------------------------
3. Timeout configuration:
   - defaultTimeout: Used for element actions and visibility checks (default: 10s).
   - navigationTimeout: Used for URL navigation and page load checks (default: 10s).
   - Both can be overridden per-action when needed.
--------------------------------------------------------------------------------   
*/

import { Page, Locator, Response, test } from '@playwright/test';   // Page,Locator - Interfaces, Response, test

export abstract class BasePage {
    protected readonly page: Page;
    protected readonly defaultTimeout: number;   // Timeout for actions and visibility checks
    protected readonly navigationTimeout: number;  // Timeout for url navigation and page load checks
    constructor(page: Page, defaultTimeout: number = 10000, navigationTimeout: number = 10000) {
        this.page = page;
        this.defaultTimeout = defaultTimeout;
        this.navigationTimeout = navigationTimeout;
    }

    // centralized waits and navigation methods
    protected async waitForElementState(locator: Locator, state: 'visible'|'hidden'|'attached'|'detached' = 'visible', timeout: number = this.defaultTimeout): Promise<void> {
      await locator.waitFor({ state: state, timeout: timeout });
    }
    protected async waitForLoadStatePage(state: 'domcontentloaded'|'load'|'networkidle' = 'load', timeout: number = this.navigationTimeout): Promise<void> {
      await this.page.waitForLoadState(state, { timeout: timeout });
    }
    protected async waitForURLPage(url: string, waitUntil: 'domcontentloaded'|'load'|'networkidle' = 'load', timeout: number = this.navigationTimeout): Promise<void> {
      await this.page.waitForURL(url, { waitUntil: waitUntil, timeout: timeout });
    }
    protected async waitForTimeoutPage(timeout: number = this.defaultTimeout): Promise<void> {
      await this.page.waitForTimeout(timeout);    // static wait - pauses the execution for the specified timeout
    }
    protected async navigateToURL(url: string, timeout: number = this.defaultTimeout): Promise<Response|null> {
      const response = await this.page.goto(url, { waitUntil: 'load', timeout: timeout });
      return response
    }
    // centralized actions methods
    protected async click(locator: Locator, timeout: number = this.defaultTimeout): Promise<void> {
      await locator.waitFor({ state: 'visible', timeout: timeout });      // dynamic or smart waits - waits upto the timeout but stops if the element is visible/hidden
      await locator.click();
    }
    protected async fill(locator: Locator, input: string, timeout: number = this.defaultTimeout): Promise<void> {
      await locator.waitFor({ state: 'visible', timeout: timeout } );
      await locator.fill(input);
    }
    protected async type(locator: Locator, input: string, timeout: number = this.defaultTimeout): Promise<void> {
      await locator.waitFor({ state: 'visible', timeout: timeout });
      await locator.pressSequentially(input, {delay: 500} );
    }
    // centralized page info getter methods
    protected async getText(locator: Locator, timeout: number = this.defaultTimeout): Promise<string> {
      await locator.waitFor({ state: 'visible', timeout: timeout });
      return (await locator.innerText()).trim();
    }
    protected async getURL(expectedUrl: string, timeout: number = this.navigationTimeout): Promise<string> {
      await this.waitForURLPage(expectedUrl, 'load', timeout);
      return this.page.url();
    }
    protected async getTitle(): Promise<string> {
      return this.page.title();
    }
    // screenshots - return the captured buffer so callers can assert against a baseline (toMatchSnapshot)
    protected async takeScreenshot(app: string, page: string, fileName: string): Promise<Buffer> {
      const path = `test-artifacts/${app}/${page}/${fileName}`;
      const shot = await this.page.screenshot({ path, fullPage: true });
      await test.info().attach(fileName, { body: shot, contentType: 'image/png' });
      return shot;
    }
    protected async takeElementScreenshot(locator: Locator, app: string, page: string, fileName: string, timeout: number = this.defaultTimeout): Promise<Buffer> {
      await this.waitForElementState(locator, 'visible', timeout);
      const path = `test-artifacts/${app}/${page}/${fileName}`;
      const shot = await locator.screenshot({ path });
      await test.info().attach(fileName, { body: shot, contentType: 'image/png' });
      return shot;
    }
    // centralized web page action methods
    protected async webPageAction(action: 'back'|'forward'|'reload', expectedUrl: string, timeout: number = this.navigationTimeout): Promise<void> {
      switch (action) {
        case 'back':
          await this.page.goBack({ waitUntil: 'load', timeout: timeout });
          await this.waitForURLPage(expectedUrl, 'load', timeout);
          break;
        case 'forward':
          await this.page.goForward({ waitUntil: 'load', timeout: timeout });
          await this.waitForURLPage(expectedUrl, 'load', timeout);
          break;
        case 'reload':
          await this.page.reload({ waitUntil: 'load', timeout: timeout });
          await this.waitForURLPage(expectedUrl, 'load', timeout);
          break;
      }
    }
    // Others
    protected async isVisible(locator: Locator): Promise<boolean> {
      return locator.isVisible();
    }
    protected async isEnabled(locator: Locator): Promise<boolean> {
      return locator.isEnabled();
    }
}



