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

  ///**
  // * Adds a new account with the given name. This account is based on the initially imported seed phrase.
  // *
  // * @param accountName - The name of the new account.
  // */
  //abstract addNewAccount(accountName: string): void;
  //
  ///**
  // * Imports a wallet using the given private key.
  // *
  // * @param privateKey - The private key to import.
  // */
  //abstract importWalletFromPrivateKey(privateKey: string): void;
  //
  ///**
  // * Switches to the account with the given name.
  // *
  // * @param accountName - The name of the account to switch to.
  // */
  //abstract switchAccount(accountName: string): void;
  //
  ///**
  // * Retrieves the current account address.
  // */
  //abstract getAccountAddress(): void;
  //
  ///**
  // * Connects to the dapp using the currently selected account.
  // */
  //abstract connectToDapp(accounts?: string[]): void;
  //
  ///**
  // * Locks Ronin Wallet.
  // */
  //abstract lock(): void;
  //
  ///**
  // * Unlocks Ronin Wallet.
  // */
  //abstract unlock(): void;
}
