import { defineWalletSetup } from "@synthetixio/synpress";
import { RoninWallet } from "@synthetixio/synpress/playwright";
import "dotenv/config";

const SEED_PHRASE = process.env.SEED_PHRASE;
const PASSWORD = process.env.WALLET_PASSWORD;

const PAGE_STABLE_LOADED_TIMEOUT = 1000;

export default defineWalletSetup(PASSWORD, async (context, walletPage) => {
  const roninWallet = new RoninWallet(context, walletPage, PASSWORD);

  await roninWallet.importWallet(SEED_PHRASE);

  const page = await context.newPage();

  // Go to a locally hosted MetaMask Test Dapp.
  await page.goto("https://mavis-sdk-examples.vercel.app/tanto-kit");
  await page.waitForTimeout(PAGE_STABLE_LOADED_TIMEOUT);

  // Choose the first provider from injected providers.
  await page.locator('div[class*="ConnectButton"] button').click();

  await roninWallet.connectToDapp(["Account 1"]);
});
