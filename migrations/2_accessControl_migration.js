const basicAccessControl = artifacts.require("AccessControl");

module.exports = function (deployer) {
  deployer.deploy(basicAccessControl);
};
