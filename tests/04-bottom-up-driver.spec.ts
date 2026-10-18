import { test, expect } from '@playwright/test';
import path from 'path';
import { pathToFileURL } from 'url';

test('Bottom-Up (Driver): ทดสอบผ่าน Driver ควบคุม Component', async ({ page }) => {
  const filePath = path.resolve(__dirname, '../card.html');
  await page.goto(pathToFileURL(filePath).href);

  const button = page.locator('button[data-test="add-to-cart-sauce-labs-backpack"]');
  await expect(button).toBeVisible();
  await button.click();
});