import type { BrowserContext, Page } from "@playwright/test";
import { waitUntilStable } from "./waitFor";
import { Pages } from "../../constants";

export async function getSessionConnectPageAndWaitForLoad(
  context: BrowserContext
) {
  const isNotificationPage = (page: Page) =>
    page.url().includes(Pages.HOME_PAGE);

  // Check if notification page is already open.
  let sessionConnectPage = context.pages().find(isNotificationPage);

  if (!sessionConnectPage) {
    sessionConnectPage = await context.waitForEvent("page", {
      predicate: isNotificationPage,
    });
  }

  // Set pop-up window viewport size to resemble the actual Ronin pop-up window.
  await sessionConnectPage.setViewportSize({
    width: 360,
    height: 592,
  });

  await waitUntilStable(sessionConnectPage as Page);

  return sessionConnectPage;
}
