const { ethers, upgrades } = require("hardhat");
main()

async function main () {
  try {
    const EvaluationVisualizationCoin = await ethers.getContractFactory("EvaluationVisualizationCoin")
    const evaluationVisualizationCoin = await EvaluationVisualizationCoin.deploy()

    console.info(`Token address: ${evaluationVisualizationCoin.address}`)
  } catch (err) {
    console.error(err)
  }
}