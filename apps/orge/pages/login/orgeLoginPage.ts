/*
Purpose of this file:-
  1. Contains all the methods for the ORGE Login Page actions as per the page object model (POM) design pattern.
  2. Extends BasePage class directly for base actions and implements enforced abstract methods
  */

import { Page, Locator, Response, expect } from '@playwright/test';
import { BasePage } from '../../../BasePage';
import { orgeLoginLoc } from './orgeLoginLoc';
import { orgeCreds } from '../../../../config/config'; 

export class orgeLoginPage extends BasePage {

    readonly loc: orgeLoginLoc;

    constructor(page: Page) {
        super(page);
        this.loc = new orgeLoginLoc(page);
    }

    async verifyCriticalElements(): Promise<void> {
        // Company logos - should be visible
        await expect.soft(this.loc.orgeCompanyLogo, 'Company logo should be visible').toBeVisible();
        await expect.soft(this.loc.orgehrmLogo, 'OrangeHRM logo should be visible').toBeVisible();

        // Welcome Login text message - should be visible
        await expect.soft(this.loc.loginhead, 'Login header should be visible').toBeVisible();

        // Copyright content - should be visible
        await expect.soft(this.loc.footerCopyrightText, 'Copyright text should be visible').toBeVisible();

        // Username and password labels - should be visible
        await expect.soft(this.loc.usernameLabel, 'Username label should be visible').toBeVisible();
        await expect.soft(this.loc.passwordLabel, 'Password label should be visible').toBeVisible();

        // Username and password label icons - should be visible
        await expect.soft(this.loc.usernameLabelIcon, 'Username icon should be visible').toBeVisible();
        await expect.soft(this.loc.passwordLabelIcon, 'Password icon should be visible').toBeVisible();

        // Username field - should be visible, enabled, and editable
        await expect.soft(this.loc.usernameField, 'Username field should be visible').toBeVisible();
        await expect.soft(this.loc.usernameField, 'Username field should be enabled').toBeEnabled();
        await expect.soft(this.loc.usernameField, 'Username field should be editable').toBeEditable();

        // Password field - should be visible, enabled, and editable
        await expect.soft(this.loc.passwordField, 'Password field should be visible').toBeVisible();
        await expect.soft(this.loc.passwordField, 'Password field should be enabled').toBeEnabled();
        await expect.soft(this.loc.passwordField, 'Password field should be editable').toBeEditable();

        // Login button - should be visible and enabled
        await expect.soft(this.loc.loginButton, 'Login button should be visible').toBeVisible();
        await expect.soft(this.loc.loginButton, 'Login button should be enabled').toBeEnabled();

        // Forgot password link - should be visible and enabled
        await expect.soft(this.loc.forgotPasswordLink, 'Forgot password link should be visible').toBeVisible();
        await expect.soft(this.loc.forgotPasswordLink, 'Forgot password link should be enabled').toBeEnabled();

        // Alert banner and field errors - should NOT be visible (default state)
        await expect.soft(this.loc.invalidCredentialsAlert, 'Alert banner should not be visible').not.toBeVisible();
        await expect.soft(this.loc.invalidCredentialsAlertIcon, 'Alert icon should not be visible').not.toBeVisible();
        await expect.soft(this.loc.usernameRequiredError, 'Username required error should not be visible').not.toBeVisible();
        await expect.soft(this.loc.passwordRequiredError, 'Password required error should not be visible').not.toBeVisible();
    }
    async openORGE(): Promise<Response | null> {
        return this.navigateToURL(orgeCreds.web.url!);
    }
    async getLoginPageURL(): Promise<string> {
        return this.getURL(orgeCreds.web.url!);
    }
    async getDashboardPageURL(): Promise<string> {
        return this.getURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    }
    async getLoginPageTitle(): Promise<string> {
        return this.getTitle();
    }
    async getDashboardPageTitle(): Promise<string> {
        return this.getTitle();
    }
    async orgeLogin(): Promise<void> {
        await this.fill(this.loc.usernameField, orgeCreds.web.username!);
        await this.fill(this.loc.passwordField, orgeCreds.web.password!);
        await this.click(this.loc.loginButton);
    }
    async screenshotOrgeLogin(app: string, page: string, fileName: string): Promise<Buffer> {
        return this.takeScreenshot(app, page, fileName);
    }
    // async clickLoginButton(): Promise<void> {
    //     await this.click(this.loc.loginButton);
    // }
}    
