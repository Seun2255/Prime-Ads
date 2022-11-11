const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deployers account:", deployer.address);
  console.log(
    "Deployers account balance:",
    (await deployer.getBalance()).toString()
  );

  const contract1 = await ethers.getContractFactory("Prime");
  const contract2 = await ethers.getContractFactory("PrimeAds");
  const contract1_ = await contract1.deploy();
  console.log("Prime Token contract addresss:", contract1_.address);

  const contract2_ = await contract2.deploy(contract1_.address);
  console.log("Prime Adds contract addresss:", contract2_.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
