import GetStartedPageSelectors from "./getStartedPage";
import ImportWalletPageSelectors from "./importWalletPage";
import InputWalletPageSelectors from "./inputWalletPage";
import InputPasscodePageSelectors from "./inputPasscodePage";
import FinishPageSelectors from "./finishPage";

export default {
  // Initial welcome page
  GetStartedPageSelectors,

  // 2nd page: choose method to import wallet
  ImportWalletPageSelectors,

  // 3rd page: input seed phrase or private key
  InputWalletPageSelectors,

  // 4th page: input passcode
  InputPasscodePageSelectors,

  // 5th page: finish
  FinishPageSelectors,
};
