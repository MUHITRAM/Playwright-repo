import { test, expect } from '../fixtures/baseFixtures.js';

test('LoginPage', async ({ loginPage }) => {

    await expect(loginPage).toHaveURL(/dashboard/);

});