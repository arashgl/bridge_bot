/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Plan, PlanInterface } from "../../contracts/Plan";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "user_address",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
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
        name: "",
        type: "address",
      },
    ],
    name: "UserList",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "address",
        name: "parent",
        type: "address",
      },
      {
        internalType: "address",
        name: "left",
        type: "address",
      },
      {
        internalType: "address",
        name: "right",
        type: "address",
      },
      {
        internalType: "bool",
        name: "exists",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "buycount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_id",
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
        internalType: "address",
        name: "user_address",
        type: "address",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "address",
        name: "parent_address",
        type: "address",
      },
    ],
    name: "addUser",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user_address",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "count",
        type: "uint256",
      },
    ],
    name: "buyProduct",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "currentTime",
        type: "uint256",
      },
    ],
    name: "getNextCalTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405260016000553480156200001657600080fd5b5060405162000f4d38038062000f4d83398101604081905262000039916200013e565b6040805160e08101825260008054825260208083018581528385018390526060840183905260808401839052600160a0850181905260c085018490526001600160a01b03881684529182905293909120825181559251919283929091820190620000a49082620002c3565b5060408201516002820180546001600160a01b039283166001600160a01b031991821617909155606084015160038401805491841691909216179055608083015160048301805460a08601511515600160a01b026001600160a81b0319909116929093169190911791909117905560c090910151600590910155506200038f915050565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156200015257600080fd5b82516001600160a01b03811681146200016a57600080fd5b602084810151919350906001600160401b03808211156200018a57600080fd5b818601915086601f8301126200019f57600080fd5b815181811115620001b457620001b462000128565b604051601f8201601f19908116603f01168101908382118183101715620001df57620001df62000128565b816040528281528986848701011115620001f857600080fd5b600093505b828410156200021c5784840186015181850187015292850192620001fd565b60008684830101528096505050505050509250929050565b600181811c908216806200024957607f821691505b6020821081036200026a57634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620002be57600081815260208120601f850160051c81016020861015620002995750805b601f850160051c820191505b81811015620002ba57828155600101620002a5565b5050505b505050565b81516001600160401b03811115620002df57620002df62000128565b620002f781620002f0845462000234565b8462000270565b602080601f8311600181146200032f5760008415620003165750858301515b600019600386901b1c1916600185901b178555620002ba565b600085815260208120601f198616915b8281101562000360578886015182559484019460019091019084016200033f565b50858210156200037f5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b610bae806200039f6000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063051802371461005c5780636ce42a45146100785780639b3bc6551461009b578063cddb8e94146100ae578063eb63a59e146100c1575b600080fd5b61006560005481565b6040519081526020015b60405180910390f35b61008b6100863660046107ae565b6100e7565b604051901515815260200161006f565b6100656100a9366004610880565b6104f2565b6100656100bc366004610899565b610589565b6100d46100cf3660046108c3565b6106a4565b60405161006f97969594939291906108e5565b6001600160a01b038316600090815260016020526040812060040154600160a01b900460ff161561014d5760405162461bcd60e51b815260206004820152600b60248201526a757365722065786973747360a81b60448201526064015b60405180910390fd5b6001600160a01b038216600090815260016020819052604090912060040154600160a01b900460ff161515146101b95760405162461bcd60e51b8152602060048201526011602482015270706172656e74206e6f742065786973747360781b6044820152606401610144565b6001600160a01b0382166000908152600160208181526040808420815160e081019092528054825292830180549193928401916101f590610985565b80601f016020809104026020016040519081016040528092919081815260200182805461022190610985565b801561026e5780601f106102435761010080835404028352916020019161026e565b820191906000526020600020905b81548152906001019060200180831161025157829003601f168201915b505050918352505060028201546001600160a01b0390811660208301526003830154811660408301526004830154808216606080850191909152600160a01b90910460ff161515608084015260059093015460a09092019190915290820151919250166102e9576001600160a01b0385166060820152610348565b60808101516001600160a01b031661030f576001600160a01b0385166080820152610348565b60405162461bcd60e51b815260206004820152600e60248201526d1c185c995b9d081a5cc8199d5b1b60921b6044820152606401610144565b6001600160a01b0383166000908152600160208181526040909220835181559183015183929182019061037b9082610a0e565b5060408201516002820180546001600160a01b039283166001600160a01b031991821617909155606084015160038401805491841691909216179055608083015160048301805460a08601511515600160a01b026001600160a81b0319909116929093169190911791909117905560c090910151600590910155600054610403906001610ae4565b60008181556040805160e08101825292835260208084018881526001600160a01b03808916868501526060860185905260808601859052600160a0870181905260c08701869052908b1685529182905291909220835181559051839282019061046c9082610a0e565b5060408201516002820180546001600160a01b03199081166001600160a01b03938416179091556060840151600384018054909216908316179055608083015160048301805460a0860151929093166001600160a81b031990931692909217600160a01b9115159190910217905560c09091015160059091015550600195945050505050565b6000806007806105056201518086610b0d565b61050f9190610b21565b61051a906006610b35565b6105249190610b21565b90506000610533826018610b48565b61053e90603c610b48565b61054990603c610b48565b905060006105578286610ae4565b905060006105686201518083610b21565b6105729083610b35565b61057f9062015180610ae4565b9695505050505050565b6001600160a01b0382166000908152600160208190526040822060040154600160a01b900460ff161515146105f25760405162461bcd60e51b815260206004820152600f60248201526e75736572206e6f742065786973747360881b6044820152606401610144565b60005b6001600160a01b038481166000908152600160205260408082206002015490921681522060040154600160a01b900460ff161561069b578061063681610b5f565b6001600160a01b03808716600090815260016020526040808220600201549092168152908120600501805492945091925061067083610b5f565b90915550506001600160a01b03938416600090815260016020526040902060020154909316926105f5565b90505b92915050565b6001602081905260009182526040909120805491810180546106c590610985565b80601f01602080910402602001604051908101604052809291908181526020018280546106f190610985565b801561073e5780601f106107135761010080835404028352916020019161073e565b820191906000526020600020905b81548152906001019060200180831161072157829003601f168201915b5050505060028301546003840154600485015460059095015493946001600160a01b0392831694918316935091821691600160a01b900460ff169087565b80356001600160a01b038116811461079357600080fd5b919050565b634e487b7160e01b600052604160045260246000fd5b6000806000606084860312156107c357600080fd5b6107cc8461077c565b9250602084013567ffffffffffffffff808211156107e957600080fd5b818601915086601f8301126107fd57600080fd5b81358181111561080f5761080f610798565b604051601f8201601f19908116603f0116810190838211818310171561083757610837610798565b8160405282815289602084870101111561085057600080fd5b8260208601602083013760006020848301015280965050505050506108776040850161077c565b90509250925092565b60006020828403121561089257600080fd5b5035919050565b600080604083850312156108ac57600080fd5b6108b58361077c565b946020939093013593505050565b6000602082840312156108d557600080fd5b6108de8261077c565b9392505050565b8781526000602060e08184015288518060e085015260005b8181101561091a578a8101830151858201610100015282016108fd565b506101009150600082828601015281601f19601f8301168501019250505061094d60408301886001600160a01b03169052565b6001600160a01b03861660608301526001600160a01b038516608083015283151560a08301528260c083015298975050505050505050565b600181811c9082168061099957607f821691505b6020821081036109b957634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115610a0957600081815260208120601f850160051c810160208610156109e65750805b601f850160051c820191505b81811015610a05578281556001016109f2565b5050505b505050565b815167ffffffffffffffff811115610a2857610a28610798565b610a3c81610a368454610985565b846109bf565b602080601f831160018114610a715760008415610a595750858301515b600019600386901b1c1916600185901b178555610a05565b600085815260208120601f198616915b82811015610aa057888601518255948401946001909101908401610a81565b5085821015610abe5787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b634e487b7160e01b600052601160045260246000fd5b8082018082111561069e5761069e610ace565b634e487b7160e01b600052601260045260246000fd5b600082610b1c57610b1c610af7565b500490565b600082610b3057610b30610af7565b500690565b8181038181111561069e5761069e610ace565b808202811582820484141761069e5761069e610ace565b600060018201610b7157610b71610ace565b506001019056fea2646970667358221220ea68cc87d423abf694f2f22aa5274da5f93d2434966ae9adc7f59e2476abb7d764736f6c63430008140033";

type PlanConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PlanConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Plan__factory extends ContractFactory {
  constructor(...args: PlanConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    user_address: string,
    name: string,
    overrides?: Overrides & { from?: string }
  ): Promise<Plan> {
    return super.deploy(user_address, name, overrides || {}) as Promise<Plan>;
  }
  override getDeployTransaction(
    user_address: string,
    name: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(user_address, name, overrides || {});
  }
  override attach(address: string): Plan {
    return super.attach(address) as Plan;
  }
  override connect(signer: Signer): Plan__factory {
    return super.connect(signer) as Plan__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PlanInterface {
    return new utils.Interface(_abi) as PlanInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Plan {
    return new Contract(address, _abi, signerOrProvider) as Plan;
  }
}