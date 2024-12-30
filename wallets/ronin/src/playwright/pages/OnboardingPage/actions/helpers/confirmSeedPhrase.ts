import type { Page } from "@playwright/test";

import Selectors from "../../../../../selectors/pages/OnboardingPage";

const StepSelectors = Selectors.InputWalletPageSelectors;

export async function confirmSeedPhrase(page: Page, seedPhrase: string) {
  const seedPhraseWords = seedPhrase.split(" ");

  for (const [index, word] of seedPhraseWords.entries()) {
    await page.locator(StepSelectors.seedPhraseWord(index + 1)).fill(word);
  }

  const confirmSeedPhraseButton = page.locator(
    StepSelectors.confirmSeedPhraseButton
  );

  if (await confirmSeedPhraseButton.isDisabled()) {
    throw new Error(
      `[ConfirmSeedPhrase] Invalid seed phrase. Error from Ronin`
    );
  }

  await confirmSeedPhraseButton.click();
}
