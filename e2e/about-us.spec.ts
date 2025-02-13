import { test, expect } from '@playwright/test';
import { takeResponsiveScreenshots } from '../utils/screenshotHelper';

test('gumagana yung about us', async ({ page }) => {
    await page.goto('https://urpuppy.com/about-us');
  
    await expect(page.getByRole('heading', { name: 'About Urpuppy.com' })).toBeVisible();
    await expect(page.getByText('In addition to our marketplace, we provide a comprehensive breed information guide to help you determine which breed best suits your lifestyle.')).toBeVisible();


    await takeResponsiveScreenshots(page, 'https://urpuppy.com/about-us', 'about-us');
  })
  