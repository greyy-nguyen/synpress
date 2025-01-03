import type { Page } from "@playwright/test";

import Selectors from "../../../../selectors/pages/SessionConnectPage";

// async function selectAccounts(
//   accountsToSelect: string[],
//   accountLocators: Locator[],
//   availableAccountNames: string[]
// ) {
//   for (const account of accountsToSelect) {
//     const accountNameIndex = availableAccountNames.findIndex((name) =>
//       name.startsWith(account)
//     );
//     if (accountNameIndex < 0)
//       throw new Error(`[ConnectToDapp] Account with name ${account} not found`);
//     await accountLocators[accountNameIndex]
//       ?.locator(Selectors.ConnectPage.accountCheckbox)
//       .check();
//   }
// }
//
// async function connectMultipleAccounts(
//   notificationPage: Page,
//   accounts: string[]
// ) {
//   // Wait for the accounts to be loaded as 'all()' doesnt not wait for the results - https://playwright.dev/docs/api/class-locator#locator-all
//   // Additionally disable default account to reuse necessary delay
//   await notificationPage
//     .locator(Selectors.ConnectPage.accountOption)
//     .locator(Selectors.ConnectPage.accountCheckbox)
//     .last()
//     .setChecked(false);
//
//   const accountLocators = await notificationPage
//     .locator(Selectors.ConnectPage.accountOption)
//     .all();
//   const accountNames = await allTextContents(accountLocators);
//
//   await selectAccounts(accounts, accountLocators, accountNames);
// }

async function confirmConnection(notificationPage: Page) {
  // Click `Connect`
  await notificationPage.locator(Selectors.ActionFooter.connectButton).click();
}

export async function connectToDapp(
  notificationPage: Page,
  accounts?: string[]
) {
  console.log("[ConnectToDapp] Connecting to dapp", { accounts });

  await confirmConnection(notificationPage);
}
