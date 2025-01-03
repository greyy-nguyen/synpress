import type { Page } from "@playwright/test";
import { openRoninWalletPage } from "../../../utils/openRoninWalletPage";
import { Pages } from "../../../../constants";
import { waitUntilStable } from "../../../utils/waitFor";

const UNLOCK_WALLET_TIMEOUT = 200;

export async function unlockWallet(page: Page, password: string) {
  const unlockWalletPage = await openRoninWalletPage(
    Pages.HOME_PAGE,
    page.context()
  );

  await waitUntilStable(unlockWalletPage);

  const pageUrl = unlockWalletPage.url();

  if (pageUrl.includes("unlock")) {
    await unlockWalletPage.fill("input", password);
    await unlockWalletPage.click("form button");
    await unlockWalletPage.waitForTimeout(UNLOCK_WALLET_TIMEOUT);

    await unlockWalletPage.close();
  }
}
