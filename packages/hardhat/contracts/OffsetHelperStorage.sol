// SPDX-FileCopyrightText: 2022 Toucan Labs
//
// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract OffsetHelperStorage is OwnableUpgradeable {
    // token symbol => token address
    mapping(string => address) public eligibleTokenAddresses;
    address public contractRegistryAddress =
        0x48E04110aa4691ec3E9493187e6e9A3dB613e6e4;
    address public sushiRouterAddress =
        0xE3D8bd6Aed4F159bc8000a9cD47CffDb95F96121;
    // user => (token => amount)
    mapping(address => mapping(address => uint256)) public balances;
}
