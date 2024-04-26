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

export declare namespace OrdersStruct {
  export type OrderStruct = {
    id: BigNumberish;
    user_id: BigNumberish;
    seller_id: BigNumberish;
    bv_value: BigNumberish;
    sv_value: BigNumberish;
    seller_token: BigNumberish;
    date: BigNumberish;
    data: BytesLike;
    exists: boolean;
  };

  export type OrderStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    boolean
  ] & {
    id: BigNumber;
    user_id: BigNumber;
    seller_id: BigNumber;
    bv_value: BigNumber;
    sv_value: BigNumber;
    seller_token: BigNumber;
    date: BigNumber;
    data: string;
    exists: boolean;
  };
}

export interface OrdersStructInterface extends utils.Interface {
  functions: {
    "OrderList(uint256)": FunctionFragment;
    "getOrderList(uint256)": FunctionFragment;
    "order_id()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "OrderList" | "getOrderList" | "order_id"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "OrderList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrderList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "order_id", values?: undefined): string;

  decodeFunctionResult(functionFragment: "OrderList", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getOrderList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "order_id", data: BytesLike): Result;

  events: {};
}

export interface OrdersStruct extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: OrdersStructInterface;

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
    OrderList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        boolean
      ] & {
        id: BigNumber;
        user_id: BigNumber;
        seller_id: BigNumber;
        bv_value: BigNumber;
        sv_value: BigNumber;
        seller_token: BigNumber;
        date: BigNumber;
        data: string;
        exists: boolean;
      }
    >;

    getOrderList(
      _order_id: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    order_id(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  OrderList(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      boolean
    ] & {
      id: BigNumber;
      user_id: BigNumber;
      seller_id: BigNumber;
      bv_value: BigNumber;
      sv_value: BigNumber;
      seller_token: BigNumber;
      date: BigNumber;
      data: string;
      exists: boolean;
    }
  >;

  getOrderList(
    _order_id: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  order_id(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    OrderList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        boolean
      ] & {
        id: BigNumber;
        user_id: BigNumber;
        seller_id: BigNumber;
        bv_value: BigNumber;
        sv_value: BigNumber;
        seller_token: BigNumber;
        date: BigNumber;
        data: string;
        exists: boolean;
      }
    >;

    getOrderList(
      _order_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<OrdersStruct.OrderStructOutput>;

    order_id(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    OrderList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrderList(
      _order_id: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    order_id(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    OrderList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOrderList(
      _order_id: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    order_id(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
