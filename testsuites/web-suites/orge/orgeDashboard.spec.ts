/*
Purpose: Test spec for OrangeHRM Dashboard page

KEY LEARNING: Use beforeEach to avoid repeating login in every test!
- beforeEach runs BEFORE each test
- Login once, test many times
*/

import { test } from '@playwright/test';
import { orgeDashPage } from '../../../apps/orge/pages/dashboard/orgeDashPage';

test.describe('ORGE Dashboard Tests', () => {

    let dashboardPage: orgeDashPage;

    // This runs BEFORE EACH test - login happens automatically!
    test.beforeEach(async ({ page }) => {
        dashboardPage = new orgeDashPage(page);

        // Single method - clean and simple!
        await dashboardPage.loginOpenDashboard();
    });

    // Test 1: No need to login again!
    test('Verify Quick Launch buttons are visible', async () => {
        await dashboardPage.verifyQuickLaunchButtons();
    });

    // Test 2: Already logged in!
    test('Another dashboard test', async () => {
        // Add your test here - already on dashboard
    });

    // Test 3: Also starts from dashboard!
    test('Yet another test', async () => {
        // Add your test here - already on dashboard
    });

});
