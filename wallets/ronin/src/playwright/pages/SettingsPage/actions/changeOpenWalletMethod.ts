import type { BrowserContext } from "@playwright/test";
import { openRoninWalletPage } from "../../../utils/openRoninWalletPage";
import { Pages } from "../../../../constants";

import Selectors from "../../../../selectors/pages/SettingPage";
import { waitUntilStable } from "../../../utils/waitFor";

const POPUP_CONTENT_LOADED_TIMEOUT = 150;

export async function changeOpenWalletMethod(
  context: BrowserContext,
  method: "sidepanel" | "popup"
) {
  const settingsPage = await openRoninWalletPage(Pages.SETTINGS, context);
  await waitUntilStable(settingsPage);

  const openWalletMethod =
    method === "sidepanel"
      ? Selectors.ChooseLaunchMethod.selectSidePanel
      : Selectors.ChooseLaunchMethod.selectPopup;

  await settingsPage
    .locator(Selectors.ChooseLaunchMethod.openChooseLaunchMethod)
    .click();
  await settingsPage.waitForTimeout(POPUP_CONTENT_LOADED_TIMEOUT);
  await settingsPage.locator(openWalletMethod).click();

  await settingsPage.close();
}
