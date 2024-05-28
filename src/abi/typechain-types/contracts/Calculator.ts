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
} from "../common";

export declare namespace UsersStruct {
  export type BusinessValueStruct = {
    left: BigNumberish;
    right: BigNumberish;
    all_left: BigNumberish;
    all_right: BigNumberish;
    dir: BigNumberish;
    level: BigNumberish;
    summ: BigNumberish;
    dnm_withdraw: BigNumberish;
  };

  export type BusinessValueStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ] & {
    left: BigNumber;
    right: BigNumber;
    all_left: BigNumber;
    all_right: BigNumber;
    dir: BigNumber;
    level: BigNumber;
    summ: BigNumber;
    dnm_withdraw: BigNumber;
  };

  export type LastOrderStruct = {
    date: BigNumberish;
    order_id: BigNumberish;
    bv_level: BigNumberish;
  };

  export type LastOrderStructOutput = [BigNumber, BigNumber, BigNumber] & {
    date: BigNumber;
    order_id: BigNumber;
    bv_level: BigNumber;
  };

  export type UserStruct = {
    id: BigNumberish;
    bv: UsersStruct.BusinessValueStruct;
    last_order: UsersStruct.LastOrderStruct;
    depth: BigNumberish;
    pending_withdraw: BigNumberish;
    levelup_count: BigNumberish;
    lastweek: BigNumberish;
    step: BigNumberish;
    pending_voucher: BigNumberish;
    exists: boolean;
    data: BytesLike;
  };

  export type UserStructOutput = [
    BigNumber,
    UsersStruct.BusinessValueStructOutput,
    UsersStruct.LastOrderStructOutput,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    string
  ] & {
    id: BigNumber;
    bv: UsersStruct.BusinessValueStructOutput;
    last_order: UsersStruct.LastOrderStructOutput;
    depth: BigNumber;
    pending_withdraw: BigNumber;
    levelup_count: BigNumber;
    lastweek: BigNumber;
    step: BigNumber;
    pending_voucher: BigNumber;
    exists: boolean;
    data: string;
  };

  export type UserInfoStruct = {
    user: UsersStruct.UserStruct;
    user_address: string;
  };

  export type UserInfoStructOutput = [UsersStruct.UserStructOutput, string] & {
    user: UsersStruct.UserStructOutput;
    user_address: string;
  };
}

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

export interface CalculatorInterface extends utils.Interface {
  functions: {
    "BVPlan(uint256)": FunctionFragment;
    "DNM_VOUCHER_MAX_REWARD()": FunctionFragment;
    "ListLevelUpDate(uint256)": FunctionFragment;
    "OrderList(uint256)": FunctionFragment;
    "UserAddress(uint256)": FunctionFragment;
    "UserLevelUpDateIndex(uint256,uint256)": FunctionFragment;
    "UserList(address)": FunctionFragment;
    "UsersPaths(uint256,uint256)": FunctionFragment;
    "UsersPathsHash(uint256,uint256)": FunctionFragment;
    "calcW((uint256,(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),(uint256,uint256,uint256),uint256,uint256,uint256,uint256,uint256,uint256,bool,bytes32),uint256)": FunctionFragment;
    "calculateOrder((uint256,(uint256,uint256,uint256,uint256,uint256,uint256,uint256,uint256),(uint256,uint256,uint256),uint256,uint256,uint256,uint256,uint256,uint256,bool,bytes32),(uint256,uint256,uint256,uint256,uint256,uint256,uint256,bytes32,bool),uint256,uint256,uint256)": FunctionFragment;
    "getOrderList(uint256)": FunctionFragment;
    "getOrderLists(uint256,uint256)": FunctionFragment;
    "getUser(uint256,bool)": FunctionFragment;
    "getUser(address)": FunctionFragment;
    "getUserList(uint256,uint256)": FunctionFragment;
    "getWeekNumber(uint256)": FunctionFragment;
    "level_up_data_index()": FunctionFragment;
    "order_id()": FunctionFragment;
    "user_id()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "BVPlan"
      | "DNM_VOUCHER_MAX_REWARD"
      | "ListLevelUpDate"
      | "OrderList"
      | "UserAddress"
      | "UserLevelUpDateIndex"
      | "UserList"
      | "UsersPaths"
      | "UsersPathsHash"
      | "calcW"
      | "calculateOrder"
      | "getOrderList"
      | "getOrderLists"
      | "getUser(uint256,bool)"
      | "getUser(address)"
      | "getUserList"
      | "getWeekNumber"
      | "level_up_data_index"
      | "order_id"
      | "user_id"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "BVPlan",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "DNM_VOUCHER_MAX_REWARD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ListLevelUpDate",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "OrderList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "UserAddress",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "UserLevelUpDateIndex",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "UserList", values: [string]): string;
  encodeFunctionData(
    functionFragment: "UsersPaths",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "UsersPathsHash",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calcW",
    values: [UsersStruct.UserStruct, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateOrder",
    values: [
      UsersStruct.UserStruct,
      OrdersStruct.OrderStruct,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrderList",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrderLists",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getUser(uint256,bool)",
    values: [BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "getUser(address)",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getUserList",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getWeekNumber",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "level_up_data_index",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "order_id", values?: undefined): string;
  encodeFunctionData(functionFragment: "user_id", values?: undefined): string;

  decodeFunctionResult(functionFragment: "BVPlan", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "DNM_VOUCHER_MAX_REWARD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ListLevelUpDate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "OrderList", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "UserAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "UserLevelUpDateIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "UserList", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "UsersPaths", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "UsersPathsHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "calcW", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrderList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOrderLists",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUser(uint256,bool)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUser(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getWeekNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "level_up_data_index",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "order_id", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "user_id", data: BytesLike): Result;

  events: {
    "Ceil(uint256,uint256,uint256)": EventFragment;
    "CreatedUser(address,uint256)": EventFragment;
    "LevelUp(uint256,uint256,uint256)": EventFragment;
    "NewOrderEvent(uint256,uint256,uint256)": EventFragment;
    "WeekCalculate(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Ceil"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreatedUser"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LevelUp"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewOrderEvent"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "WeekCalculate"): EventFragment;
}

export interface CeilEventObject {
  user_id: BigNumber;
  week: BigNumber;
  level: BigNumber;
}
export type CeilEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  CeilEventObject
>;

export type CeilEventFilter = TypedEventFilter<CeilEvent>;

export interface CreatedUserEventObject {
  user_address: string;
  user_id: BigNumber;
}
export type CreatedUserEvent = TypedEvent<
  [string, BigNumber],
  CreatedUserEventObject
>;

export type CreatedUserEventFilter = TypedEventFilter<CreatedUserEvent>;

export interface LevelUpEventObject {
  user_id: BigNumber;
  date: BigNumber;
  level: BigNumber;
}
export type LevelUpEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  LevelUpEventObject
>;

export type LevelUpEventFilter = TypedEventFilter<LevelUpEvent>;

export interface NewOrderEventEventObject {
  id: BigNumber;
  seller_id: BigNumber;
  user_id: BigNumber;
}
export type NewOrderEventEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber],
  NewOrderEventEventObject
>;

export type NewOrderEventEventFilter = TypedEventFilter<NewOrderEventEvent>;

export interface WeekCalculateEventObject {
  user_id: BigNumber;
  week: BigNumber;
}
export type WeekCalculateEvent = TypedEvent<
  [BigNumber, BigNumber],
  WeekCalculateEventObject
>;

export type WeekCalculateEventFilter = TypedEventFilter<WeekCalculateEvent>;

export interface Calculator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CalculatorInterface;

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
    BVPlan(arg0: BigNumberish, overrides?: CallOverrides): Promise<[BigNumber]>;

    DNM_VOUCHER_MAX_REWARD(overrides?: CallOverrides): Promise<[BigNumber]>;

    ListLevelUpDate(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { date: BigNumber; level: BigNumber }>;

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

    UserAddress(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    UserLevelUpDateIndex(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    UserList(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        UsersStruct.BusinessValueStructOutput,
        UsersStruct.LastOrderStructOutput,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        string
      ] & {
        id: BigNumber;
        bv: UsersStruct.BusinessValueStructOutput;
        last_order: UsersStruct.LastOrderStructOutput;
        depth: BigNumber;
        pending_withdraw: BigNumber;
        levelup_count: BigNumber;
        lastweek: BigNumber;
        step: BigNumber;
        pending_voucher: BigNumber;
        exists: boolean;
        data: string;
      }
    >;

    UsersPaths(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    UsersPathsHash(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    calcW(
      user: UsersStruct.UserStruct,
      voucher_paid: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    calculateOrder(
      user: UsersStruct.UserStruct,
      order: OrdersStruct.OrderStruct,
      ulevel: BigNumberish,
      lr: BigNumberish,
      voucher_paid: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    getOrderList(
      _order_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [OrdersStruct.OrderStructOutput] & {
        order: OrdersStruct.OrderStructOutput;
      }
    >;

    getOrderLists(
      fromId: BigNumberish,
      toId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[OrdersStruct.OrderStructOutput[]]>;

    "getUser(uint256,bool)"(
      _user_id: BigNumberish,
      ignore_validation: boolean,
      overrides?: CallOverrides
    ): Promise<[string, UsersStruct.UserStructOutput]>;

    "getUser(address)"(
      user_address: string,
      overrides?: CallOverrides
    ): Promise<
      [UsersStruct.UserStructOutput] & { user: UsersStruct.UserStructOutput }
    >;

    getUserList(
      fromId: BigNumberish,
      toId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[UsersStruct.UserInfoStructOutput[]]>;

    getWeekNumber(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    level_up_data_index(overrides?: CallOverrides): Promise<[BigNumber]>;

    order_id(overrides?: CallOverrides): Promise<[BigNumber]>;

    user_id(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  BVPlan(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  DNM_VOUCHER_MAX_REWARD(overrides?: CallOverrides): Promise<BigNumber>;

  ListLevelUpDate(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { date: BigNumber; level: BigNumber }>;

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

  UserAddress(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  UserLevelUpDateIndex(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  UserList(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      UsersStruct.BusinessValueStructOutput,
      UsersStruct.LastOrderStructOutput,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean,
      string
    ] & {
      id: BigNumber;
      bv: UsersStruct.BusinessValueStructOutput;
      last_order: UsersStruct.LastOrderStructOutput;
      depth: BigNumber;
      pending_withdraw: BigNumber;
      levelup_count: BigNumber;
      lastweek: BigNumber;
      step: BigNumber;
      pending_voucher: BigNumber;
      exists: boolean;
      data: string;
    }
  >;

  UsersPaths(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  UsersPathsHash(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  calcW(
    user: UsersStruct.UserStruct,
    voucher_paid: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  calculateOrder(
    user: UsersStruct.UserStruct,
    order: OrdersStruct.OrderStruct,
    ulevel: BigNumberish,
    lr: BigNumberish,
    voucher_paid: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  getOrderList(
    _order_id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<OrdersStruct.OrderStructOutput>;

  getOrderLists(
    fromId: BigNumberish,
    toId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<OrdersStruct.OrderStructOutput[]>;

  "getUser(uint256,bool)"(
    _user_id: BigNumberish,
    ignore_validation: boolean,
    overrides?: CallOverrides
  ): Promise<[string, UsersStruct.UserStructOutput]>;

  "getUser(address)"(
    user_address: string,
    overrides?: CallOverrides
  ): Promise<UsersStruct.UserStructOutput>;

  getUserList(
    fromId: BigNumberish,
    toId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<UsersStruct.UserInfoStructOutput[]>;

  getWeekNumber(
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  level_up_data_index(overrides?: CallOverrides): Promise<BigNumber>;

  order_id(overrides?: CallOverrides): Promise<BigNumber>;

  user_id(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    BVPlan(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    DNM_VOUCHER_MAX_REWARD(overrides?: CallOverrides): Promise<BigNumber>;

    ListLevelUpDate(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { date: BigNumber; level: BigNumber }>;

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

    UserAddress(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    UserLevelUpDateIndex(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    UserList(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        UsersStruct.BusinessValueStructOutput,
        UsersStruct.LastOrderStructOutput,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        string
      ] & {
        id: BigNumber;
        bv: UsersStruct.BusinessValueStructOutput;
        last_order: UsersStruct.LastOrderStructOutput;
        depth: BigNumber;
        pending_withdraw: BigNumber;
        levelup_count: BigNumber;
        lastweek: BigNumber;
        step: BigNumber;
        pending_voucher: BigNumber;
        exists: boolean;
        data: string;
      }
    >;

    UsersPaths(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    UsersPathsHash(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    calcW(
      user: UsersStruct.UserStruct,
      voucher_paid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<UsersStruct.UserStructOutput>;

    calculateOrder(
      user: UsersStruct.UserStruct,
      order: OrdersStruct.OrderStruct,
      ulevel: BigNumberish,
      lr: BigNumberish,
      voucher_paid: BigNumberish,
      overrides?: CallOverrides
    ): Promise<UsersStruct.UserStructOutput>;

    getOrderList(
      _order_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<OrdersStruct.OrderStructOutput>;

    getOrderLists(
      fromId: BigNumberish,
      toId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<OrdersStruct.OrderStructOutput[]>;

    "getUser(uint256,bool)"(
      _user_id: BigNumberish,
      ignore_validation: boolean,
      overrides?: CallOverrides
    ): Promise<[string, UsersStruct.UserStructOutput]>;

    "getUser(address)"(
      user_address: string,
      overrides?: CallOverrides
    ): Promise<UsersStruct.UserStructOutput>;

    getUserList(
      fromId: BigNumberish,
      toId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<UsersStruct.UserInfoStructOutput[]>;

    getWeekNumber(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    level_up_data_index(overrides?: CallOverrides): Promise<BigNumber>;

    order_id(overrides?: CallOverrides): Promise<BigNumber>;

    user_id(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "Ceil(uint256,uint256,uint256)"(
      user_id?: null,
      week?: null,
      level?: null
    ): CeilEventFilter;
    Ceil(user_id?: null, week?: null, level?: null): CeilEventFilter;

    "CreatedUser(address,uint256)"(
      user_address?: string | null,
      user_id?: BigNumberish | null
    ): CreatedUserEventFilter;
    CreatedUser(
      user_address?: string | null,
      user_id?: BigNumberish | null
    ): CreatedUserEventFilter;

    "LevelUp(uint256,uint256,uint256)"(
      user_id?: BigNumberish | null,
      date?: BigNumberish | null,
      level?: BigNumberish | null
    ): LevelUpEventFilter;
    LevelUp(
      user_id?: BigNumberish | null,
      date?: BigNumberish | null,
      level?: BigNumberish | null
    ): LevelUpEventFilter;

    "NewOrderEvent(uint256,uint256,uint256)"(
      id?: BigNumberish | null,
      seller_id?: BigNumberish | null,
      user_id?: BigNumberish | null
    ): NewOrderEventEventFilter;
    NewOrderEvent(
      id?: BigNumberish | null,
      seller_id?: BigNumberish | null,
      user_id?: BigNumberish | null
    ): NewOrderEventEventFilter;

    "WeekCalculate(uint256,uint256)"(
      user_id?: null,
      week?: null
    ): WeekCalculateEventFilter;
    WeekCalculate(user_id?: null, week?: null): WeekCalculateEventFilter;
  };

  estimateGas: {
    BVPlan(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    DNM_VOUCHER_MAX_REWARD(overrides?: CallOverrides): Promise<BigNumber>;

    ListLevelUpDate(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    OrderList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    UserAddress(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    UserLevelUpDateIndex(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    UserList(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    UsersPaths(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    UsersPathsHash(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calcW(
      user: UsersStruct.UserStruct,
      voucher_paid: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    calculateOrder(
      user: UsersStruct.UserStruct,
      order: OrdersStruct.OrderStruct,
      ulevel: BigNumberish,
      lr: BigNumberish,
      voucher_paid: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    getOrderList(
      _order_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrderLists(
      fromId: BigNumberish,
      toId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getUser(uint256,bool)"(
      _user_id: BigNumberish,
      ignore_validation: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getUser(address)"(
      user_address: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getUserList(
      fromId: BigNumberish,
      toId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getWeekNumber(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    level_up_data_index(overrides?: CallOverrides): Promise<BigNumber>;

    order_id(overrides?: CallOverrides): Promise<BigNumber>;

    user_id(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    BVPlan(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    DNM_VOUCHER_MAX_REWARD(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ListLevelUpDate(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    OrderList(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    UserAddress(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    UserLevelUpDateIndex(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    UserList(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    UsersPaths(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    UsersPathsHash(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calcW(
      user: UsersStruct.UserStruct,
      voucher_paid: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    calculateOrder(
      user: UsersStruct.UserStruct,
      order: OrdersStruct.OrderStruct,
      ulevel: BigNumberish,
      lr: BigNumberish,
      voucher_paid: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    getOrderList(
      _order_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOrderLists(
      fromId: BigNumberish,
      toId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getUser(uint256,bool)"(
      _user_id: BigNumberish,
      ignore_validation: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getUser(address)"(
      user_address: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserList(
      fromId: BigNumberish,
      toId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getWeekNumber(
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    level_up_data_index(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    order_id(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    user_id(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
