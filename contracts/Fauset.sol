// SPDX-License-Identifier: UNLISCENSED
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Faucet {
    // TODO: 実装したトークンに変更する
    ERC20 token;

    // faucet owner
    address faucetOwner;
    // TODO: 単位は調整する
    uint256 faucetDripAmount = 1;

    constructor(address _tokenAddress, address _faucetOwnerAddress) {
        token = ERC20(_tokenAddress);
        faucetOwner = _faucetOwnerAddress;
    }

    modifier onlyOwner() {
        require(msg.sender == faucetOwner, "FaucetError: Caller not owner");
        _;
    }

    function send() external {
        require(token.balanceOf(address(this)) > 1, "FaucetError: Empty");

        token.transfer(msg.sender, faucetDripAmount * 10**token.decimals());
    }

    function updateTokenAddress(address _tokenAddr) external onlyOwner {
        token = ERC20(_tokenAddr);
    }

    function updateFaucetDripAmount(uint256 _amount) external onlyOwner {
        faucetDripAmount = _amount;
    }

    // Allows the owner to withdraw tokens from the contract.
    function withdrawTokens(address _receiver, uint256 _amount)
        external
        onlyOwner
    {
        require(
            token.balanceOf(address(this)) >= _amount,
            "FaucetError: Insufficient funds"
        );
        token.transfer(_receiver, _amount);
    }
}
