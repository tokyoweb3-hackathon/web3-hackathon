const { ethers } = require("hardhat");


const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();
  const EvalAddressContract = await hre.ethers.getContractFactory("EvalAddressContract");
  const EvalAddress = await EvalAddressContract.deploy();
  const EvaluationVisualizationToken = await ethers.getContractFactory("EvaluationVisualizationToken");
  const evaluationVisualizationToken = await EvaluationVisualizationToken.deploy();

  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());
  console.log("Contract deployed to: ", EvalAddress.address);
  console.log("Contract deployed by: ", deployer.address);
  console.log(`Token address: ${evaluationVisualizationToken.address}`);
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
