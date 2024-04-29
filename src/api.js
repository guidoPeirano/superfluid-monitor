import Web3 from "web3";

// ABI for the SuperToken contract
const superTokenABI = [
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "realtimeBalanceOfNow",
    outputs: [
      { internalType: "int256", name: "availableBalance", type: "int256" },
      { internalType: "uint256", name: "deposit", type: "uint256" },
      { internalType: "uint256", name: "owedDeposit", type: "uint256" },
      { internalType: "uint256", name: "timestamp", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const yieldTokenABI = [
  {
    constant: true,
    inputs: [{ name: "_owner", type: "address" }],
    name: "balanceOf",
    outputs: [{ name: "balance", type: "uint256" }],
    type: "function",
  },
];

// Insert your provider URL (e.g., from Infura or Alchemy)
const providerUrl = "https://ethereum-sepolia-rpc.publicnode.com";
const web3 = new Web3(new Web3.providers.HttpProvider(providerUrl));

// The address of the SuperToken contract
const superTokenContractAddress = "0xae4e6f202eb3ccfb3fb948d1ccfe38b6f2cd2253";
const yieldTokenContractAddress = "0x64138e68126F9473eF05775b36bC3eb96C427F9f";

// Instantiate the contract
const superTokenContract = new web3.eth.Contract(
  superTokenABI,
  superTokenContractAddress
);

const yieldTokenContract = new web3.eth.Contract(
  yieldTokenABI,
  yieldTokenContractAddress
);

// Function to call realtimeBalanceOf on the contract
export const getSuperTokenBalance = async (accountAddress) => {
  try {
    const balance = await superTokenContract.methods
      .realtimeBalanceOfNow(accountAddress)
      .call();

    // Convert balance from Wei to Ether, assuming the token has 18 decimal places
    const availableBalance = web3.utils.fromWei(
      balance.availableBalance,
      "ether"
    );
    const deposit = web3.utils.fromWei(balance.deposit, "ether");
    const owedDeposit = web3.utils.fromWei(balance.owedDeposit, "ether");

    return {
      availableBalance,
      deposit,
      owedDeposit,
    };
  } catch (error) {
    console.error("Error fetching SuperToken balance:", error);
    throw error;
  }
};

// Function to get the ERC20 Yield Token balance
export const getYieldTokenBalance = async (accountAddress) => {
  try {
    const balance = await yieldTokenContract.methods
      .balanceOf(accountAddress)
      .call();

    // Convert balance from Wei to Ether, assuming the token has 18 decimal places
    return web3.utils.fromWei(balance, "ether");
  } catch (error) {
    console.error("Error fetching Yield Token balance:", error);
    throw error;
  }
};
