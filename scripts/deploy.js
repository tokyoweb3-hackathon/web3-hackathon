const { ethers } = require("hardhat");


const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();
  const EvalAddressContract = await hre.ethers.getContractFactory("EvalAddressContract");
  const EvalAddress = await EvalAddressContract.deploy();
  const EvaluationVisualizationTokenContract = await ethers.getContractFactory("EvaluationVisualizationToken");
  const EvaluationVisualizationToken = await EvaluationVisualizationTokenContract.deploy();
  const FaucetContract = await hre.ethers.getContractFactory("Faucet");
  const Faucet = await FaucetContract.deploy(EvalAddress.address, EvaluationVisualizationToken.address);
  
  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());
  console.log("Contract deployed to: ", EvalAddress.address);
  console.log("Contract deployed by: ", deployer.address);
  console.log("Contract deployed Faucet:", Faucet.address)
  console.log(`Contract deployed Token: ${EvaluationVisualizationToken.address}`);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
