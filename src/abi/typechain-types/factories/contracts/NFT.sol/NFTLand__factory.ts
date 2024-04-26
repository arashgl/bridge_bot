/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  NFTLand,
  NFTLandInterface,
} from "../../../contracts/NFT.sol/NFTLand";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721IncorrectOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721InsufficientApproval",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC721InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC721InvalidOperator",
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
    name: "ERC721InvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC721InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC721InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721NonexistentToken",
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
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
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
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
  "0x60806040523480156200001157600080fd5b506040516200137f3803806200137f8339810160408190526200003491620001b1565b3382826000620000458382620002aa565b506001620000548282620002aa565b5050506001600160a01b0381166200008657604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b62000091816200009a565b50505062000376565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200011457600080fd5b81516001600160401b0380821115620001315762000131620000ec565b604051601f8301601f19908116603f011681019082821181831017156200015c576200015c620000ec565b816040528381526020925086838588010111156200017957600080fd5b600091505b838210156200019d57858201830151818301840152908201906200017e565b600093810190920192909252949350505050565b60008060408385031215620001c557600080fd5b82516001600160401b0380821115620001dd57600080fd5b620001eb8683870162000102565b935060208501519150808211156200020257600080fd5b50620002118582860162000102565b9150509250929050565b600181811c908216806200023057607f821691505b6020821081036200025157634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002a557600081815260208120601f850160051c81016020861015620002805750805b601f850160051c820191505b81811015620002a1578281556001016200028c565b5050505b505050565b81516001600160401b03811115620002c657620002c6620000ec565b620002de81620002d784546200021b565b8462000257565b602080601f831160018114620003165760008415620002fd5750858301515b600019600386901b1c1916600185901b178555620002a1565b600085815260208120601f198616915b82811015620003475788860151825594840194600190910190840162000326565b5085821015620003665787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610ff980620003866000396000f3fe608060405234801561001057600080fd5b506004361061010b5760003560e01c806370a08231116100a2578063a22cb46511610071578063a22cb4651461021b578063b88d4fde1461022e578063c87b56dd14610241578063e985e9c514610254578063f2fde38b1461026757600080fd5b806370a08231146101d9578063715018a6146101fa5780638da5cb5b1461020257806395d89b411461021357600080fd5b806323b872dd116100de57806323b872dd1461018d57806340c10f19146101a057806342842e0e146101b35780636352211e146101c657600080fd5b806301ffc9a71461011057806306fdde0314610138578063081812fc1461014d578063095ea7b314610178575b600080fd5b61012361011e366004610c9b565b61027a565b60405190151581526020015b60405180910390f35b6101406102cc565b60405161012f9190610d05565b61016061015b366004610d18565b61035e565b6040516001600160a01b03909116815260200161012f565b61018b610186366004610d4d565b610387565b005b61018b61019b366004610d77565b610396565b61018b6101ae366004610d4d565b610426565b61018b6101c1366004610d77565b610430565b6101606101d4366004610d18565b610450565b6101ec6101e7366004610db3565b61045b565b60405190815260200161012f565b61018b6104a3565b6006546001600160a01b0316610160565b6101406104b7565b61018b610229366004610dce565b6104c6565b61018b61023c366004610e20565b6104d1565b61014061024f366004610d18565b6104e8565b610123610262366004610efc565b6104f3565b61018b610275366004610db3565b610521565b60006001600160e01b031982166380ac58cd60e01b14806102ab57506001600160e01b03198216635b5e139f60e01b145b806102c657506301ffc9a760e01b6001600160e01b03198316145b92915050565b6060600080546102db90610f2f565b80601f016020809104026020016040519081016040528092919081815260200182805461030790610f2f565b80156103545780601f1061032957610100808354040283529160200191610354565b820191906000526020600020905b81548152906001019060200180831161033757829003601f168201915b5050505050905090565b60006103698261055f565b506000828152600460205260409020546001600160a01b03166102c6565b610392828233610598565b5050565b6001600160a01b0382166103c557604051633250574960e11b8152600060048201526024015b60405180910390fd5b60006103d28383336105a5565b9050836001600160a01b0316816001600160a01b031614610420576040516364283d7b60e01b81526001600160a01b03808616600483015260248201849052821660448201526064016103bc565b50505050565b610392828261069e565b61044b838383604051806020016040528060008152506104d1565b505050565b60006102c68261055f565b60006001600160a01b038216610487576040516322718ad960e21b8152600060048201526024016103bc565b506001600160a01b031660009081526003602052604090205490565b6104ab610703565b6104b56000610730565b565b6060600180546102db90610f2f565b610392338383610782565b6104dc848484610396565b61042084848484610821565b60606102c68261094a565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b610529610703565b6001600160a01b03811661055357604051631e4fbdf760e01b8152600060048201526024016103bc565b61055c81610730565b50565b6000818152600260205260408120546001600160a01b0316806102c657604051637e27328960e01b8152600481018490526024016103bc565b61044b83838360016109dd565b6000828152600260205260408120546001600160a01b03908116908316156105d2576105d2818486610ae3565b6001600160a01b03811615610610576105ef6000856000806109dd565b6001600160a01b038116600090815260036020526040902080546000190190555b6001600160a01b0385161561063f576001600160a01b0385166000908152600360205260409020805460010190555b60008481526002602052604080822080546001600160a01b0319166001600160a01b0389811691821790925591518793918516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4949350505050565b6001600160a01b0382166106c857604051633250574960e11b8152600060048201526024016103bc565b60006106d6838360006105a5565b90506001600160a01b0381161561044b576040516339e3563760e11b8152600060048201526024016103bc565b6006546001600160a01b031633146104b55760405163118cdaa760e01b81523360048201526024016103bc565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b6001600160a01b0382166107b457604051630b61174360e31b81526001600160a01b03831660048201526024016103bc565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6001600160a01b0383163b1561042057604051630a85bd0160e11b81526001600160a01b0384169063150b7a0290610863903390889087908790600401610f69565b6020604051808303816000875af192505050801561089e575060408051601f3d908101601f1916820190925261089b91810190610fa6565b60015b610907573d8080156108cc576040519150601f19603f3d011682016040523d82523d6000602084013e6108d1565b606091505b5080516000036108ff57604051633250574960e11b81526001600160a01b03851660048201526024016103bc565b805181602001fd5b6001600160e01b03198116630a85bd0160e11b1461094357604051633250574960e11b81526001600160a01b03851660048201526024016103bc565b5050505050565b6060600061095783610b47565b600101905060008167ffffffffffffffff81111561097757610977610e0a565b6040519080825280601f01601f1916602001820160405280156109a1576020820181803683370190505b5090508181016020015b600019016f181899199a1a9b1b9c1cb0b131b232b360811b600a86061a8153600a85049450846109ab57509392505050565b80806109f157506001600160a01b03821615155b15610ab3576000610a018461055f565b90506001600160a01b03831615801590610a2d5750826001600160a01b0316816001600160a01b031614155b8015610a405750610a3e81846104f3565b155b15610a695760405163a9fbf51f60e01b81526001600160a01b03841660048201526024016103bc565b8115610ab15783856001600160a01b0316826001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b5050600090815260046020526040902080546001600160a01b0319166001600160a01b0392909216919091179055565b610aee838383610c1f565b61044b576001600160a01b038316610b1c57604051637e27328960e01b8152600481018290526024016103bc565b60405163177e802f60e01b81526001600160a01b0383166004820152602481018290526044016103bc565b60008072184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b8310610b865772184f03e93ff9f4daa797ed6e38ed64bf6a1f0160401b830492506040015b6d04ee2d6d415b85acef81000000008310610bb2576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310610bd057662386f26fc10000830492506010015b6305f5e1008310610be8576305f5e100830492506008015b6127108310610bfc57612710830492506004015b60648310610c0e576064830492506002015b600a83106102c65760010192915050565b60006001600160a01b03831615801590610c7d5750826001600160a01b0316846001600160a01b03161480610c595750610c5984846104f3565b80610c7d57506000828152600460205260409020546001600160a01b038481169116145b949350505050565b6001600160e01b03198116811461055c57600080fd5b600060208284031215610cad57600080fd5b8135610cb881610c85565b9392505050565b6000815180845260005b81811015610ce557602081850181015186830182015201610cc9565b506000602082860101526020601f19601f83011685010191505092915050565b602081526000610cb86020830184610cbf565b600060208284031215610d2a57600080fd5b5035919050565b80356001600160a01b0381168114610d4857600080fd5b919050565b60008060408385031215610d6057600080fd5b610d6983610d31565b946020939093013593505050565b600080600060608486031215610d8c57600080fd5b610d9584610d31565b9250610da360208501610d31565b9150604084013590509250925092565b600060208284031215610dc557600080fd5b610cb882610d31565b60008060408385031215610de157600080fd5b610dea83610d31565b915060208301358015158114610dff57600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215610e3657600080fd5b610e3f85610d31565b9350610e4d60208601610d31565b925060408501359150606085013567ffffffffffffffff80821115610e7157600080fd5b818701915087601f830112610e8557600080fd5b813581811115610e9757610e97610e0a565b604051601f8201601f19908116603f01168101908382118183101715610ebf57610ebf610e0a565b816040528281528a6020848701011115610ed857600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215610f0f57600080fd5b610f1883610d31565b9150610f2660208401610d31565b90509250929050565b600181811c90821680610f4357607f821691505b602082108103610f6357634e487b7160e01b600052602260045260246000fd5b50919050565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090610f9c90830184610cbf565b9695505050505050565b600060208284031215610fb857600080fd5b8151610cb881610c8556fea2646970667358221220ee7c5109656e455c52e7261e451ee4dbc4b51780a018ce261004d72e3c964bd664736f6c63430008140033";

type NFTLandConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTLandConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTLand__factory extends ContractFactory {
  constructor(...args: NFTLandConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string }
  ): Promise<NFTLand> {
    return super.deploy(name, symbol, overrides || {}) as Promise<NFTLand>;
  }
  override getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override attach(address: string): NFTLand {
    return super.attach(address) as NFTLand;
  }
  override connect(signer: Signer): NFTLand__factory {
    return super.connect(signer) as NFTLand__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTLandInterface {
    return new utils.Interface(_abi) as NFTLandInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTLand {
    return new Contract(address, _abi, signerOrProvider) as NFTLand;
  }
}
