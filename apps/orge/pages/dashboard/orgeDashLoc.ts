/*
Purpose: Locators for OrangeHRM Dashboard page
*/

import { Page, Locator } from '@playwright/test';

export class orgeDashLoc {
    readonly page: Page;

    // Quick Launch Buttons
    readonly assignLeaveBtn: Locator;
    readonly leaveListBtn: Locator;
    readonly timesheetsBtn: Locator;

    constructor(page: Page) {
        this.page = page;

        // Quick Launch Buttons (using XPath)
        this.assignLeaveBtn = page.locator('//button[@title="Assign Leave"]');
        this.leaveListBtn = page.locator('//button[@title="Leave List"]');
        this.timesheetsBtn = page.locator('//button[@title="Timesheets"]');
    }
}
