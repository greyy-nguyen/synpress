import { defineWalletSetup } from "@synthetixio/synpress";
import { RoninWallet } from "@synthetixio/synpress/playwright";
import "dotenv/config";

const SEED_PHRASE = process.env.SEED_PHRASE;
const PASSWORD = process.env.WALLET_PASSWORD;

export default defineWalletSetup(PASSWORD, async (context, walletPage) => {
  const roninWallet = new RoninWallet(context, walletPage, PASSWORD);

  console.log("Importing wallet...");
  await roninWallet.importWallet(SEED_PHRASE);
});
