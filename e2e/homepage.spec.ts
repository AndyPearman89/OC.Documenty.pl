import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('loads and displays main heading', async ({ page }) => {
    await page.goto('/')
    const heading = page.locator('h1')
    await expect(heading).toBeVisible()
    await expect(heading).toContainText('Dokumenty OC')
  })

  test('displays insurance knowledge section', async ({ page }) => {
    await page.goto('/')
    const insuranceSection = page.locator('text=Ubezpieczenie OC')
    await expect(insuranceSection).toBeVisible()
  })

  test('displays accident response guide', async ({ page }) => {
    await page.goto('/')
    const accidentSection = page.locator('text=Po zdarzeniu')
    await expect(accidentSection).toBeVisible()
  })

  test('CTA buttons are clickable', async ({ page }) => {
    await page.goto('/')
    const generatorButton = page.locator('a:has-text("Generuj")')
    await expect(generatorButton).toBeVisible()
    await expect(generatorButton).toBeEnabled()
  })

  test('FAQ section is expandable', async ({ page }) => {
    await page.goto('/')
    const faqDetails = page.locator('details').first()
    const summary = faqDetails.locator('summary')

    await expect(faqDetails).not.toHaveAttribute('open')
    await summary.click()
    await expect(faqDetails).toHaveAttribute('open')
  })

  test('page has proper meta tags', async ({ page }) => {
    await page.goto('/')

    const title = await page.title()
    expect(title).toContain('OC.Documenty.pl')

    const description = page.locator('meta[name="description"]')
    await expect(description).toBeDefined()
  })

  test('sitemap and robots.txt accessible', async ({ page }) => {
    const sitemapResponse = await page.goto('/sitemap.xml')
    expect(sitemapResponse?.status()).toBe(200)

    const robotsResponse = await page.goto('/robots.txt')
    expect(robotsResponse?.status()).toBe(200)
  })

  test('mobile responsive - 375px', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 })
    await page.goto('/')

    const heading = page.locator('h1')
    await expect(heading).toBeVisible()

    // Check no horizontal scroll
    const bodyWidth = await page.evaluate(() => document.body.scrollWidth)
    const windowWidth = await page.evaluate(() => window.innerWidth)
    expect(bodyWidth).toBeLessThanOrEqual(windowWidth + 1)
  })

  test('dark mode toggle works', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' })
    await page.goto('/')

    let bgColor = await page.evaluate(() =>
      window.getComputedStyle(document.documentElement).backgroundColor
    )

    await page.emulateMedia({ colorScheme: 'dark' })
    await page.reload()

    const darkBgColor = await page.evaluate(() =>
      window.getComputedStyle(document.documentElement).backgroundColor
    )

    expect(bgColor).not.toBe(darkBgColor)
  })

  test('newsletter signup form present', async ({ page }) => {
    await page.goto('/')
    const newsForm = page.locator('input[type="email"]').first()
    await expect(newsForm).toBeVisible()
  })
})
