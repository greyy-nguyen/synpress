import type { Page } from "@playwright/test";
import Selectors from "../../../selectors/pages/LockPage";
import { unlockWallet } from "./actions/unlockWallet";

export class LockPage {
  static readonly selectors = Selectors;
  readonly selectors = Selectors;

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async unlock(password: string) {
    await unlockWallet(this.page, password);
  }
}
