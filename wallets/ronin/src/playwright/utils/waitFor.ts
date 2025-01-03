import type { Page } from "@playwright/test";

export const waitUntilStable = async (page: Page) => {
  await page.waitForLoadState("domcontentloaded");
  await page.waitForLoadState("networkidle");
};
