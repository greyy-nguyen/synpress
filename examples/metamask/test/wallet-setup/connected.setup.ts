import { defineWalletSetup } from "@synthetixio/synpress";
import { RoninWallet } from "@synthetixio/synpress/playwright";
import "dotenv/config";

const SEED_PHRASE = process.env.SEED_PHRASE;
const PASSWORD = process.env.WALLET_PASSWORD;

export default defineWalletSetup(PASSWORD, async (context, walletPage) => {
  const roninWallet = new RoninWallet(context, walletPage, PASSWORD);

  await roninWallet.importWallet(SEED_PHRASE);

  const page = await context.newPage();

  // Go to a locally hosted MetaMask Test Dapp.
  await page.goto("http://localhost:9999");

  // Choose the first provider from injected providers.
  await page.locator(".eip6963-providers #provider:first-child button").click();

  await page.locator("#connectButton").click();

  await roninWallet.connectToDapp(["Account 1"]);
});
