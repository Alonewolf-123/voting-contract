const { upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const MyBallotV1 = artifacts.require('MyBallotV1');
const MyBallotV2 = artifacts.require('MyBallotV2');

module.exports = async function(deployer) {
    const existing = await MyBallotV1.deployed();
    console.log("Existing", existing.address);
    const instance = await upgradeProxy(existing.address, MyBallotV2, { deployer });
    console.log("Upgraded", instance.address);
};