/*
Purpose of this file:-
  1. To centralize the common base actions with a proper wait mechanism 
     that needs to be performed across all the app pages (in order to reduce the flakiness)

Problem Statement - If we are using the playwright methods directly in the page classes, then we need to hardcode waits each and every time
                    and that's hard to maintain and changing the wait time will be a nightmare.
Solution - Wrapping the playwright's inbuilt methods (like click, type, etc.) inside the custom methods with the required parameters
         - And implementing the wait methods before the actions
         - All the page classes and other classes will use this methods for doing base level actions. (except locators)
         - This provides the solution of "change wait once, reflects in all pages"

  2. Reason for as abstract class
     - We dont want the tests to get dumped with this class methods, so abstract class is required (blocking object instantiation)
     - Also To enforce the implementation of abstract methods, few methods - critical elements visibility check, page load check etc
     - All the page methods will extend it and use these methods for maintaining the stability across all the pages
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
    protected async waitForState(locator: Locator, state: 'visible'|'hidden'|'attached'|'detached' = 'visible', timeout: number = this.defaultTimeout): Promise<void> {
      await locator.waitFor({ state: state, timeout: timeout });
    }
    protected async waitForPageLoadState(state: 'load'|'domcontentloaded'|'networkidle' = 'load', timeout: number = this.navigationTimeout): Promise<void> {
      await this.page.waitForLoadState(state, { timeout: timeout });
    }
    protected async waitForPageURL(url: string, waitUntil: 'load'|'domcontentloaded'|'networkidle' = 'load', timeout: number = this.navigationTimeout): Promise<void> {
      await this.page.waitForURL(url, { waitUntil: waitUntil, timeout: timeout });
    }
    protected async navigateToURL(url: string, timeout: number = this.defaultTimeout): Promise<Response|null> {
      const response = await this.page.goto(url, { waitUntil: 'domcontentloaded', timeout: timeout });
      await this.page.waitForLoadState('load', { timeout: timeout });
      return response
    }
    protected async wait(timeout: number = this.defaultTimeout): Promise<void> {
      await this.page.waitForTimeout(timeout);    // static wait - pauses the execution for the specified timeout
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
      await this.waitForPageURL(expectedUrl, 'load', timeout);
      return this.page.url();
    }
    protected async getTitle(): Promise<string> {
      return this.page.title();
    }

    // centralized element-state getter methods (immediate, non-throwing reads of the CURRENT state)
    // - isVisible() returns false (not throws) when the element is absent - safe for "should NOT be visible" checks
    protected async isVisible(locator: Locator): Promise<boolean> {
      return locator.isVisible();
    }
    protected async isEnabled(locator: Locator): Promise<boolean> {
      return locator.isEnabled();
    }

    // screenshots - return the captured buffer so callers can assert against a baseline (toMatchSnapshot)
    protected async takeScreenshot(app: string, page: string, fileName: string): Promise<Buffer> {
      const path = `test-artifacts/${app}/${page}/${fileName}`;
      const shot = await this.page.screenshot({ path, fullPage: true });
      await test.info().attach(fileName, { body: shot, contentType: 'image/png' });
      return shot;
    }
    protected async takeElementScreenshot(locator: Locator, app: string, page: string, fileName: string, timeout: number = this.defaultTimeout): Promise<Buffer> {
      await this.waitForState(locator, 'visible', timeout);
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
          await this.waitForPageURL(expectedUrl, 'load', timeout);
          break;
        case 'forward':
          await this.page.goForward({ waitUntil: 'load', timeout: timeout });
          await this.waitForPageURL(expectedUrl, 'load', timeout);
          break;
        case 'reload':
          await this.page.reload({ waitUntil: 'load', timeout: timeout });
          await this.waitForPageURL(expectedUrl, 'load', timeout);
          break;
      }
    }
}



