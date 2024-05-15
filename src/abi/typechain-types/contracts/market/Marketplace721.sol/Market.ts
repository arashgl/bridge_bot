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
} from "../../../common";

export declare namespace ILazyMintStruct {
  export type MetaTokenStruct = { tokenUri: string };

  export type MetaTokenStructOutput = [string] & { tokenUri: string };
}

export declare namespace Market {
  export type SellStruct = {
    seller: string;
    sv: BigNumberish;
    bv: BigNumberish;
    qty: BigNumberish;
  };

  export type SellStructOutput = [string, BigNumber, BigNumber, BigNumber] & {
    seller: string;
    sv: BigNumber;
    bv: BigNumber;
    qty: BigNumber;
  };

  export type BuyTokenStruct = { token_id: BigNumberish; amount: BigNumberish };

  export type BuyTokenStructOutput = [BigNumber, BigNumber] & {
    token_id: BigNumber;
    amount: BigNumber;
  };

  export type BuyLazyMintInputArgsStruct = {
    meta_token: ILazyMintStruct.MetaTokenStruct;
    token_signature: BytesLike;
    sell_struct: Market.SellStruct;
    sell_signature: BytesLike;
    buy_token: Market.BuyTokenStruct;
    data: BytesLike;
  };

  export type BuyLazyMintInputArgsStructOutput = [
    ILazyMintStruct.MetaTokenStructOutput,
    string,
    Market.SellStructOutput,
    string,
    Market.BuyTokenStructOutput,
    string
  ] & {
    meta_token: ILazyMintStruct.MetaTokenStructOutput;
    token_signature: string;
    sell_struct: Market.SellStructOutput;
    sell_signature: string;
    buy_token: Market.BuyTokenStructOutput;
    data: string;
  };
}

export interface MarketInterface extends utils.Interface {
  functions: {
    "GATEWAY()": FunctionFragment;
    "LAZY_MINT_CONTRACT()": FunctionFragment;
    "SIGNATURE_VERSION()": FunctionFragment;
    "SIGNING_DOMAIN()": FunctionFragment;
    "_token_id()": FunctionFragment;
    "addToken(address)": FunctionFragment;
    "buyNft(address,((string),bytes,(address,uint256,uint256,uint256),bytes,(uint256,uint256),bytes)[])": FunctionFragment;
    "changeLazyMint(address)": FunctionFragment;
    "eip712Domain()": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "soldCount(bytes)": FunctionFragment;
    "tokens(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "updateToken(address,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "GATEWAY"
      | "LAZY_MINT_CONTRACT"
      | "SIGNATURE_VERSION"
      | "SIGNING_DOMAIN"
      | "_token_id"
      | "addToken"
      | "buyNft"
      | "changeLazyMint"
      | "eip712Domain"
      | "onERC721Received"
      | "owner"
      | "renounceOwnership"
      | "soldCount"
      | "tokens"
      | "transferOwnership"
      | "updateToken"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "GATEWAY", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "LAZY_MINT_CONTRACT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SIGNATURE_VERSION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SIGNING_DOMAIN",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "_token_id", values?: undefined): string;
  encodeFunctionData(functionFragment: "addToken", values: [string]): string;
  encodeFunctionData(
    functionFragment: "buyNft",
    values: [string, Market.BuyLazyMintInputArgsStruct[]]
  ): string;
  encodeFunctionData(
    functionFragment: "changeLazyMint",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "eip712Domain",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [string, string, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "soldCount",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "tokens",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "updateToken",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "GATEWAY", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "LAZY_MINT_CONTRACT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SIGNATURE_VERSION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SIGNING_DOMAIN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "_token_id", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "addToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "buyNft", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeLazyMint",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "eip712Domain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "soldCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokens", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateToken",
    data: BytesLike
  ): Result;

  events: {
    "AddCollection(address,address)": EventFragment;
    "ChangeContract(address,address)": EventFragment;
    "EIP712DomainChanged()": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "SoldItem(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddCollection"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ChangeContract"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "EIP712DomainChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SoldItem"): EventFragment;
}

export interface AddCollectionEventObject {
  contractAddress: string;
  owner: string;
}
export type AddCollectionEvent = TypedEvent<
  [string, string],
  AddCollectionEventObject
>;

export type AddCollectionEventFilter = TypedEventFilter<AddCollectionEvent>;

export interface ChangeContractEventObject {
  contractAddress: string;
  owner: string;
}
export type ChangeContractEvent = TypedEvent<
  [string, string],
  ChangeContractEventObject
>;

export type ChangeContractEventFilter = TypedEventFilter<ChangeContractEvent>;

export interface EIP712DomainChangedEventObject {}
export type EIP712DomainChangedEvent = TypedEvent<
  [],
  EIP712DomainChangedEventObject
>;

export type EIP712DomainChangedEventFilter =
  TypedEventFilter<EIP712DomainChangedEvent>;

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

export interface SoldItemEventObject {
  buyer: string;
  seller: string;
  tokenId: BigNumber;
}
export type SoldItemEvent = TypedEvent<
  [string, string, BigNumber],
  SoldItemEventObject
>;

export type SoldItemEventFilter = TypedEventFilter<SoldItemEvent>;

export interface Market extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarketInterface;

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
    GATEWAY(overrides?: CallOverrides): Promise<[string]>;

    LAZY_MINT_CONTRACT(overrides?: CallOverrides): Promise<[string]>;

    SIGNATURE_VERSION(overrides?: CallOverrides): Promise<[string]>;

    SIGNING_DOMAIN(overrides?: CallOverrides): Promise<[string]>;

    _token_id(overrides?: CallOverrides): Promise<[BigNumber]>;

    addToken(
      token_address: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    buyNft(
      parent: string,
      args: Market.BuyLazyMintInputArgsStruct[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<ContractTransaction>;

    changeLazyMint(
      _lazyMint_contract_address: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    eip712Domain(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, string, string, BigNumber[]] & {
        fields: string;
        name: string;
        version: string;
        chainId: BigNumber;
        verifyingContract: string;
        salt: string;
        extensions: BigNumber[];
      }
    >;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    soldCount(arg0: BytesLike, overrides?: CallOverrides): Promise<[BigNumber]>;

    tokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;

    updateToken(
      token_address: string,
      t_id: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<ContractTransaction>;
  };

  GATEWAY(overrides?: CallOverrides): Promise<string>;

  LAZY_MINT_CONTRACT(overrides?: CallOverrides): Promise<string>;

  SIGNATURE_VERSION(overrides?: CallOverrides): Promise<string>;

  SIGNING_DOMAIN(overrides?: CallOverrides): Promise<string>;

  _token_id(overrides?: CallOverrides): Promise<BigNumber>;

  addToken(
    token_address: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  buyNft(
    parent: string,
    args: Market.BuyLazyMintInputArgsStruct[],
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractTransaction>;

  changeLazyMint(
    _lazyMint_contract_address: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  eip712Domain(
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, BigNumber, string, string, BigNumber[]] & {
      fields: string;
      name: string;
      version: string;
      chainId: BigNumber;
      verifyingContract: string;
      salt: string;
      extensions: BigNumber[];
    }
  >;

  onERC721Received(
    arg0: string,
    arg1: string,
    arg2: BigNumberish,
    arg3: BytesLike,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  soldCount(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  tokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  updateToken(
    token_address: string,
    t_id: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<ContractTransaction>;

  callStatic: {
    GATEWAY(overrides?: CallOverrides): Promise<string>;

    LAZY_MINT_CONTRACT(overrides?: CallOverrides): Promise<string>;

    SIGNATURE_VERSION(overrides?: CallOverrides): Promise<string>;

    SIGNING_DOMAIN(overrides?: CallOverrides): Promise<string>;

    _token_id(overrides?: CallOverrides): Promise<BigNumber>;

    addToken(
      token_address: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    buyNft(
      parent: string,
      args: Market.BuyLazyMintInputArgsStruct[],
      overrides?: CallOverrides
    ): Promise<void>;

    changeLazyMint(
      _lazyMint_contract_address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    eip712Domain(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, string, string, BigNumber[]] & {
        fields: string;
        name: string;
        version: string;
        chainId: BigNumber;
        verifyingContract: string;
        salt: string;
        extensions: BigNumber[];
      }
    >;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    soldCount(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    tokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    updateToken(
      token_address: string,
      t_id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "AddCollection(address,address)"(
      contractAddress?: null,
      owner?: null
    ): AddCollectionEventFilter;
    AddCollection(
      contractAddress?: null,
      owner?: null
    ): AddCollectionEventFilter;

    "ChangeContract(address,address)"(
      contractAddress?: null,
      owner?: null
    ): ChangeContractEventFilter;
    ChangeContract(
      contractAddress?: null,
      owner?: null
    ): ChangeContractEventFilter;

    "EIP712DomainChanged()"(): EIP712DomainChangedEventFilter;
    EIP712DomainChanged(): EIP712DomainChangedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "SoldItem(address,address,uint256)"(
      buyer?: string | null,
      seller?: string | null,
      tokenId?: BigNumberish | null
    ): SoldItemEventFilter;
    SoldItem(
      buyer?: string | null,
      seller?: string | null,
      tokenId?: BigNumberish | null
    ): SoldItemEventFilter;
  };

  estimateGas: {
    GATEWAY(overrides?: CallOverrides): Promise<BigNumber>;

    LAZY_MINT_CONTRACT(overrides?: CallOverrides): Promise<BigNumber>;

    SIGNATURE_VERSION(overrides?: CallOverrides): Promise<BigNumber>;

    SIGNING_DOMAIN(overrides?: CallOverrides): Promise<BigNumber>;

    _token_id(overrides?: CallOverrides): Promise<BigNumber>;

    addToken(
      token_address: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    buyNft(
      parent: string,
      args: Market.BuyLazyMintInputArgsStruct[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<BigNumber>;

    changeLazyMint(
      _lazyMint_contract_address: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    eip712Domain(overrides?: CallOverrides): Promise<BigNumber>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    soldCount(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    tokens(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;

    updateToken(
      token_address: string,
      t_id: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    GATEWAY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    LAZY_MINT_CONTRACT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    SIGNATURE_VERSION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SIGNING_DOMAIN(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _token_id(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addToken(
      token_address: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    buyNft(
      parent: string,
      args: Market.BuyLazyMintInputArgsStruct[],
      overrides?: PayableOverrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    changeLazyMint(
      _lazyMint_contract_address: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    eip712Domain(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: string,
      arg1: string,
      arg2: BigNumberish,
      arg3: BytesLike,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    soldCount(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokens(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;

    updateToken(
      token_address: string,
      t_id: BigNumberish,
      overrides?: Overrides & { from?: string }
    ): Promise<PopulatedTransaction>;
  };
}
