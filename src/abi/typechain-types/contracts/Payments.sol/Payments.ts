/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export interface PaymentsInterface extends utils.Interface {
  functions: {
    "DnmTokenAddress()": FunctionFragment;
    "Token1()": FunctionFragment;
    "Token2()": FunctionFragment;
    "changeFeeWallet(address)": FunctionFragment;
    "feeWallet()": FunctionFragment;
    "isDev()": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "switchToProduction()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DnmTokenAddress"
      | "Token1"
      | "Token2"
      | "changeFeeWallet"
      | "feeWallet"
      | "isDev"
      | "owner"
      | "renounceOwnership"
      | "switchToProduction"
      | "transferOwnership"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DnmTokenAddress",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "Token1", values?: undefined): string;
  encodeFunctionData(functionFragment: "Token2", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "changeFeeWallet",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "feeWallet", values?: undefined): string;
  encodeFunctionData(functionFragment: "isDev", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "switchToProduction",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "DnmTokenAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "Token1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "Token2", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeFeeWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "feeWallet", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isDev", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "switchToProduction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface Payments extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PaymentsInterface;

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
    DnmTokenAddress(overrides?: CallOverrides): Promise<[string]>;

    Token1(overrides?: CallOverrides): Promise<[string]>;

    Token2(overrides?: CallOverrides): Promise<[string]>;

    changeFeeWallet(
      wallet_address: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    feeWallet(overrides?: CallOverrides): Promise<[string]>;

    isDev(overrides?: CallOverrides): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    switchToProduction(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  DnmTokenAddress(overrides?: CallOverrides): Promise<string>;

  Token1(overrides?: CallOverrides): Promise<string>;

  Token2(overrides?: CallOverrides): Promise<string>;

  changeFeeWallet(
    wallet_address: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  feeWallet(overrides?: CallOverrides): Promise<string>;

  isDev(overrides?: CallOverrides): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  switchToProduction(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    DnmTokenAddress(overrides?: CallOverrides): Promise<string>;

    Token1(overrides?: CallOverrides): Promise<string>;

    Token2(overrides?: CallOverrides): Promise<string>;

    changeFeeWallet(
      wallet_address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    feeWallet(overrides?: CallOverrides): Promise<string>;

    isDev(overrides?: CallOverrides): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    switchToProduction(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    DnmTokenAddress(overrides?: CallOverrides): Promise<BigNumber>;

    Token1(overrides?: CallOverrides): Promise<BigNumber>;

    Token2(overrides?: CallOverrides): Promise<BigNumber>;

    changeFeeWallet(
      wallet_address: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    feeWallet(overrides?: CallOverrides): Promise<BigNumber>;

    isDev(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    switchToProduction(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DnmTokenAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    Token1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    Token2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeFeeWallet(
      wallet_address: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    feeWallet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isDev(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    switchToProduction(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
