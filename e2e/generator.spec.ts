import { test, expect } from '@playwright/test';

test.describe('OC Generator Desktop Flow', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/generator-oc');
  });

  test('Step 1: Owner data validation', async ({ page }) => {
    // Verify step 1 is active
    const step1Badge = page.locator('text=Dane właściciela').first();
    await expect(step1Badge).toBeVisible();

    // Fill owner data
    await page.fill('input[placeholder="Jan Kowalski"]', 'Maria Nowak');
    await page.fill('input[placeholder="79010112345"]', '92031045678');

    // Click next
    await page.click('button:has-text("Dalej")');

    // Should move to step 2
    const step2Badge = page.locator('text=Dane pojazdu').first();
    await expect(step2Badge).toBeVisible();
  });

  test('Step 2: Vehicle data entry', async ({ page }) => {
    // Complete step 1
    await page.fill('input[placeholder="Jan Kowalski"]', 'Maria Nowak');
    await page.fill('input[placeholder="79010112345"]', '92031045678');
    await page.click('button:has-text("Dalej")');

    // Fill vehicle data
    await page.fill('input[placeholder="Toyota"]', 'Volkswagen');
    await page.fill('input[placeholder="Corolla"]', 'Golf');
    await page.fill('input[placeholder="WA 12345"]', 'WI 98765');

    // Click next
    await page.click('button:has-text("Dalej")');

    // Should move to step 3
    const step3Badge = page.locator('text=Ubezpieczenie').first();
    await expect(step3Badge).toBeVisible();
  });

  test('Step 3: Insurance and legal basis selection', async ({ page }) => {
    // Complete steps 1-2
    await page.fill('input[placeholder="Jan Kowalski"]', 'Maria Nowak');
    await page.fill('input[placeholder="79010112345"]', '92031045678');
    await page.click('button:has-text("Dalej")');

    await page.fill('input[placeholder="Toyota"]', 'Volkswagen');
    await page.fill('input[placeholder="Corolla"]', 'Golf');
    await page.fill('input[placeholder="WA 12345"]', 'WI 98765');
    await page.click('button:has-text("Dalej")');

    // Fill insurance data
    await page.selectOption('select', 'PZU');
    await page.fill('input[placeholder="ABC123456789"]', 'POLICY123456');
    await page.fill('input[type="date"]', '2026-12-31');

    // Select legal basis (Art. 28)
    await page.click('text=Koniec okresu ubezpieczenia');

    // Click next
    await page.click('button:has-text("Dalej")');

    // Should move to step 4
    const step4Badge = page.locator('text=Podsumowanie').first();
    await expect(step4Badge).toBeVisible();
  });

  test('PDF download functionality', async ({ page, context }) => {
    // Complete all steps to reach success screen
    await page.fill('input[placeholder="Jan Kowalski"]', 'Maria Nowak');
    await page.fill('input[placeholder="79010112345"]', '92031045678');
    await page.click('button:has-text("Dalej")');

    await page.fill('input[placeholder="Toyota"]', 'Volkswagen');
    await page.fill('input[placeholder="Corolla"]', 'Golf');
    await page.fill('input[placeholder="WA 12345"]', 'WI 98765');
    await page.click('button:has-text("Dalej")');

    await page.selectOption('select', 'PZU');
    await page.fill('input[placeholder="ABC123456789"]', 'POLICY123456');
    await page.fill('input[type="date"]', '2026-12-31');
    await page.click('text=Koniec okresu ubezpieczenia');
    await page.click('button:has-text("Dalej")');

    // Download PDF
    const downloadPromise = context.waitForEvent('download');
    await page.click('button:has-text("Pobierz PDF")');
    const download = await downloadPromise;

    // Verify download
    expect(download.suggestedFilename()).toMatch(/Wypowiedzenie-OC-\d{4}-\d{2}-\d{2}\.pdf/);
  });

  test('Legal basis card selection triggers PDF update', async ({ page }) => {
    // Navigate to step 3
    await page.fill('input[placeholder="Jan Kowalski"]', 'Test User');
    await page.fill('input[placeholder="79010112345"]', '12345678901');
    await page.click('button:has-text("Dalej")');

    await page.fill('input[placeholder="Toyota"]', 'Toyota');
    await page.fill('input[placeholder="Corolla"]', 'Corolla');
    await page.fill('input[placeholder="WA 12345"]', 'WA12345');
    await page.click('button:has-text("Dalej")');

    // Select different legal basis options
    await page.selectOption('select', 'PZU');
    await page.fill('input[placeholder="ABC123456789"]', 'POL123456');
    await page.fill('input[type="date"]', '2026-12-31');

    // Click Art. 28a
    await page.click('text=Podwójne ubezpieczenie');

    // Verify card is selected (red border)
    const art28aCard = page.locator('text=Podwójne ubezpieczenie').first().locator('..');
    await expect(art28aCard).toHaveClass(/selected/);
  });

  test('Session storage persistence', async ({ page }) => {
    // Fill step 1
    await page.fill('input[placeholder="Jan Kowalski"]', 'Maria Nowak');
    await page.fill('input[placeholder="79010112345"]', '92031045678');

    // Reload page
    await page.reload();

    // Data should still be there
    await expect(page.locator('input[placeholder="Jan Kowalski"]')).toHaveValue('Maria Nowak');
    await expect(page.locator('input[placeholder="79010112345"]')).toHaveValue('92031045678');
  });

  test('Mobile responsive layout', async ({ page }) => {
    // Set mobile viewport
    await page.setViewportSize({ width: 375, height: 812 });

    // Page should load and be navigable
    const step1 = page.locator('text=Dane właściciela').first();
    await expect(step1).toBeVisible();

    // Form should be fullwidth on mobile
    const form = page.locator('form');
    const boundingBox = await form.boundingBox();
    expect(boundingBox?.width).toBeLessThanOrEqual(375);
  });
});
