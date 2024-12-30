import type { Page } from "@playwright/test";

import Selectors from "../../../../selectors/pages/OnboardingPage";

import { confirmSeedPhrase, createPassword } from "./helpers";

const CONFIRM_PASSCODE_WAIT_TIME = 1000;

export async function importWallet(
  page: Page,
  seedPhrase: string,
  password: string
) {
  await page.locator(Selectors.GetStartedPageSelectors.importWallet).click();
  await page.locator(Selectors.ImportWalletPageSelectors.seedPhrase).click();

  // Secret Recovery Phrase Page
  await confirmSeedPhrase(page, seedPhrase);
  await createPassword(page, password);

  await page.waitForTimeout(CONFIRM_PASSCODE_WAIT_TIME);

  await page.locator(Selectors.FinishPageSelectors.finishButton).click();
}
