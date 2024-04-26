/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Dev, DevInterface } from "../../../contracts/gateway_helpers/Dev";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "DevTimeOver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "isDev",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "switchToProduction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526000805460ff60a01b1916600160a01b17905534801561002357600080fd5b50338061004a57604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b61005381610059565b506100a9565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610216806100b86000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063715018a61461005c5780638da5cb5b14610066578063c2f29eb014610086578063f079914f1461008e578063f2fde38b146100b2575b600080fd5b6100646100c5565b005b6000546040516001600160a01b0390911681526020015b60405180910390f35b6100646100d9565b6000546100a290600160a01b900460ff1681565b604051901515815260200161007d565b6100646100c03660046101b0565b6100f0565b6100cd610133565b6100d76000610160565b565b6100e1610133565b6000805460ff60a01b19169055565b6100f8610133565b6001600160a01b03811661012757604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b61013081610160565b50565b6000546001600160a01b031633146100d75760405163118cdaa760e01b815233600482015260240161011e565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6000602082840312156101c257600080fd5b81356001600160a01b03811681146101d957600080fd5b939250505056fea26469706673582212207e70bfbb0dfb20d396139287c78c65fb6633939b6f1bcf238fbd2605031f0dc664736f6c63430008140033";

type DevConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DevConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Dev__factory extends ContractFactory {
  constructor(...args: DevConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: string }): Promise<Dev> {
    return super.deploy(overrides || {}) as Promise<Dev>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Dev {
    return super.attach(address) as Dev;
  }
  override connect(signer: Signer): Dev__factory {
    return super.connect(signer) as Dev__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DevInterface {
    return new utils.Interface(_abi) as DevInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Dev {
    return new Contract(address, _abi, signerOrProvider) as Dev;
  }
}
