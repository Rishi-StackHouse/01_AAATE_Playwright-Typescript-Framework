/*
Purpose: Test spec for OrangeHRM Dashboard page

KEY LEARNING: How to reuse page classes across tests
- We IMPORT orgeLoginPage from login folder
- We IMPORT orgeDashboardPage from dashboard folder  
- Tests use BOTH page classes - login first, then test dashboard
*/

import { test } from '@playwright/test';
import { orgeLoginPage } from '../../../apps/orge/pages/login/orgeLoginPage';           // Import Login Page
import { orgeDashboardPage } from '../../../apps/orge/pages/dashboard/orgeDashPage';  // Import Dashboard Page

test.describe('ORGE Dashboard Tests', () => {

    test('Verify Quick Launch buttons are visible', async ({ page }) => {
        // Step 1: Create page objects for BOTH pages
        const loginPage = new orgeLoginPage(page);          // Login page object
        const dashboardPage = new orgeDashboardPage(page);  // Dashboard page object

        // Step 2: Use Login Page methods to navigate and login
        await loginPage.openORGE();
        await loginPage.orgeLogin();
        await loginPage.getDashboardPageURL();  // Wait for dashboard URL

        // Step 3: Now use Dashboard Page methods to verify
        await dashboardPage.verifyQuickLaunchButtons();
    });

});
