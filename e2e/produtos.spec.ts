import { test, expect } from '@playwright/test';

test('acesso à listagem de produtos após login', async ({ page }) => {
  // LOGIN
  await page.goto('/login');
  await page.fill('input[name="username"]', 'username');
  await page.fill('input[name="password"]', 'senha123');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('/produtos');

  // CHECA A LISTA DE PRODUTOS
  await expect(page.locator('text=Catálogo de Produtos')).toBeVisible();

  // VERIFICA PELO MENOS 1 CARD DE PRODUTO
  const count = await page.locator('[data-testid="product-card"]').count();
  expect(count).toBeGreaterThan(0);
});
