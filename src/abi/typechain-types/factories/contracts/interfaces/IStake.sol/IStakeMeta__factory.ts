/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IStakeMeta,
  IStakeMetaInterface,
} from "../../../../contracts/interfaces/IStake.sol/IStakeMeta";

const _abi = [
  {
    inputs: [],
    name: "getActiveStake",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "userId",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "exists",
            type: "bool",
          },
          {
            internalType: "uint8",
            name: "plan",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "uvm",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dnm",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "land",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "finish",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stake_duration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "total_paid_out",
            type: "uint256",
          },
        ],
        internalType: "struct StakePlan[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllStake",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "userId",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "exists",
            type: "bool",
          },
          {
            internalType: "uint8",
            name: "plan",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "uvm",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dnm",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "land",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "finish",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stake_duration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "total_paid_out",
            type: "uint256",
          },
        ],
        internalType: "struct StakePlan[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getContractDNMBalance",
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
    name: "getContractUVMBalance",
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
    name: "getFinishedStake",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "userId",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "exists",
            type: "bool",
          },
          {
            internalType: "uint8",
            name: "plan",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "uvm",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dnm",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "land",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "finish",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stake_duration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "total_paid_out",
            type: "uint256",
          },
        ],
        internalType: "struct StakePlan[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
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
    name: "getPlanByTokenId",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
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
    name: "getStake",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "userId",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "exists",
            type: "bool",
          },
          {
            internalType: "uint8",
            name: "plan",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "uvm",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dnm",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "land",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "finish",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stake_duration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "total_paid_out",
            type: "uint256",
          },
        ],
        internalType: "struct StakePlan",
        name: "",
        type: "tuple",
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
    ],
    name: "getUser",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
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
    ],
    name: "getUserStake",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "userId",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "exists",
            type: "bool",
          },
          {
            internalType: "uint8",
            name: "plan",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "uvm",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "dnm",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "land",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "start",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "finish",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stake_duration",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "total_paid_out",
            type: "uint256",
          },
        ],
        internalType: "struct StakePlan[]",
        name: "",
        type: "tuple[]",
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
    ],
    name: "getUserStakeIds",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "dnmAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "land_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stake_duration",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "stake_id",
        type: "uint256",
      },
    ],
    name: "withdrawReward",
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
        internalType: "uint256",
        name: "stake_id",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "withdraw_reward",
        type: "bool",
      },
    ],
    name: "withdrawStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IStakeMeta__factory {
  static readonly abi = _abi;
  static createInterface(): IStakeMetaInterface {
    return new utils.Interface(_abi) as IStakeMetaInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IStakeMeta {
    return new Contract(address, _abi, signerOrProvider) as IStakeMeta;
  }
}
