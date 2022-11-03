const { ethers } = require("hardhat");
main()

async function main () {
  try {
    const EvaluationVisualizationToken = await ethers.getContractFactory("EvaluationVisualizationToken")
    const evaluationVisualizationToken = await EvaluationVisualizationToken.deploy()

    console.info(`Token address: ${evaluationVisualizationToken.address}`)
  } catch (err) {
    console.error(err)
  }
}