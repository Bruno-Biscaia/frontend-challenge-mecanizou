import { test, expect } from '@playwright/test';

test('fluxo login → produtos → logout', async ({ page }) => {
  // 1. Vai para /login
  await page.goto('http://localhost:3000/login');
  await expect(page).toHaveURL(/\/login$/);

  // 2. Preenche usuário e faz login
  await page.fill('input[placeholder="Usuário"]', 'any');
  await page.click('button:has-text("Entrar")');
  await expect(page).toHaveURL(/\/products$/);

  // 3. Verifica se o catálogo carregou
  await expect(page.locator('h2:has-text("Products")')).toBeVisible();
  // ou checa um card
  await expect(page.locator('.group').first()).toBeVisible();

  // 4. Clica em logout
  await page.click('text=Log out');
  await expect(page).toHaveURL(/\/login$/);
});
