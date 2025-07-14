import { test, expect } from '@playwright/test';

test('logout redireciona para /login', async ({ page }) => {
  // FAZ LOGIN
  await page.goto('/login');
  await page.fill('input[name="username"]', 'username');
  await page.fill('input[name="password"]', 'senha123');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('/produtos');

  // CLICA NO LOG OUT
  await page.getByRole('link', { name: /log out/i }).click();

  // VERIFICA URL FINAL
  await expect(page).toHaveURL('/');
});
