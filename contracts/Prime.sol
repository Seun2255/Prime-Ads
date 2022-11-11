// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Prime is ERC20, Ownable {
    using SafeMath for uint256;

    uint256 public tokenPrice = 1000000000000000;
    address[] internal stakeholders;
    mapping(address => uint256) internal stakes;
    mapping(address => uint256) internal stakeTime;
    uint256 stakeEnd = 640800;
    event TokensBought();

    constructor() ERC20("Primal", "PRI") {
        _mint(msg.sender, 1000 * 10**18);
    }

    fallback() external payable {
        uint256 tokens =  msg.value / tokenPrice;
        _mint(msg.sender, tokens * 10**18);
    }

    receive() external payable {
        uint256 tokens =  msg.value / tokenPrice;
        _mint(msg.sender, tokens * 10**18);
    }

    function buyTokens() public payable {
        uint256 tokens =  msg.value / tokenPrice;
        _mint(msg.sender, tokens * 10**18);
        emit TokensBought();
    }

    function sellToken(uint256 amount) public payable {
        require(amount > 0, "Don't you have tokens?");
        uint balance = balanceOf(msg.sender);
        require(balance >= amount, "Your balance is too low");
        uint256 sending = amount * tokenPrice;
        uint ownerBalance = address(this).balance;
        require(ownerBalance >= sending, "Conract doesn't have enough Eth");
        bool check = transfer(address(this), amount * 10 ** 18);
        require(check, "Failed to receive tokens");
        (bool sent, ) = msg.sender.call{value: sending}("");
        require(sent, "Failed to send Ether");
    }

    function modifyTokenBuyPrice(uint256 amount) public onlyOwner {
        tokenPrice = amount * 10 ** 18;
    }

    function getEthBalance(address _user) public view returns(uint) {
        uint balance = address(_user).balance;
        return balance;
    }

    function sendToken(address _to, uint256 amount) public returns(bool){
        uint balance = balanceOf(msg.sender);
        require(balance >= amount, "Your balance is too low");
        bool x = transfer(_to, amount * 10 ** 18);
        return x;
    }
}