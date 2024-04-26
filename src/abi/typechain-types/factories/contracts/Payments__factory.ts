/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Payments, PaymentsInterface } from "../../contracts/Payments";

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
    inputs: [],
    name: "InvalidPayment",
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
    inputs: [],
    name: "PaymentError",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferError",
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
    name: "Token1",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "Token2",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "wallet_address",
        type: "address",
      },
    ],
    name: "changeFeeWallet",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "feeWallet",
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
  "0x60806040526000805460ff60a01b1916600160a01b17905534801561002357600080fd5b50338061004a57604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b6100538161006b565b50600380546001600160a01b031916331790556100bb565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6102d2806100ca6000396000f3fe608060405234801561001057600080fd5b50600436106100935760003560e01c8063a4baecc911610066578063a4baecc9146100f2578063c2f29eb014610105578063f079914f1461010d578063f25f4b5614610131578063f2fde38b1461014457600080fd5b80633e4d031014610098578063715018a6146100ad5780638da5cb5b146100b557806396a8797e146100df575b600080fd5b6100ab6100a636600461026c565b610157565b005b6100ab610181565b6000546001600160a01b03165b6040516001600160a01b0390911681526020015b60405180910390f35b6001546100c2906001600160a01b031681565b6002546100c2906001600160a01b031681565b6100ab610195565b60005461012190600160a01b900460ff1681565b60405190151581526020016100d6565b6003546100c2906001600160a01b031681565b6100ab61015236600461026c565b6101ac565b61015f6101ef565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b6101896101ef565b610193600061021c565b565b61019d6101ef565b6000805460ff60a01b19169055565b6101b46101ef565b6001600160a01b0381166101e357604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b6101ec8161021c565b50565b6000546001600160a01b031633146101935760405163118cdaa760e01b81523360048201526024016101da565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b60006020828403121561027e57600080fd5b81356001600160a01b038116811461029557600080fd5b939250505056fea264697066735822122025b1a8417ac272f992267c6053ebc7d2c152542201e68ad3193a805f0f75c30464736f6c63430008140033";

type PaymentsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PaymentsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Payments__factory extends ContractFactory {
  constructor(...args: PaymentsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<Payments> {
    return super.deploy(overrides || {}) as Promise<Payments>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Payments {
    return super.attach(address) as Payments;
  }
  override connect(signer: Signer): Payments__factory {
    return super.connect(signer) as Payments__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PaymentsInterface {
    return new utils.Interface(_abi) as PaymentsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Payments {
    return new Contract(address, _abi, signerOrProvider) as Payments;
  }
}