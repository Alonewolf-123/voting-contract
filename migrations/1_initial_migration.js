// migrations/NN_deploy_upgradeable_box.js
const { deployProxy } = require('@openzeppelin/truffle-upgrades');

const MyBallotV1 = artifacts.require('MyBallotV1');

module.exports = async function(deployer) {
    const instance = await deployProxy(MyBallotV1, [10], { deployer });
    console.log('Deployed', instance.address);
};