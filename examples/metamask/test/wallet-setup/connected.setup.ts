import { defineWalletSetup } from "@synthetixio/synpress";
import { RoninWallet, getExtensionId } from "@synthetixio/synpress/playwright";
import "dotenv/config";

const SEED_PHRASE = process.env.SEED_PHRASE;
const PASSWORD = process.env.WALLET_PASSWORD;

export default defineWalletSetup(PASSWORD, async (context, walletPage) => {
  // This is a workaround for the fact that the MetaMask extension ID changes.
  // This workaround won't be needed in the near future! 😁
  const extensionId = await getExtensionId(context, "Ronin Wallet");

  const roninWallet = new RoninWallet(context, walletPage, PASSWORD);

  await roninWallet.importWallet(SEED_PHRASE);

  const page = await context.newPage();

  // Go to a locally hosted MetaMask Test Dapp.
  await page.goto("http://localhost:9999");

  await page.locator("#connectButton").click();
});
