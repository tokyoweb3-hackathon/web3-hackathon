const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();
  const EvalAddressContract = await hre.ethers.getContractFactory("EvalAddressContract");
  const EvalAddress = await EvalAddressContract.deploy();

  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());
  console.log("Contract deployed to: ", EvalAddress.address);
  console.log("Contract deployed by: ", deployer.address);
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