import type { BrowserContext, Page } from "@playwright/test";
import { RoninWalletAbstract } from "../type/RoninWalletAbstract";
import { OnboardingPage } from "./pages";

const RONIN_EXTENSION_ID = "fnjhmkhhmkbjkkabndcnnogagogbneec";

/**
 * Ronin class for interacting with the Ronin Wallet extension in Playwright tests.
 *
 * This class provides methods to perform various operations on the MetaMask extension,
 * such as importing wallets, switching networks, confirming transactions, and more.
 *
 * @class
 * @extends RoninWalletAbstract
 */
export class RoninWallet extends RoninWalletAbstract {
  /**
   * This property can be used to access selectors for the onboarding page.
   *
   * @public
   * @readonly
   */
  readonly onboardingPage: OnboardingPage;

  constructor(
    readonly context: BrowserContext,
    readonly page: Page,
    override readonly password: string
  ) {
    super(password, RONIN_EXTENSION_ID);

    this.onboardingPage = new OnboardingPage(page);
  }

  async importWallet(seedPhrase: string): Promise<void> {
    await this.onboardingPage.importWallet(seedPhrase, this.password);
  }
}
