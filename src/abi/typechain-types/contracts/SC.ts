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

export type StakeMetaInputStruct = {
  user_address: string;
  plan: BigNumberish;
  daoAmount: BigNumberish;
  uvmAmount: BigNumberish;
  land_id: BigNumberish;
  stake_id: BigNumberish;
};

export type StakeMetaInputStructOutput = [
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber
] & {
  user_address: string;
  plan: BigNumber;
  daoAmount: BigNumber;
  uvmAmount: BigNumber;
  land_id: BigNumber;
  stake_id: BigNumber;
};

export interface SCInterface extends utils.Interface {
  functions: {
    "depositStake(address,uint256)": FunctionFragment;
    "number()": FunctionFragment;
    "stakeMeta((address,uint256,uint256,uint256,uint256,uint256))": FunctionFragment;
    "transferToken(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "depositStake"
      | "number"
      | "stakeMeta"
      | "transferToken"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "depositStake",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "number", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "stakeMeta",
    values: [StakeMetaInputStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "transferToken",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "depositStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "number", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakeMeta", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferToken",
    data: BytesLike
  ): Result;

  events: {};
}

export interface SC extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SCInterface;

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
    depositStake(
      user_address: string,
      stake_id: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    number(overrides?: CallOverrides): Promise<[BigNumber]>;

    stakeMeta(
      stake_input: StakeMetaInputStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    transferToken(
      stake_addr: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  depositStake(
    user_address: string,
    stake_id: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  number(overrides?: CallOverrides): Promise<BigNumber>;

  stakeMeta(
    stake_input: StakeMetaInputStruct,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  transferToken(
    stake_addr: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    depositStake(
      user_address: string,
      stake_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    number(overrides?: CallOverrides): Promise<BigNumber>;

    stakeMeta(
      stake_input: StakeMetaInputStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    transferToken(stake_addr: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    depositStake(
      user_address: string,
      stake_id: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    number(overrides?: CallOverrides): Promise<BigNumber>;

    stakeMeta(
      stake_input: StakeMetaInputStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    transferToken(
      stake_addr: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    depositStake(
      user_address: string,
      stake_id: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    number(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stakeMeta(
      stake_input: StakeMetaInputStruct,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    transferToken(
      stake_addr: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
