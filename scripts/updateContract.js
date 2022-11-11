const asyncfs = require("fs/promises");
const dotenv = require("dotenv");
dotenv.config();

async function updateClientContract() {
  try {
    let contractName = process.env.CONTRACT_NAMES;
    if (!contractName) {
      console.error(
        "\x1b[41m",
        "CONTRACT_NAMES not found in enviroment variables."
      );
      console.error(
        "Consider adding 'CONTRACT_NAMES = contractName1,contractName2,contractName3 ...' to .env file"
      );
      console.log("\x1b[0m");
      return;
    }
    await deleteExistingContractABI();
    contractName.split(",").forEach(async (element) => {
      await asyncfs.copyFile(
        `artifacts/contracts/${element}.sol/${element}.json`,
        `client/contracts/${element}.json`
      );
      console.log(`copied ${element}.sol to client/contracts 👍`);
    });
  } catch (e) {
    console.log(e);

    process.exit(1);
  }
}

async function deleteExistingContractABI() {
  const directory = "client/contracts";
  try {
    await asyncfs.rm(directory, {
      recursive: true,
    });
  } catch {
    console.log("No preExisting complied contracts ⛳");
  }
  try {
    await asyncfs.access("client");
  } catch {
    await asyncfs.mkdir("client");
  }
  try {
    await asyncfs.access("client");
  } catch {
    await asyncfs.mkdir("client");
  }

  await asyncfs.mkdir(directory);
}

updateClientContract();
