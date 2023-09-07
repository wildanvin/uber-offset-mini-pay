const contracts = {
  31337: [
    {
      name: "localhost",
      chainId: "31337",
      contracts: {
        YourContract: {
          address: "0x5FbDB2315678afecb367f032d93F642f64180aa3",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "greetingSetter",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "newGreeting",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "premium",
                  type: "bool",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "GreetingChange",
              type: "event",
            },
            {
              inputs: [],
              name: "greeting",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "premium",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_newGreeting",
                  type: "string",
                },
              ],
              name: "setGreeting",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "totalCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "userGreetingCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
        OffsetHelper: {
          address: "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512",
          abi: [
            {
              inputs: [
                {
                  internalType: "string[]",
                  name: "_eligibleTokenSymbols",
                  type: "string[]",
                },
                {
                  internalType: "address[]",
                  name: "_eligibleTokenAddresses",
                  type: "address[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "version",
                  type: "uint8",
                },
              ],
              name: "Initialized",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "poolToken",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address[]",
                  name: "tco2s",
                  type: "address[]",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              name: "Redeemed",
              type: "event",
            },
            {
              stateMutability: "payable",
              type: "fallback",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_poolToken",
                  type: "address",
                },
              ],
              name: "autoOffsetExactInETH",
              outputs: [
                {
                  internalType: "address[]",
                  name: "tco2s",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_fromToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amountToSwap",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_poolToken",
                  type: "address",
                },
              ],
              name: "autoOffsetExactInToken",
              outputs: [
                {
                  internalType: "address[]",
                  name: "tco2s",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_poolToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amountToOffset",
                  type: "uint256",
                },
              ],
              name: "autoOffsetExactOutETH",
              outputs: [
                {
                  internalType: "address[]",
                  name: "tco2s",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_depositedToken",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_poolToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amountToOffset",
                  type: "uint256",
                },
              ],
              name: "autoOffsetExactOutToken",
              outputs: [
                {
                  internalType: "address[]",
                  name: "tco2s",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_poolToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amountToOffset",
                  type: "uint256",
                },
              ],
              name: "autoOffsetPoolToken",
              outputs: [
                {
                  internalType: "address[]",
                  name: "tco2s",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_fromToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "autoRedeem",
              outputs: [
                {
                  internalType: "address[]",
                  name: "tco2s",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_tco2s",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_amounts",
                  type: "uint256[]",
                },
              ],
              name: "autoRetire",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "balances",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fromMaticAmount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
              ],
              name: "calculateExpectedPoolTokenForETH",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_fromToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_fromAmount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
              ],
              name: "calculateExpectedPoolTokenForToken",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_toAmount",
                  type: "uint256",
                },
              ],
              name: "calculateNeededETHAmount",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_fromToken",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_toAmount",
                  type: "uint256",
                },
              ],
              name: "calculateNeededTokenAmount",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "contractRegistryAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_tokenSymbol",
                  type: "string",
                },
              ],
              name: "deleteEligibleTokenAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_erc20Addr",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "deposit",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              name: "eligibleTokenAddresses",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_tokenSymbol",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "_address",
                  type: "address",
                },
              ],
              name: "setEligibleTokenAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_address",
                  type: "address",
                },
              ],
              name: "setToucanContractRegistry",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "sushiRouterAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
              ],
              name: "swapExactInETH",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_fromToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_fromAmount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
              ],
              name: "swapExactInToken",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_toAmount",
                  type: "uint256",
                },
              ],
              name: "swapExactOutETH",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_fromToken",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_toAmount",
                  type: "uint256",
                },
              ],
              name: "swapExactOutToken",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_erc20Addr",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],
  44787: [
    {
      name: "alfajores",
      chainId: "44787",
      contracts: {
        OffsetHelper: {
          address: "0x681fa29fb6AFC8A94F4cF117Ee9138B0645DD8e0",
          abi: [
            {
              inputs: [
                {
                  internalType: "string[]",
                  name: "_eligibleTokenSymbols",
                  type: "string[]",
                },
                {
                  internalType: "address[]",
                  name: "_eligibleTokenAddresses",
                  type: "address[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "version",
                  type: "uint8",
                },
              ],
              name: "Initialized",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "poolToken",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address[]",
                  name: "tco2s",
                  type: "address[]",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              name: "Redeemed",
              type: "event",
            },
            {
              stateMutability: "payable",
              type: "fallback",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_poolToken",
                  type: "address",
                },
              ],
              name: "autoOffsetExactInETH",
              outputs: [
                {
                  internalType: "address[]",
                  name: "tco2s",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_fromToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amountToSwap",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_poolToken",
                  type: "address",
                },
              ],
              name: "autoOffsetExactInToken",
              outputs: [
                {
                  internalType: "address[]",
                  name: "tco2s",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_poolToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amountToOffset",
                  type: "uint256",
                },
              ],
              name: "autoOffsetExactOutETH",
              outputs: [
                {
                  internalType: "address[]",
                  name: "tco2s",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_depositedToken",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_poolToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amountToOffset",
                  type: "uint256",
                },
              ],
              name: "autoOffsetExactOutToken",
              outputs: [
                {
                  internalType: "address[]",
                  name: "tco2s",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_poolToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amountToOffset",
                  type: "uint256",
                },
              ],
              name: "autoOffsetPoolToken",
              outputs: [
                {
                  internalType: "address[]",
                  name: "tco2s",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_fromToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "autoRedeem",
              outputs: [
                {
                  internalType: "address[]",
                  name: "tco2s",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_tco2s",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_amounts",
                  type: "uint256[]",
                },
              ],
              name: "autoRetire",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "balances",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fromMaticAmount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
              ],
              name: "calculateExpectedPoolTokenForETH",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_fromToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_fromAmount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
              ],
              name: "calculateExpectedPoolTokenForToken",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_toAmount",
                  type: "uint256",
                },
              ],
              name: "calculateNeededETHAmount",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_fromToken",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_toAmount",
                  type: "uint256",
                },
              ],
              name: "calculateNeededTokenAmount",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "contractRegistryAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_tokenSymbol",
                  type: "string",
                },
              ],
              name: "deleteEligibleTokenAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_erc20Addr",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "deposit",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              name: "eligibleTokenAddresses",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_tokenSymbol",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "_address",
                  type: "address",
                },
              ],
              name: "setEligibleTokenAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_address",
                  type: "address",
                },
              ],
              name: "setToucanContractRegistry",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "sushiRouterAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
              ],
              name: "swapExactInETH",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_fromToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_fromAmount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
              ],
              name: "swapExactInToken",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_toAmount",
                  type: "uint256",
                },
              ],
              name: "swapExactOutETH",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_fromToken",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_toAmount",
                  type: "uint256",
                },
              ],
              name: "swapExactOutToken",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_erc20Addr",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
        YourContract: {
          address: "0xFE59Ca62aB27C58e64b03c7d617586DE66be6e19",
          abi: [
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "greetingSetter",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "string",
                  name: "newGreeting",
                  type: "string",
                },
                {
                  indexed: false,
                  internalType: "bool",
                  name: "premium",
                  type: "bool",
                },
                {
                  indexed: false,
                  internalType: "uint256",
                  name: "value",
                  type: "uint256",
                },
              ],
              name: "GreetingChange",
              type: "event",
            },
            {
              inputs: [],
              name: "greeting",
              outputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "premium",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_newGreeting",
                  type: "string",
                },
              ],
              name: "setGreeting",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [],
              name: "totalCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "userGreetingCounter",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],
  80001: [
    {
      name: "mumbai",
      chainId: "80001",
      contracts: {
        OffsetHelper: {
          address: "0x69C5988BAAAD17C48546c4feEaAADb5bd5F80f58",
          abi: [
            {
              inputs: [
                {
                  internalType: "string[]",
                  name: "_eligibleTokenSymbols",
                  type: "string[]",
                },
                {
                  internalType: "address[]",
                  name: "_eligibleTokenAddresses",
                  type: "address[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "version",
                  type: "uint8",
                },
              ],
              name: "Initialized",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "poolToken",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address[]",
                  name: "tco2s",
                  type: "address[]",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              name: "Redeemed",
              type: "event",
            },
            {
              stateMutability: "payable",
              type: "fallback",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_poolToken",
                  type: "address",
                },
              ],
              name: "autoOffsetExactInETH",
              outputs: [
                {
                  internalType: "address[]",
                  name: "tco2s",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_fromToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amountToSwap",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_poolToken",
                  type: "address",
                },
              ],
              name: "autoOffsetExactInToken",
              outputs: [
                {
                  internalType: "address[]",
                  name: "tco2s",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_poolToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amountToOffset",
                  type: "uint256",
                },
              ],
              name: "autoOffsetExactOutETH",
              outputs: [
                {
                  internalType: "address[]",
                  name: "tco2s",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_depositedToken",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_poolToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amountToOffset",
                  type: "uint256",
                },
              ],
              name: "autoOffsetExactOutToken",
              outputs: [
                {
                  internalType: "address[]",
                  name: "tco2s",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_poolToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amountToOffset",
                  type: "uint256",
                },
              ],
              name: "autoOffsetPoolToken",
              outputs: [
                {
                  internalType: "address[]",
                  name: "tco2s",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_fromToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "autoRedeem",
              outputs: [
                {
                  internalType: "address[]",
                  name: "tco2s",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_tco2s",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_amounts",
                  type: "uint256[]",
                },
              ],
              name: "autoRetire",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "balances",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fromMaticAmount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
              ],
              name: "calculateExpectedPoolTokenForETH",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_fromToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_fromAmount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
              ],
              name: "calculateExpectedPoolTokenForToken",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_toAmount",
                  type: "uint256",
                },
              ],
              name: "calculateNeededETHAmount",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_fromToken",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_toAmount",
                  type: "uint256",
                },
              ],
              name: "calculateNeededTokenAmount",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "contractRegistryAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_tokenSymbol",
                  type: "string",
                },
              ],
              name: "deleteEligibleTokenAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_erc20Addr",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "deposit",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              name: "eligibleTokenAddresses",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_tokenSymbol",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "_address",
                  type: "address",
                },
              ],
              name: "setEligibleTokenAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_address",
                  type: "address",
                },
              ],
              name: "setToucanContractRegistry",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "sushiRouterAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
              ],
              name: "swapExactInETH",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_fromToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_fromAmount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
              ],
              name: "swapExactInToken",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_toAmount",
                  type: "uint256",
                },
              ],
              name: "swapExactOutETH",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_fromToken",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_toAmount",
                  type: "uint256",
                },
              ],
              name: "swapExactOutToken",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_erc20Addr",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],
  137: [
    {
      name: "polygon",
      chainId: "137",
      contracts: {
        OffsetHelper: {
          address: "0x4E01404D07c5C85D35a2b6A6Ad777D29CC51Eaa1",
          abi: [
            {
              inputs: [
                {
                  internalType: "string[]",
                  name: "_eligibleTokenSymbols",
                  type: "string[]",
                },
                {
                  internalType: "address[]",
                  name: "_eligibleTokenAddresses",
                  type: "address[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "uint8",
                  name: "version",
                  type: "uint8",
                },
              ],
              name: "Initialized",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: true,
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                },
                {
                  indexed: true,
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                {
                  indexed: false,
                  internalType: "address",
                  name: "who",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address",
                  name: "poolToken",
                  type: "address",
                },
                {
                  indexed: false,
                  internalType: "address[]",
                  name: "tco2s",
                  type: "address[]",
                },
                {
                  indexed: false,
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              name: "Redeemed",
              type: "event",
            },
            {
              stateMutability: "payable",
              type: "fallback",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_poolToken",
                  type: "address",
                },
              ],
              name: "autoOffsetExactInETH",
              outputs: [
                {
                  internalType: "address[]",
                  name: "tco2s",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_fromToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amountToSwap",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_poolToken",
                  type: "address",
                },
              ],
              name: "autoOffsetExactInToken",
              outputs: [
                {
                  internalType: "address[]",
                  name: "tco2s",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_poolToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amountToOffset",
                  type: "uint256",
                },
              ],
              name: "autoOffsetExactOutETH",
              outputs: [
                {
                  internalType: "address[]",
                  name: "tco2s",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_depositedToken",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_poolToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amountToOffset",
                  type: "uint256",
                },
              ],
              name: "autoOffsetExactOutToken",
              outputs: [
                {
                  internalType: "address[]",
                  name: "tco2s",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_poolToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amountToOffset",
                  type: "uint256",
                },
              ],
              name: "autoOffsetPoolToken",
              outputs: [
                {
                  internalType: "address[]",
                  name: "tco2s",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_fromToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "autoRedeem",
              outputs: [
                {
                  internalType: "address[]",
                  name: "tco2s",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "amounts",
                  type: "uint256[]",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_tco2s",
                  type: "address[]",
                },
                {
                  internalType: "uint256[]",
                  name: "_amounts",
                  type: "uint256[]",
                },
              ],
              name: "autoRetire",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              name: "balances",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "uint256",
                  name: "_fromMaticAmount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
              ],
              name: "calculateExpectedPoolTokenForETH",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_fromToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_fromAmount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
              ],
              name: "calculateExpectedPoolTokenForToken",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_toAmount",
                  type: "uint256",
                },
              ],
              name: "calculateNeededETHAmount",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_fromToken",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_toAmount",
                  type: "uint256",
                },
              ],
              name: "calculateNeededTokenAmount",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "contractRegistryAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_tokenSymbol",
                  type: "string",
                },
              ],
              name: "deleteEligibleTokenAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_erc20Addr",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "deposit",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "",
                  type: "string",
                },
              ],
              name: "eligibleTokenAddresses",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "string",
                  name: "_tokenSymbol",
                  type: "string",
                },
                {
                  internalType: "address",
                  name: "_address",
                  type: "address",
                },
              ],
              name: "setEligibleTokenAddress",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_address",
                  type: "address",
                },
              ],
              name: "setToucanContractRegistry",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [],
              name: "sushiRouterAddress",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
              ],
              name: "swapExactInETH",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_fromToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_fromAmount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
              ],
              name: "swapExactInToken",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_toAmount",
                  type: "uint256",
                },
              ],
              name: "swapExactOutETH",
              outputs: [],
              stateMutability: "payable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_fromToken",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_toToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_toAmount",
                  type: "uint256",
                },
              ],
              name: "swapExactOutToken",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              name: "transferOwnership",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_erc20Addr",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amount",
                  type: "uint256",
                },
              ],
              name: "withdraw",
              outputs: [],
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              stateMutability: "payable",
              type: "receive",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
