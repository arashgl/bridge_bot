/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  GetListModifier,
  GetListModifierInterface,
} from "../../../contracts/modifiers/GetListModifier";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromId",
        type: "uint256",
      },
    ],
    name: "InvalidFromID",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "fromId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "toId",
        type: "uint256",
      },
    ],
    name: "InvalidRangeID",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "toId",
        type: "uint256",
      },
    ],
    name: "InvalidToID",
    type: "error",
  },
] as const;

export class GetListModifier__factory {
  static readonly abi = _abi;
  static createInterface(): GetListModifierInterface {
    return new utils.Interface(_abi) as GetListModifierInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GetListModifier {
    return new Contract(address, _abi, signerOrProvider) as GetListModifier;
  }
}