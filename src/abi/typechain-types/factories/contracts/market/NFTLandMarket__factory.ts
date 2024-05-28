/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  NFTLandMarket,
  NFTLandMarketInterface,
} from "../../../contracts/market/NFTLandMarket";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "nftland_address",
        type: "address",
      },
      {
        internalType: "address",
        name: "token_address",
        type: "address",
      },
      {
        internalType: "address",
        name: "gateway_address",
        type: "address",
      },
      {
        internalType: "address",
        name: "seller",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
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
    name: "GATEWAY",
    outputs: [
      {
        internalType: "contract Gateway",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_ID",
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
    inputs: [],
    name: "NFTLAND",
    outputs: [
      {
        internalType: "contract NFTLand",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "SELLER",
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
    name: "TOKEN",
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
        internalType: "uint256",
        name: "max_id",
        type: "uint256",
      },
    ],
    name: "changeMaxId",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "land_id",
        type: "uint256",
      },
    ],
    name: "getMintPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "bv",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "sv",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "parent",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x608060405234801561001057600080fd5b50604051610dc6380380610dc683398101604081905261002f9161011e565b338061005557604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b61005e816100b2565b50600180546001600160a01b039586166001600160a01b0319918216179091556003805494861694821694909417909355600480549285169284169290921790915560058054919093169116179055610172565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b038116811461011957600080fd5b919050565b6000806000806080858703121561013457600080fd5b61013d85610102565b935061014b60208601610102565b925061015960408601610102565b915061016760608601610102565b905092959194509250565b610c45806101816000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c8063715018a611610071578063715018a61461014557806378e49ea31461014d57806382bfefc8146101605780638da5cb5b14610173578063bca93eba14610184578063f2fde38b1461019757600080fd5b806312183145146100ae57806317bac052146100de578063338c5371146100f5578063559e775b146101085780635c5b69a914610130575b600080fd5b6001546100c1906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b6100e760025481565b6040519081526020016100d5565b6004546100c1906001600160a01b031681565b61011b610116366004610a01565b6101aa565b604080519283526020830191909152016100d5565b61014361013e366004610a4c565b61061f565b005b610143610925565b61014361015b366004610a01565b610939565b6003546100c1906001600160a01b031681565b6000546001600160a01b03166100c1565b6005546100c1906001600160a01b031681565b6101436101a5366004610b1c565b610946565b600080600183101580156101c05750611f408311155b156101e1575068478eae0e571ba0000092686c6b935b8bbd40000092509050565b611f4183101580156101f55750613a988311155b1561021657506823c757072b8dd0000092683635c9adc5dea0000092509050565b613a99831015801561022a5750614e208311155b1561024b57506811e3ab8395c6e8000092681b1ae4d6e2ef50000092509050565b614e21831015801561025f57506159d88311155b156102805750680727de34a24f90000092680ad78ebc5ac620000092509050565b6159d9831015801561029457506161a88311155b156102b55750680393ef1a5127c800009268056bc75e2d6310000092509050565b6161a983101580156102c957506180e88311155b156102ea575068478eae0e571ba0000092686c6b935b8bbd40000092509050565b6180e983101580156102fe5750619c408311155b1561031f57506823c757072b8dd0000092683635c9adc5dea0000092509050565b619c418310158015610333575061afc88311155b1561035457506811e3ab8395c6e8000092681b1ae4d6e2ef50000092509050565b61afc98310158015610368575061bb808311155b156103895750680727de34a24f90000092680ad78ebc5ac620000092509050565b61bb81831015801561039d575061c3508311155b156103be5750680393ef1a5127c800009268056bc75e2d6310000092509050565b61c35183101580156103d2575061e2908311155b156103f3575068478eae0e571ba0000092686c6b935b8bbd40000092509050565b61e2918310158015610407575061fde88311155b1561042857506823c757072b8dd0000092683635c9adc5dea0000092509050565b61fde9831015801561043d5750620111708311155b1561045e57506811e3ab8395c6e8000092681b1ae4d6e2ef50000092509050565b620111718310158015610474575062011d288311155b156104955750680727de34a24f90000092680ad78ebc5ac620000092509050565b62011d2983101580156104ab5750620124f88311155b156104cc5750680393ef1a5127c800009268056bc75e2d6310000092509050565b620124f983101580156104e25750620144388311155b15610503575068478eae0e571ba0000092686c6b935b8bbd40000092509050565b620144398310158015610519575062015f908311155b1561053a57506823c757072b8dd0000092683635c9adc5dea0000092509050565b62015f9183101580156105505750620173188311155b1561057157506811e3ab8395c6e8000092681b1ae4d6e2ef50000092509050565b620173198310158015610587575062017ed08311155b156105a85750680727de34a24f90000092680ad78ebc5ac620000092509050565b62017ed183101580156105be5750620186a08311155b156105df5750680393ef1a5127c800009268056bc75e2d6310000092509050565b60405162461bcd60e51b815260206004820152601060248201526f6572726f722066696e6420707269636560801b60448201526064015b60405180910390fd5b60005b82518110156109205782818151811061063d5761063d610b3e565b602002602001015160025410156106815760405162461bcd60e51b81526020600482015260086024820152671ddc9bdb99c81a5960c21b6044820152606401610616565b6000806106a685848151811061069957610699610b3e565b60200260200101516101aa565b6004546040805160a0810182528481526020810184905260029181018290526005546001600160a01b0390811660608301528a519597509395506000949390921692639b421b56929160808301918b908a90811061070657610706610b3e565b602002602001015160405160200161074492919060f09290921b6001600160f01b031916825260c01b6001600160c01b0319166002820152600a0190565b60405160208183030381529060405261075c90610b54565b9052604080516001600160e01b031960e085901b168152825160048201526020830151602482015290820151604482015260608201516001600160a01b03908116606483015260809092015160848201523360a4820181905260c482015290881660e4820152610104016020604051808303816000875af11580156107e5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108099190610b7b565b90506000811161084b5760405162461bcd60e51b815260206004820152600d60248201526c33b0ba32bbb0bc9032b93937b960991b6044820152606401610616565b6040805160018082528183019092526000916020808301908036833701905050905086858151811061087f5761087f610b3e565b60200260200101518160008151811061089a5761089a610b3e565b60209081029190910101526001546040516317b8a72360e11b81526001600160a01b0390911690632f714e46906108d79084903390600401610b94565b600060405180830381600087803b1580156108f157600080fd5b505af1158015610905573d6000803e3d6000fd5b5050505050505050808061091890610be8565b915050610622565b505050565b61092d610984565b61093760006109b1565b565b610941610984565b600255565b61094e610984565b6001600160a01b03811661097857604051631e4fbdf760e01b815260006004820152602401610616565b610981816109b1565b50565b6000546001600160a01b031633146109375760405163118cdaa760e01b8152336004820152602401610616565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208284031215610a1357600080fd5b5035919050565b634e487b7160e01b600052604160045260246000fd5b80356001600160a01b0381168114610a4757600080fd5b919050565b60008060408385031215610a5f57600080fd5b823567ffffffffffffffff80821115610a7757600080fd5b818501915085601f830112610a8b57600080fd5b8135602082821115610a9f57610a9f610a1a565b8160051b604051601f19603f83011681018181108682111715610ac457610ac4610a1a565b604052928352818301935084810182019289841115610ae257600080fd5b948201945b83861015610b0057853585529482019493820193610ae7565b9650610b0f9050878201610a30565b9450505050509250929050565b600060208284031215610b2e57600080fd5b610b3782610a30565b9392505050565b634e487b7160e01b600052603260045260246000fd5b80516020808301519190811015610b75576000198160200360031b1b821691505b50919050565b600060208284031215610b8d57600080fd5b5051919050565b604080825283519082018190526000906020906060840190828701845b82811015610bcd57815184529284019290840190600101610bb1565b5050506001600160a01b039490941692019190915250919050565b600060018201610c0857634e487b7160e01b600052601160045260246000fd5b506001019056fea26469706673582212209a15e2a225fd46c289dcd57a943982c5d728dc415272fba921cb82dadb34c4e864736f6c63430008140033";

type NFTLandMarketConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NFTLandMarketConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NFTLandMarket__factory extends ContractFactory {
  constructor(...args: NFTLandMarketConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    nftland_address: string,
    token_address: string,
    gateway_address: string,
    seller: string,
    overrides?: Overrides & { from?: string }
  ): Promise<NFTLandMarket> {
    return super.deploy(
      nftland_address,
      token_address,
      gateway_address,
      seller,
      overrides || {}
    ) as Promise<NFTLandMarket>;
  }
  override getDeployTransaction(
    nftland_address: string,
    token_address: string,
    gateway_address: string,
    seller: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(
      nftland_address,
      token_address,
      gateway_address,
      seller,
      overrides || {}
    );
  }
  override attach(address: string): NFTLandMarket {
    return super.attach(address) as NFTLandMarket;
  }
  override connect(signer: Signer): NFTLandMarket__factory {
    return super.connect(signer) as NFTLandMarket__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NFTLandMarketInterface {
    return new utils.Interface(_abi) as NFTLandMarketInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): NFTLandMarket {
    return new Contract(address, _abi, signerOrProvider) as NFTLandMarket;
  }
}
