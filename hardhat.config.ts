import "dotenv/config";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import { } from '@nomiclabs/hardhat-etherscan';
import { HardhatUserConfig, task } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const accounts = async (hre: HardhatRuntimeEnvironment) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
};

task("accounts", "Prints the list of accounts", accounts);

const config: HardhatUserConfig = {
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

export default config;
