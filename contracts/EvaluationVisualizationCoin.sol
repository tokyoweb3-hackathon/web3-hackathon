// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EvaluationVisualizationToken is ERC20 {
  uint constant _initial_supply = 1000000 * (10**18);

  constructor() ERC20("EvaluationVisualizationToken", "EV") {
    _mint(msg.sender, _initial_supply);
  }
}