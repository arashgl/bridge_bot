/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SC, SCInterface } from "../../contracts/SC";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "user_address",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "stake_id",
        type: "uint256",
      },
    ],
    name: "depositStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "number",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "user_address",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "plan",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "daoAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "uvmAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "land_id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stake_id",
            type: "uint256",
          },
        ],
        internalType: "struct StakeMetaInput",
        name: "stake_input",
        type: "tuple",
      },
    ],
    name: "stakeMeta",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "stake_addr",
        type: "address",
      },
    ],
    name: "transferToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061027b806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80635410f365146100515780638381f58a14610066578063af7107a514610081578063deebeac914610098575b600080fd5b61006461005f366004610145565b6100ab565b005b61006f60005481565b60405190815260200160405180910390f35b61006461008f36600461016f565b60400151600055565b6100646100a63660046101fc565b6100c3565b6000805490806100ba8361021e565b91905055505050565b6040516319582a3360e21b81526001600482015233602482015281906001600160a01b03821690636560a8cc90604401600060405180830381600087803b15801561010d57600080fd5b505af1158015610121573d6000803e3d6000fd5b505050505050565b80356001600160a01b038116811461014057600080fd5b919050565b6000806040838503121561015857600080fd5b61016183610129565b946020939093013593505050565b600060c0828403121561018157600080fd5b60405160c0810181811067ffffffffffffffff821117156101b257634e487b7160e01b600052604160045260246000fd5b6040526101be83610129565b81526020830135602082015260408301356040820152606083013560608201526080830135608082015260a083013560a08201528091505092915050565b60006020828403121561020e57600080fd5b61021782610129565b9392505050565b60006001820161023e57634e487b7160e01b600052601160045260246000fd5b506001019056fea2646970667358221220c39e01663cf05a5865692d2edc11f14769e6c37ce2eb09333a52d42ca542348e64736f6c63430008140033";

type SCConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SCConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SC__factory extends ContractFactory {
  constructor(...args: SCConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: string }): Promise<SC> {
    return super.deploy(overrides || {}) as Promise<SC>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SC {
    return super.attach(address) as SC;
  }
  override connect(signer: Signer): SC__factory {
    return super.connect(signer) as SC__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SCInterface {
    return new utils.Interface(_abi) as SCInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): SC {
    return new Contract(address, _abi, signerOrProvider) as SC;
  }
}
