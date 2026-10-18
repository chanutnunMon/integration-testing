import { test, expect } from '@playwright/test';
import path from 'path';
import { pathToFileURL } from 'url';

test('IT-01: Driver เรียกใช้งาน Stub card.html และตรวจสอบชื่อ-นามสกุลนักศึกษา', async ({ page }) => {
  // ชี้ไปยังไฟล์ card.html ที่อยู่ในระดับโปรเจกต์หลัก
  const filePath = path.resolve(__dirname, '../card.html');
  const fileUrl = pathToFileURL(filePath).href;

  // เปิดหน้า card.html (Stub)
  await page.goto(fileUrl);

  // ตรวจสอบหัวข้อหน้าเว็บ
  await expect(page.locator('h1')).toHaveText('Inventory Page (Stub)');

  // ตรวจสอบว่ามีชื่อและนามสกุลแสดงผลถูกต้อง
  const studentInfo = page.locator('#student-name');
  await expect(studentInfo).toBeVisible();
  await expect(studentInfo).toContainText('ชนัทนันท์ นาคสีสุข');
});