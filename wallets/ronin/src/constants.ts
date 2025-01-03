export const RONIN_EXTENSION_ID = "fnjhmkhhmkbjkkabndcnnogagogbneec";
const PAGE_PREFIX = `chrome-extension://${RONIN_EXTENSION_ID}/src/pages/popup/popup.html#`;

export enum Pages {
  HOME_PAGE = `chrome-extension://${RONIN_EXTENSION_ID}/src/pages/popup/popup.html`,
  CONNECT_DAPP = `${PAGE_PREFIX}/session-connect`,
  SIGN_TX = `${PAGE_PREFIX}/sign-tx`,
  SETTINGS = `${PAGE_PREFIX}/settings`,
}
