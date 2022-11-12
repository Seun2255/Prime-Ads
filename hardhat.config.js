require("@nomiclabs/hardhat-ethers");
const { config } = require("dotenv");
module.exports = {
  defaultNetwork: "matic",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    matic: {
      url: "https://rpc-mumbai.maticvigil.com",
      accounts: [
        "9e7b6927e0c902c0add9c2071382b1837076bbd7b263963092252c0d977d43cd",
      ],
    },
  },
  solidity: {
    version: "0.8.9",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  mocha: {
    timeout: 20000,
  },
};
