require("@nomicfoundation/hardhat-toolbox");

const {subtask} = require("hardhat/config");
const {TASK_COMPILE_SOLIDITY_GET_SOURCE_PATHS} = require("hardhat/builtin-tasks/task-names")

subtask(TASK_COMPILE_SOLIDITY_GET_SOURCE_PATHS)
  .setAction(async (_, __, runSuper) => {
    const paths = await runSuper();
    const excludeTests = paths.filter(p => !p.endsWith(".t.sol"));
    const excludeScripts = excludeTests.filter(p => !p.endsWith(".s.sol"));
    const excludeExamples = excludeScripts.filter(p => !p.includes("creator-token-standards/src/examples/"));

    return excludeExamples;
  });

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 777
      }
    }
  },
  paths: {
    sources: "./creator-token-standards/src",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};
