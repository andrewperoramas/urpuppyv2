import { test, expect } from '@playwright/test';
import { takeResponsiveScreenshots } from '../utils/screenshotHelper';



  test('contact us is working', async ({ page }) => {
    const response = await page.goto('https://urpuppy.com/contact-us');
    expect(response?.status()).toBe(200);
       await takeResponsiveScreenshots(page, 'https://urpuppy.com/contact-us', 'contact-us');
});

