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
  42220: [
    {
      name: "celo",
      chainId: "42220",
      contracts: {
        OffsetHelper: {
          address: "0x4242829D15434Fea6606CF995f1BEd68a18C37d1",
          abi: [
            {
              inputs: [
                {
                  internalType: "address[]",
                  name: "_poolAddresses",
                  type: "address[]",
                },
                {
                  internalType: "string[]",
                  name: "_tokenSymbolsForPaths",
                  type: "string[]",
                },
                {
                  internalType: "address[][]",
                  name: "_paths",
                  type: "address[][]",
                },
                {
                  internalType: "address",
                  name: "_dexRouterAddress",
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
                  name: "sender",
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
              inputs: [
                {
                  internalType: "string",
                  name: "_tokenSymbol",
                  type: "string",
                },
                {
                  internalType: "address[]",
                  name: "_path",
                  type: "address[]",
                },
              ],
              name: "addPath",
              outputs: [],
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
              ],
              name: "addPoolToken",
              outputs: [],
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
                  internalType: "address",
                  name: "_poolToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_amountToSwap",
                  type: "uint256",
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
                  name: "_fromToken",
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
                  name: "_poolToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_fromTokenAmount",
                  type: "uint256",
                },
              ],
              name: "calculateExpectedPoolTokenForETH",
              outputs: [
                {
                  internalType: "uint256",
                  name: "amountOut",
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
                  name: "_poolToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_fromAmount",
                  type: "uint256",
                },
              ],
              name: "calculateExpectedPoolTokenForToken",
              outputs: [
                {
                  internalType: "uint256",
                  name: "amountOut",
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
                  name: "_poolToken",
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
                  name: "amountIn",
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
                  name: "_poolToken",
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
                  name: "amountIn",
                  type: "uint256",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [],
              name: "dexRouterAddress",
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
                  name: "",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "eligibleSwapPaths",
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
                  name: "",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "eligibleSwapPathsBySymbol",
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
                  name: "_erc20Address",
                  type: "address",
                },
              ],
              name: "isERC20AddressEligible",
              outputs: [
                {
                  internalType: "address[]",
                  name: "_path",
                  type: "address[]",
                },
              ],
              stateMutability: "view",
              type: "function",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_poolToken",
                  type: "address",
                },
              ],
              name: "isPoolAddressEligible",
              outputs: [
                {
                  internalType: "bool",
                  name: "_isEligible",
                  type: "bool",
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
              inputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "paths",
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
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "poolAddresses",
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
              name: "removePath",
              outputs: [],
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
              ],
              name: "removePoolToken",
              outputs: [],
              stateMutability: "nonpayable",
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
                  internalType: "address",
                  name: "_poolToken",
                  type: "address",
                },
              ],
              name: "swapExactInETH",
              outputs: [
                {
                  internalType: "uint256",
                  name: "amountOut",
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
                  internalType: "address",
                  name: "_poolToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "_fromAmount",
                  type: "uint256",
                },
              ],
              name: "swapExactInToken",
              outputs: [
                {
                  internalType: "uint256",
                  name: "amountOut",
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
                  name: "_poolToken",
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
                  name: "_poolToken",
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
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
              name: "tokenSymbolsForPaths",
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
              stateMutability: "payable",
              type: "receive",
            },
          ],
          transactionHash: "0xc91af7f1e4fc8766e0b94a29646d5506548e6661f0a9c54c81ca33441d70a807",
          receipt: {
            to: null,
            from: "0xD632d38ae05b2B760f5793b57c69246c26Bf7E8D",
            contractAddress: "0x4242829D15434Fea6606CF995f1BEd68a18C37d1",
            transactionIndex: 0,
            gasUsed: "4309443",
            logsBloom:
              "0x00000000000000000000000000000000000000000000000000800000000000000080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000020000000000000000000800000000000000000000000000000000400000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000002000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000010008000000000000000000000000000000",
            blockHash: "0xbb987c28848dc9d0d897128897653efc05b001d453acf2e18a3c68bf9b21e1a0",
            transactionHash: "0xc91af7f1e4fc8766e0b94a29646d5506548e6661f0a9c54c81ca33441d70a807",
            logs: [
              {
                transactionIndex: 0,
                blockNumber: 21984190,
                transactionHash: "0xc91af7f1e4fc8766e0b94a29646d5506548e6661f0a9c54c81ca33441d70a807",
                address: "0x4242829D15434Fea6606CF995f1BEd68a18C37d1",
                topics: [
                  "0x8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0",
                  "0x0000000000000000000000000000000000000000000000000000000000000000",
                  "0x000000000000000000000000d632d38ae05b2b760f5793b57c69246c26bf7e8d",
                ],
                data: "0x",
                logIndex: 0,
                blockHash: "0xbb987c28848dc9d0d897128897653efc05b001d453acf2e18a3c68bf9b21e1a0",
              },
            ],
            blockNumber: 21984190,
            cumulativeGasUsed: "4309443",
            status: 1,
            byzantium: true,
          },
          args: [
            ["0x0CcB0071e8B8B716A2a5998aB4d97b83790873Fe", "0x02De4766C272abc10Bc88c220D214A26960a7e92"],
            ["mcUSD", "cUSD", "CELO", "WETH", "USDC"],
            [
              ["0x918146359264c492bd6934071c6bd31c854edbc3"],
              ["0x765DE816845861e75A25fCA122bb6898B8B1282a", "0x918146359264c492bd6934071c6bd31c854edbc3"],
              [
                "0x471EcE3750Da237f93B8E339c536989b8978a438",
                "0x765DE816845861e75A25fCA122bb6898B8B1282a",
                "0x918146359264c492bd6934071c6bd31c854edbc3",
              ],
              ["0x122013fd7dF1C6F636a5bb8f03108E876548b455", "0x918146359264c492bd6934071c6bd31c854edbc3"],
              [
                "0xef4229c8c3250C675F21BCefa42f58EfbfF6002a",
                "0x765DE816845861e75A25fCA122bb6898B8B1282a",
                "0x918146359264c492bd6934071c6bd31c854edbc3",
              ],
            ],
            "0x7D28570135A2B1930F331c507F65039D4937f66c",
          ],
          numDeployments: 7,
          solcInputHash: "75278ec65526f1e0033cc879f57dc68d",
          metadata:
            '{"compiler":{"version":"0.8.4+commit.c7e474f2"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"address[]","name":"_poolAddresses","type":"address[]"},{"internalType":"string[]","name":"_tokenSymbolsForPaths","type":"string[]"},{"internalType":"address[][]","name":"_paths","type":"address[][]"},{"internalType":"address","name":"_dexRouterAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"address","name":"poolToken","type":"address"},{"indexed":false,"internalType":"address[]","name":"tco2s","type":"address[]"},{"indexed":false,"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"name":"Redeemed","type":"event"},{"inputs":[{"internalType":"string","name":"_tokenSymbol","type":"string"},{"internalType":"address[]","name":"_path","type":"address[]"}],"name":"addPath","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_poolToken","type":"address"}],"name":"addPoolToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_poolToken","type":"address"}],"name":"autoOffsetExactInETH","outputs":[{"internalType":"address[]","name":"tco2s","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_fromToken","type":"address"},{"internalType":"address","name":"_poolToken","type":"address"},{"internalType":"uint256","name":"_amountToSwap","type":"uint256"}],"name":"autoOffsetExactInToken","outputs":[{"internalType":"address[]","name":"tco2s","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_poolToken","type":"address"},{"internalType":"uint256","name":"_amountToOffset","type":"uint256"}],"name":"autoOffsetExactOutETH","outputs":[{"internalType":"address[]","name":"tco2s","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_fromToken","type":"address"},{"internalType":"address","name":"_poolToken","type":"address"},{"internalType":"uint256","name":"_amountToOffset","type":"uint256"}],"name":"autoOffsetExactOutToken","outputs":[{"internalType":"address[]","name":"tco2s","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_poolToken","type":"address"},{"internalType":"uint256","name":"_amountToOffset","type":"uint256"}],"name":"autoOffsetPoolToken","outputs":[{"internalType":"address[]","name":"tco2s","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_fromToken","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"autoRedeem","outputs":[{"internalType":"address[]","name":"tco2s","type":"address[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_tco2s","type":"address[]"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"autoRetire","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_poolToken","type":"address"},{"internalType":"uint256","name":"_fromTokenAmount","type":"uint256"}],"name":"calculateExpectedPoolTokenForETH","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_fromToken","type":"address"},{"internalType":"address","name":"_poolToken","type":"address"},{"internalType":"uint256","name":"_fromAmount","type":"uint256"}],"name":"calculateExpectedPoolTokenForToken","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_poolToken","type":"address"},{"internalType":"uint256","name":"_toAmount","type":"uint256"}],"name":"calculateNeededETHAmount","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_fromToken","type":"address"},{"internalType":"address","name":"_poolToken","type":"address"},{"internalType":"uint256","name":"_toAmount","type":"uint256"}],"name":"calculateNeededTokenAmount","outputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"dexRouterAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"eligibleSwapPaths","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"eligibleSwapPathsBySymbol","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_erc20Address","type":"address"}],"name":"isERC20AddressEligible","outputs":[{"internalType":"address[]","name":"_path","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_poolToken","type":"address"}],"name":"isPoolAddressEligible","outputs":[{"internalType":"bool","name":"_isEligible","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"paths","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolAddresses","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_tokenSymbol","type":"string"}],"name":"removePath","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_poolToken","type":"address"}],"name":"removePoolToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_poolToken","type":"address"}],"name":"swapExactInETH","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_fromToken","type":"address"},{"internalType":"address","name":"_poolToken","type":"address"},{"internalType":"uint256","name":"_fromAmount","type":"uint256"}],"name":"swapExactInToken","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_poolToken","type":"address"},{"internalType":"uint256","name":"_toAmount","type":"uint256"}],"name":"swapExactOutETH","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_fromToken","type":"address"},{"internalType":"address","name":"_poolToken","type":"address"},{"internalType":"uint256","name":"_toAmount","type":"uint256"}],"name":"swapExactOutToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenSymbolsForPaths","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}],"devdoc":{"events":{"Redeemed(address,address,address[],uint256[])":{"params":{"amounts":"An array of the amounts of each TCO2 that were redeemed","poolToken":"The address of the pool token used in the redemption,  e.g., NCT","sender":"The sender of the transaction","tco2s":"An array of the TCO2 addresses that were redeemed"}}},"kind":"dev","methods":{"addPath(string,address[])":{"params":{"_path":"The path of the path to add","_tokenSymbol":"The symbol of the token to add"}},"addPoolToken(address)":{"params":{"_poolToken":"The address of the pool token to add"}},"autoOffsetExactInETH(address)":{"details":"This function is only available on Polygon, not on Celo.","params":{"_poolToken":"The address of the pool token to swap for,  e.g., NCT"},"returns":{"amounts":"An array of the amounts of each TCO2 that were redeemed","tco2s":"An array of the TCO2 addresses that were redeemed"}},"autoOffsetExactInToken(address,address,uint256)":{"details":"When automatically redeeming pool tokens for the oldest ones TCO2s there are no fees and you receive exactly 1 TCO2 token for 1 pool token.","params":{"_amountToSwap":"The amount of ERC20 token to swap into Toucan pool token. Full amount will be used for offsetting.","_fromToken":"The address of the ERC20 token that the user sends (e.g., cUSD, cUSD, USDC, WETH, WMATIC)","_poolToken":"The address of the pool token that the user wants to use,  e.g., NCT"},"returns":{"amounts":"An array of the amounts of each TCO2 that were redeemed","tco2s":"An array of the TCO2 addresses that were redeemed"}},"autoOffsetExactOutETH(address,uint256)":{"details":"If the user sends too much native tokens , the leftover amount will be sent back to the user. This function is only available on Polygon, not on Celo.","params":{"_amountToOffset":"The amount of TCO2 to offset.","_poolToken":"The address of the pool token to swap for,  e.g., NCT"},"returns":{"amounts":"An array of the amounts of each TCO2 that were redeemed","tco2s":"An array of the TCO2 addresses that were redeemed"}},"autoOffsetExactOutToken(address,address,uint256)":{"details":"When automatically redeeming pool tokens for the oldest ones TCO2s there are no fees and you receive exactly 1 TCO2 token for 1 pool token.","params":{"_amountToOffset":"The amount of TCO2 to offset","_fromToken":"The address of the ERC20 token that the user sends (e.g., cUSD, cUSD, USDC, WETH, WMATIC)","_poolToken":"The address of the pool token that the user wants to use,  e.g., NCT"},"returns":{"amounts":"An array of the amounts of each TCO2 that were redeemed","tco2s":"An array of the TCO2 addresses that were redeemed"}},"autoOffsetPoolToken(address,uint256)":{"params":{"_amountToOffset":"The amount of TCO2 to offset.","_poolToken":"The address of the pool token to swap for,  e.g., NCT"},"returns":{"amounts":"An array of the amounts of each TCO2 that were redeemed","tco2s":"An array of the TCO2 addresses that were redeemed"}},"autoRedeem(address,uint256)":{"details":"Needs to be approved on the client side","params":{"_amount":"Amount to redeem","_fromToken":"Could be the address of NCT"},"returns":{"amounts":"An array of the amounts of each TCO2 that were redeemed","tco2s":"An array of the TCO2 addresses that were redeemed"}},"autoRetire(address[],uint256[])":{"params":{"_amounts":"The amounts to retire from each of the corresponding TCO2 addresses","_tco2s":"The addresses of the TCO2s to retire"}},"calculateExpectedPoolTokenForETH(address,uint256)":{"params":{"_fromTokenAmount":"The amount of native tokens  to swap","_poolToken":"The address of the pool token to swap for,  e.g., NCT"},"returns":{"amountOut":"The expected amount of Pool token that can be acquired"}},"calculateExpectedPoolTokenForToken(address,address,uint256)":{"params":{"_fromAmount":"The amount of ERC20 token to swap","_fromToken":"The address of the ERC20 token used for the swap","_poolToken":"The address of the pool token to swap for,  e.g., NCT"},"returns":{"amountOut":"The expected amount of Pool token that can be acquired"}},"calculateNeededETHAmount(address,uint256)":{"params":{"_poolToken":"The address of the pool token to swap for, for example, NCT","_toAmount":"The desired amount of pool token to receive"},"returns":{"amountIn":"The amount of native tokens  required in order to swap for the specified amount of the pool token"}},"calculateNeededTokenAmount(address,address,uint256)":{"params":{"_fromToken":"The address of the ERC20 token used for the swap","_poolToken":"The address of the pool token to swap for,  e.g., NCT","_toAmount":"The desired amount of pool token to receive"},"returns":{"amountIn":"The amount of the ERC20 token required in order to swap for the specified amount of the pool token"}},"constructor":{"details":"See `isEligible()` for a list of tokens that can be used in the contract. These can be modified after deployment by the contract owner using `setEligibleTokenAddress()` and `deleteEligibleTokenAddress()`.","params":{"_paths":"An array of arrays of addresses to describe the path needed to swap form the baseToken to the pool Token to the provided token symbols.","_poolAddresses":"A list of pool token addresses.","_tokenSymbolsForPaths":"An array of symbols of the token the user want to retire carbon credits for"}},"isERC20AddressEligible(address)":{"params":{"_erc20Address":"The address of the ERC20 token that the user sends (e.g., cUSD, cUSD, USDC, WETH, WMATIC)"},"returns":{"_path":"Returns the path of the token to be exchanged"}},"isPoolAddressEligible(address)":{"params":{"_poolToken":"The addresses of the pool token to redeem"},"returns":{"_isEligible":"Returns if token can be redeemed"}},"owner()":{"details":"Returns the address of the current owner."},"removePath(string)":{"params":{"_tokenSymbol":"The symbol of the path to remove"}},"removePoolToken(address)":{"params":{"_poolToken":"The address of the pool token to remove"}},"renounceOwnership()":{"details":"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner."},"swapExactInETH(address)":{"params":{"_poolToken":"The address of the pool token to swap for,  e.g., NCT"},"returns":{"amountOut":"Resulting amount of pool token that got acquired for the swapped native tokens ."}},"swapExactInToken(address,address,uint256)":{"details":"Needs to be approved on the client side.","params":{"_fromAmount":"The amount of ERC20 token to swap  e.g., NCT","_fromToken":"The address of the ERC20 token used for the swap","_poolToken":"The address of the pool token to swap for,"},"returns":{"amountOut":"Resulting amount of pool token that got acquired for the swapped ERC20 tokens."}},"swapExactOutETH(address,uint256)":{"params":{"_poolToken":"The address of the pool token to swap for,  e.g., NCT","_toAmount":"The required amount of the pool token (NCT/BCT)"}},"swapExactOutToken(address,address,uint256)":{"details":"Needs to be approved on the client side","params":{"_fromToken":"The address of the ERC20 token used for the swap","_poolToken":"The address of the pool token to swap for,  e.g., NCT","_toAmount":"The required amount of the pool token (NCT/BCT)"}},"transferOwnership(address)":{"details":"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."}},"title":"Toucan Protocol Offset Helpers","version":1},"userdoc":{"events":{"Redeemed(address,address,address[],uint256[])":{"notice":"Emitted upon successful redemption of TCO2 tokens from a Toucan pool token e.g., NCT."}},"kind":"user","methods":{"addPath(string,address[])":{"notice":"Change or add eligible paths and their addresses."},"addPoolToken(address)":{"notice":"Change or add pool token addresses."},"autoOffsetExactInETH(address)":{"notice":"Retire carbon credits using the oldest TCO2 tokens available from the specified Toucan token pool by sending native tokens e.g., MATIC. All provided native tokens  is consumed for offsetting. Use `calculateExpectedPoolTokenForETH()` to calculate the expected amount of Pool token that can be acquired by swapping the provided amount of native tokens e.g., MATIC. This function: 1. Swaps the Matic sent to the contract for the specified pool token. 2. Redeems the pool token for the oldest TCO2 tokens available. 3. Retires the TCO2 tokens."},"autoOffsetExactInToken(address,address,uint256)":{"notice":"Retire carbon credits using the oldest TCO2 tokens available from the specified Toucan token pool by sending ERC20 tokens (cUSD, USDC, WETH, WMATIC). All provided token is consumed for offsetting. Use `calculateExpectedPoolTokenForToken()` to calculate the expected amount of Pool token that can be acquired by swapping the provided amount of ERC20 token. This function: 1. Swaps the ERC20 token sent to the contract for the specified pool token. 2. Redeems the pool token for the oldest TCO2 tokens available. 3. Retires the TCO2 tokens. Note: The client must approve the ERC20 token that is sent to the contract."},"autoOffsetExactOutETH(address,uint256)":{"notice":"Retire carbon credits using the oldest TCO2 tokens available from the specified Toucan token pool by sending native tokens e.g., MATIC. Use `calculateNeededETHAmount()` first in order to find out how much native tokens are required to retire the specified quantity of TCO2. This function: 1. Swaps the Matic sent to the contract for the specified pool token. 2. Redeems the pool token for the oldest TCO2 tokens available. 3. Retires the TCO2 tokens."},"autoOffsetExactOutToken(address,address,uint256)":{"notice":"Retire carbon credits using the oldest TCO2 tokens available from the specified Toucan token pool by sending ERC20 tokens (cUSD, USDC, WETH, WMATIC). Use `calculateNeededTokenAmount` first in order to find out how much of the ERC20 token is required to retire the specified quantity of TCO2. This function: 1. Swaps the ERC20 token sent to the contract for the specified pool token. 2. Redeems the pool token for the oldest TCO2 tokens available. 3. Retires the TCO2 tokens. Note: The client must approve the ERC20 token that is sent to the contract."},"autoOffsetPoolToken(address,uint256)":{"notice":"Retire carbon credits using the oldest TCO2 tokens available by sending pool tokens,  e.g., NCT. This function: 1. Redeems the pool token for the oldest TCO2 tokens available. 2. Retires the TCO2 tokens. Note: The client must approve the pool token that is sent."},"autoRedeem(address,uint256)":{"notice":"Redeems the specified amount of NCT / BCT for TCO2."},"autoRetire(address[],uint256[])":{"notice":"Retire the specified TCO2 tokens."},"calculateExpectedPoolTokenForETH(address,uint256)":{"notice":"Calculates the expected amount of pool token that can be acquired by swapping the provided amount of native tokens e.g., MATIC."},"calculateExpectedPoolTokenForToken(address,address,uint256)":{"notice":"Calculates the expected amount of pool token that can be acquired by swapping the provided amount of ERC20 token."},"calculateNeededETHAmount(address,uint256)":{"notice":"Return how much native tokens e.g, MATIC is required in order to swap for the desired amount of a pool token,  e.g., NCT."},"calculateNeededTokenAmount(address,address,uint256)":{"notice":"Return how much of the specified ERC20 token is required in order to swap for the desired amount of a pool token, for example,  e.g., NCT."},"constructor":{"notice":"Contract constructor. Should specify arrays of ERC20 symbols and addresses that can used by the contract."},"isERC20AddressEligible(address)":{"notice":"Checks if ERC20 Token is eligible for Offsetting."},"isPoolAddressEligible(address)":{"notice":"Cheks if Pool Token is eligible for Offsetting."},"removePath(string)":{"notice":"Delete eligible tokens stored in the contract."},"removePoolToken(address)":{"notice":"Delete eligible pool token addresses stored in the contract."},"swapExactInETH(address)":{"notice":"Swap native tokens e.g., MATIC for pool tokens (BCT/NCT) on SushiSwap. All provided native tokens  will be swapped."},"swapExactInToken(address,address,uint256)":{"notice":"Swap eligible ERC20 tokens for pool tokens (BCT/NCT) on SushiSwap. All provided ERC20 tokens will be swapped."},"swapExactOutETH(address,uint256)":{"notice":"Swap native tokens e.g., MATIC for pool tokens (BCT/NCT) on SushiSwap. Remaining native tokens  that was not consumed by the swap is returned."},"swapExactOutToken(address,address,uint256)":{"notice":"Swap eligible ERC20 tokens for pool tokens (BCT/NCT) on SushiSwap"}},"notice":"Helper functions that simplify the carbon offsetting (retirement) process. Retiring carbon tokens requires multiple steps and interactions with Toucan Protocol\'s main contracts: 1. Obtain a pool token e.g., NCT (by performing a token    swap on a DEX). 2. Redeem the pool token for a TCO2 token. 3. Retire the TCO2 token. These steps are combined in each of the following \\"auto offset\\" methods implemented in `OffsetHelper` to allow a retirement within one transaction: - `autoOffsetPoolToken()` if the user already owns a Toucan pool   token e.g., NCT, - `autoOffsetExactOutETH()` if the user would like to perform a retirement   using native tokens e.g., MATIC, specifying the exact amount of TCO2s to retire (only on Polygon, not on Celo), - `autoOffsetExactInETH()` if the user would like to perform a retirement   using native tokens, swapping all sent native tokens into TCO2s (only on Polygon, not on Celo), - `autoOffsetExactOutToken()` if the user would like to perform a retirement   using an ERC20 token (cUSD, USDC, WETH or WMATIC), specifying the exact amount   of TCO2s to retire, - `autoOffsetExactInToken()` if the user would like to perform a retirement   using an ERC20 token (cUSD, USDC, WETH or WMATIC), specifying the exact amount   of token to swap into TCO2s. In these methods, \\"auto\\" refers to the fact that these methods use `autoRedeem()` in order to automatically choose a TCO2 token corresponding to the oldest tokenized carbon project in the specfified token pool. There are no fees incurred by the user when using `autoRedeem()`, i.e., the user receives 1 TCO2 token for each pool token (BCT/NCT) redeemed. There are two `view` helper functions `calculateNeededETHAmount()` and `calculateNeededTokenAmount()` that should be called before using `autoOffsetExactOutETH()` and `autoOffsetExactOutToken()`, to determine how much native tokens e.g., MATIC, respectively how much of the ERC20 token must be sent to the `OffsetHelper` contract in order to retire the specified amount of carbon. The two `view` helper functions `calculateExpectedPoolTokenForETH()` and `calculateExpectedPoolTokenForToken()` can be used to calculate the expected amount of TCO2s that will be offset using functions `autoOffsetExactInETH()` and `autoOffsetExactInToken()`.","version":1}},"settings":{"compilationTarget":{"contracts/OffsetHelper.sol":"OffsetHelper"},"evmVersion":"istanbul","libraries":{},"metadata":{"bytecodeHash":"ipfs","useLiteralContent":true},"optimizer":{"enabled":true,"runs":200},"remappings":[]},"sources":{"@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.6.0) (token/ERC20/IERC20.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC20 standard as defined in the EIP.\\n */\\ninterface IERC20Upgradeable {\\n    /**\\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\\n     * another (`to`).\\n     *\\n     * Note that `value` may be zero.\\n     */\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\n\\n    /**\\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\\n     * a call to {approve}. `value` is the new allowance.\\n     */\\n    event Approval(address indexed owner, address indexed spender, uint256 value);\\n\\n    /**\\n     * @dev Returns the amount of tokens in existence.\\n     */\\n    function totalSupply() external view returns (uint256);\\n\\n    /**\\n     * @dev Returns the amount of tokens owned by `account`.\\n     */\\n    function balanceOf(address account) external view returns (uint256);\\n\\n    /**\\n     * @dev Moves `amount` tokens from the caller\'s account to `to`.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transfer(address to, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Returns the remaining number of tokens that `spender` will be\\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\\n     * zero by default.\\n     *\\n     * This value changes when {approve} or {transferFrom} are called.\\n     */\\n    function allowance(address owner, address spender) external view returns (uint256);\\n\\n    /**\\n     * @dev Sets `amount` as the allowance of `spender` over the caller\'s tokens.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\\n     * that someone may use both the old and the new allowance by unfortunate\\n     * transaction ordering. One possible solution to mitigate this race\\n     * condition is to first reduce the spender\'s allowance to 0 and set the\\n     * desired value afterwards:\\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\\n     *\\n     * Emits an {Approval} event.\\n     */\\n    function approve(address spender, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Moves `amount` tokens from `from` to `to` using the\\n     * allowance mechanism. `amount` is then deducted from the caller\'s\\n     * allowance.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transferFrom(\\n        address from,\\n        address to,\\n        uint256 amount\\n    ) external returns (bool);\\n}\\n","keccak256":"0x4e733d3164f73f461eaf9d8087a7ad1ea180bdc8ba0d3d61b0e1ae16d8e63dff","license":"MIT"},"@openzeppelin/contracts/access/Ownable.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.7.0) (access/Ownable.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"../utils/Context.sol\\";\\n\\n/**\\n * @dev Contract module which provides a basic access control mechanism, where\\n * there is an account (an owner) that can be granted exclusive access to\\n * specific functions.\\n *\\n * By default, the owner account will be the one that deploys the contract. This\\n * can later be changed with {transferOwnership}.\\n *\\n * This module is used through inheritance. It will make available the modifier\\n * `onlyOwner`, which can be applied to your functions to restrict their use to\\n * the owner.\\n */\\nabstract contract Ownable is Context {\\n    address private _owner;\\n\\n    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);\\n\\n    /**\\n     * @dev Initializes the contract setting the deployer as the initial owner.\\n     */\\n    constructor() {\\n        _transferOwnership(_msgSender());\\n    }\\n\\n    /**\\n     * @dev Throws if called by any account other than the owner.\\n     */\\n    modifier onlyOwner() {\\n        _checkOwner();\\n        _;\\n    }\\n\\n    /**\\n     * @dev Returns the address of the current owner.\\n     */\\n    function owner() public view virtual returns (address) {\\n        return _owner;\\n    }\\n\\n    /**\\n     * @dev Throws if the sender is not the owner.\\n     */\\n    function _checkOwner() internal view virtual {\\n        require(owner() == _msgSender(), \\"Ownable: caller is not the owner\\");\\n    }\\n\\n    /**\\n     * @dev Leaves the contract without owner. It will not be possible to call\\n     * `onlyOwner` functions anymore. Can only be called by the current owner.\\n     *\\n     * NOTE: Renouncing ownership will leave the contract without an owner,\\n     * thereby removing any functionality that is only available to the owner.\\n     */\\n    function renounceOwnership() public virtual onlyOwner {\\n        _transferOwnership(address(0));\\n    }\\n\\n    /**\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\n     * Can only be called by the current owner.\\n     */\\n    function transferOwnership(address newOwner) public virtual onlyOwner {\\n        require(newOwner != address(0), \\"Ownable: new owner is the zero address\\");\\n        _transferOwnership(newOwner);\\n    }\\n\\n    /**\\n     * @dev Transfers ownership of the contract to a new account (`newOwner`).\\n     * Internal function without access restriction.\\n     */\\n    function _transferOwnership(address newOwner) internal virtual {\\n        address oldOwner = _owner;\\n        _owner = newOwner;\\n        emit OwnershipTransferred(oldOwner, newOwner);\\n    }\\n}\\n","keccak256":"0xa94b34880e3c1b0b931662cb1c09e5dfa6662f31cba80e07c5ee71cd135c9673","license":"MIT"},"@openzeppelin/contracts/token/ERC20/IERC20.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.6.0) (token/ERC20/IERC20.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC20 standard as defined in the EIP.\\n */\\ninterface IERC20 {\\n    /**\\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\\n     * another (`to`).\\n     *\\n     * Note that `value` may be zero.\\n     */\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\n\\n    /**\\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\\n     * a call to {approve}. `value` is the new allowance.\\n     */\\n    event Approval(address indexed owner, address indexed spender, uint256 value);\\n\\n    /**\\n     * @dev Returns the amount of tokens in existence.\\n     */\\n    function totalSupply() external view returns (uint256);\\n\\n    /**\\n     * @dev Returns the amount of tokens owned by `account`.\\n     */\\n    function balanceOf(address account) external view returns (uint256);\\n\\n    /**\\n     * @dev Moves `amount` tokens from the caller\'s account to `to`.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transfer(address to, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Returns the remaining number of tokens that `spender` will be\\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\\n     * zero by default.\\n     *\\n     * This value changes when {approve} or {transferFrom} are called.\\n     */\\n    function allowance(address owner, address spender) external view returns (uint256);\\n\\n    /**\\n     * @dev Sets `amount` as the allowance of `spender` over the caller\'s tokens.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\\n     * that someone may use both the old and the new allowance by unfortunate\\n     * transaction ordering. One possible solution to mitigate this race\\n     * condition is to first reduce the spender\'s allowance to 0 and set the\\n     * desired value afterwards:\\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\\n     *\\n     * Emits an {Approval} event.\\n     */\\n    function approve(address spender, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Moves `amount` tokens from `from` to `to` using the\\n     * allowance mechanism. `amount` is then deducted from the caller\'s\\n     * allowance.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transferFrom(\\n        address from,\\n        address to,\\n        uint256 amount\\n    ) external returns (bool);\\n}\\n","keccak256":"0x9750c6b834f7b43000631af5cc30001c5f547b3ceb3635488f140f60e897ea6b","license":"MIT"},"@openzeppelin/contracts/token/ERC20/extensions/draft-IERC20Permit.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (token/ERC20/extensions/draft-IERC20Permit.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Interface of the ERC20 Permit extension allowing approvals to be made via signatures, as defined in\\n * https://eips.ethereum.org/EIPS/eip-2612[EIP-2612].\\n *\\n * Adds the {permit} method, which can be used to change an account\'s ERC20 allowance (see {IERC20-allowance}) by\\n * presenting a message signed by the account. By not relying on {IERC20-approve}, the token holder account doesn\'t\\n * need to send a transaction, and thus is not required to hold Ether at all.\\n */\\ninterface IERC20Permit {\\n    /**\\n     * @dev Sets `value` as the allowance of `spender` over ``owner``\'s tokens,\\n     * given ``owner``\'s signed approval.\\n     *\\n     * IMPORTANT: The same issues {IERC20-approve} has related to transaction\\n     * ordering also apply here.\\n     *\\n     * Emits an {Approval} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `spender` cannot be the zero address.\\n     * - `deadline` must be a timestamp in the future.\\n     * - `v`, `r` and `s` must be a valid `secp256k1` signature from `owner`\\n     * over the EIP712-formatted function arguments.\\n     * - the signature must use ``owner``\'s current nonce (see {nonces}).\\n     *\\n     * For more information on the signature format, see the\\n     * https://eips.ethereum.org/EIPS/eip-2612#specification[relevant EIP\\n     * section].\\n     */\\n    function permit(\\n        address owner,\\n        address spender,\\n        uint256 value,\\n        uint256 deadline,\\n        uint8 v,\\n        bytes32 r,\\n        bytes32 s\\n    ) external;\\n\\n    /**\\n     * @dev Returns the current nonce for `owner`. This value must be\\n     * included whenever a signature is generated for {permit}.\\n     *\\n     * Every successful call to {permit} increases ``owner``\'s nonce by one. This\\n     * prevents a signature from being used multiple times.\\n     */\\n    function nonces(address owner) external view returns (uint256);\\n\\n    /**\\n     * @dev Returns the domain separator used in the encoding of the signature for {permit}, as defined by {EIP712}.\\n     */\\n    // solhint-disable-next-line func-name-mixedcase\\n    function DOMAIN_SEPARATOR() external view returns (bytes32);\\n}\\n","keccak256":"0xf41ca991f30855bf80ffd11e9347856a517b977f0a6c2d52e6421a99b7840329","license":"MIT"},"@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.8.0) (token/ERC20/utils/SafeERC20.sol)\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"../IERC20.sol\\";\\nimport \\"../extensions/draft-IERC20Permit.sol\\";\\nimport \\"../../../utils/Address.sol\\";\\n\\n/**\\n * @title SafeERC20\\n * @dev Wrappers around ERC20 operations that throw on failure (when the token\\n * contract returns false). Tokens that return no value (and instead revert or\\n * throw on failure) are also supported, non-reverting calls are assumed to be\\n * successful.\\n * To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract,\\n * which allows you to call the safe operations as `token.safeTransfer(...)`, etc.\\n */\\nlibrary SafeERC20 {\\n    using Address for address;\\n\\n    function safeTransfer(\\n        IERC20 token,\\n        address to,\\n        uint256 value\\n    ) internal {\\n        _callOptionalReturn(token, abi.encodeWithSelector(token.transfer.selector, to, value));\\n    }\\n\\n    function safeTransferFrom(\\n        IERC20 token,\\n        address from,\\n        address to,\\n        uint256 value\\n    ) internal {\\n        _callOptionalReturn(token, abi.encodeWithSelector(token.transferFrom.selector, from, to, value));\\n    }\\n\\n    /**\\n     * @dev Deprecated. This function has issues similar to the ones found in\\n     * {IERC20-approve}, and its usage is discouraged.\\n     *\\n     * Whenever possible, use {safeIncreaseAllowance} and\\n     * {safeDecreaseAllowance} instead.\\n     */\\n    function safeApprove(\\n        IERC20 token,\\n        address spender,\\n        uint256 value\\n    ) internal {\\n        // safeApprove should only be called when setting an initial allowance,\\n        // or when resetting it to zero. To increase and decrease it, use\\n        // \'safeIncreaseAllowance\' and \'safeDecreaseAllowance\'\\n        require(\\n            (value == 0) || (token.allowance(address(this), spender) == 0),\\n            \\"SafeERC20: approve from non-zero to non-zero allowance\\"\\n        );\\n        _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, value));\\n    }\\n\\n    function safeIncreaseAllowance(\\n        IERC20 token,\\n        address spender,\\n        uint256 value\\n    ) internal {\\n        uint256 newAllowance = token.allowance(address(this), spender) + value;\\n        _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, newAllowance));\\n    }\\n\\n    function safeDecreaseAllowance(\\n        IERC20 token,\\n        address spender,\\n        uint256 value\\n    ) internal {\\n        unchecked {\\n            uint256 oldAllowance = token.allowance(address(this), spender);\\n            require(oldAllowance >= value, \\"SafeERC20: decreased allowance below zero\\");\\n            uint256 newAllowance = oldAllowance - value;\\n            _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, newAllowance));\\n        }\\n    }\\n\\n    function safePermit(\\n        IERC20Permit token,\\n        address owner,\\n        address spender,\\n        uint256 value,\\n        uint256 deadline,\\n        uint8 v,\\n        bytes32 r,\\n        bytes32 s\\n    ) internal {\\n        uint256 nonceBefore = token.nonces(owner);\\n        token.permit(owner, spender, value, deadline, v, r, s);\\n        uint256 nonceAfter = token.nonces(owner);\\n        require(nonceAfter == nonceBefore + 1, \\"SafeERC20: permit did not succeed\\");\\n    }\\n\\n    /**\\n     * @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\\n     * on the return value: the return value is optional (but if data is returned, it must not be false).\\n     * @param token The token targeted by the call.\\n     * @param data The call data (encoded using abi.encode or one of its variants).\\n     */\\n    function _callOptionalReturn(IERC20 token, bytes memory data) private {\\n        // We need to perform a low level call here, to bypass Solidity\'s return data size checking mechanism, since\\n        // we\'re implementing it ourselves. We use {Address-functionCall} to perform this call, which verifies that\\n        // the target address contains contract code and also asserts for success in the low-level call.\\n\\n        bytes memory returndata = address(token).functionCall(data, \\"SafeERC20: low-level call failed\\");\\n        if (returndata.length > 0) {\\n            // Return data is optional\\n            require(abi.decode(returndata, (bool)), \\"SafeERC20: ERC20 operation did not succeed\\");\\n        }\\n    }\\n}\\n","keccak256":"0x9b72f93be69ca894d8492c244259615c4a742afc8d63720dbc8bb81087d9b238","license":"MIT"},"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.6.0) (token/ERC721/IERC721Receiver.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @title ERC721 token receiver interface\\n * @dev Interface for any contract that wants to support safeTransfers\\n * from ERC721 asset contracts.\\n */\\ninterface IERC721Receiver {\\n    /**\\n     * @dev Whenever an {IERC721} `tokenId` token is transferred to this contract via {IERC721-safeTransferFrom}\\n     * by `operator` from `from`, this function is called.\\n     *\\n     * It must return its Solidity selector to confirm the token transfer.\\n     * If any other value is returned or the interface is not implemented by the recipient, the transfer will be reverted.\\n     *\\n     * The selector can be obtained in Solidity with `IERC721Receiver.onERC721Received.selector`.\\n     */\\n    function onERC721Received(\\n        address operator,\\n        address from,\\n        uint256 tokenId,\\n        bytes calldata data\\n    ) external returns (bytes4);\\n}\\n","keccak256":"0xa82b58eca1ee256be466e536706850163d2ec7821945abd6b4778cfb3bee37da","license":"MIT"},"@openzeppelin/contracts/utils/Address.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts (last updated v4.8.0) (utils/Address.sol)\\n\\npragma solidity ^0.8.1;\\n\\n/**\\n * @dev Collection of functions related to the address type\\n */\\nlibrary Address {\\n    /**\\n     * @dev Returns true if `account` is a contract.\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * It is unsafe to assume that an address for which this function returns\\n     * false is an externally-owned account (EOA) and not a contract.\\n     *\\n     * Among others, `isContract` will return false for the following\\n     * types of addresses:\\n     *\\n     *  - an externally-owned account\\n     *  - a contract in construction\\n     *  - an address where a contract will be created\\n     *  - an address where a contract lived, but was destroyed\\n     * ====\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * You shouldn\'t rely on `isContract` to protect against flash loan attacks!\\n     *\\n     * Preventing calls from contracts is highly discouraged. It breaks composability, breaks support for smart wallets\\n     * like Gnosis Safe, and does not provide security since it can be circumvented by calling from a contract\\n     * constructor.\\n     * ====\\n     */\\n    function isContract(address account) internal view returns (bool) {\\n        // This method relies on extcodesize/address.code.length, which returns 0\\n        // for contracts in construction, since the code is only stored at the end\\n        // of the constructor execution.\\n\\n        return account.code.length > 0;\\n    }\\n\\n    /**\\n     * @dev Replacement for Solidity\'s `transfer`: sends `amount` wei to\\n     * `recipient`, forwarding all available gas and reverting on errors.\\n     *\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\n     * imposed by `transfer`, making them unable to receive funds via\\n     * `transfer`. {sendValue} removes this limitation.\\n     *\\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\n     *\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\n     * taken to not create reentrancy vulnerabilities. Consider using\\n     * {ReentrancyGuard} or the\\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\n     */\\n    function sendValue(address payable recipient, uint256 amount) internal {\\n        require(address(this).balance >= amount, \\"Address: insufficient balance\\");\\n\\n        (bool success, ) = recipient.call{value: amount}(\\"\\");\\n        require(success, \\"Address: unable to send value, recipient may have reverted\\");\\n    }\\n\\n    /**\\n     * @dev Performs a Solidity function call using a low level `call`. A\\n     * plain `call` is an unsafe replacement for a function call: use this\\n     * function instead.\\n     *\\n     * If `target` reverts with a revert reason, it is bubbled up by this\\n     * function (like regular Solidity function calls).\\n     *\\n     * Returns the raw returned data. To convert to the expected return value,\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\n     *\\n     * Requirements:\\n     *\\n     * - `target` must be a contract.\\n     * - calling `target` with `data` must not revert.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0, \\"Address: low-level call failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\\n     * `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but also transferring `value` wei to `target`.\\n     *\\n     * Requirements:\\n     *\\n     * - the calling contract must have an ETH balance of at least `value`.\\n     * - the called Solidity function must be `payable`.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value\\n    ) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, value, \\"Address: low-level call with value failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(\\n        address target,\\n        bytes memory data,\\n        uint256 value,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        require(address(this).balance >= value, \\"Address: insufficient balance for call\\");\\n        (bool success, bytes memory returndata) = target.call{value: value}(data);\\n        return verifyCallResultFromTarget(target, success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\n        return functionStaticCall(target, data, \\"Address: low-level static call failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal view returns (bytes memory) {\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\n        return verifyCallResultFromTarget(target, success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionDelegateCall(target, data, \\"Address: low-level delegate call failed\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(\\n        address target,\\n        bytes memory data,\\n        string memory errorMessage\\n    ) internal returns (bytes memory) {\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\n        return verifyCallResultFromTarget(target, success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Tool to verify that a low level call to smart-contract was successful, and revert (either by bubbling\\n     * the revert reason or using the provided one) in case of unsuccessful call or if target was not a contract.\\n     *\\n     * _Available since v4.8._\\n     */\\n    function verifyCallResultFromTarget(\\n        address target,\\n        bool success,\\n        bytes memory returndata,\\n        string memory errorMessage\\n    ) internal view returns (bytes memory) {\\n        if (success) {\\n            if (returndata.length == 0) {\\n                // only check isContract if the call was successful and the return data is empty\\n                // otherwise we already know that it was a contract\\n                require(isContract(target), \\"Address: call to non-contract\\");\\n            }\\n            return returndata;\\n        } else {\\n            _revert(returndata, errorMessage);\\n        }\\n    }\\n\\n    /**\\n     * @dev Tool to verify that a low level call was successful, and revert if it wasn\'t, either by bubbling the\\n     * revert reason or using the provided one.\\n     *\\n     * _Available since v4.3._\\n     */\\n    function verifyCallResult(\\n        bool success,\\n        bytes memory returndata,\\n        string memory errorMessage\\n    ) internal pure returns (bytes memory) {\\n        if (success) {\\n            return returndata;\\n        } else {\\n            _revert(returndata, errorMessage);\\n        }\\n    }\\n\\n    function _revert(bytes memory returndata, string memory errorMessage) private pure {\\n        // Look for revert reason and bubble it up if present\\n        if (returndata.length > 0) {\\n            // The easiest way to bubble the revert reason is using memory via assembly\\n            /// @solidity memory-safe-assembly\\n            assembly {\\n                let returndata_size := mload(returndata)\\n                revert(add(32, returndata), returndata_size)\\n            }\\n        } else {\\n            revert(errorMessage);\\n        }\\n    }\\n}\\n","keccak256":"0xf96f969e24029d43d0df89e59d365f277021dac62b48e1c1e3ebe0acdd7f1ca1","license":"MIT"},"@openzeppelin/contracts/utils/Context.sol":{"content":"// SPDX-License-Identifier: MIT\\n// OpenZeppelin Contracts v4.4.1 (utils/Context.sol)\\n\\npragma solidity ^0.8.0;\\n\\n/**\\n * @dev Provides information about the current execution context, including the\\n * sender of the transaction and its data. While these are generally available\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\n * manner, since when dealing with meta-transactions the account sending and\\n * paying for execution may not be the actual sender (as far as an application\\n * is concerned).\\n *\\n * This contract is only required for intermediate, library-like contracts.\\n */\\nabstract contract Context {\\n    function _msgSender() internal view virtual returns (address) {\\n        return msg.sender;\\n    }\\n\\n    function _msgData() internal view virtual returns (bytes calldata) {\\n        return msg.data;\\n    }\\n}\\n","keccak256":"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7","license":"MIT"},"@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router01.sol":{"content":"pragma solidity >=0.6.2;\\n\\ninterface IUniswapV2Router01 {\\n    function factory() external pure returns (address);\\n    function WETH() external pure returns (address);\\n\\n    function addLiquidity(\\n        address tokenA,\\n        address tokenB,\\n        uint amountADesired,\\n        uint amountBDesired,\\n        uint amountAMin,\\n        uint amountBMin,\\n        address to,\\n        uint deadline\\n    ) external returns (uint amountA, uint amountB, uint liquidity);\\n    function addLiquidityETH(\\n        address token,\\n        uint amountTokenDesired,\\n        uint amountTokenMin,\\n        uint amountETHMin,\\n        address to,\\n        uint deadline\\n    ) external payable returns (uint amountToken, uint amountETH, uint liquidity);\\n    function removeLiquidity(\\n        address tokenA,\\n        address tokenB,\\n        uint liquidity,\\n        uint amountAMin,\\n        uint amountBMin,\\n        address to,\\n        uint deadline\\n    ) external returns (uint amountA, uint amountB);\\n    function removeLiquidityETH(\\n        address token,\\n        uint liquidity,\\n        uint amountTokenMin,\\n        uint amountETHMin,\\n        address to,\\n        uint deadline\\n    ) external returns (uint amountToken, uint amountETH);\\n    function removeLiquidityWithPermit(\\n        address tokenA,\\n        address tokenB,\\n        uint liquidity,\\n        uint amountAMin,\\n        uint amountBMin,\\n        address to,\\n        uint deadline,\\n        bool approveMax, uint8 v, bytes32 r, bytes32 s\\n    ) external returns (uint amountA, uint amountB);\\n    function removeLiquidityETHWithPermit(\\n        address token,\\n        uint liquidity,\\n        uint amountTokenMin,\\n        uint amountETHMin,\\n        address to,\\n        uint deadline,\\n        bool approveMax, uint8 v, bytes32 r, bytes32 s\\n    ) external returns (uint amountToken, uint amountETH);\\n    function swapExactTokensForTokens(\\n        uint amountIn,\\n        uint amountOutMin,\\n        address[] calldata path,\\n        address to,\\n        uint deadline\\n    ) external returns (uint[] memory amounts);\\n    function swapTokensForExactTokens(\\n        uint amountOut,\\n        uint amountInMax,\\n        address[] calldata path,\\n        address to,\\n        uint deadline\\n    ) external returns (uint[] memory amounts);\\n    function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline)\\n        external\\n        payable\\n        returns (uint[] memory amounts);\\n    function swapTokensForExactETH(uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)\\n        external\\n        returns (uint[] memory amounts);\\n    function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)\\n        external\\n        returns (uint[] memory amounts);\\n    function swapETHForExactTokens(uint amountOut, address[] calldata path, address to, uint deadline)\\n        external\\n        payable\\n        returns (uint[] memory amounts);\\n\\n    function quote(uint amountA, uint reserveA, uint reserveB) external pure returns (uint amountB);\\n    function getAmountOut(uint amountIn, uint reserveIn, uint reserveOut) external pure returns (uint amountOut);\\n    function getAmountIn(uint amountOut, uint reserveIn, uint reserveOut) external pure returns (uint amountIn);\\n    function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts);\\n    function getAmountsIn(uint amountOut, address[] calldata path) external view returns (uint[] memory amounts);\\n}\\n","keccak256":"0x8a3c5c449d4b7cd76513ed6995f4b86e4a86f222c770f8442f5fc128ce29b4d2"},"@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol":{"content":"pragma solidity >=0.6.2;\\n\\nimport \'./IUniswapV2Router01.sol\';\\n\\ninterface IUniswapV2Router02 is IUniswapV2Router01 {\\n    function removeLiquidityETHSupportingFeeOnTransferTokens(\\n        address token,\\n        uint liquidity,\\n        uint amountTokenMin,\\n        uint amountETHMin,\\n        address to,\\n        uint deadline\\n    ) external returns (uint amountETH);\\n    function removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(\\n        address token,\\n        uint liquidity,\\n        uint amountTokenMin,\\n        uint amountETHMin,\\n        address to,\\n        uint deadline,\\n        bool approveMax, uint8 v, bytes32 r, bytes32 s\\n    ) external returns (uint amountETH);\\n\\n    function swapExactTokensForTokensSupportingFeeOnTransferTokens(\\n        uint amountIn,\\n        uint amountOutMin,\\n        address[] calldata path,\\n        address to,\\n        uint deadline\\n    ) external;\\n    function swapExactETHForTokensSupportingFeeOnTransferTokens(\\n        uint amountOutMin,\\n        address[] calldata path,\\n        address to,\\n        uint deadline\\n    ) external payable;\\n    function swapExactTokensForETHSupportingFeeOnTransferTokens(\\n        uint amountIn,\\n        uint amountOutMin,\\n        address[] calldata path,\\n        address to,\\n        uint deadline\\n    ) external;\\n}\\n","keccak256":"0x744e30c133bd0f7ca9e7163433cf6d72f45c6bb1508c2c9c02f1a6db796ae59d"},"contracts/OffsetHelper.sol":{"content":"// SPDX-FileCopyrightText: 2022 Toucan Labs\\n// SPDX-License-Identifier: GPL-3.0\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol\\";\\nimport \\"@uniswap/v2-periphery/contracts/interfaces/IUniswapV2Router02.sol\\";\\nimport \\"./OffsetHelperStorage.sol\\";\\nimport \\"./interfaces/IToucanPoolToken.sol\\";\\nimport \\"./interfaces/IToucanCarbonOffsets.sol\\";\\nimport \\"./interfaces/IToucanContractRegistry.sol\\";\\n\\n/**\\n * @title Toucan Protocol Offset Helpers\\n * @notice Helper functions that simplify the carbon offsetting (retirement)\\n * process.\\n *\\n * Retiring carbon tokens requires multiple steps and interactions with\\n * Toucan Protocol\'s main contracts:\\n * 1. Obtain a pool token e.g., NCT (by performing a token\\n *    swap on a DEX).\\n * 2. Redeem the pool token for a TCO2 token.\\n * 3. Retire the TCO2 token.\\n *\\n * These steps are combined in each of the following \\"auto offset\\" methods\\n * implemented in `OffsetHelper` to allow a retirement within one transaction:\\n * - `autoOffsetPoolToken()` if the user already owns a Toucan pool\\n *   token e.g., NCT,\\n * - `autoOffsetExactOutETH()` if the user would like to perform a retirement\\n *   using native tokens e.g., MATIC, specifying the exact amount of TCO2s to retire (only on Polygon, not on Celo),\\n * - `autoOffsetExactInETH()` if the user would like to perform a retirement\\n *   using native tokens, swapping all sent native tokens into TCO2s (only on Polygon, not on Celo),\\n * - `autoOffsetExactOutToken()` if the user would like to perform a retirement\\n *   using an ERC20 token (cUSD, USDC, WETH or WMATIC), specifying the exact amount\\n *   of TCO2s to retire,\\n * - `autoOffsetExactInToken()` if the user would like to perform a retirement\\n *   using an ERC20 token (cUSD, USDC, WETH or WMATIC), specifying the exact amount\\n *   of token to swap into TCO2s.\\n *\\n * In these methods, \\"auto\\" refers to the fact that these methods use\\n * `autoRedeem()` in order to automatically choose a TCO2 token corresponding\\n * to the oldest tokenized carbon project in the specfified token pool.\\n * There are no fees incurred by the user when using `autoRedeem()`, i.e., the\\n * user receives 1 TCO2 token for each pool token (BCT/NCT) redeemed.\\n *\\n * There are two `view` helper functions `calculateNeededETHAmount()` and\\n * `calculateNeededTokenAmount()` that should be called before using\\n * `autoOffsetExactOutETH()` and `autoOffsetExactOutToken()`, to determine how\\n * much native tokens e.g., MATIC, respectively how much of the ERC20 token must be sent to the\\n * `OffsetHelper` contract in order to retire the specified amount of carbon.\\n *\\n * The two `view` helper functions `calculateExpectedPoolTokenForETH()` and\\n * `calculateExpectedPoolTokenForToken()` can be used to calculate the\\n * expected amount of TCO2s that will be offset using functions\\n * `autoOffsetExactInETH()` and `autoOffsetExactInToken()`.\\n */\\ncontract OffsetHelper is OffsetHelperStorage {\\n    using SafeERC20 for IERC20;\\n    // As Celo allows to pay the gas fees with other tokens than the native token,\\n    // it\'s not possible ot use the swapETH (swap native tokens) functions.\\n    uint256 private constant CELO_MAINNET_CHAINID = 42220;\\n    uint256 private constant ALFAJORES_MAINNET_CHAINID = 44787;\\n\\n    /**\\n     * @notice Emitted upon successful redemption of TCO2 tokens from a Toucan\\n     * pool token e.g., NCT.\\n     *\\n     * @param sender The sender of the transaction\\n     * @param poolToken The address of the pool token used in the\\n     * redemption,  e.g., NCT\\n     * @param tco2s An array of the TCO2 addresses that were redeemed\\n     * @param amounts An array of the amounts of each TCO2 that were redeemed\\n     */\\n    event Redeemed(\\n        address sender,\\n        address poolToken,\\n        address[] tco2s,\\n        uint256[] amounts\\n    );\\n\\n    modifier onlyRedeemable(address _token) {\\n        require(isRedeemable(_token), \\"Token not redeemable.\\");\\n\\n        _;\\n    }\\n\\n    modifier onlySwappable(address _token) {\\n        require(isSwappable(_token), \\"Path doesn\'t yet exist.\\");\\n\\n        _;\\n    }\\n\\n    modifier isNotCelo() {\\n        require(\\n            block.chainid != CELO_MAINNET_CHAINID &&\\n                block.chainid != ALFAJORES_MAINNET_CHAINID,\\n            \\"The function is not available on Celo.\\"\\n        );\\n\\n        _;\\n    }\\n\\n    /**\\n     * @notice Contract constructor. Should specify arrays of ERC20 symbols and\\n     * addresses that can used by the contract.\\n     *\\n     * @dev See `isEligible()` for a list of tokens that can be used in the\\n     * contract. These can be modified after deployment by the contract owner\\n     * using `setEligibleTokenAddress()` and `deleteEligibleTokenAddress()`.\\n     *\\n     * @param _poolAddresses A list of pool token addresses.\\n     * @param _tokenSymbolsForPaths An array of symbols of the token the user want to retire carbon credits for\\n     * @param _paths An array of arrays of addresses to describe the path needed to swap form the baseToken to the pool Token\\n     * to the provided token symbols.\\n     */\\n    constructor(\\n        address[] memory _poolAddresses,\\n        string[] memory _tokenSymbolsForPaths,\\n        address[][] memory _paths,\\n        address _dexRouterAddress\\n    ) {\\n        poolAddresses = _poolAddresses;\\n        tokenSymbolsForPaths = _tokenSymbolsForPaths;\\n        paths = _paths;\\n        dexRouterAddress = _dexRouterAddress;\\n\\n        uint256 eligibleSwapPathsBySymbolLen = _tokenSymbolsForPaths.length;\\n        for (uint256 i; i < eligibleSwapPathsBySymbolLen; i++) {\\n            eligibleSwapPaths[_paths[i][0]] = _paths[i];\\n            eligibleSwapPathsBySymbol[_tokenSymbolsForPaths[i]] = _paths[i];\\n        }\\n    }\\n\\n    // The receive and fallback method are needed to fix the situation where transfering dust native tokens\\n    // in the native tokens  to token swap fails\\n    receive() external payable {}\\n\\n    // ----------------------------------------\\n    //      Public functions\\n    // ----------------------------------------\\n\\n    /**\\n     * @notice Retire carbon credits using the oldest TCO2\\n     * tokens available from the specified Toucan token pool by sending ERC20\\n     * tokens (cUSD, USDC, WETH, WMATIC). Use `calculateNeededTokenAmount` first in\\n     * order to find out how much of the ERC20 token is required to retire the\\n     * specified quantity of TCO2.\\n     *\\n     * This function:\\n     * 1. Swaps the ERC20 token sent to the contract for the specified pool token.\\n     * 2. Redeems the pool token for the oldest TCO2 tokens available.\\n     * 3. Retires the TCO2 tokens.\\n     *\\n     * Note: The client must approve the ERC20 token that is sent to the contract.\\n     *\\n     * @dev When automatically redeeming pool tokens for the oldest ones\\n     * TCO2s there are no fees and you receive exactly 1 TCO2 token for 1 pool\\n     * token.\\n     *\\n     * @param _fromToken The address of the ERC20 token that the user sends\\n     * (e.g., cUSD, cUSD, USDC, WETH, WMATIC)\\n     * @param _poolToken The address of the pool token that the\\n     * user wants to use,  e.g., NCT\\n     * @param _amountToOffset The amount of TCO2 to offset\\n     *\\n     * @return tco2s An array of the TCO2 addresses that were redeemed\\n     * @return amounts An array of the amounts of each TCO2 that were redeemed\\n     */\\n    function autoOffsetExactOutToken(\\n        address _fromToken,\\n        address _poolToken,\\n        uint256 _amountToOffset\\n    ) public returns (address[] memory tco2s, uint256[] memory amounts) {\\n        // swap input token for BCT / NCT\\n        swapExactOutToken(_fromToken, _poolToken, _amountToOffset);\\n\\n        // redeem BCT / NCT for TCO2s\\n        (tco2s, amounts) = autoRedeem(_poolToken, _amountToOffset);\\n\\n        // retire the TCO2s to achieve offset\\n        autoRetire(tco2s, amounts);\\n    }\\n\\n    /**\\n     * @notice Retire carbon credits using the oldest TCO2\\n     * tokens available from the specified Toucan token pool by sending ERC20\\n     * tokens (cUSD, USDC, WETH, WMATIC). All provided token is consumed for\\n     * offsetting. Use `calculateExpectedPoolTokenForToken()` to calculate the expected amount\\n     * of Pool token that can be acquired by swapping the provided amount of ERC20 token.\\n     *\\n     * This function:\\n     * 1. Swaps the ERC20 token sent to the contract for the specified pool token.\\n     * 2. Redeems the pool token for the oldest TCO2 tokens available.\\n     * 3. Retires the TCO2 tokens.\\n     *\\n     * Note: The client must approve the ERC20 token that is sent to the contract.\\n     *\\n     * @dev When automatically redeeming pool tokens for the oldest ones\\n     * TCO2s there are no fees and you receive exactly 1 TCO2 token for 1 pool\\n     * token.\\n     *\\n     * @param _fromToken The address of the ERC20 token that the user sends\\n     * (e.g., cUSD, cUSD, USDC, WETH, WMATIC)\\n     * @param _poolToken The address of the pool token that the\\n     * user wants to use,  e.g., NCT\\n     * @param _amountToSwap The amount of ERC20 token to swap into Toucan pool\\n     * token. Full amount will be used for offsetting.\\n     *\\n     * @return tco2s An array of the TCO2 addresses that were redeemed\\n     * @return amounts An array of the amounts of each TCO2 that were redeemed\\n     */\\n    function autoOffsetExactInToken(\\n        address _fromToken,\\n        address _poolToken,\\n        uint256 _amountToSwap\\n    ) public returns (address[] memory tco2s, uint256[] memory amounts) {\\n        // swap input token for BCT / NCT\\n        uint256 amountToOffset = swapExactInToken(\\n            _fromToken,\\n            _poolToken,\\n            _amountToSwap\\n        );\\n\\n        // redeem BCT / NCT for TCO2s\\n        (tco2s, amounts) = autoRedeem(_poolToken, amountToOffset);\\n\\n        // retire the TCO2s to achieve offset\\n        autoRetire(tco2s, amounts);\\n    }\\n\\n    /**\\n     * @notice Retire carbon credits using the oldest TCO2\\n     * tokens available from the specified Toucan token pool by sending native tokens e.g., MATIC.\\n     * Use `calculateNeededETHAmount()` first in order to find out how much\\n     * native tokens are required to retire the specified quantity of TCO2.\\n     *\\n     * This function:\\n     * 1. Swaps the Matic sent to the contract for the specified pool token.\\n     * 2. Redeems the pool token for the oldest TCO2 tokens available.\\n     * 3. Retires the TCO2 tokens.\\n     *\\n     * @dev If the user sends too much native tokens , the leftover amount will be sent back\\n     * to the user. This function is only available on Polygon, not on Celo.\\n     *\\n     * @param _poolToken The address of the pool token to swap for,\\n     *  e.g., NCT\\n     * @param _amountToOffset The amount of TCO2 to offset.\\n     *\\n     * @return tco2s An array of the TCO2 addresses that were redeemed\\n     * @return amounts An array of the amounts of each TCO2 that were redeemed\\n     */\\n    function autoOffsetExactOutETH(\\n        address _poolToken,\\n        uint256 _amountToOffset\\n    )\\n        public\\n        payable\\n        isNotCelo\\n        returns (address[] memory tco2s, uint256[] memory amounts)\\n    {\\n        // swap native tokens  for BCT / NCT\\n        swapExactOutETH(_poolToken, _amountToOffset);\\n\\n        // redeem BCT / NCT for TCO2s\\n        (tco2s, amounts) = autoRedeem(_poolToken, _amountToOffset);\\n\\n        // retire the TCO2s to achieve offset\\n        autoRetire(tco2s, amounts);\\n    }\\n\\n    /**\\n     * @notice Retire carbon credits using the oldest TCO2\\n     * tokens available from the specified Toucan token pool by sending native tokens e.g., MATIC.\\n     * All provided native tokens  is consumed for offsetting.\\n     * Use `calculateExpectedPoolTokenForETH()` to calculate the expected amount of\\n     * Pool token that can be acquired by swapping the provided amount of native tokens e.g., MATIC.\\n     *\\n     * This function:\\n     * 1. Swaps the Matic sent to the contract for the specified pool token.\\n     * 2. Redeems the pool token for the oldest TCO2 tokens available.\\n     * 3. Retires the TCO2 tokens.\\n     *\\n     * @dev This function is only available on Polygon, not on Celo.\\n     *\\n     * @param _poolToken The address of the pool token to swap for,\\n     *  e.g., NCT\\n     *\\n     * @return tco2s An array of the TCO2 addresses that were redeemed\\n     * @return amounts An array of the amounts of each TCO2 that were redeemed\\n     */\\n    function autoOffsetExactInETH(\\n        address _poolToken\\n    )\\n        public\\n        payable\\n        isNotCelo\\n        returns (address[] memory tco2s, uint256[] memory amounts)\\n    {\\n        // swap native tokens  for BCT / NCT\\n        uint256 amountToOffset = swapExactInETH(_poolToken);\\n\\n        // redeem BCT / NCT for TCO2s\\n        (tco2s, amounts) = autoRedeem(_poolToken, amountToOffset);\\n\\n        // retire the TCO2s to achieve offset\\n        autoRetire(tco2s, amounts);\\n    }\\n\\n    /**\\n     * @notice Retire carbon credits using the oldest TCO2\\n     * tokens available by sending pool tokens,  e.g., NCT.\\n     *\\n     * This function:\\n     * 1. Redeems the pool token for the oldest TCO2 tokens available.\\n     * 2. Retires the TCO2 tokens.\\n     *\\n     * Note: The client must approve the pool token that is sent.\\n     *\\n     * @param _poolToken The address of the pool token to swap for,\\n     *  e.g., NCT\\n     * @param _amountToOffset The amount of TCO2 to offset.\\n     *\\n     * @return tco2s An array of the TCO2 addresses that were redeemed\\n     * @return amounts An array of the amounts of each TCO2 that were redeemed\\n     */\\n    function autoOffsetPoolToken(\\n        address _poolToken,\\n        uint256 _amountToOffset\\n    ) public returns (address[] memory tco2s, uint256[] memory amounts) {\\n        // deposit pool token from user to this contract\\n        IERC20(_poolToken).safeTransferFrom(\\n            msg.sender,\\n            address(this),\\n            _amountToOffset\\n        );\\n\\n        // redeem BCT / NCT for TCO2s\\n        (tco2s, amounts) = autoRedeem(_poolToken, _amountToOffset);\\n\\n        // retire the TCO2s to achieve offset\\n        autoRetire(tco2s, amounts);\\n    }\\n\\n    /**\\n     * @notice Redeems the specified amount of NCT / BCT for TCO2.\\n     * @dev Needs to be approved on the client side\\n     * @param _fromToken Could be the address of NCT\\n     * @param _amount Amount to redeem\\n     * @return tco2s An array of the TCO2 addresses that were redeemed\\n     * @return amounts An array of the amounts of each TCO2 that were redeemed\\n     */\\n    function autoRedeem(\\n        address _fromToken,\\n        uint256 _amount\\n    )\\n        public\\n        onlyRedeemable(_fromToken)\\n        returns (address[] memory tco2s, uint256[] memory amounts)\\n    {\\n        require(\\n            IERC20(_fromToken).balanceOf(address(this)) >= _amount,\\n            \\"Insufficient NCT/BCT balance\\"\\n        );\\n\\n        // instantiate pool token (NCT)\\n        IToucanPoolToken PoolTokenImplementation = IToucanPoolToken(_fromToken);\\n\\n        // auto redeem pool token for TCO2; will transfer automatically picked TCO2 to this contract\\n        (tco2s, amounts) = PoolTokenImplementation.redeemAuto2(_amount);\\n\\n        emit Redeemed(msg.sender, _fromToken, tco2s, amounts);\\n    }\\n\\n    /**\\n     * @notice Retire the specified TCO2 tokens.\\n     * @param _tco2s The addresses of the TCO2s to retire\\n     * @param _amounts The amounts to retire from each of the corresponding\\n     * TCO2 addresses\\n     */\\n    function autoRetire(\\n        address[] memory _tco2s,\\n        uint256[] memory _amounts\\n    ) public {\\n        uint256 tco2sLen = _tco2s.length;\\n        require(tco2sLen != 0, \\"Array empty\\");\\n\\n        require(tco2sLen == _amounts.length, \\"Arrays unequal\\");\\n\\n        for (uint i = 0; i < tco2sLen; i++) {\\n            if (_amounts[i] == 0) {\\n                continue;\\n            }\\n            require(\\n                IERC20(_tco2s[i]).balanceOf(address(this)) >= _amounts[i],\\n                \\"Insufficient TCO2 balance\\"\\n            );\\n\\n            IToucanCarbonOffsets(_tco2s[i]).retire(_amounts[i]);\\n        }\\n    }\\n\\n    /**\\n     * @notice Swap eligible ERC20 tokens for pool tokens (BCT/NCT) on SushiSwap\\n     * @dev Needs to be approved on the client side\\n     * @param _fromToken The address of the ERC20 token used for the swap\\n     * @param _poolToken The address of the pool token to swap for,\\n     *  e.g., NCT\\n     * @param _toAmount The required amount of the pool token (NCT/BCT)\\n     */\\n    function swapExactOutToken(\\n        address _fromToken,\\n        address _poolToken,\\n        uint256 _toAmount\\n    ) public onlySwappable(_fromToken) onlyRedeemable(_poolToken) {\\n        // calculate path & amounts\\n        (\\n            address[] memory path,\\n            uint256[] memory expAmounts\\n        ) = calculateExactOutSwap(_fromToken, _poolToken, _toAmount);\\n        uint256 amountIn = expAmounts[0];\\n\\n        // transfer tokens\\n        IERC20(_fromToken).safeTransferFrom(\\n            msg.sender,\\n            address(this),\\n            amountIn\\n        );\\n\\n        // approve router\\n        IERC20(_fromToken).approve(dexRouterAddress, amountIn);\\n\\n        // swap\\n        uint256[] memory amounts = dexRouter().swapTokensForExactTokens(\\n            _toAmount,\\n            amountIn, // max. input amount\\n            path,\\n            address(this),\\n            block.timestamp\\n        );\\n\\n        // remove remaining approval if less input token was consumed\\n        if (amounts[0] < amountIn) {\\n            IERC20(_fromToken).approve(dexRouterAddress, 0);\\n        }\\n    }\\n\\n    /**\\n     * @notice Swap eligible ERC20 tokens for pool tokens (BCT/NCT) on\\n     * SushiSwap. All provided ERC20 tokens will be swapped.\\n     * @dev Needs to be approved on the client side.\\n     * @param _fromToken The address of the ERC20 token used for the swap\\n     * @param _poolToken The address of the pool token to swap for,\\n     * @param _fromAmount The amount of ERC20 token to swap\\n     *  e.g., NCT\\n     * @return amountOut Resulting amount of pool token that got acquired for the\\n     * swapped ERC20 tokens.\\n     */\\n    function swapExactInToken(\\n        address _fromToken,\\n        address _poolToken,\\n        uint256 _fromAmount\\n    )\\n        public\\n        onlySwappable(_fromToken)\\n        onlyRedeemable(_poolToken)\\n        returns (uint256 amountOut)\\n    {\\n        // calculate path & amounts\\n        address[] memory path = generatePath(_fromToken, _poolToken);\\n\\n        uint256 len = path.length;\\n\\n        // transfer tokens\\n        IERC20(_fromToken).safeTransferFrom(\\n            msg.sender,\\n            address(this),\\n            _fromAmount\\n        );\\n\\n        // approve router\\n        IERC20(_fromToken).safeApprove(dexRouterAddress, _fromAmount);\\n\\n        // swap\\n        uint256[] memory amounts = dexRouter().swapExactTokensForTokens(\\n            _fromAmount,\\n            0, // min. output amount\\n            path,\\n            address(this),\\n            block.timestamp\\n        );\\n        amountOut = amounts[len - 1];\\n    }\\n\\n    /**\\n     * @notice Swap native tokens e.g., MATIC for pool tokens (BCT/NCT) on SushiSwap.\\n     * Remaining native tokens  that was not consumed by the swap is returned.\\n     * @param _poolToken The address of the pool token to swap for,\\n     *  e.g., NCT\\n     * @param _toAmount The required amount of the pool token (NCT/BCT)\\n     */\\n    function swapExactOutETH(\\n        address _poolToken,\\n        uint256 _toAmount\\n    ) public payable isNotCelo onlyRedeemable(_poolToken) {\\n        // create path & amounts\\n        // wrap the native token\\n        address fromToken = eligibleSwapPathsBySymbol[\\"WMATIC\\"][0];\\n        address[] memory path = generatePath(fromToken, _poolToken);\\n\\n        // swap\\n        uint256[] memory amounts = dexRouter().swapETHForExactTokens{\\n            value: msg.value\\n        }(_toAmount, path, address(this), block.timestamp);\\n\\n        // send surplus back\\n        if (msg.value > amounts[0]) {\\n            uint256 leftoverETH = msg.value - amounts[0];\\n            (bool success, ) = msg.sender.call{value: leftoverETH}(\\n                new bytes(0)\\n            );\\n\\n            require(success, \\"Failed to send surplus back\\");\\n        }\\n    }\\n\\n    /**\\n     * @notice Swap native tokens e.g., MATIC for pool tokens (BCT/NCT) on SushiSwap. All\\n     * provided native tokens  will be swapped.\\n     * @param _poolToken The address of the pool token to swap for,\\n     *  e.g., NCT\\n     * @return amountOut Resulting amount of pool token that got acquired for the\\n     * swapped native tokens .\\n     */\\n    function swapExactInETH(\\n        address _poolToken\\n    )\\n        public\\n        payable\\n        isNotCelo\\n        onlyRedeemable(_poolToken)\\n        returns (uint256 amountOut)\\n    {\\n        // create path & amounts\\n        uint256 fromAmount = msg.value;\\n        // wrap the native token\\n        address fromToken = eligibleSwapPathsBySymbol[\\"WMATIC\\"][0];\\n        address[] memory path = generatePath(fromToken, _poolToken);\\n\\n        uint256 len = path.length;\\n\\n        // swap\\n        uint256[] memory amounts = dexRouter().swapExactETHForTokens{\\n            value: fromAmount\\n        }(0, path, address(this), block.timestamp);\\n        amountOut = amounts[len - 1];\\n    }\\n\\n    // ----------------------------------------\\n    //      Public view functions\\n    // ----------------------------------------\\n\\n    /**\\n     * @notice Return how much of the specified ERC20 token is required in\\n     * order to swap for the desired amount of a pool token, for\\n     * example,  e.g., NCT.\\n     *\\n     * @param _fromToken The address of the ERC20 token used for the swap\\n     * @param _poolToken The address of the pool token to swap for,\\n     *  e.g., NCT\\n     * @param _toAmount The desired amount of pool token to receive\\n     * @return amountIn The amount of the ERC20 token required in order to\\n     * swap for the specified amount of the pool token\\n     */\\n    function calculateNeededTokenAmount(\\n        address _fromToken,\\n        address _poolToken,\\n        uint256 _toAmount\\n    )\\n        public\\n        view\\n        onlySwappable(_fromToken)\\n        onlyRedeemable(_poolToken)\\n        returns (uint256 amountIn)\\n    {\\n        (, uint256[] memory amounts) = calculateExactOutSwap(\\n            _fromToken,\\n            _poolToken,\\n            _toAmount\\n        );\\n        amountIn = amounts[0];\\n    }\\n\\n    /**\\n     * @notice Return how much native tokens e.g, MATIC is required in order to swap for the\\n     * desired amount of a pool token,  e.g., NCT.\\n     * @param _poolToken The address of the pool token to swap for, for\\n     * example, NCT\\n     * @param _toAmount The desired amount of pool token to receive\\n     * @return amountIn The amount of native tokens  required in order to swap for\\n     * the specified amount of the pool token\\n     */\\n    function calculateNeededETHAmount(\\n        address _poolToken,\\n        uint256 _toAmount\\n    ) public view onlyRedeemable(_poolToken) returns (uint256 amountIn) {\\n        address fromToken = eligibleSwapPathsBySymbol[\\"WMATIC\\"][0];\\n        (, uint256[] memory amounts) = calculateExactOutSwap(\\n            fromToken,\\n            _poolToken,\\n            _toAmount\\n        );\\n        amountIn = amounts[0];\\n    }\\n\\n    /**\\n     * @notice Calculates the expected amount of pool token that can be\\n     * acquired by swapping the provided amount of ERC20 token.\\n     *\\n     * @param _fromToken The address of the ERC20 token used for the swap\\n     * @param _poolToken The address of the pool token to swap for,\\n     *  e.g., NCT\\n     * @param _fromAmount The amount of ERC20 token to swap\\n     * @return amountOut The expected amount of Pool token that can be acquired\\n     */\\n    function calculateExpectedPoolTokenForToken(\\n        address _fromToken,\\n        address _poolToken,\\n        uint256 _fromAmount\\n    )\\n        public\\n        view\\n        onlySwappable(_fromToken)\\n        onlyRedeemable(_poolToken)\\n        returns (uint256 amountOut)\\n    {\\n        (, uint256[] memory amounts) = calculateExactInSwap(\\n            _fromToken,\\n            _poolToken,\\n            _fromAmount\\n        );\\n        amountOut = amounts[amounts.length - 1];\\n    }\\n\\n    /**\\n     * @notice Calculates the expected amount of pool token that can be\\n     * acquired by swapping the provided amount of native tokens e.g., MATIC.\\n     *\\n     * @param _fromTokenAmount The amount of native tokens  to swap\\n     * @param _poolToken The address of the pool token to swap for,\\n     *  e.g., NCT\\n     * @return amountOut The expected amount of Pool token that can be acquired\\n     */\\n    function calculateExpectedPoolTokenForETH(\\n        address _poolToken,\\n        uint256 _fromTokenAmount\\n    )\\n        public\\n        view\\n        isNotCelo\\n        onlyRedeemable(_poolToken)\\n        returns (uint256 amountOut)\\n    {\\n        address fromToken = eligibleSwapPathsBySymbol[\\"WMATIC\\"][0];\\n        (, uint256[] memory amounts) = calculateExactInSwap(\\n            fromToken,\\n            _poolToken,\\n            _fromTokenAmount\\n        );\\n        amountOut = amounts[amounts.length - 1];\\n    }\\n\\n    // ----------------------------------------\\n    //      Internal functions\\n    // ----------------------------------------\\n\\n    function calculateExactOutSwap(\\n        address _fromToken,\\n        address _poolToken,\\n        uint256 _toAmount\\n    ) internal view returns (address[] memory path, uint256[] memory amounts) {\\n        // create path & calculate amounts\\n        path = generatePath(_fromToken, _poolToken);\\n        uint256 len = path.length;\\n\\n        amounts = dexRouter().getAmountsIn(_toAmount, path);\\n\\n        // sanity check arrays\\n        require(len == amounts.length, \\"Arrays unequal\\");\\n        require(_toAmount == amounts[len - 1], \\"Output amount mismatch\\");\\n    }\\n\\n    function calculateExactInSwap(\\n        address _fromToken,\\n        address _poolToken,\\n        uint256 _fromAmount\\n    ) internal view returns (address[] memory path, uint256[] memory amounts) {\\n        // create path & calculate amounts\\n        path = generatePath(_fromToken, _poolToken);\\n        uint256 len = path.length;\\n\\n        amounts = dexRouter().getAmountsOut(_fromAmount, path);\\n\\n        // sanity check arrays\\n        require(len == amounts.length, \\"Arrays unequal\\");\\n        require(_fromAmount == amounts[0], \\"Input amount mismatch\\");\\n    }\\n\\n    /**\\n     * @notice Show all pool token addresses that can be used to retired.\\n     * @param _fromToken a list of token symbols that can be retired.\\n     * @param _toToken a list of token symbols that can be retired.\\n     */\\n    function generatePath(\\n        address _fromToken,\\n        address _toToken\\n    ) internal view returns (address[] memory path) {\\n        uint256 len = eligibleSwapPaths[_fromToken].length;\\n        if (len == 1) {\\n            path = new address[](2);\\n            path[0] = _fromToken;\\n            path[1] = _toToken;\\n            return path;\\n        }\\n        if (len == 2) {\\n            path = new address[](3);\\n            path[0] = _fromToken;\\n            path[1] = eligibleSwapPaths[_fromToken][1];\\n            path[2] = _toToken;\\n            return path;\\n        }\\n        if (len == 3) {\\n            path = new address[](3);\\n            path[0] = _fromToken;\\n            path[1] = eligibleSwapPaths[_fromToken][1];\\n            path[2] = eligibleSwapPaths[_fromToken][2];\\n            path[3] = _toToken;\\n            return path;\\n        } else {\\n            path = new address[](4);\\n            path[0] = _fromToken;\\n            path[1] = eligibleSwapPaths[_fromToken][1];\\n            path[2] = eligibleSwapPaths[_fromToken][2];\\n            path[3] = eligibleSwapPaths[_fromToken][3];\\n            path[4] = _toToken;\\n            return path;\\n        }\\n    }\\n\\n    function dexRouter() internal view returns (IUniswapV2Router02) {\\n        return IUniswapV2Router02(dexRouterAddress);\\n    }\\n\\n    // ----------------------------------------\\n    //      Private functions\\n    // ----------------------------------------\\n\\n    /**\\n     * @notice Checks whether an address is a pool token address\\n     * @param _erc20Address address of token to be checked\\n     * @return True if the address is a pool token address\\n     */\\n    function isRedeemable(address _erc20Address) private view returns (bool) {\\n        for (uint i = 0; i < poolAddresses.length; i++) {\\n            if (poolAddresses[i] == _erc20Address) {\\n                return true;\\n            }\\n        }\\n\\n        return false;\\n    }\\n\\n    /**\\n     * @notice Checks whether an address can be used in a token swap\\n     * @param _erc20Address address of token to be checked\\n     * @return True if the specified address can be used in a swap\\n     */\\n    function isSwappable(address _erc20Address) private view returns (bool) {\\n        for (uint i = 0; i < paths.length; i++) {\\n            if (paths[i][0] == _erc20Address) {\\n                return true;\\n            }\\n        }\\n\\n        return false;\\n    }\\n\\n    // ----------------------------------------\\n    //  Admin methods\\n    // ----------------------------------------\\n\\n    /**\\n     * @notice Checks if ERC20 Token is eligible for Offsetting.\\n     * @param _erc20Address The address of the ERC20 token that the user sends\\n     * (e.g., cUSD, cUSD, USDC, WETH, WMATIC)\\n     * @return _path Returns the path of the token to be exchanged\\n     */\\n\\n    function isERC20AddressEligible(\\n        address _erc20Address\\n    ) public view returns (address[] memory _path) {\\n        _path = eligibleSwapPaths[_erc20Address];\\n    }\\n\\n    /**\\n     * @notice Change or add eligible paths and their addresses.\\n     * @param _tokenSymbol The symbol of the token to add\\n     * @param _path The path of the path to add\\n     */\\n    function addPath(\\n        string memory _tokenSymbol,\\n        address[] memory _path\\n    ) public virtual onlyOwner {\\n        eligibleSwapPaths[_path[0]] = _path;\\n        eligibleSwapPathsBySymbol[_tokenSymbol] = _path;\\n        tokenSymbolsForPaths.push(_tokenSymbol);\\n    }\\n\\n    /**\\n     * @notice Delete eligible tokens stored in the contract.\\n     * @param _tokenSymbol The symbol of the path to remove\\n     */\\n    function removePath(string memory _tokenSymbol) public virtual onlyOwner {\\n        delete eligibleSwapPaths[eligibleSwapPathsBySymbol[_tokenSymbol][0]];\\n        delete eligibleSwapPathsBySymbol[_tokenSymbol];\\n    }\\n\\n    /**\\n     * @notice Cheks if Pool Token is eligible for Offsetting.\\n     * @param _poolToken The addresses of the pool token to redeem\\n     * @return _isEligible Returns if token can be redeemed\\n     */\\n\\n    function isPoolAddressEligible(\\n        address _poolToken\\n    ) public view returns (bool _isEligible) {\\n        _isEligible = isRedeemable(_poolToken);\\n    }\\n\\n    /**\\n     * @notice Change or add pool token addresses.\\n     * @param _poolToken The address of the pool token to add\\n     */\\n    function addPoolToken(address _poolToken) public virtual onlyOwner {\\n        poolAddresses.push(_poolToken);\\n    }\\n\\n    /**\\n     * @notice Delete eligible pool token addresses stored in the contract.\\n     * @param _poolToken The address of the pool token to remove\\n     */\\n    function removePoolToken(address _poolToken) public virtual onlyOwner {\\n        for (uint256 i; i < poolAddresses.length; i++) {\\n            if (poolAddresses[i] == _poolToken) {\\n                poolAddresses[i] = poolAddresses[poolAddresses.length - 1];\\n                poolAddresses.pop();\\n                break;\\n            }\\n        }\\n    }\\n}\\n","keccak256":"0xf85a61eab51c68683a095be0c776a9a99bf70aa2dc5c65863176be9c17fb0c12","license":"GPL-3.0"},"contracts/OffsetHelperStorage.sol":{"content":"// SPDX-FileCopyrightText: 2022 Toucan Labs\\n//\\n// SPDX-License-Identifier: GPL-3.0\\n\\npragma solidity ^0.8.0;\\n\\nimport \\"@openzeppelin/contracts/access/Ownable.sol\\";\\n\\ncontract OffsetHelperStorage is Ownable {\\n    // token symbol => token address\\n    mapping(address => address[]) public eligibleSwapPaths;\\n    mapping(string => address[]) public eligibleSwapPathsBySymbol;\\n\\n    address[] public poolAddresses;\\n    string[] public tokenSymbolsForPaths;\\n    address[][] public paths;\\n    address public dexRouterAddress;\\n}\\n","keccak256":"0x6cd0dc999b167d00debeec534e1637cbefa552bdb801e672a20915b90bab20d0","license":"GPL-3.0"},"contracts/interfaces/IToucanCarbonOffsets.sol":{"content":"// SPDX-FileCopyrightText: 2021 Toucan Labs\\n//\\n// SPDX-License-Identifier: UNLICENSED\\n\\n// If you encounter a vulnerability or an issue, please contact <security@toucan.earth> or visit security.toucan.earth\\npragma solidity ^0.8.0;\\n\\nimport \\"@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol\\";\\nimport \\"@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol\\";\\n\\nimport \\"../types/CarbonProjectTypes.sol\\";\\nimport \\"../types/CarbonProjectVintageTypes.sol\\";\\n\\ninterface IToucanCarbonOffsets is IERC20Upgradeable, IERC721Receiver {\\n    function getGlobalProjectVintageIdentifiers()\\n        external\\n        view\\n        returns (string memory, string memory);\\n\\n    function getAttributes()\\n        external\\n        view\\n        returns (ProjectData memory, VintageData memory);\\n\\n    function getRemaining() external view returns (uint256 remaining);\\n\\n    function getDepositCap() external view returns (uint256);\\n\\n    function retire(uint256 amount) external;\\n\\n    function retireFrom(address account, uint256 amount) external;\\n\\n    function mintCertificateLegacy(\\n        string calldata retiringEntityString,\\n        address beneficiary,\\n        string calldata beneficiaryString,\\n        string calldata retirementMessage,\\n        uint256 amount\\n    ) external;\\n\\n    function retireAndMintCertificate(\\n        string calldata retiringEntityString,\\n        address beneficiary,\\n        string calldata beneficiaryString,\\n        string calldata retirementMessage,\\n        uint256 amount\\n    ) external;\\n}\\n","keccak256":"0x46c4ed2acd84764d0dd68c9c475e2c6ec3229a686046db48aca77ccd298d4b48","license":"UNLICENSED"},"contracts/interfaces/IToucanContractRegistry.sol":{"content":"// SPDX-FileCopyrightText: 2021 Toucan Labs\\n//\\n// SPDX-License-Identifier: UNLICENSED\\n\\n// If you encounter a vulnerability or an issue, please contact <security@toucan.earth> or visit security.toucan.earth\\npragma solidity ^0.8.0;\\n\\ninterface IToucanContractRegistry {\\n    function carbonOffsetBatchesAddress() external view returns (address);\\n\\n    function carbonProjectsAddress() external view returns (address);\\n\\n    function carbonProjectVintagesAddress() external view returns (address);\\n\\n    function toucanCarbonOffsetsFactoryAddress()\\n        external\\n        view\\n        returns (address);\\n\\n    function carbonOffsetBadgesAddress() external view returns (address);\\n\\n    function checkERC20(address _address) external view returns (bool);\\n}\\n","keccak256":"0xa8451ff2527948e4eed26e97247b979212ccb3bd89506302b6c09ddbad392035","license":"UNLICENSED"},"contracts/interfaces/IToucanPoolToken.sol":{"content":"// SPDX-FileCopyrightText: 2021 Toucan Labs\\n//\\n// SPDX-License-Identifier: UNLICENSED\\n\\n// If you encounter a vulnerability or an issue, please contact <security@toucan.earth> or visit security.toucan.earth\\npragma solidity ^0.8.0;\\n\\nimport \\"@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol\\";\\n\\ninterface IToucanPoolToken is IERC20Upgradeable {\\n    function deposit(address erc20Addr, uint256 amount) external;\\n\\n    function checkEligible(address erc20Addr) external view returns (bool);\\n\\n    function checkAttributeMatching(address erc20Addr)\\n        external\\n        view\\n        returns (bool);\\n\\n    function calculateRedeemFees(\\n        address[] memory tco2s,\\n        uint256[] memory amounts\\n    ) external view returns (uint256);\\n\\n    function redeemMany(address[] memory tco2s, uint256[] memory amounts)\\n        external;\\n\\n    function redeemAuto(uint256 amount) external;\\n\\n    function redeemAuto2(uint256 amount)\\n        external\\n        returns (address[] memory tco2s, uint256[] memory amounts);\\n\\n    function getRemaining() external view returns (uint256);\\n\\n    function getScoredTCO2s() external view returns (address[] memory);\\n}\\n","keccak256":"0xef39949a81cf4ed78d789a1aac5c5860de1582be70de7435f1671931091d43a7","license":"UNLICENSED"},"contracts/types/CarbonProjectTypes.sol":{"content":"// SPDX-FileCopyrightText: 2021 Toucan Labs\\n//\\n// SPDX-License-Identifier: UNLICENSED\\n\\n// If you encounter a vulnerability or an issue, please contact <security@toucan.earth> or visit security.toucan.earth\\n\\npragma solidity >=0.8.4 <0.9.0;\\n\\n/// @dev CarbonProject related data and attributes\\nstruct ProjectData {\\n    string projectId;\\n    string standard;\\n    string methodology;\\n    string region;\\n    string storageMethod;\\n    string method;\\n    string emissionType;\\n    string category;\\n    string uri;\\n    address controller;\\n}\\n","keccak256":"0x10d52f79d4bb8dbfe0abbb1662059d6d0193fe5794977b66aacf741451e25401","license":"UNLICENSED"},"contracts/types/CarbonProjectVintageTypes.sol":{"content":"// SPDX-FileCopyrightText: 2021 Toucan Labs\\n//\\n// SPDX-License-Identifier: UNLICENSED\\n\\n// If you encounter a vulnerability or an issue, please contact <security@toucan.earth> or visit security.toucan.earth\\n\\npragma solidity >=0.8.4 <0.9.0;\\n\\nstruct VintageData {\\n    /// @dev A human-readable string which differentiates this from other vintages in\\n    /// the same project, and helps build the corresponding TCO2 name and symbol.\\n    string name;\\n    uint64 startTime; // UNIX timestamp\\n    uint64 endTime; // UNIX timestamp\\n    uint256 projectTokenId;\\n    uint64 totalVintageQuantity;\\n    bool isCorsiaCompliant;\\n    bool isCCPcompliant;\\n    string coBenefits;\\n    string correspAdjustment;\\n    string additionalCertification;\\n    string uri;\\n}\\n","keccak256":"0x3a52e88a48b87f1ca3992c201f8b786ccf3aeb74796510893f8e33b33eae251b","license":"UNLICENSED"}},"version":1}',
          bytecode:
            "0x60806040523480156200001157600080fd5b5060405162003c5338038062003c538339810160408190526200003491620005df565b6200003f3362000207565b83516200005490600390602087019062000257565b5082516200006a906004906020860190620002c1565b5081516200008090600590602085019062000321565b50600680546001600160a01b0319166001600160a01b038316179055825160005b81811015620001fb57838181518110620000cb57634e487b7160e01b600052603260045260246000fd5b602002602001015160016000868481518110620000f857634e487b7160e01b600052603260045260246000fd5b60200260200101516000815181106200012157634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166001600160a01b0316815260200190815260200160002090805190602001906200015e92919062000257565b508381815181106200018057634e487b7160e01b600052603260045260246000fd5b60200260200101516002868381518110620001ab57634e487b7160e01b600052603260045260246000fd5b6020026020010151604051620001c2919062000756565b90815260200160405180910390209080519060200190620001e592919062000257565b5080620001f2816200083d565b915050620000a1565b5050505050506200087b565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b828054828255906000526020600020908101928215620002af579160200282015b82811115620002af57825182546001600160a01b0319166001600160a01b0390911617825560209092019160019091019062000278565b50620002bd92915062000381565b5090565b82805482825590600052602060002090810192821562000313579160200282015b828111156200031357825180516200030291849160209091019062000398565b5091602001919060010190620002e2565b50620002bd92915062000415565b82805482825590600052602060002090810192821562000373579160200282015b828111156200037357825180516200036291849160209091019062000257565b509160200191906001019062000342565b50620002bd92915062000436565b5b80821115620002bd576000815560010162000382565b828054620003a69062000800565b90600052602060002090601f016020900481019282620003ca5760008555620002af565b82601f10620003e557805160ff1916838001178555620002af565b82800160010185558215620002af579182015b82811115620002af578251825591602001919060010190620003f8565b80821115620002bd5760006200042c828262000457565b5060010162000415565b80821115620002bd5760006200044d828262000499565b5060010162000436565b508054620004659062000800565b6000825580601f1062000476575050565b601f01602090049060005260206000209081019062000496919062000381565b50565b508054600082559060005260206000209081019062000496919062000381565b80516001600160a01b0381168114620004d157600080fd5b919050565b600082601f830112620004e7578081fd5b8151602062000500620004fa83620007a7565b62000774565b80838252828201915082860187848660051b890101111562000520578586fd5b855b8581101562000549576200053682620004b9565b8452928401929084019060010162000522565b5090979650505050505050565b600082601f83011262000567578081fd5b815160206200057a620004fa83620007a7565b80838252828201915082860187848660051b89010111156200059a578586fd5b855b85811015620005495781516001600160401b03811115620005bb578788fd5b620005cb8a87838c0101620004d6565b85525092840192908401906001016200059c565b60008060008060808587031215620005f5578384fd5b84516001600160401b03808211156200060c578586fd5b6200061a88838901620004d6565b9550602087015191508082111562000630578485fd5b818701915087601f83011262000644578485fd5b815162000655620004fa82620007a7565b80828252602082019150602085018b60208560051b880101111562000678578889fd5b885b84811015620007105781518681111562000692578a8bfd5b8701603f81018e13620006a3578a8bfd5b602081015187811115620006bb57620006bb62000865565b620006d0601f8201601f191660200162000774565b8181528f6040838501011115620006e5578c8dfd5b620006f8826020830160408601620007cd565b8652505060209384019391909101906001016200067a565b505060408a015190975093505050808211156200072b578384fd5b506200073a8782880162000556565b9250506200074b60608601620004b9565b905092959194509250565b600082516200076a818460208701620007cd565b9190910192915050565b604051601f8201601f191681016001600160401b03811182821017156200079f576200079f62000865565b604052919050565b60006001600160401b03821115620007c357620007c362000865565b5060051b60200190565b60005b83811015620007ea578181015183820152602001620007d0565b83811115620007fa576000848401525b50505050565b600181811c908216806200081557607f821691505b602082108114156200083757634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156200085e57634e487b7160e01b81526011600452602481fd5b5060010190565b634e487b7160e01b600052604160045260246000fd5b6133c8806200088b6000396000f3fe6080604052600436106101d15760003560e01c80638da5cb5b116100f7578063c0681c3d11610095578063e7f67fb111610064578063e7f67fb11461054e578063f04ad9d71461056e578063f2fde38b14610581578063feb21b9c146105a157600080fd5b8063c0681c3d146104db578063c6c53efb146104fb578063d08ec4751461051b578063d8a90c401461053b57600080fd5b8063a0cd6049116100d1578063a0cd60491461044b578063a2844a861461046b578063b4e76a861461049b578063b8baf9db146104bb57600080fd5b80638da5cb5b146103ed5780639753209d1461040b578063a09457221461042b57600080fd5b80635367cd9c1161016f578063715018a61161013e578063715018a61461037857806373200b111461038d57806382155e7e146103ad5780638474c288146103cd57600080fd5b80635367cd9c146102eb57806356a7de0d146102fe57806368d306d91461031e5780636d4565041461034b57600080fd5b80631a0fdecc116101ab5780631a0fdecc1461026a5780632e98c8141461028a57806335bab7e5146102ab5780634865b2b4146102cb57600080fd5b80631109ec99146101dd5780631357b113146102105780631661f8181461024857600080fd5b366101d857005b600080fd5b3480156101e957600080fd5b506101fd6101f8366004612ca7565b6105c1565b6040519081526020015b60405180910390f35b34801561021c57600080fd5b5061023061022b366004612ca7565b610695565b6040516001600160a01b039091168152602001610207565b34801561025457600080fd5b50610268610263366004612cd2565b6106cd565b005b34801561027657600080fd5b506101fd610285366004612c67565b61094a565b61029d610298366004612ca7565b6109dd565b6040516102079291906130a4565b3480156102b757600080fd5b506101fd6102c6366004612c67565b610a3a565b3480156102d757600080fd5b506101fd6102e6366004612c67565b610ba8565b6102686102f9366004612ca7565b610c33565b34801561030a57600080fd5b50610268610319366004612c44565b610eb9565b34801561032a57600080fd5b5061033e610339366004612c44565b611005565b6040516102079190613091565b34801561035757600080fd5b5061036b610366366004612f74565b61107b565b6040516102079190613107565b34801561038457600080fd5b50610268611127565b34801561039957600080fd5b506102306103a8366004612f31565b61113b565b3480156103b957600080fd5b5061029d6103c8366004612ca7565b611166565b3480156103d957600080fd5b506102686103e8366004612c67565b611322565b3480156103f957600080fd5b506000546001600160a01b0316610230565b34801561041757600080fd5b50610268610426366004612ea7565b6115ae565b34801561043757600080fd5b5061029d610446366004612c67565b611652565b34801561045757600080fd5b5061029d610466366004612c67565b611686565b34801561047757600080fd5b5061048b610486366004612c44565b6116b5565b6040519015158152602001610207565b3480156104a757600080fd5b506101fd6104b6366004612ca7565b6116c6565b3480156104c757600080fd5b506102686104d6366004612eda565b6117ba565b3480156104e757600080fd5b506102686104f6366004612c44565b61189f565b34801561050757600080fd5b50610230610516366004612fa4565b6118f9565b34801561052757600080fd5b5061029d610536366004612ca7565b611921565b6101fd610549366004612c44565b611939565b34801561055a57600080fd5b50600654610230906001600160a01b031681565b61029d61057c366004612c44565b611adc565b34801561058d57600080fd5b5061026861059c366004612c44565b611b3b565b3480156105ad57600080fd5b506102306105bc366004612f74565b611bb1565b6000826105cd81611bdb565b6105f25760405162461bcd60e51b81526004016105e990613171565b60405180910390fd5b6000600260405161060f9065574d4154494360d01b815260060190565b908152602001604051809103902060008154811061063d57634e487b7160e01b600052603260045260246000fd5b60009182526020822001546001600160a01b0316915061065e828787611c53565b9150508060008151811061068257634e487b7160e01b600052603260045260246000fd5b6020026020010151935050505092915050565b600160205281600052604060002081815481106106b157600080fd5b6000918252602090912001546001600160a01b03169150829050565b81518061070a5760405162461bcd60e51b815260206004820152600b60248201526a417272617920656d70747960a81b60448201526064016105e9565b8151811461072a5760405162461bcd60e51b81526004016105e9906131a0565b60005b818110156109445782818151811061075557634e487b7160e01b600052603260045260246000fd5b60200260200101516000141561076a57610932565b82818151811061078a57634e487b7160e01b600052603260045260246000fd5b60200260200101518482815181106107b257634e487b7160e01b600052603260045260246000fd5b60209081029190910101516040516370a0823160e01b81523060048201526001600160a01b03909116906370a082319060240160206040518083038186803b1580156107fd57600080fd5b505afa158015610811573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108359190612f8c565b10156108835760405162461bcd60e51b815260206004820152601960248201527f496e73756666696369656e742054434f322062616c616e63650000000000000060448201526064016105e9565b8381815181106108a357634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316633790cf578483815181106108d957634e487b7160e01b600052603260045260246000fd5b60200260200101516040518263ffffffff1660e01b81526004016108ff91815260200190565b600060405180830381600087803b15801561091957600080fd5b505af115801561092d573d6000803e3d6000fd5b505050505b8061093c81613336565b91505061072d565b50505050565b60008361095681611d93565b6109725760405162461bcd60e51b81526004016105e99061313a565b8361097c81611bdb565b6109985760405162461bcd60e51b81526004016105e990613171565b60006109a5878787611c53565b915050806000815181106109c957634e487b7160e01b600052603260045260246000fd5b602002602001015193505050509392505050565b60608061a4ec46141580156109f4575061aef34614155b610a105760405162461bcd60e51b81526004016105e9906131c8565b610a1a8484610c33565b610a248484611166565b9092509050610a3382826106cd565b9250929050565b600083610a4681611d93565b610a625760405162461bcd60e51b81526004016105e99061313a565b83610a6c81611bdb565b610a885760405162461bcd60e51b81526004016105e990613171565b6000610a948787611e2c565b8051909150610aae6001600160a01b03891633308961242a565b600654610ac8906001600160a01b038a8116911688612495565b6000610adc6006546001600160a01b031690565b6001600160a01b03166338ed17398860008630426040518663ffffffff1660e01b8152600401610b10959493929190613227565b600060405180830381600087803b158015610b2a57600080fd5b505af1158015610b3e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610b669190810190612e54565b905080610b746001846132b8565b81518110610b9257634e487b7160e01b600052603260045260246000fd5b6020026020010151955050505050509392505050565b600083610bb481611d93565b610bd05760405162461bcd60e51b81526004016105e99061313a565b83610bda81611bdb565b610bf65760405162461bcd60e51b81526004016105e990613171565b6000610c038787876125b9565b9150508060018251610c1591906132b8565b815181106109c957634e487b7160e01b600052603260045260246000fd5b61a4ec4614158015610c47575061aef34614155b610c635760405162461bcd60e51b81526004016105e9906131c8565b81610c6d81611bdb565b610c895760405162461bcd60e51b81526004016105e990613171565b60006002604051610ca69065574d4154494360d01b815260060190565b9081526020016040518091039020600081548110610cd457634e487b7160e01b600052603260045260246000fd5b60009182526020822001546001600160a01b03169150610cf48286611e2c565b90506000610d0a6006546001600160a01b031690565b6001600160a01b031663fb3bdb4134878530426040518663ffffffff1660e01b8152600401610d3c94939291906130d2565b6000604051808303818588803b158015610d5557600080fd5b505af1158015610d69573d6000803e3d6000fd5b50505050506040513d6000823e601f3d908101601f19168201604052610d929190810190612e54565b905080600081518110610db557634e487b7160e01b600052603260045260246000fd5b6020026020010151341115610eb157600081600081518110610de757634e487b7160e01b600052603260045260246000fd5b602002602001015134610dfa91906132b8565b604080516000808252602082019283905292935033918491610e1b91613037565b60006040518083038185875af1925050503d8060008114610e58576040519150601f19603f3d011682016040523d82523d6000602084013e610e5d565b606091505b5050905080610eae5760405162461bcd60e51b815260206004820152601b60248201527f4661696c656420746f2073656e6420737572706c7573206261636b000000000060448201526064016105e9565b50505b505050505050565b610ec16126ef565b60005b60035481101561100157816001600160a01b031660038281548110610ef957634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b03161415610fef5760038054610f24906001906132b8565b81548110610f4257634e487b7160e01b600052603260045260246000fd5b600091825260209091200154600380546001600160a01b039092169183908110610f7c57634e487b7160e01b600052603260045260246000fd5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506003805480610fc957634e487b7160e01b600052603160045260246000fd5b600082815260209020810160001990810180546001600160a01b03191690550190555050565b80610ff981613336565b915050610ec4565b5050565b6001600160a01b03811660009081526001602090815260409182902080548351818402810184019094528084526060939283018282801561106f57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611051575b50505050509050919050565b6004818154811061108b57600080fd5b9060005260206000200160009150905080546110a6906132fb565b80601f01602080910402602001604051908101604052809291908181526020018280546110d2906132fb565b801561111f5780601f106110f45761010080835404028352916020019161111f565b820191906000526020600020905b81548152906001019060200180831161110257829003601f168201915b505050505081565b61112f6126ef565b6111396000612749565b565b815160208184018101805160028252928201918501919091209190528054829081106106b157600080fd5b6060808361117381611bdb565b61118f5760405162461bcd60e51b81526004016105e990613171565b6040516370a0823160e01b815230600482015284906001600160a01b038716906370a082319060240160206040518083038186803b1580156111d057600080fd5b505afa1580156111e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112089190612f8c565b10156112565760405162461bcd60e51b815260206004820152601c60248201527f496e73756666696369656e74204e43542f4243542062616c616e63650000000060448201526064016105e9565b604051634c02cad160e01b81526004810185905285906001600160a01b03821690634c02cad190602401600060405180830381600087803b15801561129a57600080fd5b505af11580156112ae573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526112d69190810190612d8e565b60405191955093507f3d29f82a20ec733db9f357c4dc1ae0ee60c572cc4b877384aa4639e4d877b18890611311903390899088908890613053565b60405180910390a150509250929050565b8261132c81611d93565b6113485760405162461bcd60e51b81526004016105e99061313a565b8261135281611bdb565b61136e5760405162461bcd60e51b81526004016105e990613171565b60008061137c878787611c53565b915091506000816000815181106113a357634e487b7160e01b600052603260045260246000fd5b602090810291909101015190506113c56001600160a01b03891633308461242a565b60065460405163095ea7b360e01b81526001600160a01b039182166004820152602481018390529089169063095ea7b390604401602060405180830381600087803b15801561141357600080fd5b505af1158015611427573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061144b9190612e87565b5060006114606006546001600160a01b031690565b6001600160a01b0316638803dbee88848730426040518663ffffffff1660e01b8152600401611493959493929190613227565b600060405180830381600087803b1580156114ad57600080fd5b505af11580156114c1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526114e99190810190612e54565b9050818160008151811061150d57634e487b7160e01b600052603260045260246000fd5b602002602001015110156115a35760065460405163095ea7b360e01b81526001600160a01b03918216600482015260006024820152908a169063095ea7b390604401602060405180830381600087803b15801561156957600080fd5b505af115801561157d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115a19190612e87565b505b505050505050505050565b6115b66126ef565b600160006002836040516115ca9190613037565b90815260200160405180910390206000815481106115f857634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101546001600160a01b031683528201929092526040018120611625916129f8565b6002816040516116359190613037565b9081526020016040518091039020600061164f91906129f8565b50565b6060806000611662868686610a3a565b905061166e8582611166565b909350915061167d83836106cd565b50935093915050565b606080611694858585611322565b61169e8484611166565b90925090506116ad82826106cd565b935093915050565b60006116c082611bdb565b92915050565b600061a4ec46141580156116dc575061aef34614155b6116f85760405162461bcd60e51b81526004016105e9906131c8565b8261170281611bdb565b61171e5760405162461bcd60e51b81526004016105e990613171565b6000600260405161173b9065574d4154494360d01b815260060190565b908152602001604051809103902060008154811061176957634e487b7160e01b600052603260045260246000fd5b60009182526020822001546001600160a01b0316915061178a8287876125b9565b915050806001825161179c91906132b8565b8151811061068257634e487b7160e01b600052603260045260246000fd5b6117c26126ef565b8060016000836000815181106117e857634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000209080519060200190611823929190612a16565b50806002836040516118359190613037565b90815260200160405180910390209080519060200190611856929190612a16565b5060048054600181018255600091909152825161189a917f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b01906020850190612a7b565b505050565b6118a76126ef565b600380546001810182556000919091527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0180546001600160a01b0319166001600160a01b0392909216919091179055565b6005828154811061190957600080fd5b9060005260206000200181815481106106b157600080fd5b606080610a1a6001600160a01b03851633308661242a565b600061a4ec461415801561194f575061aef34614155b61196b5760405162461bcd60e51b81526004016105e9906131c8565b8161197581611bdb565b6119915760405162461bcd60e51b81526004016105e990613171565b60405165574d4154494360d01b8152349060009060029060060190815260200160405180910390206000815481106119d957634e487b7160e01b600052603260045260246000fd5b60009182526020822001546001600160a01b031691506119f98287611e2c565b80519091506000611a126006546001600160a01b031690565b6001600160a01b0316637ff36ab58660008630426040518663ffffffff1660e01b8152600401611a4594939291906130d2565b6000604051808303818588803b158015611a5e57600080fd5b505af1158015611a72573d6000803e3d6000fd5b50505050506040513d6000823e601f3d908101601f19168201604052611a9b9190810190612e54565b905080611aa96001846132b8565b81518110611ac757634e487b7160e01b600052603260045260246000fd5b60200260200101519650505050505050919050565b60608061a4ec4614158015611af3575061aef34614155b611b0f5760405162461bcd60e51b81526004016105e9906131c8565b6000611b1a84611939565b9050611b268482611166565b9093509150611b3583836106cd565b50915091565b611b436126ef565b6001600160a01b038116611ba85760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016105e9565b61164f81612749565b60038181548110611bc157600080fd5b6000918252602090912001546001600160a01b0316905081565b6000805b600354811015611c4a57826001600160a01b031660038281548110611c1457634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b03161415611c385750600192915050565b80611c4281613336565b915050611bdf565b50600092915050565b606080611c608585611e2c565b8051909250611c776006546001600160a01b031690565b6001600160a01b0316631f00ca7485856040518363ffffffff1660e01b8152600401611ca492919061320e565b60006040518083038186803b158015611cbc57600080fd5b505afa158015611cd0573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611cf89190810190612e54565b915081518114611d1a5760405162461bcd60e51b81526004016105e9906131a0565b81611d266001836132b8565b81518110611d4457634e487b7160e01b600052603260045260246000fd5b6020026020010151841461167d5760405162461bcd60e51b815260206004820152601660248201527509eeae8e0eae840c2dadeeadce840dad2e6dac2e8c6d60531b60448201526064016105e9565b6000805b600554811015611c4a57826001600160a01b031660058281548110611dcc57634e487b7160e01b600052603260045260246000fd5b90600052602060002001600081548110611df657634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b03161415611e1a5750600192915050565b80611e2481613336565b915050611d97565b6001600160a01b038216600090815260016020819052604090912054606091811415611efc5760408051600280825260608201835290916020830190803683370190505091508382600081518110611e9457634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b0316815250508282600181518110611ed657634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b031681525050506116c0565b806002141561202e576040805160038082526080820190925290602082016060803683370190505091508382600081518110611f4857634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b03168152505060016000856001600160a01b03166001600160a01b03168152602001908152602001600020600181548110611fad57634e487b7160e01b600052603260045260246000fd5b9060005260206000200160009054906101000a90046001600160a01b031682600181518110611fec57634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b0316815250508282600281518110611ed657634e487b7160e01b600052603260045260246000fd5b80600314156121eb57604080516003808252608082019092529060208201606080368337019050509150838260008151811061207a57634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b03168152505060016000856001600160a01b03166001600160a01b031681526020019081526020016000206001815481106120df57634e487b7160e01b600052603260045260246000fd5b9060005260206000200160009054906101000a90046001600160a01b03168260018151811061211e57634e487b7160e01b600052603260045260246000fd5b6001600160a01b0392831660209182029290920181019190915290851660009081526001909152604090208054600290811061216a57634e487b7160e01b600052603260045260246000fd5b9060005260206000200160009054906101000a90046001600160a01b0316826002815181106121a957634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b0316815250508282600381518110611ed657634e487b7160e01b600052603260045260246000fd5b60408051600480825260a082019092529060208201608080368337019050509150838260008151811061222e57634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b03168152505060016000856001600160a01b03166001600160a01b0316815260200190815260200160002060018154811061229357634e487b7160e01b600052603260045260246000fd5b9060005260206000200160009054906101000a90046001600160a01b0316826001815181106122d257634e487b7160e01b600052603260045260246000fd5b6001600160a01b0392831660209182029290920181019190915290851660009081526001909152604090208054600290811061231e57634e487b7160e01b600052603260045260246000fd5b9060005260206000200160009054906101000a90046001600160a01b03168260028151811061235d57634e487b7160e01b600052603260045260246000fd5b6001600160a01b039283166020918202929092018101919091529085166000908152600190915260409020805460039081106123a957634e487b7160e01b600052603260045260246000fd5b9060005260206000200160009054906101000a90046001600160a01b0316826003815181106123e857634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b0316815250508282600481518110611ed657634e487b7160e01b600052603260045260246000fd5b6040516001600160a01b03808516602483015283166044820152606481018290526109449085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152612799565b80158061251e5750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b1580156124e457600080fd5b505afa1580156124f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061251c9190612f8c565b155b6125895760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60648201526084016105e9565b6040516001600160a01b03831660248201526044810182905261189a90849063095ea7b360e01b9060640161245e565b6060806125c68585611e2c565b80519092506125dd6006546001600160a01b031690565b6001600160a01b031663d06ca61f85856040518363ffffffff1660e01b815260040161260a92919061320e565b60006040518083038186803b15801561262257600080fd5b505afa158015612636573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261265e9190810190612e54565b9150815181146126805760405162461bcd60e51b81526004016105e9906131a0565b816000815181106126a157634e487b7160e01b600052603260045260246000fd5b6020026020010151841461167d5760405162461bcd60e51b8152602060048201526015602482015274092dce0eae840c2dadeeadce840dad2e6dac2e8c6d605b1b60448201526064016105e9565b6000546001600160a01b031633146111395760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105e9565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006127ee826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661286b9092919063ffffffff16565b80519091501561189a578080602001905181019061280c9190612e87565b61189a5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016105e9565b606061287a8484600085612882565b949350505050565b6060824710156128e35760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016105e9565b600080866001600160a01b031685876040516128ff9190613037565b60006040518083038185875af1925050503d806000811461293c576040519150601f19603f3d011682016040523d82523d6000602084013e612941565b606091505b50915091506129528783838761295d565b979650505050505050565b606083156129c95782516129c2576001600160a01b0385163b6129c25760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105e9565b508161287a565b61287a83838151156129de5781518083602001fd5b8060405162461bcd60e51b81526004016105e99190613107565b508054600082559060005260206000209081019061164f9190612aef565b828054828255906000526020600020908101928215612a6b579160200282015b82811115612a6b57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190612a36565b50612a77929150612aef565b5090565b828054612a87906132fb565b90600052602060002090601f016020900481019282612aa95760008555612a6b565b82601f10612ac257805160ff1916838001178555612a6b565b82800160010185558215612a6b579182015b82811115612a6b578251825591602001919060010190612ad4565b5b80821115612a775760008155600101612af0565b600082601f830112612b14578081fd5b81356020612b29612b2483613294565b613263565b80838252828201915082860187848660051b8901011115612b48578586fd5b855b85811015612b6f578135612b5d8161337d565b84529284019290840190600101612b4a565b5090979650505050505050565b600082601f830112612b8c578081fd5b81516020612b9c612b2483613294565b80838252828201915082860187848660051b8901011115612bbb578586fd5b855b85811015612b6f57815184529284019290840190600101612bbd565b600082601f830112612be9578081fd5b813567ffffffffffffffff811115612c0357612c03613367565b612c16601f8201601f1916602001613263565b818152846020838601011115612c2a578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215612c55578081fd5b8135612c608161337d565b9392505050565b600080600060608486031215612c7b578182fd5b8335612c868161337d565b92506020840135612c968161337d565b929592945050506040919091013590565b60008060408385031215612cb9578182fd5b8235612cc48161337d565b946020939093013593505050565b60008060408385031215612ce4578182fd5b823567ffffffffffffffff80821115612cfb578384fd5b612d0786838701612b04565b9350602091508185013581811115612d1d578384fd5b85019050601f81018613612d2f578283fd5b8035612d3d612b2482613294565b80828252848201915084840189868560051b8701011115612d5c578687fd5b8694505b83851015612d7e578035835260019490940193918501918501612d60565b5080955050505050509250929050565b60008060408385031215612da0578182fd5b825167ffffffffffffffff80821115612db7578384fd5b818501915085601f830112612dca578384fd5b81516020612dda612b2483613294565b8083825282820191508286018a848660051b8901011115612df9578889fd5b8896505b84871015612e24578051612e108161337d565b835260019690960195918301918301612dfd565b5091880151919650909350505080821115612e3d578283fd5b50612e4a85828601612b7c565b9150509250929050565b600060208284031215612e65578081fd5b815167ffffffffffffffff811115612e7b578182fd5b61287a84828501612b7c565b600060208284031215612e98578081fd5b81518015158114612c60578182fd5b600060208284031215612eb8578081fd5b813567ffffffffffffffff811115612ece578182fd5b61287a84828501612bd9565b60008060408385031215612eec578182fd5b823567ffffffffffffffff80821115612f03578384fd5b612f0f86838701612bd9565b93506020850135915080821115612f24578283fd5b50612e4a85828601612b04565b60008060408385031215612f43578182fd5b823567ffffffffffffffff811115612f59578283fd5b612f6585828601612bd9565b95602094909401359450505050565b600060208284031215612f85578081fd5b5035919050565b600060208284031215612f9d578081fd5b5051919050565b60008060408385031215612fb6578182fd5b50508035926020909101359150565b6000815180845260208085019450808401835b83811015612ffd5781516001600160a01b031687529582019590820190600101612fd8565b509495945050505050565b6000815180845260208085019450808401835b83811015612ffd5781518752958201959082019060010161301b565b600082516130498184602087016132cf565b9190910192915050565b6001600160a01b0385811682528416602082015260806040820181905260009061307f90830185612fc5565b82810360608401526129528185613008565b602081526000612c606020830184612fc5565b6040815260006130b76040830185612fc5565b82810360208401526130c98185613008565b95945050505050565b8481526080602082015260006130eb6080830186612fc5565b6001600160a01b03949094166040830152506060015292915050565b60208152600082518060208401526131268160408501602087016132cf565b601f01601f19169190910160400192915050565b60208082526017908201527f5061746820646f65736e2774207965742065786973742e000000000000000000604082015260600190565b6020808252601590820152742a37b5b2b7103737ba103932b232b2b6b0b136329760591b604082015260600190565b6020808252600e908201526d105c9c985e5cc81d5b995c5d585b60921b604082015260600190565b60208082526026908201527f5468652066756e6374696f6e206973206e6f7420617661696c61626c65206f6e6040820152651021b2b6379760d11b606082015260800190565b82815260406020820152600061287a6040830184612fc5565b85815284602082015260a06040820152600061324660a0830186612fc5565b6001600160a01b0394909416606083015250608001529392505050565b604051601f8201601f1916810167ffffffffffffffff8111828210171561328c5761328c613367565b604052919050565b600067ffffffffffffffff8211156132ae576132ae613367565b5060051b60200190565b6000828210156132ca576132ca613351565b500390565b60005b838110156132ea5781810151838201526020016132d2565b838111156109445750506000910152565b600181811c9082168061330f57607f821691505b6020821081141561333057634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561334a5761334a613351565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461164f57600080fdfea2646970667358221220ddc1eff4a35a6fbb1eda6b442a738a64ebb110c6ec2e6fa36a3949ae7d1985ea64736f6c63430008040033",
          deployedBytecode:
            "0x6080604052600436106101d15760003560e01c80638da5cb5b116100f7578063c0681c3d11610095578063e7f67fb111610064578063e7f67fb11461054e578063f04ad9d71461056e578063f2fde38b14610581578063feb21b9c146105a157600080fd5b8063c0681c3d146104db578063c6c53efb146104fb578063d08ec4751461051b578063d8a90c401461053b57600080fd5b8063a0cd6049116100d1578063a0cd60491461044b578063a2844a861461046b578063b4e76a861461049b578063b8baf9db146104bb57600080fd5b80638da5cb5b146103ed5780639753209d1461040b578063a09457221461042b57600080fd5b80635367cd9c1161016f578063715018a61161013e578063715018a61461037857806373200b111461038d57806382155e7e146103ad5780638474c288146103cd57600080fd5b80635367cd9c146102eb57806356a7de0d146102fe57806368d306d91461031e5780636d4565041461034b57600080fd5b80631a0fdecc116101ab5780631a0fdecc1461026a5780632e98c8141461028a57806335bab7e5146102ab5780634865b2b4146102cb57600080fd5b80631109ec99146101dd5780631357b113146102105780631661f8181461024857600080fd5b366101d857005b600080fd5b3480156101e957600080fd5b506101fd6101f8366004612ca7565b6105c1565b6040519081526020015b60405180910390f35b34801561021c57600080fd5b5061023061022b366004612ca7565b610695565b6040516001600160a01b039091168152602001610207565b34801561025457600080fd5b50610268610263366004612cd2565b6106cd565b005b34801561027657600080fd5b506101fd610285366004612c67565b61094a565b61029d610298366004612ca7565b6109dd565b6040516102079291906130a4565b3480156102b757600080fd5b506101fd6102c6366004612c67565b610a3a565b3480156102d757600080fd5b506101fd6102e6366004612c67565b610ba8565b6102686102f9366004612ca7565b610c33565b34801561030a57600080fd5b50610268610319366004612c44565b610eb9565b34801561032a57600080fd5b5061033e610339366004612c44565b611005565b6040516102079190613091565b34801561035757600080fd5b5061036b610366366004612f74565b61107b565b6040516102079190613107565b34801561038457600080fd5b50610268611127565b34801561039957600080fd5b506102306103a8366004612f31565b61113b565b3480156103b957600080fd5b5061029d6103c8366004612ca7565b611166565b3480156103d957600080fd5b506102686103e8366004612c67565b611322565b3480156103f957600080fd5b506000546001600160a01b0316610230565b34801561041757600080fd5b50610268610426366004612ea7565b6115ae565b34801561043757600080fd5b5061029d610446366004612c67565b611652565b34801561045757600080fd5b5061029d610466366004612c67565b611686565b34801561047757600080fd5b5061048b610486366004612c44565b6116b5565b6040519015158152602001610207565b3480156104a757600080fd5b506101fd6104b6366004612ca7565b6116c6565b3480156104c757600080fd5b506102686104d6366004612eda565b6117ba565b3480156104e757600080fd5b506102686104f6366004612c44565b61189f565b34801561050757600080fd5b50610230610516366004612fa4565b6118f9565b34801561052757600080fd5b5061029d610536366004612ca7565b611921565b6101fd610549366004612c44565b611939565b34801561055a57600080fd5b50600654610230906001600160a01b031681565b61029d61057c366004612c44565b611adc565b34801561058d57600080fd5b5061026861059c366004612c44565b611b3b565b3480156105ad57600080fd5b506102306105bc366004612f74565b611bb1565b6000826105cd81611bdb565b6105f25760405162461bcd60e51b81526004016105e990613171565b60405180910390fd5b6000600260405161060f9065574d4154494360d01b815260060190565b908152602001604051809103902060008154811061063d57634e487b7160e01b600052603260045260246000fd5b60009182526020822001546001600160a01b0316915061065e828787611c53565b9150508060008151811061068257634e487b7160e01b600052603260045260246000fd5b6020026020010151935050505092915050565b600160205281600052604060002081815481106106b157600080fd5b6000918252602090912001546001600160a01b03169150829050565b81518061070a5760405162461bcd60e51b815260206004820152600b60248201526a417272617920656d70747960a81b60448201526064016105e9565b8151811461072a5760405162461bcd60e51b81526004016105e9906131a0565b60005b818110156109445782818151811061075557634e487b7160e01b600052603260045260246000fd5b60200260200101516000141561076a57610932565b82818151811061078a57634e487b7160e01b600052603260045260246000fd5b60200260200101518482815181106107b257634e487b7160e01b600052603260045260246000fd5b60209081029190910101516040516370a0823160e01b81523060048201526001600160a01b03909116906370a082319060240160206040518083038186803b1580156107fd57600080fd5b505afa158015610811573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108359190612f8c565b10156108835760405162461bcd60e51b815260206004820152601960248201527f496e73756666696369656e742054434f322062616c616e63650000000000000060448201526064016105e9565b8381815181106108a357634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b0316633790cf578483815181106108d957634e487b7160e01b600052603260045260246000fd5b60200260200101516040518263ffffffff1660e01b81526004016108ff91815260200190565b600060405180830381600087803b15801561091957600080fd5b505af115801561092d573d6000803e3d6000fd5b505050505b8061093c81613336565b91505061072d565b50505050565b60008361095681611d93565b6109725760405162461bcd60e51b81526004016105e99061313a565b8361097c81611bdb565b6109985760405162461bcd60e51b81526004016105e990613171565b60006109a5878787611c53565b915050806000815181106109c957634e487b7160e01b600052603260045260246000fd5b602002602001015193505050509392505050565b60608061a4ec46141580156109f4575061aef34614155b610a105760405162461bcd60e51b81526004016105e9906131c8565b610a1a8484610c33565b610a248484611166565b9092509050610a3382826106cd565b9250929050565b600083610a4681611d93565b610a625760405162461bcd60e51b81526004016105e99061313a565b83610a6c81611bdb565b610a885760405162461bcd60e51b81526004016105e990613171565b6000610a948787611e2c565b8051909150610aae6001600160a01b03891633308961242a565b600654610ac8906001600160a01b038a8116911688612495565b6000610adc6006546001600160a01b031690565b6001600160a01b03166338ed17398860008630426040518663ffffffff1660e01b8152600401610b10959493929190613227565b600060405180830381600087803b158015610b2a57600080fd5b505af1158015610b3e573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610b669190810190612e54565b905080610b746001846132b8565b81518110610b9257634e487b7160e01b600052603260045260246000fd5b6020026020010151955050505050509392505050565b600083610bb481611d93565b610bd05760405162461bcd60e51b81526004016105e99061313a565b83610bda81611bdb565b610bf65760405162461bcd60e51b81526004016105e990613171565b6000610c038787876125b9565b9150508060018251610c1591906132b8565b815181106109c957634e487b7160e01b600052603260045260246000fd5b61a4ec4614158015610c47575061aef34614155b610c635760405162461bcd60e51b81526004016105e9906131c8565b81610c6d81611bdb565b610c895760405162461bcd60e51b81526004016105e990613171565b60006002604051610ca69065574d4154494360d01b815260060190565b9081526020016040518091039020600081548110610cd457634e487b7160e01b600052603260045260246000fd5b60009182526020822001546001600160a01b03169150610cf48286611e2c565b90506000610d0a6006546001600160a01b031690565b6001600160a01b031663fb3bdb4134878530426040518663ffffffff1660e01b8152600401610d3c94939291906130d2565b6000604051808303818588803b158015610d5557600080fd5b505af1158015610d69573d6000803e3d6000fd5b50505050506040513d6000823e601f3d908101601f19168201604052610d929190810190612e54565b905080600081518110610db557634e487b7160e01b600052603260045260246000fd5b6020026020010151341115610eb157600081600081518110610de757634e487b7160e01b600052603260045260246000fd5b602002602001015134610dfa91906132b8565b604080516000808252602082019283905292935033918491610e1b91613037565b60006040518083038185875af1925050503d8060008114610e58576040519150601f19603f3d011682016040523d82523d6000602084013e610e5d565b606091505b5050905080610eae5760405162461bcd60e51b815260206004820152601b60248201527f4661696c656420746f2073656e6420737572706c7573206261636b000000000060448201526064016105e9565b50505b505050505050565b610ec16126ef565b60005b60035481101561100157816001600160a01b031660038281548110610ef957634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b03161415610fef5760038054610f24906001906132b8565b81548110610f4257634e487b7160e01b600052603260045260246000fd5b600091825260209091200154600380546001600160a01b039092169183908110610f7c57634e487b7160e01b600052603260045260246000fd5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506003805480610fc957634e487b7160e01b600052603160045260246000fd5b600082815260209020810160001990810180546001600160a01b03191690550190555050565b80610ff981613336565b915050610ec4565b5050565b6001600160a01b03811660009081526001602090815260409182902080548351818402810184019094528084526060939283018282801561106f57602002820191906000526020600020905b81546001600160a01b03168152600190910190602001808311611051575b50505050509050919050565b6004818154811061108b57600080fd5b9060005260206000200160009150905080546110a6906132fb565b80601f01602080910402602001604051908101604052809291908181526020018280546110d2906132fb565b801561111f5780601f106110f45761010080835404028352916020019161111f565b820191906000526020600020905b81548152906001019060200180831161110257829003601f168201915b505050505081565b61112f6126ef565b6111396000612749565b565b815160208184018101805160028252928201918501919091209190528054829081106106b157600080fd5b6060808361117381611bdb565b61118f5760405162461bcd60e51b81526004016105e990613171565b6040516370a0823160e01b815230600482015284906001600160a01b038716906370a082319060240160206040518083038186803b1580156111d057600080fd5b505afa1580156111e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112089190612f8c565b10156112565760405162461bcd60e51b815260206004820152601c60248201527f496e73756666696369656e74204e43542f4243542062616c616e63650000000060448201526064016105e9565b604051634c02cad160e01b81526004810185905285906001600160a01b03821690634c02cad190602401600060405180830381600087803b15801561129a57600080fd5b505af11580156112ae573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526112d69190810190612d8e565b60405191955093507f3d29f82a20ec733db9f357c4dc1ae0ee60c572cc4b877384aa4639e4d877b18890611311903390899088908890613053565b60405180910390a150509250929050565b8261132c81611d93565b6113485760405162461bcd60e51b81526004016105e99061313a565b8261135281611bdb565b61136e5760405162461bcd60e51b81526004016105e990613171565b60008061137c878787611c53565b915091506000816000815181106113a357634e487b7160e01b600052603260045260246000fd5b602090810291909101015190506113c56001600160a01b03891633308461242a565b60065460405163095ea7b360e01b81526001600160a01b039182166004820152602481018390529089169063095ea7b390604401602060405180830381600087803b15801561141357600080fd5b505af1158015611427573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061144b9190612e87565b5060006114606006546001600160a01b031690565b6001600160a01b0316638803dbee88848730426040518663ffffffff1660e01b8152600401611493959493929190613227565b600060405180830381600087803b1580156114ad57600080fd5b505af11580156114c1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526114e99190810190612e54565b9050818160008151811061150d57634e487b7160e01b600052603260045260246000fd5b602002602001015110156115a35760065460405163095ea7b360e01b81526001600160a01b03918216600482015260006024820152908a169063095ea7b390604401602060405180830381600087803b15801561156957600080fd5b505af115801561157d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115a19190612e87565b505b505050505050505050565b6115b66126ef565b600160006002836040516115ca9190613037565b90815260200160405180910390206000815481106115f857634e487b7160e01b600052603260045260246000fd5b60009182526020808320909101546001600160a01b031683528201929092526040018120611625916129f8565b6002816040516116359190613037565b9081526020016040518091039020600061164f91906129f8565b50565b6060806000611662868686610a3a565b905061166e8582611166565b909350915061167d83836106cd565b50935093915050565b606080611694858585611322565b61169e8484611166565b90925090506116ad82826106cd565b935093915050565b60006116c082611bdb565b92915050565b600061a4ec46141580156116dc575061aef34614155b6116f85760405162461bcd60e51b81526004016105e9906131c8565b8261170281611bdb565b61171e5760405162461bcd60e51b81526004016105e990613171565b6000600260405161173b9065574d4154494360d01b815260060190565b908152602001604051809103902060008154811061176957634e487b7160e01b600052603260045260246000fd5b60009182526020822001546001600160a01b0316915061178a8287876125b9565b915050806001825161179c91906132b8565b8151811061068257634e487b7160e01b600052603260045260246000fd5b6117c26126ef565b8060016000836000815181106117e857634e487b7160e01b600052603260045260246000fd5b60200260200101516001600160a01b03166001600160a01b031681526020019081526020016000209080519060200190611823929190612a16565b50806002836040516118359190613037565b90815260200160405180910390209080519060200190611856929190612a16565b5060048054600181018255600091909152825161189a917f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b01906020850190612a7b565b505050565b6118a76126ef565b600380546001810182556000919091527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0180546001600160a01b0319166001600160a01b0392909216919091179055565b6005828154811061190957600080fd5b9060005260206000200181815481106106b157600080fd5b606080610a1a6001600160a01b03851633308661242a565b600061a4ec461415801561194f575061aef34614155b61196b5760405162461bcd60e51b81526004016105e9906131c8565b8161197581611bdb565b6119915760405162461bcd60e51b81526004016105e990613171565b60405165574d4154494360d01b8152349060009060029060060190815260200160405180910390206000815481106119d957634e487b7160e01b600052603260045260246000fd5b60009182526020822001546001600160a01b031691506119f98287611e2c565b80519091506000611a126006546001600160a01b031690565b6001600160a01b0316637ff36ab58660008630426040518663ffffffff1660e01b8152600401611a4594939291906130d2565b6000604051808303818588803b158015611a5e57600080fd5b505af1158015611a72573d6000803e3d6000fd5b50505050506040513d6000823e601f3d908101601f19168201604052611a9b9190810190612e54565b905080611aa96001846132b8565b81518110611ac757634e487b7160e01b600052603260045260246000fd5b60200260200101519650505050505050919050565b60608061a4ec4614158015611af3575061aef34614155b611b0f5760405162461bcd60e51b81526004016105e9906131c8565b6000611b1a84611939565b9050611b268482611166565b9093509150611b3583836106cd565b50915091565b611b436126ef565b6001600160a01b038116611ba85760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084016105e9565b61164f81612749565b60038181548110611bc157600080fd5b6000918252602090912001546001600160a01b0316905081565b6000805b600354811015611c4a57826001600160a01b031660038281548110611c1457634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b03161415611c385750600192915050565b80611c4281613336565b915050611bdf565b50600092915050565b606080611c608585611e2c565b8051909250611c776006546001600160a01b031690565b6001600160a01b0316631f00ca7485856040518363ffffffff1660e01b8152600401611ca492919061320e565b60006040518083038186803b158015611cbc57600080fd5b505afa158015611cd0573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611cf89190810190612e54565b915081518114611d1a5760405162461bcd60e51b81526004016105e9906131a0565b81611d266001836132b8565b81518110611d4457634e487b7160e01b600052603260045260246000fd5b6020026020010151841461167d5760405162461bcd60e51b815260206004820152601660248201527509eeae8e0eae840c2dadeeadce840dad2e6dac2e8c6d60531b60448201526064016105e9565b6000805b600554811015611c4a57826001600160a01b031660058281548110611dcc57634e487b7160e01b600052603260045260246000fd5b90600052602060002001600081548110611df657634e487b7160e01b600052603260045260246000fd5b6000918252602090912001546001600160a01b03161415611e1a5750600192915050565b80611e2481613336565b915050611d97565b6001600160a01b038216600090815260016020819052604090912054606091811415611efc5760408051600280825260608201835290916020830190803683370190505091508382600081518110611e9457634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b0316815250508282600181518110611ed657634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b031681525050506116c0565b806002141561202e576040805160038082526080820190925290602082016060803683370190505091508382600081518110611f4857634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b03168152505060016000856001600160a01b03166001600160a01b03168152602001908152602001600020600181548110611fad57634e487b7160e01b600052603260045260246000fd5b9060005260206000200160009054906101000a90046001600160a01b031682600181518110611fec57634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b0316815250508282600281518110611ed657634e487b7160e01b600052603260045260246000fd5b80600314156121eb57604080516003808252608082019092529060208201606080368337019050509150838260008151811061207a57634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b03168152505060016000856001600160a01b03166001600160a01b031681526020019081526020016000206001815481106120df57634e487b7160e01b600052603260045260246000fd5b9060005260206000200160009054906101000a90046001600160a01b03168260018151811061211e57634e487b7160e01b600052603260045260246000fd5b6001600160a01b0392831660209182029290920181019190915290851660009081526001909152604090208054600290811061216a57634e487b7160e01b600052603260045260246000fd5b9060005260206000200160009054906101000a90046001600160a01b0316826002815181106121a957634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b0316815250508282600381518110611ed657634e487b7160e01b600052603260045260246000fd5b60408051600480825260a082019092529060208201608080368337019050509150838260008151811061222e57634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b03168152505060016000856001600160a01b03166001600160a01b0316815260200190815260200160002060018154811061229357634e487b7160e01b600052603260045260246000fd5b9060005260206000200160009054906101000a90046001600160a01b0316826001815181106122d257634e487b7160e01b600052603260045260246000fd5b6001600160a01b0392831660209182029290920181019190915290851660009081526001909152604090208054600290811061231e57634e487b7160e01b600052603260045260246000fd5b9060005260206000200160009054906101000a90046001600160a01b03168260028151811061235d57634e487b7160e01b600052603260045260246000fd5b6001600160a01b039283166020918202929092018101919091529085166000908152600190915260409020805460039081106123a957634e487b7160e01b600052603260045260246000fd5b9060005260206000200160009054906101000a90046001600160a01b0316826003815181106123e857634e487b7160e01b600052603260045260246000fd5b60200260200101906001600160a01b031690816001600160a01b0316815250508282600481518110611ed657634e487b7160e01b600052603260045260246000fd5b6040516001600160a01b03808516602483015283166044820152606481018290526109449085906323b872dd60e01b906084015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152612799565b80158061251e5750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e9060440160206040518083038186803b1580156124e457600080fd5b505afa1580156124f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061251c9190612f8c565b155b6125895760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b60648201526084016105e9565b6040516001600160a01b03831660248201526044810182905261189a90849063095ea7b360e01b9060640161245e565b6060806125c68585611e2c565b80519092506125dd6006546001600160a01b031690565b6001600160a01b031663d06ca61f85856040518363ffffffff1660e01b815260040161260a92919061320e565b60006040518083038186803b15801561262257600080fd5b505afa158015612636573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261265e9190810190612e54565b9150815181146126805760405162461bcd60e51b81526004016105e9906131a0565b816000815181106126a157634e487b7160e01b600052603260045260246000fd5b6020026020010151841461167d5760405162461bcd60e51b8152602060048201526015602482015274092dce0eae840c2dadeeadce840dad2e6dac2e8c6d605b1b60448201526064016105e9565b6000546001600160a01b031633146111395760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016105e9565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006127ee826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661286b9092919063ffffffff16565b80519091501561189a578080602001905181019061280c9190612e87565b61189a5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016105e9565b606061287a8484600085612882565b949350505050565b6060824710156128e35760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016105e9565b600080866001600160a01b031685876040516128ff9190613037565b60006040518083038185875af1925050503d806000811461293c576040519150601f19603f3d011682016040523d82523d6000602084013e612941565b606091505b50915091506129528783838761295d565b979650505050505050565b606083156129c95782516129c2576001600160a01b0385163b6129c25760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105e9565b508161287a565b61287a83838151156129de5781518083602001fd5b8060405162461bcd60e51b81526004016105e99190613107565b508054600082559060005260206000209081019061164f9190612aef565b828054828255906000526020600020908101928215612a6b579160200282015b82811115612a6b57825182546001600160a01b0319166001600160a01b03909116178255602090920191600190910190612a36565b50612a77929150612aef565b5090565b828054612a87906132fb565b90600052602060002090601f016020900481019282612aa95760008555612a6b565b82601f10612ac257805160ff1916838001178555612a6b565b82800160010185558215612a6b579182015b82811115612a6b578251825591602001919060010190612ad4565b5b80821115612a775760008155600101612af0565b600082601f830112612b14578081fd5b81356020612b29612b2483613294565b613263565b80838252828201915082860187848660051b8901011115612b48578586fd5b855b85811015612b6f578135612b5d8161337d565b84529284019290840190600101612b4a565b5090979650505050505050565b600082601f830112612b8c578081fd5b81516020612b9c612b2483613294565b80838252828201915082860187848660051b8901011115612bbb578586fd5b855b85811015612b6f57815184529284019290840190600101612bbd565b600082601f830112612be9578081fd5b813567ffffffffffffffff811115612c0357612c03613367565b612c16601f8201601f1916602001613263565b818152846020838601011115612c2a578283fd5b816020850160208301379081016020019190915292915050565b600060208284031215612c55578081fd5b8135612c608161337d565b9392505050565b600080600060608486031215612c7b578182fd5b8335612c868161337d565b92506020840135612c968161337d565b929592945050506040919091013590565b60008060408385031215612cb9578182fd5b8235612cc48161337d565b946020939093013593505050565b60008060408385031215612ce4578182fd5b823567ffffffffffffffff80821115612cfb578384fd5b612d0786838701612b04565b9350602091508185013581811115612d1d578384fd5b85019050601f81018613612d2f578283fd5b8035612d3d612b2482613294565b80828252848201915084840189868560051b8701011115612d5c578687fd5b8694505b83851015612d7e578035835260019490940193918501918501612d60565b5080955050505050509250929050565b60008060408385031215612da0578182fd5b825167ffffffffffffffff80821115612db7578384fd5b818501915085601f830112612dca578384fd5b81516020612dda612b2483613294565b8083825282820191508286018a848660051b8901011115612df9578889fd5b8896505b84871015612e24578051612e108161337d565b835260019690960195918301918301612dfd565b5091880151919650909350505080821115612e3d578283fd5b50612e4a85828601612b7c565b9150509250929050565b600060208284031215612e65578081fd5b815167ffffffffffffffff811115612e7b578182fd5b61287a84828501612b7c565b600060208284031215612e98578081fd5b81518015158114612c60578182fd5b600060208284031215612eb8578081fd5b813567ffffffffffffffff811115612ece578182fd5b61287a84828501612bd9565b60008060408385031215612eec578182fd5b823567ffffffffffffffff80821115612f03578384fd5b612f0f86838701612bd9565b93506020850135915080821115612f24578283fd5b50612e4a85828601612b04565b60008060408385031215612f43578182fd5b823567ffffffffffffffff811115612f59578283fd5b612f6585828601612bd9565b95602094909401359450505050565b600060208284031215612f85578081fd5b5035919050565b600060208284031215612f9d578081fd5b5051919050565b60008060408385031215612fb6578182fd5b50508035926020909101359150565b6000815180845260208085019450808401835b83811015612ffd5781516001600160a01b031687529582019590820190600101612fd8565b509495945050505050565b6000815180845260208085019450808401835b83811015612ffd5781518752958201959082019060010161301b565b600082516130498184602087016132cf565b9190910192915050565b6001600160a01b0385811682528416602082015260806040820181905260009061307f90830185612fc5565b82810360608401526129528185613008565b602081526000612c606020830184612fc5565b6040815260006130b76040830185612fc5565b82810360208401526130c98185613008565b95945050505050565b8481526080602082015260006130eb6080830186612fc5565b6001600160a01b03949094166040830152506060015292915050565b60208152600082518060208401526131268160408501602087016132cf565b601f01601f19169190910160400192915050565b60208082526017908201527f5061746820646f65736e2774207965742065786973742e000000000000000000604082015260600190565b6020808252601590820152742a37b5b2b7103737ba103932b232b2b6b0b136329760591b604082015260600190565b6020808252600e908201526d105c9c985e5cc81d5b995c5d585b60921b604082015260600190565b60208082526026908201527f5468652066756e6374696f6e206973206e6f7420617661696c61626c65206f6e6040820152651021b2b6379760d11b606082015260800190565b82815260406020820152600061287a6040830184612fc5565b85815284602082015260a06040820152600061324660a0830186612fc5565b6001600160a01b0394909416606083015250608001529392505050565b604051601f8201601f1916810167ffffffffffffffff8111828210171561328c5761328c613367565b604052919050565b600067ffffffffffffffff8211156132ae576132ae613367565b5060051b60200190565b6000828210156132ca576132ca613351565b500390565b60005b838110156132ea5781810151838201526020016132d2565b838111156109445750506000910152565b600181811c9082168061330f57607f821691505b6020821081141561333057634e487b7160e01b600052602260045260246000fd5b50919050565b600060001982141561334a5761334a613351565b5060010190565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461164f57600080fdfea2646970667358221220ddc1eff4a35a6fbb1eda6b442a738a64ebb110c6ec2e6fa36a3949ae7d1985ea64736f6c63430008040033",
          devdoc: {
            events: {
              "Redeemed(address,address,address[],uint256[])": {
                params: {
                  amounts: "An array of the amounts of each TCO2 that were redeemed",
                  poolToken: "The address of the pool token used in the redemption,  e.g., NCT",
                  sender: "The sender of the transaction",
                  tco2s: "An array of the TCO2 addresses that were redeemed",
                },
              },
            },
            kind: "dev",
            methods: {
              "addPath(string,address[])": {
                params: {
                  _path: "The path of the path to add",
                  _tokenSymbol: "The symbol of the token to add",
                },
              },
              "addPoolToken(address)": {
                params: {
                  _poolToken: "The address of the pool token to add",
                },
              },
              "autoOffsetExactInETH(address)": {
                details: "This function is only available on Polygon, not on Celo.",
                params: {
                  _poolToken: "The address of the pool token to swap for,  e.g., NCT",
                },
                returns: {
                  amounts: "An array of the amounts of each TCO2 that were redeemed",
                  tco2s: "An array of the TCO2 addresses that were redeemed",
                },
              },
              "autoOffsetExactInToken(address,address,uint256)": {
                details:
                  "When automatically redeeming pool tokens for the oldest ones TCO2s there are no fees and you receive exactly 1 TCO2 token for 1 pool token.",
                params: {
                  _amountToSwap:
                    "The amount of ERC20 token to swap into Toucan pool token. Full amount will be used for offsetting.",
                  _fromToken:
                    "The address of the ERC20 token that the user sends (e.g., cUSD, cUSD, USDC, WETH, WMATIC)",
                  _poolToken: "The address of the pool token that the user wants to use,  e.g., NCT",
                },
                returns: {
                  amounts: "An array of the amounts of each TCO2 that were redeemed",
                  tco2s: "An array of the TCO2 addresses that were redeemed",
                },
              },
              "autoOffsetExactOutETH(address,uint256)": {
                details:
                  "If the user sends too much native tokens , the leftover amount will be sent back to the user. This function is only available on Polygon, not on Celo.",
                params: {
                  _amountToOffset: "The amount of TCO2 to offset.",
                  _poolToken: "The address of the pool token to swap for,  e.g., NCT",
                },
                returns: {
                  amounts: "An array of the amounts of each TCO2 that were redeemed",
                  tco2s: "An array of the TCO2 addresses that were redeemed",
                },
              },
              "autoOffsetExactOutToken(address,address,uint256)": {
                details:
                  "When automatically redeeming pool tokens for the oldest ones TCO2s there are no fees and you receive exactly 1 TCO2 token for 1 pool token.",
                params: {
                  _amountToOffset: "The amount of TCO2 to offset",
                  _fromToken:
                    "The address of the ERC20 token that the user sends (e.g., cUSD, cUSD, USDC, WETH, WMATIC)",
                  _poolToken: "The address of the pool token that the user wants to use,  e.g., NCT",
                },
                returns: {
                  amounts: "An array of the amounts of each TCO2 that were redeemed",
                  tco2s: "An array of the TCO2 addresses that were redeemed",
                },
              },
              "autoOffsetPoolToken(address,uint256)": {
                params: {
                  _amountToOffset: "The amount of TCO2 to offset.",
                  _poolToken: "The address of the pool token to swap for,  e.g., NCT",
                },
                returns: {
                  amounts: "An array of the amounts of each TCO2 that were redeemed",
                  tco2s: "An array of the TCO2 addresses that were redeemed",
                },
              },
              "autoRedeem(address,uint256)": {
                details: "Needs to be approved on the client side",
                params: {
                  _amount: "Amount to redeem",
                  _fromToken: "Could be the address of NCT",
                },
                returns: {
                  amounts: "An array of the amounts of each TCO2 that were redeemed",
                  tco2s: "An array of the TCO2 addresses that were redeemed",
                },
              },
              "autoRetire(address[],uint256[])": {
                params: {
                  _amounts: "The amounts to retire from each of the corresponding TCO2 addresses",
                  _tco2s: "The addresses of the TCO2s to retire",
                },
              },
              "calculateExpectedPoolTokenForETH(address,uint256)": {
                params: {
                  _fromTokenAmount: "The amount of native tokens  to swap",
                  _poolToken: "The address of the pool token to swap for,  e.g., NCT",
                },
                returns: {
                  amountOut: "The expected amount of Pool token that can be acquired",
                },
              },
              "calculateExpectedPoolTokenForToken(address,address,uint256)": {
                params: {
                  _fromAmount: "The amount of ERC20 token to swap",
                  _fromToken: "The address of the ERC20 token used for the swap",
                  _poolToken: "The address of the pool token to swap for,  e.g., NCT",
                },
                returns: {
                  amountOut: "The expected amount of Pool token that can be acquired",
                },
              },
              "calculateNeededETHAmount(address,uint256)": {
                params: {
                  _poolToken: "The address of the pool token to swap for, for example, NCT",
                  _toAmount: "The desired amount of pool token to receive",
                },
                returns: {
                  amountIn:
                    "The amount of native tokens  required in order to swap for the specified amount of the pool token",
                },
              },
              "calculateNeededTokenAmount(address,address,uint256)": {
                params: {
                  _fromToken: "The address of the ERC20 token used for the swap",
                  _poolToken: "The address of the pool token to swap for,  e.g., NCT",
                  _toAmount: "The desired amount of pool token to receive",
                },
                returns: {
                  amountIn:
                    "The amount of the ERC20 token required in order to swap for the specified amount of the pool token",
                },
              },
              constructor: {
                details:
                  "See `isEligible()` for a list of tokens that can be used in the contract. These can be modified after deployment by the contract owner using `setEligibleTokenAddress()` and `deleteEligibleTokenAddress()`.",
                params: {
                  _paths:
                    "An array of arrays of addresses to describe the path needed to swap form the baseToken to the pool Token to the provided token symbols.",
                  _poolAddresses: "A list of pool token addresses.",
                  _tokenSymbolsForPaths: "An array of symbols of the token the user want to retire carbon credits for",
                },
              },
              "isERC20AddressEligible(address)": {
                params: {
                  _erc20Address:
                    "The address of the ERC20 token that the user sends (e.g., cUSD, cUSD, USDC, WETH, WMATIC)",
                },
                returns: {
                  _path: "Returns the path of the token to be exchanged",
                },
              },
              "isPoolAddressEligible(address)": {
                params: {
                  _poolToken: "The addresses of the pool token to redeem",
                },
                returns: {
                  _isEligible: "Returns if token can be redeemed",
                },
              },
              "owner()": {
                details: "Returns the address of the current owner.",
              },
              "removePath(string)": {
                params: {
                  _tokenSymbol: "The symbol of the path to remove",
                },
              },
              "removePoolToken(address)": {
                params: {
                  _poolToken: "The address of the pool token to remove",
                },
              },
              "renounceOwnership()": {
                details:
                  "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions anymore. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby removing any functionality that is only available to the owner.",
              },
              "swapExactInETH(address)": {
                params: {
                  _poolToken: "The address of the pool token to swap for,  e.g., NCT",
                },
                returns: {
                  amountOut: "Resulting amount of pool token that got acquired for the swapped native tokens .",
                },
              },
              "swapExactInToken(address,address,uint256)": {
                details: "Needs to be approved on the client side.",
                params: {
                  _fromAmount: "The amount of ERC20 token to swap  e.g., NCT",
                  _fromToken: "The address of the ERC20 token used for the swap",
                  _poolToken: "The address of the pool token to swap for,",
                },
                returns: {
                  amountOut: "Resulting amount of pool token that got acquired for the swapped ERC20 tokens.",
                },
              },
              "swapExactOutETH(address,uint256)": {
                params: {
                  _poolToken: "The address of the pool token to swap for,  e.g., NCT",
                  _toAmount: "The required amount of the pool token (NCT/BCT)",
                },
              },
              "swapExactOutToken(address,address,uint256)": {
                details: "Needs to be approved on the client side",
                params: {
                  _fromToken: "The address of the ERC20 token used for the swap",
                  _poolToken: "The address of the pool token to swap for,  e.g., NCT",
                  _toAmount: "The required amount of the pool token (NCT/BCT)",
                },
              },
              "transferOwnership(address)": {
                details:
                  "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.",
              },
            },
            title: "Toucan Protocol Offset Helpers",
            version: 1,
          },
          userdoc: {
            events: {
              "Redeemed(address,address,address[],uint256[])": {
                notice: "Emitted upon successful redemption of TCO2 tokens from a Toucan pool token e.g., NCT.",
              },
            },
            kind: "user",
            methods: {
              "addPath(string,address[])": {
                notice: "Change or add eligible paths and their addresses.",
              },
              "addPoolToken(address)": {
                notice: "Change or add pool token addresses.",
              },
              "autoOffsetExactInETH(address)": {
                notice:
                  "Retire carbon credits using the oldest TCO2 tokens available from the specified Toucan token pool by sending native tokens e.g., MATIC. All provided native tokens  is consumed for offsetting. Use `calculateExpectedPoolTokenForETH()` to calculate the expected amount of Pool token that can be acquired by swapping the provided amount of native tokens e.g., MATIC. This function: 1. Swaps the Matic sent to the contract for the specified pool token. 2. Redeems the pool token for the oldest TCO2 tokens available. 3. Retires the TCO2 tokens.",
              },
              "autoOffsetExactInToken(address,address,uint256)": {
                notice:
                  "Retire carbon credits using the oldest TCO2 tokens available from the specified Toucan token pool by sending ERC20 tokens (cUSD, USDC, WETH, WMATIC). All provided token is consumed for offsetting. Use `calculateExpectedPoolTokenForToken()` to calculate the expected amount of Pool token that can be acquired by swapping the provided amount of ERC20 token. This function: 1. Swaps the ERC20 token sent to the contract for the specified pool token. 2. Redeems the pool token for the oldest TCO2 tokens available. 3. Retires the TCO2 tokens. Note: The client must approve the ERC20 token that is sent to the contract.",
              },
              "autoOffsetExactOutETH(address,uint256)": {
                notice:
                  "Retire carbon credits using the oldest TCO2 tokens available from the specified Toucan token pool by sending native tokens e.g., MATIC. Use `calculateNeededETHAmount()` first in order to find out how much native tokens are required to retire the specified quantity of TCO2. This function: 1. Swaps the Matic sent to the contract for the specified pool token. 2. Redeems the pool token for the oldest TCO2 tokens available. 3. Retires the TCO2 tokens.",
              },
              "autoOffsetExactOutToken(address,address,uint256)": {
                notice:
                  "Retire carbon credits using the oldest TCO2 tokens available from the specified Toucan token pool by sending ERC20 tokens (cUSD, USDC, WETH, WMATIC). Use `calculateNeededTokenAmount` first in order to find out how much of the ERC20 token is required to retire the specified quantity of TCO2. This function: 1. Swaps the ERC20 token sent to the contract for the specified pool token. 2. Redeems the pool token for the oldest TCO2 tokens available. 3. Retires the TCO2 tokens. Note: The client must approve the ERC20 token that is sent to the contract.",
              },
              "autoOffsetPoolToken(address,uint256)": {
                notice:
                  "Retire carbon credits using the oldest TCO2 tokens available by sending pool tokens,  e.g., NCT. This function: 1. Redeems the pool token for the oldest TCO2 tokens available. 2. Retires the TCO2 tokens. Note: The client must approve the pool token that is sent.",
              },
              "autoRedeem(address,uint256)": {
                notice: "Redeems the specified amount of NCT / BCT for TCO2.",
              },
              "autoRetire(address[],uint256[])": {
                notice: "Retire the specified TCO2 tokens.",
              },
              "calculateExpectedPoolTokenForETH(address,uint256)": {
                notice:
                  "Calculates the expected amount of pool token that can be acquired by swapping the provided amount of native tokens e.g., MATIC.",
              },
              "calculateExpectedPoolTokenForToken(address,address,uint256)": {
                notice:
                  "Calculates the expected amount of pool token that can be acquired by swapping the provided amount of ERC20 token.",
              },
              "calculateNeededETHAmount(address,uint256)": {
                notice:
                  "Return how much native tokens e.g, MATIC is required in order to swap for the desired amount of a pool token,  e.g., NCT.",
              },
              "calculateNeededTokenAmount(address,address,uint256)": {
                notice:
                  "Return how much of the specified ERC20 token is required in order to swap for the desired amount of a pool token, for example,  e.g., NCT.",
              },
              constructor: {
                notice:
                  "Contract constructor. Should specify arrays of ERC20 symbols and addresses that can used by the contract.",
              },
              "isERC20AddressEligible(address)": {
                notice: "Checks if ERC20 Token is eligible for Offsetting.",
              },
              "isPoolAddressEligible(address)": {
                notice: "Cheks if Pool Token is eligible for Offsetting.",
              },
              "removePath(string)": {
                notice: "Delete eligible tokens stored in the contract.",
              },
              "removePoolToken(address)": {
                notice: "Delete eligible pool token addresses stored in the contract.",
              },
              "swapExactInETH(address)": {
                notice:
                  "Swap native tokens e.g., MATIC for pool tokens (BCT/NCT) on SushiSwap. All provided native tokens  will be swapped.",
              },
              "swapExactInToken(address,address,uint256)": {
                notice:
                  "Swap eligible ERC20 tokens for pool tokens (BCT/NCT) on SushiSwap. All provided ERC20 tokens will be swapped.",
              },
              "swapExactOutETH(address,uint256)": {
                notice:
                  "Swap native tokens e.g., MATIC for pool tokens (BCT/NCT) on SushiSwap. Remaining native tokens  that was not consumed by the swap is returned.",
              },
              "swapExactOutToken(address,address,uint256)": {
                notice: "Swap eligible ERC20 tokens for pool tokens (BCT/NCT) on SushiSwap",
              },
            },
            notice:
              'Helper functions that simplify the carbon offsetting (retirement) process. Retiring carbon tokens requires multiple steps and interactions with Toucan Protocol\'s main contracts: 1. Obtain a pool token e.g., NCT (by performing a token    swap on a DEX). 2. Redeem the pool token for a TCO2 token. 3. Retire the TCO2 token. These steps are combined in each of the following "auto offset" methods implemented in `OffsetHelper` to allow a retirement within one transaction: - `autoOffsetPoolToken()` if the user already owns a Toucan pool   token e.g., NCT, - `autoOffsetExactOutETH()` if the user would like to perform a retirement   using native tokens e.g., MATIC, specifying the exact amount of TCO2s to retire (only on Polygon, not on Celo), - `autoOffsetExactInETH()` if the user would like to perform a retirement   using native tokens, swapping all sent native tokens into TCO2s (only on Polygon, not on Celo), - `autoOffsetExactOutToken()` if the user would like to perform a retirement   using an ERC20 token (cUSD, USDC, WETH or WMATIC), specifying the exact amount   of TCO2s to retire, - `autoOffsetExactInToken()` if the user would like to perform a retirement   using an ERC20 token (cUSD, USDC, WETH or WMATIC), specifying the exact amount   of token to swap into TCO2s. In these methods, "auto" refers to the fact that these methods use `autoRedeem()` in order to automatically choose a TCO2 token corresponding to the oldest tokenized carbon project in the specfified token pool. There are no fees incurred by the user when using `autoRedeem()`, i.e., the user receives 1 TCO2 token for each pool token (BCT/NCT) redeemed. There are two `view` helper functions `calculateNeededETHAmount()` and `calculateNeededTokenAmount()` that should be called before using `autoOffsetExactOutETH()` and `autoOffsetExactOutToken()`, to determine how much native tokens e.g., MATIC, respectively how much of the ERC20 token must be sent to the `OffsetHelper` contract in order to retire the specified amount of carbon. The two `view` helper functions `calculateExpectedPoolTokenForETH()` and `calculateExpectedPoolTokenForToken()` can be used to calculate the expected amount of TCO2s that will be offset using functions `autoOffsetExactInETH()` and `autoOffsetExactInToken()`.',
            version: 1,
          },
          storageLayout: {
            storage: [
              {
                astId: 2465,
                contract: "contracts/OffsetHelper.sol:OffsetHelper",
                label: "_owner",
                offset: 0,
                slot: "0",
                type: "t_address",
              },
              {
                astId: 5229,
                contract: "contracts/OffsetHelper.sol:OffsetHelper",
                label: "eligibleSwapPaths",
                offset: 0,
                slot: "1",
                type: "t_mapping(t_address,t_array(t_address)dyn_storage)",
              },
              {
                astId: 5234,
                contract: "contracts/OffsetHelper.sol:OffsetHelper",
                label: "eligibleSwapPathsBySymbol",
                offset: 0,
                slot: "2",
                type: "t_mapping(t_string_memory_ptr,t_array(t_address)dyn_storage)",
              },
              {
                astId: 5237,
                contract: "contracts/OffsetHelper.sol:OffsetHelper",
                label: "poolAddresses",
                offset: 0,
                slot: "3",
                type: "t_array(t_address)dyn_storage",
              },
              {
                astId: 5240,
                contract: "contracts/OffsetHelper.sol:OffsetHelper",
                label: "tokenSymbolsForPaths",
                offset: 0,
                slot: "4",
                type: "t_array(t_string_storage)dyn_storage",
              },
              {
                astId: 5244,
                contract: "contracts/OffsetHelper.sol:OffsetHelper",
                label: "paths",
                offset: 0,
                slot: "5",
                type: "t_array(t_array(t_address)dyn_storage)dyn_storage",
              },
              {
                astId: 5246,
                contract: "contracts/OffsetHelper.sol:OffsetHelper",
                label: "dexRouterAddress",
                offset: 0,
                slot: "6",
                type: "t_address",
              },
            ],
            types: {
              t_address: {
                encoding: "inplace",
                label: "address",
                numberOfBytes: "20",
              },
              "t_array(t_address)dyn_storage": {
                base: "t_address",
                encoding: "dynamic_array",
                label: "address[]",
                numberOfBytes: "32",
              },
              "t_array(t_array(t_address)dyn_storage)dyn_storage": {
                base: "t_array(t_address)dyn_storage",
                encoding: "dynamic_array",
                label: "address[][]",
                numberOfBytes: "32",
              },
              "t_array(t_string_storage)dyn_storage": {
                base: "t_string_storage",
                encoding: "dynamic_array",
                label: "string[]",
                numberOfBytes: "32",
              },
              "t_mapping(t_address,t_array(t_address)dyn_storage)": {
                encoding: "mapping",
                key: "t_address",
                label: "mapping(address => address[])",
                numberOfBytes: "32",
                value: "t_array(t_address)dyn_storage",
              },
              "t_mapping(t_string_memory_ptr,t_array(t_address)dyn_storage)": {
                encoding: "mapping",
                key: "t_string_memory_ptr",
                label: "mapping(string => address[])",
                numberOfBytes: "32",
                value: "t_array(t_address)dyn_storage",
              },
              t_string_memory_ptr: {
                encoding: "bytes",
                label: "string",
                numberOfBytes: "32",
              },
              t_string_storage: {
                encoding: "bytes",
                label: "string",
                numberOfBytes: "32",
              },
            },
          },
        },
        cUSD: {
          address: "0x765DE816845861e75A25fCA122bb6898B8B1282a",
          abi: [
            {
              inputs: [{ internalType: "bool", name: "test", type: "bool" }],
              payable: false,
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              anonymous: false,
              inputs: [
                { indexed: true, internalType: "address", name: "owner", type: "address" },
                { indexed: true, internalType: "address", name: "spender", type: "address" },
                { indexed: false, internalType: "uint256", name: "value", type: "uint256" },
              ],
              name: "Approval",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                { indexed: false, internalType: "uint256", name: "factor", type: "uint256" },
                { indexed: false, internalType: "uint256", name: "lastUpdated", type: "uint256" },
              ],
              name: "InflationFactorUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                { indexed: false, internalType: "uint256", name: "rate", type: "uint256" },
                { indexed: false, internalType: "uint256", name: "updatePeriod", type: "uint256" },
                { indexed: false, internalType: "uint256", name: "lastUpdated", type: "uint256" },
              ],
              name: "InflationParametersUpdated",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                { indexed: true, internalType: "address", name: "previousOwner", type: "address" },
                { indexed: true, internalType: "address", name: "newOwner", type: "address" },
              ],
              name: "OwnershipTransferred",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [{ indexed: true, internalType: "address", name: "registryAddress", type: "address" }],
              name: "RegistrySet",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [
                { indexed: true, internalType: "address", name: "from", type: "address" },
                { indexed: true, internalType: "address", name: "to", type: "address" },
                { indexed: false, internalType: "uint256", name: "value", type: "uint256" },
              ],
              name: "Transfer",
              type: "event",
            },
            {
              anonymous: false,
              inputs: [{ indexed: false, internalType: "string", name: "comment", type: "string" }],
              name: "TransferComment",
              type: "event",
            },
            {
              constant: true,
              inputs: [
                { internalType: "address", name: "accountOwner", type: "address" },
                { internalType: "address", name: "spender", type: "address" },
              ],
              name: "allowance",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { internalType: "address", name: "spender", type: "address" },
                { internalType: "uint256", name: "value", type: "uint256" },
              ],
              name: "approve",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [{ internalType: "address", name: "accountOwner", type: "address" }],
              name: "balanceOf",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [{ internalType: "uint256", name: "value", type: "uint256" }],
              name: "burn",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [
                { internalType: "address", name: "sender", type: "address" },
                { internalType: "bytes", name: "blsKey", type: "bytes" },
                { internalType: "bytes", name: "blsPop", type: "bytes" },
              ],
              name: "checkProofOfPossession",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { internalType: "address", name: "from", type: "address" },
                { internalType: "address", name: "feeRecipient", type: "address" },
                { internalType: "address", name: "gatewayFeeRecipient", type: "address" },
                { internalType: "address", name: "communityFund", type: "address" },
                { internalType: "uint256", name: "refund", type: "uint256" },
                { internalType: "uint256", name: "tipTxFee", type: "uint256" },
                { internalType: "uint256", name: "gatewayFee", type: "uint256" },
                { internalType: "uint256", name: "baseTxFee", type: "uint256" },
              ],
              name: "creditGasFees",
              outputs: [],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { internalType: "address", name: "from", type: "address" },
                { internalType: "uint256", name: "value", type: "uint256" },
              ],
              name: "debitGasFees",
              outputs: [],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "decimals",
              outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { internalType: "address", name: "spender", type: "address" },
                { internalType: "uint256", name: "value", type: "uint256" },
              ],
              name: "decreaseAllowance",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [
                { internalType: "uint256", name: "aNumerator", type: "uint256" },
                { internalType: "uint256", name: "aDenominator", type: "uint256" },
                { internalType: "uint256", name: "bNumerator", type: "uint256" },
                { internalType: "uint256", name: "bDenominator", type: "uint256" },
                { internalType: "uint256", name: "exponent", type: "uint256" },
                { internalType: "uint256", name: "_decimals", type: "uint256" },
              ],
              name: "fractionMulExp",
              outputs: [
                { internalType: "uint256", name: "", type: "uint256" },
                { internalType: "uint256", name: "", type: "uint256" },
              ],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [{ internalType: "bytes", name: "header", type: "bytes" }],
              name: "getBlockNumberFromHeader",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "getEpochNumber",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [{ internalType: "uint256", name: "blockNumber", type: "uint256" }],
              name: "getEpochNumberOfBlock",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "getEpochSize",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "getExchangeRegistryId",
              outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "getInflationParameters",
              outputs: [
                { internalType: "uint256", name: "", type: "uint256" },
                { internalType: "uint256", name: "", type: "uint256" },
                { internalType: "uint256", name: "", type: "uint256" },
                { internalType: "uint256", name: "", type: "uint256" },
              ],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [{ internalType: "uint256", name: "blockNumber", type: "uint256" }],
              name: "getParentSealBitmap",
              outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [{ internalType: "bytes", name: "header", type: "bytes" }],
              name: "getVerifiedSealBitmapFromHeader",
              outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "getVersionNumber",
              outputs: [
                { internalType: "uint256", name: "", type: "uint256" },
                { internalType: "uint256", name: "", type: "uint256" },
                { internalType: "uint256", name: "", type: "uint256" },
                { internalType: "uint256", name: "", type: "uint256" },
              ],
              payable: false,
              stateMutability: "pure",
              type: "function",
            },
            {
              constant: true,
              inputs: [{ internalType: "bytes", name: "header", type: "bytes" }],
              name: "hashHeader",
              outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { internalType: "address", name: "spender", type: "address" },
                { internalType: "uint256", name: "value", type: "uint256" },
              ],
              name: "increaseAllowance",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { internalType: "string", name: "_name", type: "string" },
                { internalType: "string", name: "_symbol", type: "string" },
                { internalType: "uint8", name: "_decimals", type: "uint8" },
                { internalType: "address", name: "registryAddress", type: "address" },
                { internalType: "uint256", name: "inflationRate", type: "uint256" },
                { internalType: "uint256", name: "inflationFactorUpdatePeriod", type: "uint256" },
                { internalType: "address[]", name: "initialBalanceAddresses", type: "address[]" },
                { internalType: "uint256[]", name: "initialBalanceValues", type: "uint256[]" },
                { internalType: "string", name: "exchangeIdentifier", type: "string" },
              ],
              name: "initialize",
              outputs: [],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "initialized",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "isOwner",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [{ internalType: "uint256", name: "blockNumber", type: "uint256" }],
              name: "minQuorumSize",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "minQuorumSizeInCurrentSet",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { internalType: "address", name: "to", type: "address" },
                { internalType: "uint256", name: "value", type: "uint256" },
              ],
              name: "mint",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "name",
              outputs: [{ internalType: "string", name: "", type: "string" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "numberValidatorsInCurrentSet",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [{ internalType: "uint256", name: "blockNumber", type: "uint256" }],
              name: "numberValidatorsInSet",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "owner",
              outputs: [{ internalType: "address", name: "", type: "address" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "registry",
              outputs: [{ internalType: "contract IRegistry", name: "", type: "address" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [],
              name: "renounceOwnership",
              outputs: [],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { internalType: "uint256", name: "rate", type: "uint256" },
                { internalType: "uint256", name: "updatePeriod", type: "uint256" },
              ],
              name: "setInflationParameters",
              outputs: [],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: false,
              inputs: [{ internalType: "address", name: "registryAddress", type: "address" }],
              name: "setRegistry",
              outputs: [],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "symbol",
              outputs: [{ internalType: "string", name: "", type: "string" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [],
              name: "totalSupply",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { internalType: "address", name: "to", type: "address" },
                { internalType: "uint256", name: "value", type: "uint256" },
              ],
              name: "transfer",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { internalType: "address", name: "from", type: "address" },
                { internalType: "address", name: "to", type: "address" },
                { internalType: "uint256", name: "value", type: "uint256" },
              ],
              name: "transferFrom",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: false,
              inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
              name: "transferOwnership",
              outputs: [],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: false,
              inputs: [
                { internalType: "address", name: "to", type: "address" },
                { internalType: "uint256", name: "value", type: "uint256" },
                { internalType: "string", name: "comment", type: "string" },
              ],
              name: "transferWithComment",
              outputs: [{ internalType: "bool", name: "", type: "bool" }],
              payable: false,
              stateMutability: "nonpayable",
              type: "function",
            },
            {
              constant: true,
              inputs: [{ internalType: "uint256", name: "units", type: "uint256" }],
              name: "unitsToValue",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [{ internalType: "uint256", name: "index", type: "uint256" }],
              name: "validatorSignerAddressFromCurrentSet",
              outputs: [{ internalType: "address", name: "", type: "address" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [
                { internalType: "uint256", name: "index", type: "uint256" },
                { internalType: "uint256", name: "blockNumber", type: "uint256" },
              ],
              name: "validatorSignerAddressFromSet",
              outputs: [{ internalType: "address", name: "", type: "address" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
            {
              constant: true,
              inputs: [{ internalType: "uint256", name: "value", type: "uint256" }],
              name: "valueToUnits",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              payable: false,
              stateMutability: "view",
              type: "function",
            },
          ],
        },
      },
    },
  ],
} as const;

export default contracts;
