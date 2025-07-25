import { test, expect } from '@playwright/test';

test('fluxo login', async ({ page }) => {
  // 1) FAZ LOGIN
  await page.goto('/login');
  await page.fill('input[name="username"]', 'username');
  await page.fill('input[name="password"]', 'senha123');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('/produtos');
});
