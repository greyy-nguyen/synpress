import path from "node:path";
import { ensureCacheDirExists } from "@synthetixio/synpress-cache";
import fs from "fs-extra";

export const DEFAULT_METAMASK_VERSION = "11.9.1";
export const EXTENSION_DOWNLOAD_URL = `https://github.com/MetaMask/metamask-extension/releases/download/v${DEFAULT_METAMASK_VERSION}/metamask-chrome-${DEFAULT_METAMASK_VERSION}.zip`;

export const RONIN_FILE_NAME = `ronin-wallet-chrome`;

export async function prepareExtension(forceCache = true) {
  let outputDir = "";
  if (forceCache) {
    outputDir = ensureCacheDirExists();
  } else {
    outputDir =
      process.platform === "win32"
        ? `file:\\\\\\${outputDir}`
        : path.resolve("./", "downloads");

    if (!(await fs.exists(outputDir))) {
      fs.mkdirSync(outputDir);
    }
  }

  const filePath = path.join(outputDir, RONIN_FILE_NAME);

  return filePath;
}
