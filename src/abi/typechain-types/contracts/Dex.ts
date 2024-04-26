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
} from "../common";

export interface DexInterface extends utils.Interface {
  functions: {
    "addLiquidity(address,uint256)": FunctionFragment;
    "balanceOf(address,address)": FunctionFragment;
    "dexAddress()": FunctionFragment;
    "getSwapRate(address,address,uint256)": FunctionFragment;
    "swap(address,address,uint256)": FunctionFragment;
    "token1()": FunctionFragment;
    "token2()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addLiquidity"
      | "balanceOf"
      | "dexAddress"
      | "getSwapRate"
      | "swap"
      | "token1"
      | "token2"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addLiquidity",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceOf",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "dexAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSwapRate",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "token1", values?: undefined): string;
  encodeFunctionData(functionFragment: "token2", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "addLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dexAddress", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getSwapRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token2", data: BytesLike): Result;

  events: {};
}

export interface Dex extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DexInterface;

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
    addLiquidity(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    balanceOf(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    dexAddress(overrides?: CallOverrides): Promise<[string]>;

    getSwapRate(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    swap(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    token1(overrides?: CallOverrides): Promise<[string]>;

    token2(overrides?: CallOverrides): Promise<[string]>;
  };

  addLiquidity(
    tokenAddress: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  balanceOf(
    token: string,
    account: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  dexAddress(overrides?: CallOverrides): Promise<string>;

  getSwapRate(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  swap(
    from: string,
    to: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  token1(overrides?: CallOverrides): Promise<string>;

  token2(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    addLiquidity(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    balanceOf(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    dexAddress(overrides?: CallOverrides): Promise<string>;

    getSwapRate(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swap(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    token1(overrides?: CallOverrides): Promise<string>;

    token2(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    addLiquidity(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    balanceOf(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    dexAddress(overrides?: CallOverrides): Promise<BigNumber>;

    getSwapRate(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    swap(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    token1(overrides?: CallOverrides): Promise<BigNumber>;

    token2(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addLiquidity(
      tokenAddress: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    balanceOf(
      token: string,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    dexAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getSwapRate(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    swap(
      from: string,
      to: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token2(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
