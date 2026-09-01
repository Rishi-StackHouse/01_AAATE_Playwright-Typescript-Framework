/*
Purpose of this file:-
  1. Contains smoke tests for the ORGE Login Page
  2. Validates page load, critical elements visibility, and successful login flow
*/

import { test, expect } from '@playwright/test';
import { orgeLoginPage } from '../../../apps/orge/pages/login/orgeLoginPage';
import { orgeCreds } from '../../../config/config';
import { Response } from '@playwright/test';

test.describe('Verify ORGE - Login Page EndtoEnd', () => {
    let loginPage: orgeLoginPage;
    let response: Response | null;

    test.beforeEach(async ({ page }) => {
        loginPage = new orgeLoginPage(page);
        response = await loginPage.openORGE();
    });

    test.afterEach(async () => {
        // Placeholder for cleanup actions
    });

    test('ORGE - Verify valid login lands on dashboard', { tag: '@smoke' }, async () => {

        // Step 1: Launch browser and navigate to the ORGE Webapp, observe the resulting page URL and Title
        await test.step('Step-1: Launch ORGE webapp and verify URL/Title', async () => {

            // Verify: Application opens without any 403 error
            expect.soft(response?.status(), 'Response status should not be 403 Forbidden').not.toBe(403);
            expect.soft(response?.ok(), 'Response should be successful (2xx status)').toBe(200);

            // Verify: Login page URL and Title
            const actualURL = await loginPage.getLoginPageURL();
            const actualTitle = await loginPage.getLoginPageTitle();
            expect.soft(actualURL, 'URL should match expected login page URL').toContain(orgeCreds.web.url!);
            expect.soft(actualTitle, 'Page title should be OrangeHRM').toBe('OrangeHRM');
        });

        // Step 2: Verify the login page has fully loaded with critical elements visibility and default state
        await test.step('Step-2: Verify login page critical elements visibility and default state', async () => { 
            await loginPage.verifyCriticalElements();
        });

        // Step 3: Capture the screenshot of the login page for baseline comparison
        await test.step('Step-3: Capture login page screenshot', async () => {

            // Capture Screenshot
            const screenshot = await loginPage.screenshotOrgeLogin('orge', 'login', 'orge-login-page.png');
            expect.soft(screenshot, 'Screenshot buffer should not be empty').toBeTruthy();
            expect.soft(screenshot.length, 'Screenshot should have content').toBeGreaterThan(0);
        });

        // Step 4: Enter valid credentials, click login and verify dashboard page
        await test.step('Step-4: Login with valid credentials and verify dashboard Page', async () => {

            // Valid Login
            await loginPage.orgeLogin();

            // Verify: Dashboard page URL and Title
            const dashboardURL = await loginPage.getDashboardPageURL();
            const dashboardTitle = await loginPage.getDashboardPageTitle();
            expect.soft(dashboardURL, 'Dashboard URL should contain dashboard path').toContain('/dashboard/index');
            expect.soft(dashboardTitle, 'Dashboard title should be OrangeHRM').toBe('OrangeHRM');

            // Capture screenshot of dashboard page
            const screenshot = await loginPage.screenshotOrgeLogin('orge', 'dashboard', 'orge-dashboard-page.png');
            expect.soft(screenshot, 'Dashboard screenshot should be captured').toBeTruthy();
        });
    });
});
