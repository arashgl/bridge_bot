/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CallBack, CallBackInterface } from "../../contracts/CallBack";

const _abi = [
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
    inputs: [],
    name: "MintDNMError",
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
    name: "DnmTokenAddress",
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
    inputs: [
      {
        internalType: "address",
        name: "user_addr",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "order_id",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "bv_value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sv_value",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "seller_token",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "seller_address",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "data",
            type: "bytes32",
          },
        ],
        internalType: "struct Payments.PaymentData",
        name: "paymentData",
        type: "tuple",
      },
    ],
    name: "from_gateway",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x60806040526000805460ff60a01b1916600160a01b17905534801561002357600080fd5b50338061004a57604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b6100538161006b565b50600380546001600160a01b031916331790556100bb565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b610364806100ca6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c8063c2f29eb011610071578063c2f29eb01461011b578063e37fe60b14610123578063e3cc09ff14610136578063f079914f14610149578063f25f4b561461016d578063f2fde38b1461018057600080fd5b80633e4d0310146100ae578063715018a6146100c35780638da5cb5b146100cb57806396a8797e146100f5578063a4baecc914610108575b600080fd5b6100c16100bc3660046102c4565b610193565b005b6100c16101bd565b6000546001600160a01b03165b6040516001600160a01b0390911681526020015b60405180910390f35b6001546100d8906001600160a01b031681565b6002546100d8906001600160a01b031681565b6100c16101d1565b6004546100d8906001600160a01b031681565b6100c16101443660046102e6565b505050565b60005461015d90600160a01b900460ff1681565b60405190151581526020016100ec565b6003546100d8906001600160a01b031681565b6100c161018e3660046102c4565b6101e8565b61019b61022b565b600380546001600160a01b0319166001600160a01b0392909216919091179055565b6101c561022b565b6101cf6000610258565b565b6101d961022b565b6000805460ff60a01b19169055565b6101f061022b565b6001600160a01b03811661021f57604051631e4fbdf760e01b8152600060048201526024015b60405180910390fd5b61022881610258565b50565b6000546001600160a01b031633146101cf5760405163118cdaa760e01b8152336004820152602401610216565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80356001600160a01b03811681146102bf57600080fd5b919050565b6000602082840312156102d657600080fd5b6102df826102a8565b9392505050565b600080600083850360e08112156102fc57600080fd5b610305856102a8565b93506020850135925060a0603f198201121561032057600080fd5b50604084019050925092509256fea264697066735822122002727ec7c648fdd2c5ba4dad7e5399bb63021c67961d2cd499b1d7804867181864736f6c63430008140033";

type CallBackConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CallBackConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CallBack__factory extends ContractFactory {
  constructor(...args: CallBackConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<CallBack> {
    return super.deploy(overrides || {}) as Promise<CallBack>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CallBack {
    return super.attach(address) as CallBack;
  }
  override connect(signer: Signer): CallBack__factory {
    return super.connect(signer) as CallBack__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CallBackInterface {
    return new utils.Interface(_abi) as CallBackInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CallBack {
    return new Contract(address, _abi, signerOrProvider) as CallBack;
  }
}
