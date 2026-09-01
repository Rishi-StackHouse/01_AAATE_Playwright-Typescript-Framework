/*
Purpose: Methods for OrangeHRM Dashboard page
*/

import { Page, expect } from '@playwright/test';
import { BasePage } from '../../../BasePage';
import { orgeDashLoc } from './orgeDashLoc';
import { orgeLoginPage } from '../login/orgeLoginPage';

export class orgeDashPage extends BasePage {
    readonly loc: orgeDashLoc;
    readonly loginPage: orgeLoginPage;  // Composition - use login page internally

    constructor(page: Page) {
        super(page);
        this.loc = new orgeDashLoc(page);
        this.loginPage = new orgeLoginPage(page);
    }

    // Login and land on Dashboard - single method for setup
    async loginOpenDashboard(): Promise<void> {
        await this.loginPage.openORGE();
        await this.loginPage.orgeLogin();
        await this.loginPage.getDashboardPageURL();
    }

    // Verify Quick Launch buttons are visible
    async verifyQuickLaunchButtons(): Promise<void> {
        await expect(this.loc.assignLeaveBtn, 'Assign Leave button should be visible').toBeVisible();
        await expect(this.loc.leaveListBtn, 'Leave List button should be visible').toBeVisible();
        await expect(this.loc.timesheetsBtn, 'Timesheets button should be visible').toBeVisible();
    }
}
