import { Page } from '@playwright/test';

export async function takeResponsiveScreenshots(page: Page, url: string, filenamePrefix: string) {
    const viewports = [
        { width: 1920, height: 1080, name: 'desktop' },
        { width: 1366, height: 768, name: 'laptop' },
        { width: 768, height: 1024, name: 'tablet' },
        { width: 375, height: 812, name: 'mobile' }
    ];

    await page.goto(url);

    for (const viewport of viewports) {
        await page.setViewportSize({ width: viewport.width, height: viewport.height });
        await page.waitForTimeout(1000); // Allow time for layout adjustments
        await page.screenshot({ path: `screenshots/${filenamePrefix}/${viewport.name}.png`, fullPage: true });
    }
}
