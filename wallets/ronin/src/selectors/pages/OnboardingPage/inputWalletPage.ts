export default {
  seedPhraseWord: (index: number) =>
    `div[class*="table"] > div:nth-child(${index}) input`,
  confirmSeedPhraseButton:
    'div[class*="split"] > div:first-child > div:last-child > button',
  error: ".matcha-toast",
};
