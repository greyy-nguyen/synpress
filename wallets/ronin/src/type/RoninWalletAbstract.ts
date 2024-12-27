import type { GasSettings } from "./GasSettings";

export abstract class RoninWalletAbstract {
  /**
   * @param password - The password of the Ronin wallet.
   * @param extensionId - The extension ID of the Ronin Wallet extension. Optional if no interaction with the dapp is required.
   *
   * @returns A new instance of the RoninWallet class.
   */
  constructor(
    /**
     * The password of the Ronin wallet.
     */
    readonly password: string,
    /**
     * The extension ID of the RoninWalelt extension. Optional if no interaction with the dapp is required.
     */
    readonly extensionId?: string
  ) {
    this.password = password;
    this.extensionId = extensionId;
  }

  /**
   * Imports a wallet using the given seed phrase.
   *
   * @param seedPhrase - The seed phrase to import.
   */
  abstract importWallet(seedPhrase: string): void;

  /**
   * Adds a new account with the given name. This account is based on the initially imported seed phrase.
   *
   * @param accountName - The name of the new account.
   */
  abstract addNewAccount(accountName: string): void;

  /**
   * Imports a wallet using the given private key.
   *
   * @param privateKey - The private key to import.
   */
  abstract importWalletFromPrivateKey(privateKey: string): void;

  /**
   * Switches to the account with the given name.
   *
   * @param accountName - The name of the account to switch to.
   */
  abstract switchAccount(accountName: string): void;

  /**
   * Retrieves the current account address.
   */
  abstract getAccountAddress(): void;

  /**
   * Switches to the network with the given name.
   *
   * @param networkName - The name of the network to switch to.
   * @param isTestnet - If switch to a test network.
   */
  abstract switchNetwork(networkName: string, isTestnet: boolean): void;

  /**
   * Connects to the dapp using the currently selected account.
   */
  abstract connectToDapp(accounts?: string[]): void;

  /**
   * Locks Ronin Wallet.
   */
  abstract lock(): void;

  /**
   * Unlocks Ronin Wallet.
   */
  abstract unlock(): void;

  /**
   * Confirms a signature request. This function supports all types of commonly used signatures.
   */
  abstract confirmSignature(): void;

  /**
   * Confirms a signature request with potential risk.
   */
  abstract confirmSignatureWithRisk(): void;

  /**
   * Rejects a signature request. This function supports all types of commonly used signatures.
   */
  abstract rejectSignature(): void;

  /**
   * Approves a switch network request.
   */
  abstract approveSwitchNetwork(): void;

  /**
   * Rejects a switch network request.
   */
  abstract rejectSwitchNetwork(): void;

  /**
   * Confirms a transaction request.
   *
   * @param options - The transaction options.
   * @param options.gasSetting - The gas setting to use for the transaction.
   */
  abstract confirmTransaction(options?: { gasSetting?: GasSettings }): void;

  /**
   * Rejects a transaction request.
   */
  abstract rejectTransaction(): void;

  /**
   * Goes back to the home page of Ronin Wallet tab.
   */
  abstract goBackToHomePage(): void;

  /**
   * Opens the settings page.
   */
  abstract openSettings(): void;

  /**
   * Toggles the "Single chain mode" in preference in setting.
   *
   * ::: warning
   * This function requires the correct menu to be already opened.
   * :::
   */
  abstract toggleShowSingleChainMode(): void;

  /**
   * Resets the extension.
   *
   * ::: warning
   * This function requires the correct menu to be already opened.
   * :::
   */
  abstract resetApp(): void;

  abstract addNewToken(): void;

  abstract providePublicEncryptionKey(): void;

  abstract decrypt(): void;

  /// -------------------------------------------
  /// ---------- EXPERIMENTAL FEATURES ----------
  /// -------------------------------------------

  /**
   * Confirms a transaction request and waits for the transaction to be mined.
   * This function utilizes the "Activity" tab of the Ronin Wallet tab.
   *
   * @param options - The transaction options.
   * @param options.gasSetting - The gas setting to use for the transaction.
   *
   * @experimental
   * @group Experimental Methods
   */
  abstract confirmTransactionAndWaitForMining(options?: {
    gasSetting?: GasSettings;
  }): void;

  /**
   * Opens the transaction details.
   *
   * @param txIndex - The index of the transaction in the "Activity" tab. Starts from `0`.
   *
   * @experimental
   * @group Experimental Methods
   */
  abstract openTransactionDetails(txIndex: number): void;

  /**
   * Closes the currently opened transaction details.
   *
   * @experimental
   * @group Experimental Methods
   */
  abstract closeTransactionDetails(): void;
}
