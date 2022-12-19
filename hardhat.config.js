require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.17",
  networks: {
      /*
       * localhost: {
       *   url: "http://3.36.151.60:8545"
       * },*/
      hardhat: {
        chainId: 221237, // We set 1337 to make interacting with MetaMask simpler
	accounts: {
              mnemonic: "test test test test test test test test test test test junk",  // default
          path: "m/44'/60'/0'/0",
          initialIndex: 0,
          count: 10,
          passphrase: "test",
        },
      },
  },
  paths: {
      sources: "./contracts",  // default
    cache: "./artifacts/cache",
    artifacts: "./artifacts"
  },
};
