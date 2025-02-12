import { test, expect } from '@playwright/test';

test('login', async ({ page }) => {
  await page.goto('https://urpuppy.com');

  await expect(page).toHaveTitle(/Home - Laravel/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://urpuppy.com');

  await page.getByRole('link', { name: 'Login' }).click();
  await expect(page.getByRole('heading', { name: 'Let\'s Login' })).toBeVisible();
});
