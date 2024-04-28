/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TopUp,
  TopUpInterface,
} from "../../../contracts/stake_helpers/TopUp";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "dnm_token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "TOP_UP_PHASE",
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
    name: "updateTopUp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526000805534801561001457600080fd5b506040516103353803806103358339810160408190526100339161013a565b600180546001600160a01b0319166001600160a01b0392909216919091179055600260205268018493fba64ef000007fe90b7bceb6e7df5418fb78d8ee546e97c83a08bbccc01a0644d599ccd2a7c2e05567c249fdd3277800007f679795a0195a1b76cdebb7c51d74e058aee92919b8c3389af86ef24535e8a28c55676124fee993bc00007f88601476d11616a71c5be67555bd1dff4b1cbf21533d2669b768b61518cfe1c3556726db992a3b1800007fee60d0579bcffd98e668647d59fec1ff86a7fb340ce572e844f234ae73a6918f55600560005267136dcc951d8c00007fb98b78633099fa36ed8b8680c4f8092689e1e04080eb9cbb077ca38a14d7e3845561016a565b60006020828403121561014c57600080fd5b81516001600160a01b038116811461016357600080fd5b9392505050565b6101bc806101796000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80636841cbb41461003b578063e66db22714610056575b600080fd5b61004460005481565b60405190815260200160405180910390f35b61005e610060565b005b600154604080516318160ddd60e01b815290516000926001600160a01b0316916318160ddd9160048083019260209291908290030181865afa1580156100aa573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906100ce919061016d565b90506a07324bf1ed9079c580000081106100ea57600660005550565b6a05ff3f499b4dbacf400000811061010457600560005550565b6a04cc32a1490afbd9000000811061011e57600460005550565b6a039925f8f6c83ce2c00000811061013857600360005550565b6a02661950a4857dec800000811061015257600260005550565b6a01330ca85242bef6400000811061016a5760016000555b50565b60006020828403121561017f57600080fd5b505191905056fea2646970667358221220d410b823e560d88ef3d5f578ddc732cbdbfa05234faecc471b3d93f4161d311864736f6c63430008140033";

type TopUpConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TopUpConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TopUp__factory extends ContractFactory {
  constructor(...args: TopUpConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    dnm_token: string,
    overrides?: Overrides & { from?: string }
  ): Promise<TopUp> {
    return super.deploy(dnm_token, overrides || {}) as Promise<TopUp>;
  }
  override getDeployTransaction(
    dnm_token: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(dnm_token, overrides || {});
  }
  override attach(address: string): TopUp {
    return super.attach(address) as TopUp;
  }
  override connect(signer: Signer): TopUp__factory {
    return super.connect(signer) as TopUp__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TopUpInterface {
    return new utils.Interface(_abi) as TopUpInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): TopUp {
    return new Contract(address, _abi, signerOrProvider) as TopUp;
  }
}
