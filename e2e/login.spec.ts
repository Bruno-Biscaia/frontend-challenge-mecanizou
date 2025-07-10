// e2e/login.spec.ts
import { test, expect } from '@playwright/test'

test('fluxo login → acesso a /products', async ({ page }) => {
  // 1) FAZ LOGIN
  await page.goto('/login')
  await page.fill('input[name="username"]', 'username')
  await page.fill('input[name="password"]', 'senha123')
  await page.click('button[type="submit"]')

  // 2) Verifica rota /products e acesso
  await page.waitForURL('**/products')
  await expect(page.locator('div.grid')).toBeVisible()


})
