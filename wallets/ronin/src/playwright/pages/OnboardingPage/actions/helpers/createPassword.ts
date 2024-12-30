import type { Page } from "@playwright/test";
import Selectors from "../../../../../selectors/pages/OnboardingPage";

const StepSelectors = Selectors.InputPasscodePageSelectors;

export async function createPassword(page: Page, password: string) {
  await page.locator(StepSelectors.inputPasscode).fill(password);
  await page.locator(StepSelectors.reInputPasscode).fill(password);

  const importWalletButton = page.locator(StepSelectors.confirmPasscodeButton);

  if (await importWalletButton.isDisabled()) {
    throw new Error(`[CreatePassword] Invalid password. Error from Ronin`);
  }

  await importWalletButton.click();
}
