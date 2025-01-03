import type { BrowserContext } from "@playwright/test";
import type { Pages } from "../../constants";

export const openRoninWalletPage = async (
  page: Pages,
  context: BrowserContext
) => {
  const walletPage = await context.newPage();
  await walletPage.goto(page);

  return walletPage;
};
