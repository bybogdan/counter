import { test, expect } from '@playwright/test'

const date = new Date()
const dateString = `${date.getDate()}-${
  date.getMonth() + 1
}-${date.getFullYear()}`

test('Counter component', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  const initialCounter = await page.textContent('#counter-value')
  expect(initialCounter).toBe('Count: 0')

  const incrementButton = page.locator('#increment-btn')
  await incrementButton.click()

  const incrementedCounter = await page.textContent('#counter-value')
  expect(incrementedCounter).toBe('Count: 1')

  await incrementButton.click()
  await incrementButton.click()
  await incrementButton.click()
  await incrementButton.click()

  const incrementedCounter4MoreTimes = await page.textContent('#counter-value')
  expect(incrementedCounter4MoreTimes).toBe('Count: 5')

  const resetButton = page.locator('#reset-btn')
  await resetButton.click()

  const resetedCounter = await page.textContent('#counter-value')
  expect(resetedCounter).toBe('Count: 0')
})

test('Counter component dark mode', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  await page.emulateMedia({ colorScheme: 'dark' })

  const initialCounter = await page.textContent('#counter-value')
  expect(initialCounter).toBe('Count: 0')

  const incrementButton = page.locator('#increment-btn')
  await incrementButton.click()

  const incrementedCounter = await page.textContent('#counter-value')
  expect(incrementedCounter).toBe('Count: 1')

  await incrementButton.click()
  await incrementButton.click()
  await incrementButton.click()
  await incrementButton.click()

  const incrementedCounter4MoreTimes = await page.textContent('#counter-value')
  expect(incrementedCounter4MoreTimes).toBe('Count: 5')

  await page.screenshot({
    path: `tests/playwright/screenshots/screenshot-${dateString}-dark-mode-count-5.png`,
  })

  const resetButton = page.locator('#reset-btn')
  await resetButton.click()

  const resetedCounter = await page.textContent('#counter-value')
  expect(resetedCounter).toBe('Count: 0')
})

test('Meta data', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  const title = await page.title()
  expect(title).toBe('Simple counter')

  const description = await page.getAttribute(
    'meta[name="description"]',
    'content'
  )
  expect(description).toBe(
    'Simple counter app built with Next.js and Tailwind CSS'
  )
})

test('Screenshot', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  await page.screenshot({
    path: `tests/playwright/screenshots/screenshot-${dateString}.png`,
  })
})

test('Dark mode', async ({ page }) => {
  await page.goto('http://localhost:3000/')

  await page.emulateMedia({ colorScheme: 'dark' })

  await page.screenshot({
    path: `tests/playwright/screenshots/screenshot-${dateString}-dark-mode.png`,
  })

  const backgroundColor = await page.evaluate(
    () => getComputedStyle(document.body).backgroundColor
  )
  expect(backgroundColor).toBe('rgb(0, 0, 0)')
})
