/** @type import('hardhat/config').HardhatUserConfig*/

require('dotenv').config()
require('@nomiclabs/hardhat-ethers')
require('@nomiclabs/hardhat-etherscan')

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "goerli",
    networks: {
    hardhat: {},
    goerli: {
      url: process.env.API_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
