import { test, expect } from '@playwright/test';

test('Bottom-Up (Real): ทดสอบคอมโพเนนต์ส่วนล่างระบบจริง', async ({ page }) => {
  // ล็อกอินเข้าระบบก่อน เพื่อป้องกันไม่ให้เว็บเด้งกลับหน้า Login
  await page.goto('https://www.saucedemo.com/');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // ตรวจสอบปุ่ม Add to cart ของชิ้นแรก
  const addToCartBtn = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
  await expect(addToCartBtn).toBeVisible();
});