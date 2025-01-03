import type { Page } from "@playwright/test";
import Selectors from "../../../selectors/pages/SettingPage";
import { changeOpenWalletMethod } from "./actions/changeOpenWalletMethod";

export class SettingsPage {
  static readonly selectors = Selectors;
  readonly selectors = Selectors;

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async changeOpenWalletMethod(method: "sidepanel" | "popup") {
    await changeOpenWalletMethod(this.page.context(), method);
  }
}
