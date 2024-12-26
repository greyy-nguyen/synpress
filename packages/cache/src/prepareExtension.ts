import { ensureCacheDirExists } from ".";
import path from "node:path";

export const DEFAULT_METAMASK_VERSION = "11.9.1";
export const EXTENSION_DOWNLOAD_URL = `https://github.com/MetaMask/metamask-extension/releases/download/v${DEFAULT_METAMASK_VERSION}/metamask-chrome-${DEFAULT_METAMASK_VERSION}.zip`;

export const RONIN_FILE_NAME = `ronin-wallet-chrome`;

// NOTE: This function is copied from `wallets/metamask/src/prepareExtension.ts` only TEMPORARILY!
export async function prepareExtension() {
  const cacheDirPath = ensureCacheDirExists();
  const filePath = path.join(cacheDirPath, RONIN_FILE_NAME);
  return filePath;
}
