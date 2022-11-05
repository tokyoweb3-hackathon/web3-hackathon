const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("EvalAddress Contract", function() {
  let EvalAddressContract;

  beforeEach(async function () {
    EvalAddressContract = await ethers.getContractFactory("EvalAddressContract");
    EvalAddressContract = await EvalAddressContract.deploy();
    await EvalAddressContract.deployed();
    // 以下テストデータ
    [owner, from, to] = await ethers.getSigners();
    evaluationData = {
      evalAddressId: 1,
      amount: 5,
      message: "眠い",
    }

  });
  it ("createEvalAddress_正常に評価項目が作成されることのテスト", async function () {
    const count = 10;
    let evalAddresses = [];
    for (i = 0; i < count; i++) {
      evalAddresses[i] = "TestAddress" + i;
    }
    await EvalAddressContract.createEvalAddress(to.address, evalAddresses);
    expect(await EvalAddressContract.countEvalAddress(to.address)).to.equal(count);
  });
  it ("createEvalAddress_10項目以上の評価項目を作成してエラーになることのテスト", async function () {
    const count = 11;
    let evalAddresses = [];
    for (i = 0; i < count; i++) {
      evalAddresses[i] = "TestAddress" + i;
    }
    await expect(EvalAddressContract.createEvalAddress(to.address, evalAddresses)).to.be.revertedWith("reached eval address limit");
  });
  it ("myEvalAddresses_作成した評価項目の内容が正常に返却されることのテスト", async function () {
    const name = 'Communication';
    await EvalAddressContract.createEvalAddress(to.address, [name]);
    const result = await EvalAddressContract.myEvalAddresses(to.address);
    expect(result[0].name).to.equal(name);
    expect(result[0].id).to.equal(1);
    expect(result[0].total).to.equal(0);
  });
  it ("evaluation_ユーザーが行った評価の内容が正しいことのテスト", async function () {
    const name = "TestAddress1";
    await EvalAddressContract.createEvalAddress(to.address, [name]);
    await EvalAddressContract.evaluation(
      owner.address, 
      to.address,
      evaluationData.evalAddressId,
      evaluationData.amount,
      evaluationData.message,
    );
    sendedTokens = await EvalAddressContract.getSendedTokens(owner.address);
    expect(sendedTokens[0].evalAddressId).to.equal(evaluationData.evalAddressId);
    expect(sendedTokens[0].amount).to.equal(evaluationData.amount);
    expect(sendedTokens[0].message).to.equal(evaluationData.message);
  });
  it ("evaluation_ユーザー受け取った評価の内容が正しいことのテスト", async function () {
    const name = "TestAddress1";
    await EvalAddressContract.createEvalAddress(to.address, [name]);
    await EvalAddressContract.evaluation(
      owner.address, 
      to.address,
      evaluationData.evalAddressId,
      evaluationData.amount,
      evaluationData.message,
    );
    receivedTokens = await EvalAddressContract.getReceivedTokens(to.address);
    expect(receivedTokens[0].evalAddressId).to.equal(evaluationData.evalAddressId);
    expect(receivedTokens[0].amount).to.equal(evaluationData.amount);
    expect(receivedTokens[0].message).to.equal(evaluationData.message);
  });
  it ("evaluation_ユーザー受け取った評価の数が正しいことのテスト", async function () {
    const name = "TestAddress1";
    await EvalAddressContract.createEvalAddress(to.address, [name]);
    await EvalAddressContract.evaluation(
      owner.address, 
      to.address,
      evaluationData.evalAddressId,
      evaluationData.amount,
      evaluationData.message,
    );
    result = await EvalAddressContract.myEvalAddresses(to.address);
    expect(result[0].total).to.equal(evaluationData.amount);
  });
});