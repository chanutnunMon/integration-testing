import { test, expect } from '@playwright/test';
import path from 'path';
import { pathToFileURL } from 'url';

test('Top-Down (Stub): ทดสอบร่วมกับ Stub card.html', async ({ page }) => {
  const filePath = path.resolve(__dirname, '../card.html');
  await page.goto(pathToFileURL(filePath).href);

  await expect(page.locator('h1')).toHaveText('Inventory Page (Stub)');
  await expect(page.locator('#student-name')).toContainText('ชนัทนันท์ นาคสีสุข');
});