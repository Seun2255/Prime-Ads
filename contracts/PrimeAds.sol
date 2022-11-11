// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Base64.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "./Prime.sol";

contract PrimeAds is Ownable {
    using Counters for Counters.Counter;
    using Base64 for bytes;

    Prime public token;

    constructor(Prime _addr) {
        token = _addr;
    }

    Ad[] public allAds;

    struct Ad {
        string title;
        string link;
        address owner;
        uint256 amount;
    }

    function startAd(uint256 amount, string memory title, string memory link) public payable {
        require(amount > 0, "Don't you have tokens?");
        uint balance = token.balanceOf(msg.sender);
        require(balance >= amount, "Your balance is too low");
        bool check = token.transferFrom(msg.sender, address(this), amount * 10 **18);
        require(check, "Failed to receive tokens");
        Ad memory newAd = Ad(title, link, msg.sender, amount);
        allAds.push(newAd);
    }
}