// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

contract EvalAddressContract {
  struct EvalAddress {
    string name;             // 評価アドレスの名前
    uint256 id;              // 評価アドレスID
    uint256 total;           // トークン数
  }
  struct GeneralToken {
    uint256 evalAddressId;   // 評価アドレスID
    uint256 amount;           // EVAトークンの数
    string message;          // メッセージ
    uint256 sended_at;       // 送信日時
  }
  mapping(address => EvalAddress[]) private evalAddresses;
  mapping(address => GeneralToken[]) private sendedTokens;
  mapping(address => GeneralToken[]) private receivedTokens;

  using Counters for Counters.Counter;
  Counters.Counter private evalAddressIds;

  uint256 constant MAX_EVAL_ADDRESS = 10;
  uint256 constant MAX_TOKEN_AMOUNT = 5;

  /**
   * ユーザーに紐づく評価アドレスを返します
   */
  function myEvalAddresses(address _sender) public view returns(EvalAddress[] memory)
  {
    console.log("Sender evalAddress name is %s", evalAddresses[_sender][0].name);
    return evalAddresses[_sender];
  }

  /**
   * ユーザーに紐づく受け取ったトークンを返します
   */
  function getReceivedTokens(address _sender) public view returns(GeneralToken[] memory)
  {
    return receivedTokens[_sender];
  }

  /**
   * ユーザーに紐づく送信したトークンを返します
   */
  function getSendedTokens(address _sender) public view returns(GeneralToken[] memory)
  {
    return sendedTokens[_sender];
  }

  /**
   * 評価アドレスを新規作成します
   */
  function createEvalAddress(address _sender, string[] memory _names) external
  {
    console.log("names count is %s", _names.length);
    require (MAX_EVAL_ADDRESS >= _names.length, "reached eval address limit");
    for (uint256 i = 0; i < _names.length; i++) {
      evalAddressIds.increment();
      evalAddresses[_sender].push(EvalAddress(_names[i], evalAddressIds.current(), 0)); 
    }
  }
  
  /**
   * ユーザーに紐づく評価アドレスをカウントして返却します
   */
  function countEvalAddress(address _sender) public view returns(uint256) 
  {
    return evalAddresses[_sender].length;
  }

  /**
   * トークンの送信処理
   */
  function evaluation(
    address _from, 
    address _to, 
    uint _evalAddressId, 
    uint256 _amount, 
    string memory _message
    ) 
    external payable
  {
    require(MAX_TOKEN_AMOUNT >= _amount, 'Too many Token');
    GeneralToken memory generalToken = GeneralToken({
      evalAddressId: _evalAddressId,
      amount: _amount,
      message: _message,
      sended_at: block.timestamp
    });
    sendedTokens[_from].push(generalToken);
    receivedTokens[_to].push(generalToken);
    addTotalAmount(_to, _evalAddressId, generalToken.amount);
  }

  /**
   * 評価アドレスにトークンの数を反映します
   */
  function addTotalAmount(address _to, uint256 _evalAddressId, uint256 _amount) private
  {
    console.log("test is %s", "ok");
    uint256 count = evalAddresses[_to].length;
    for (uint256 i = 0; i < count; i++) {
      if(evalAddresses[_to][i].id == _evalAddressId) {
        evalAddresses[_to][i].total += _amount;
      }
    }
  }
  
}
