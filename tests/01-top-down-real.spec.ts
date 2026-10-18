import { test, expect } from '@playwright/test';

test('Top-Down (Real): ตรวจสอบการใช้งานระบบจริง', async ({ page }) => {
  // ตัวอย่างเทสระบบจริง (Top-Down Real) สำหรับ ชนัทนันท์ นาคสีสุข
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  
  await expect(page).toHaveURL(/.*inventory/);
});