import { Page, Locator } from '@playwright/test';

/*
Purpose of this file:-
  1. Single source of truth for all element locators on the ORGE (OrangeHRM) Login page.
  2. Isolation from Page methods helps for readability
*/

export class orgeLoginLoc {
    readonly page: Page;

    // Branding / logos
    readonly orgeCompanyLogo: Locator;
    readonly orgehrmLogo: Locator;
    // Field labels (text)
    readonly loginhead: Locator;
    readonly usernameLabel: Locator;
    readonly passwordLabel: Locator;
    // Field label icons
    readonly usernameLabelIcon: Locator;
    readonly passwordLabelIcon: Locator;
    // Input fields
    readonly usernameField: Locator;
    readonly passwordField: Locator;
    // Actions
    readonly loginButton: Locator;
    readonly forgotPasswordLink: Locator;
    // Invalid-credentials alert banner (page-level toast) + its warn icon
    readonly invalidCredentialsAlert: Locator;
    readonly invalidCredentialsAlertIcon: Locator;
    // Per-field "Required" validation messages (field pop-overs)
    readonly usernameRequiredError: Locator;
    readonly passwordRequiredError: Locator;
    readonly allFieldErrors: Locator;
    // Footer copyright text
    readonly footerCopyrightText: Locator;

    constructor(page: Page) {
        this.page = page;
        // Branding / logos
        this.orgeCompanyLogo = page.getByRole('img', {name: "orangehrm-logo"}).nth(1);
                //page.locator('img[alt="orangehrm-logo"]').nth(1);
                //page.locator('//img[@alt="orangehrm-logo"]').nth(1); 
        this.orgehrmLogo = page.getByRole('img', {name: "OrangeHRM HR Software"});
                //page.locator('img[alt="company-branding"]');
                //page.locator('//img[@alt="OrangeHRM HR Software"]');

        // Field labels (text)
        this.loginhead = page.getByRole('heading', {name: "Login"});
                //page.locator('h5:has-text("Login")');
                //page.locator('//h5[text()="Login"]');
        this.usernameLabel = page.locator('label[for="username"]');
        this.passwordLabel = page.locator('label[for="password"]');

        // Field label icons
        this.usernameLabelIcon = page.locator('label[for="username"] svg');
        this.passwordLabelIcon = page.locator('label[for="password"] svg');
        // Input fields
        this.usernameField = page.locator('input[name="username"]');
        this.passwordField = page.locator('input[name="password"]');
        // Actions
        this.loginButton = page.locator('button[type="submit"]');
        this.forgotPasswordLink = page.locator('a:has-text("Forgot your password?")');
        // Invalid-credentials alert banner + warn icon
        this.invalidCredentialsAlert = page.locator('.oxd-alert-content-text');
        this.invalidCredentialsAlertIcon = page.locator('.oxd-alert-content .oxd-icon');
        // Per-field "Required" validation messages — scoped to the input group that owns each field
        this.usernameRequiredError = page.locator(
            '.oxd-input-group:has(input[name="username"]) .oxd-input-field-error-message'
        );
        this.passwordRequiredError = page.locator(
            '.oxd-input-group:has(input[name="password"]) .oxd-input-field-error-message'
        );
        this.allFieldErrors = page.locator('.oxd-input-field-error-message');
        // Footer copyright text
        this.footerCopyrightText = page.locator('p:has-text("OrangeHRM, Inc. All rights reserved.")');
    }
}
