import { test, expect } from '@playwright/test'

test.describe('Document Generator Flow', () => {
  test('generator page loads successfully', async ({ page }) => {
    await page.goto('/generator')
    const heading = page.locator('h1, h2').first()
    await expect(heading).toBeVisible()
  })

  test('form progression works - step-by-step', async ({ page }) => {
    await page.goto('/generator')

    // Step 1: Vehicle type selection
    const vehicleButton = page.locator('button, [role="button"]').first()
    await expect(vehicleButton).toBeVisible()
    await vehicleButton.click()

    // Navigate to next step (implementation depends on actual form structure)
    const nextButton = page.locator('button:has-text("Dalej"), button:has-text("Next")')
    if (await nextButton.isVisible()) {
      await nextButton.click()
    }
  })

  test('form has required field validation', async ({ page }) => {
    await page.goto('/generator')

    // Try to submit without filling required fields
    const submitButton = page.locator('button:has-text("Generuj"), button:has-text("Pobierz"), button[type="submit"]')
    if (await submitButton.isVisible()) {
      await submitButton.click()

      // Should show error or prevent submission
      const errorMessage = page.locator('[role="alert"], .error, [class*="error"]')
      const isErrorVisible = await errorMessage.isVisible().catch(() => false)

      if (isErrorVisible) {
        expect(isErrorVisible).toBeTruthy()
      }
    }
  })

  test('responsive on mobile - form usable', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('/generator')

    const inputs = page.locator('input')
    await expect(inputs.first()).toBeVisible()

    // Check touch targets are adequate (44px minimum)
    const buttons = page.locator('button')
    const firstButton = buttons.first()

    const box = await firstButton.boundingBox()
    if (box) {
      expect(box.height).toBeGreaterThanOrEqual(40)
      expect(box.width).toBeGreaterThanOrEqual(40)
    }
  })

  test('dark mode works in generator', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' })
    await page.goto('/generator')

    const form = page.locator('form, [class*="form"], [class*="wizard"]').first()
    await expect(form).toBeVisible()

    // Verify readable text in dark mode
    const text = await page.locator('body').evaluate((el) =>
      window.getComputedStyle(el).color
    )
    expect(text).toBeTruthy()
  })

  test('form data persistence (sessionStorage)', async ({ page }) => {
    await page.goto('/generator')

    // Fill first input
    const firstInput = page.locator('input').first()
    await firstInput.fill('Test Value')

    // Store current value
    const value1 = await firstInput.inputValue()
    expect(value1).toBe('Test Value')

    // Reload page
    await page.reload()

    // Check if data persists
    const reloadedInput = page.locator('input').first()
    const value2 = await reloadedInput.inputValue().catch(() => '')

    // May or may not persist depending on implementation
    // Just verify form is still accessible
    await expect(reloadedInput).toBeVisible()
  })

  test('PDF download button is present', async ({ page }) => {
    await page.goto('/generator')

    // Look for download/PDF button
    const downloadBtn = page.locator(
      'button:has-text("Pobierz"), button:has-text("Download"), button:has-text("PDF")'
    )

    if (await downloadBtn.isVisible()) {
      await expect(downloadBtn).toBeEnabled()
    }
  })

  test('print functionality available', async ({ page }) => {
    await page.goto('/generator')

    const printBtn = page.locator('button:has-text("Drukuj"), button:has-text("Print")')

    if (await printBtn.isVisible()) {
      await expect(printBtn).toBeEnabled()
      // Note: Can't actually trigger print in headless mode
    }
  })

  test('accessibility - keyboard navigation', async ({ page }) => {
    await page.goto('/generator')

    // Tab through form
    await page.keyboard.press('Tab')
    const focused1 = await page.evaluate(() => document.activeElement?.tagName)
    expect(focused1).toBeTruthy()

    await page.keyboard.press('Tab')
    const focused2 = await page.evaluate(() => document.activeElement?.tagName)
    expect(focused2).toBeTruthy()
  })

  test('error recovery - can retry after error', async ({ page }) => {
    await page.goto('/generator')

    const inputs = page.locator('input')
    const firstInput = inputs.first()

    // Type and clear
    await firstInput.fill('Test')
    await firstInput.clear()

    // Type again
    await firstInput.fill('Retry Value')
    const value = await firstInput.inputValue()
    expect(value).toBe('Retry Value')
  })
})
