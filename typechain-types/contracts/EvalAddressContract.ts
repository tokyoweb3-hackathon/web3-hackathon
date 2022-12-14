/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace EvalAddressContract {
  export type GeneralTokenStruct = {
    evalAddressId: PromiseOrValue<BigNumberish>;
    amount: PromiseOrValue<BigNumberish>;
    message: PromiseOrValue<string>;
    sended_at: PromiseOrValue<BigNumberish>;
  };

  export type GeneralTokenStructOutput = [
    BigNumber,
    BigNumber,
    string,
    BigNumber
  ] & {
    evalAddressId: BigNumber;
    amount: BigNumber;
    message: string;
    sended_at: BigNumber;
  };

  export type EvalAddressStruct = {
    name: PromiseOrValue<string>;
    id: PromiseOrValue<BigNumberish>;
    total: PromiseOrValue<BigNumberish>;
  };

  export type EvalAddressStructOutput = [string, BigNumber, BigNumber] & {
    name: string;
    id: BigNumber;
    total: BigNumber;
  };
}

export interface EvalAddressContractInterface extends utils.Interface {
  functions: {
    "countEvalAddress(address)": FunctionFragment;
    "createEvalAddress(address,string[])": FunctionFragment;
    "evaluation(address,address,uint256,uint256,string)": FunctionFragment;
    "getReceivedTokens(address)": FunctionFragment;
    "getSendedTokens(address)": FunctionFragment;
    "myEvalAddresses(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "countEvalAddress"
      | "createEvalAddress"
      | "evaluation"
      | "getReceivedTokens"
      | "getSendedTokens"
      | "myEvalAddresses"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "countEvalAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "createEvalAddress",
    values: [PromiseOrValue<string>, PromiseOrValue<string>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "evaluation",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getReceivedTokens",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getSendedTokens",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "myEvalAddresses",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "countEvalAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createEvalAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "evaluation", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getReceivedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSendedTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "myEvalAddresses",
    data: BytesLike
  ): Result;

  events: {};
}

export interface EvalAddressContract extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EvalAddressContractInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    countEvalAddress(
      _sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    createEvalAddress(
      _sender: PromiseOrValue<string>,
      _names: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    evaluation(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _evalAddressId: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      _message: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getReceivedTokens(
      _sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[EvalAddressContract.GeneralTokenStructOutput[]]>;

    getSendedTokens(
      _sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[EvalAddressContract.GeneralTokenStructOutput[]]>;

    myEvalAddresses(
      _sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[EvalAddressContract.EvalAddressStructOutput[]]>;
  };

  countEvalAddress(
    _sender: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  createEvalAddress(
    _sender: PromiseOrValue<string>,
    _names: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  evaluation(
    _from: PromiseOrValue<string>,
    _to: PromiseOrValue<string>,
    _evalAddressId: PromiseOrValue<BigNumberish>,
    _amount: PromiseOrValue<BigNumberish>,
    _message: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getReceivedTokens(
    _sender: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<EvalAddressContract.GeneralTokenStructOutput[]>;

  getSendedTokens(
    _sender: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<EvalAddressContract.GeneralTokenStructOutput[]>;

  myEvalAddresses(
    _sender: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<EvalAddressContract.EvalAddressStructOutput[]>;

  callStatic: {
    countEvalAddress(
      _sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createEvalAddress(
      _sender: PromiseOrValue<string>,
      _names: PromiseOrValue<string>[],
      overrides?: CallOverrides
    ): Promise<void>;

    evaluation(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _evalAddressId: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      _message: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getReceivedTokens(
      _sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<EvalAddressContract.GeneralTokenStructOutput[]>;

    getSendedTokens(
      _sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<EvalAddressContract.GeneralTokenStructOutput[]>;

    myEvalAddresses(
      _sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<EvalAddressContract.EvalAddressStructOutput[]>;
  };

  filters: {};

  estimateGas: {
    countEvalAddress(
      _sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    createEvalAddress(
      _sender: PromiseOrValue<string>,
      _names: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    evaluation(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _evalAddressId: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      _message: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getReceivedTokens(
      _sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSendedTokens(
      _sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    myEvalAddresses(
      _sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    countEvalAddress(
      _sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    createEvalAddress(
      _sender: PromiseOrValue<string>,
      _names: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    evaluation(
      _from: PromiseOrValue<string>,
      _to: PromiseOrValue<string>,
      _evalAddressId: PromiseOrValue<BigNumberish>,
      _amount: PromiseOrValue<BigNumberish>,
      _message: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getReceivedTokens(
      _sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSendedTokens(
      _sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    myEvalAddresses(
      _sender: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
