const { network } = require("hardhat")
const {
    developmentChain,
    INITIAL_ANSWER,
    DECIMALS,
} = require("../helper-hardhat-config")

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    if (developmentChain.includes(network.name)) {
        log("Local network detected! Deploying mocks...")
        await deploy("MockV3Aggregator", {
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_ANSWER],
        })
        log("Mocks deployed!")
        log("----------------------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]
