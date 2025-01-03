import type { BrowserContext, Page } from "@playwright/test";
import { RoninWalletAbstract } from "../type/RoninWalletAbstract";
import {
  LockPage,
  OnboardingPage,
  SessionConnectPage,
  SettingsPage,
} from "./pages";
import { RONIN_EXTENSION_ID } from "../constants";

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

  /**
   * This property can be used to access selectors for the session connect page.
   *
   * @public
   * @readonly
   */
  readonly sessionConnectPage: SessionConnectPage;

  /**
   * This property can be used to access selectors for the setting page.
   *
   * @public
   * @readonly
   */
  readonly settingsPage: SettingsPage;

  /**
   * This property can be used to access selectors for the unlock page.
   *
   * @public
   * @readonly
   */
  readonly lockPage: LockPage;

  constructor(
    readonly context: BrowserContext,
    readonly page: Page,
    override readonly password: string
  ) {
    super(password, RONIN_EXTENSION_ID);

    this.onboardingPage = new OnboardingPage(page);
    this.sessionConnectPage = new SessionConnectPage(page);
    this.settingsPage = new SettingsPage(page);
    this.lockPage = new LockPage(page);
  }

  async importWallet(seedPhrase: string): Promise<void> {
    await this.onboardingPage.importWallet(seedPhrase, this.password);
    await this.lockPage.unlock(this.password);
    await this.settingsPage.changeOpenWalletMethod("popup");
  }

  async connectToDapp(accounts?: string[]): Promise<void> {
    await this.sessionConnectPage.connectToDapp(accounts);
  }
}
