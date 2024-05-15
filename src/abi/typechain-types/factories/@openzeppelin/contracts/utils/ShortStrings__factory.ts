/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ShortStrings,
  ShortStringsInterface,
} from "../../../../@openzeppelin/contracts/utils/ShortStrings";

const _abi = [
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "StringTooLong",
    type: "error",
  },
] as const;

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212207796d81e520ad52bed820e4071c89e919013f41a8f82e5d154d67f23a8531af664736f6c63430008140033";

type ShortStringsConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ShortStringsConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ShortStrings__factory extends ContractFactory {
  constructor(...args: ShortStringsConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string }
  ): Promise<ShortStrings> {
    return super.deploy(overrides || {}) as Promise<ShortStrings>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ShortStrings {
    return super.attach(address) as ShortStrings;
  }
  override connect(signer: Signer): ShortStrings__factory {
    return super.connect(signer) as ShortStrings__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ShortStringsInterface {
    return new utils.Interface(_abi) as ShortStringsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ShortStrings {
    return new Contract(address, _abi, signerOrProvider) as ShortStrings;
  }
}
