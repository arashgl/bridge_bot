/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Bridge, BridgeInterface } from "../../contracts/Bridge";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "uvm_address",
        type: "address",
      },
      {
        internalType: "address",
        name: "dnm_address",
        type: "address",
      },
      {
        internalType: "address",
        name: "land_address",
        type: "address",
      },
      {
        internalType: "address",
        name: "stake_address",
        type: "address",
      },
      {
        internalType: "address",
        name: "wrapper_address",
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
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "uvm_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dnm_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "land_id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stake_duration",
        type: "uint256",
      },
    ],
    name: "FullTransfer",
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
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "token_address",
        type: "address",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "land",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "TransferNFT",
    type: "event",
  },
  {
    inputs: [],
    name: "DNM",
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
    name: "EIGHTEEN_MONTH_DURATION",
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
    name: "LAND",
    outputs: [
      {
        internalType: "contract IERC721",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ONE_YEAR_DURATION",
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
    name: "REWARD_DECAY_PERIOD",
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
    name: "STAKE_MAX_DNM",
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
    name: "STAKE_MAX_UVM",
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
    name: "STAKE_MIN_DNM",
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
    name: "TIME_STEP",
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
    name: "TWO_YEAR_DURATION",
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
    name: "UVM",
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
        name: "dnm",
        type: "uint256",
      },
    ],
    name: "calDnmUvmRatio",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "uvm_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "dnm_amount",
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
    name: "fullTransferFromBsc",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "uvm_amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "dnm_amount",
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
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "fullTransferToPolygon",
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
    inputs: [],
    name: "id",
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
    name: "stakeMeta",
    outputs: [
      {
        internalType: "contract StakeMeta",
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
        name: "token_address",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFromBSC",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "token_id",
        type: "uint256",
      },
    ],
    name: "transferNFTfromBSC",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "token_id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
    ],
    name: "transferNFTtoPolygon",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "token_address",
        type: "address",
      },
      {
        internalType: "address",
        name: "_address",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferToPolygon",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawDNM",
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
    name: "withdrawLand",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawUVM",
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
    name: "withdrawWrapper",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "wrapper",
    outputs: [
      {
        internalType: "contract Wrapper",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526301e133806001556302d124806002556303c2670060035560006004553480156200002e57600080fd5b506040516200202538038062002025833981016040819052620000519162000155565b33806200007857604051631e4fbdf760e01b81526000600482015260240160405180910390fd5b6200008381620000e8565b50600580546001600160a01b03199081166001600160a01b0397881617909155600680548216958716959095179094556007805485169386169390931790925560098054841692851692909217909155600880549092169216919091179055620001c5565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b03811681146200015057600080fd5b919050565b600080600080600060a086880312156200016e57600080fd5b620001798662000138565b9450620001896020870162000138565b9350620001996040870162000138565b9250620001a96060870162000138565b9150620001b96080870162000138565b90509295509295909350565b611e5080620001d56000396000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c80638028478611610104578063af640d0f116100a2578063ce89205b11610071578063ce89205b146103a2578063f19d2e5e146103b5578063f2fde38b146103c5578063f9728e2d146103d857600080fd5b8063af640d0f1461034e578063b38a977914610357578063b4ebaa2d1461036a578063c3dbb0961461038f57600080fd5b80639a640e28116100de5780639a640e28146103105780639d69c99114610323578063a4580cd014610332578063ac210cc71461033b57600080fd5b806380284786146102e35780638da5cb5b146102f65780639965f9e21461030757600080fd5b806332dbfff311610171578063715018a61161014b578063715018a6146102a457806374077013146102ac5780637dea5880146102bf5780637fea672c146102d257600080fd5b806332dbfff314610275578063631e136c146102885780636955dd201461029157600080fd5b806328d05f3c116101ad57806328d05f3c1461021a5780632abcad7a1461022d5780632f3d2fa21461024057806332bc298c1461026b57600080fd5b80630e171896146101d457806313e69389146101fa5780632424e6fa1461020f575b600080fd5b6101e76101e2366004611b1b565b6103eb565b6040519081526020015b60405180910390f35b61020d610208366004611b1b565b61041b565b005b6101e76301e1338081565b61020d610228366004611b1b565b61052f565b61020d61023b366004611b49565b6105f3565b600654610253906001600160a01b031681565b6040516001600160a01b0390911681526020016101f1565b6101e76201518081565b61020d610283366004611b79565b610757565b6101e760015481565b61020d61029f366004611bc6565b610dab565b61020d610f16565b600854610253906001600160a01b031681565b61020d6102cd366004611bf2565b610f2a565b6101e769014542ba12a337c0000081565b61020d6102f1366004611b1b565b611097565b6000546001600160a01b0316610253565b6101e760035481565b61020d61031e366004611b1b565b61119b565b6101e7670de0b6b3a764000081565b6101e760025481565b600954610253906001600160a01b031681565b6101e760045481565b600554610253906001600160a01b031681565b61037d610378366004611b1b565b61126a565b60405160ff90911681526020016101f1565b61020d61039d366004611c33565b611318565b600754610253906001600160a01b031681565b6101e768018493fba64ef0000081565b61020d6103d3366004611c65565b61182b565b61020d6103e6366004611b1b565b611869565b600068018493fba64ef0000061040b8369014542ba12a337c00000611c9f565b6104159190611cb6565b92915050565b610423611a9e565b6006546040516370a0823160e01b815230600482015282916001600160a01b0316906370a0823190602401602060405180830381865afa15801561046b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061048f9190611cd8565b10156104b65760405162461bcd60e51b81526004016104ad90611cf1565b60405180910390fd5b60065460405163a9059cbb60e01b81526001600160a01b039091169063a9059cbb906104e89033908590600401611d26565b6020604051808303816000875af1158015610507573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061052b9190611d3f565b5050565b610537611a9e565b6005546040516370a0823160e01b815230600482015282916001600160a01b0316906370a0823190602401602060405180830381865afa15801561057f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105a39190611cd8565b10156105c15760405162461bcd60e51b81526004016104ad90611cf1565b60055460405163a9059cbb60e01b81526001600160a01b039091169063a9059cbb906104e89033908590600401611d26565b6105fb611a9e565b6007546040516331a9108f60e11b81526004810184905230916001600160a01b031690636352211e90602401602060405180830381865afa158015610644573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106689190611d61565b6001600160a01b03161461068e5760405162461bcd60e51b81526004016104ad90611d7e565b6007546040516323b872dd60e01b81526001600160a01b03909116906323b872dd906106c290309085908790600401611db5565b600060405180830381600087803b1580156106dc57600080fd5b505af11580156106f0573d6000803e3d6000fd5b505050506001600460008282546107079190611dd9565b9091555050600454604080513081526001600160a01b03841660208201528492917fb1bdd8ee0a079056387b2b46f869978b9651cab9b68bee0c92971908f627b025910160405180910390a35050565b61075f611a9e565b6005546040516370a0823160e01b815230600482015286916001600160a01b0316906370a0823190602401602060405180830381865afa1580156107a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107cb9190611cd8565b10156107e95760405162461bcd60e51b81526004016104ad90611cf1565b6006546040516370a0823160e01b815230600482015285916001600160a01b0316906370a0823190602401602060405180830381865afa158015610831573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108559190611cd8565b10156108735760405162461bcd60e51b81526004016104ad90611cf1565b6007546040516331a9108f60e11b81526004810185905230916001600160a01b031690636352211e90602401602060405180830381865afa1580156108bc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108e09190611d61565b6001600160a01b03161461092b5760405162461bcd60e51b815260206004820152601260248201527124b73b30b634b2103630b7321037bbb732b960711b60448201526064016104ad565b60016004600082825461093e9190611dd9565b90915550508115610bf95760075460095460405163095ea7b360e01b81526001600160a01b039283169263095ea7b39261097f929116908790600401611d26565b600060405180830381600087803b15801561099957600080fd5b505af11580156109ad573d6000803e3d6000fd5b50506009546040516340c10f1960e01b81526001600160a01b0390911692506340c10f1991506109e39030908790600401611d26565b600060405180830381600087803b1580156109fd57600080fd5b505af1158015610a11573d6000803e3d6000fd5b505060065460085460405163095ea7b360e01b81526001600160a01b03928316945063095ea7b39350610a4c92909116908890600401611d26565b6020604051808303816000875af1158015610a6b573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a8f9190611d3f565b506000610a9b856103eb565b60055460085460405163095ea7b360e01b81529293506001600160a01b039182169263095ea7b392610ad39216908590600401611d26565b6020604051808303816000875af1158015610af2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b169190611d3f565b5060095460085460405163095ea7b360e01b81526001600160a01b039283169263095ea7b392610b4d929116908890600401611d26565b600060405180830381600087803b158015610b6757600080fd5b505af1158015610b7b573d6000803e3d6000fd5b50506008546040516320f76e5f60e11b81526001600160a01b038681166004830152602482018a9052604482018990526064820188905290911692506341eedcbe9150608401600060405180830381600087803b158015610bdb57600080fd5b505af1158015610bef573d6000803e3d6000fd5b5050505050610d4c565b6007546040516323b872dd60e01b81526001600160a01b03909116906323b872dd90610c2d90309085908890600401611db5565b600060405180830381600087803b158015610c4757600080fd5b505af1158015610c5b573d6000803e3d6000fd5b505060055460405163a9059cbb60e01b81526001600160a01b03909116925063a9059cbb9150610c919084908990600401611d26565b6020604051808303816000875af1158015610cb0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cd49190611d3f565b5060065460405163a9059cbb60e01b81526001600160a01b039091169063a9059cbb90610d079084908890600401611d26565b6020604051808303816000875af1158015610d26573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d4a9190611d3f565b505b6004546040805187815260208101879052908101859052606081018490526001600160a01b0383169133917f1b56594a908ab98ff0c509dce4035e6bae9bde8eff8c4e8d5c1afac95a3ad44d9060800160405180910390a45050505050565b604051636eb1769f60e11b8152336004820152306024820152829082906001600160a01b0383169063dd62ed3e90604401602060405180830381865afa158015610df9573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e1d9190611cd8565b1015610e3b5760405162461bcd60e51b81526004016104ad90611dec565b600160046000828254610e4e9190611dd9565b90915550506040516323b872dd60e01b81526001600160a01b038216906323b872dd90610e8390339030908790600401611db5565b6020604051808303816000875af1158015610ea2573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ec69190611d3f565b50600454604080518481526001600160a01b03861660208201523092339290917f227e58b8c176111094bcb6377c6bc077bf3dc9bbd089539116c826ee827c6a8e910160405180910390a4505050565b610f1e611a9e565b610f286000611acb565b565b610f32611a9e565b6040516370a0823160e01b8152306004820152839082906001600160a01b038316906370a0823190602401602060405180830381865afa158015610f7a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f9e9190611cd8565b1015610fbc5760405162461bcd60e51b81526004016104ad90611cf1565b600160046000828254610fcf9190611dd9565b909155505060405163a9059cbb60e01b81526001600160a01b0382169063a9059cbb906110029086908690600401611d26565b6020604051808303816000875af1158015611021573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110459190611d3f565b50600454604080518481526001600160a01b03871660208201523092339290917f227e58b8c176111094bcb6377c6bc077bf3dc9bbd089539116c826ee827c6a8e91015b60405180910390a450505050565b61109f611a9e565b6007546040516331a9108f60e11b81526004810183905230916001600160a01b031690636352211e90602401602060405180830381865afa1580156110e8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061110c9190611d61565b6001600160a01b0316146111325760405162461bcd60e51b81526004016104ad90611d7e565b6007546040516323b872dd60e01b81526001600160a01b03909116906323b872dd9061116690309033908690600401611db5565b600060405180830381600087803b15801561118057600080fd5b505af1158015611194573d6000803e3d6000fd5b5050505050565b6111a3611a9e565b6009546040516331a9108f60e11b81526004810183905230916001600160a01b031690636352211e90602401602060405180830381865afa1580156111ec573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112109190611d61565b6001600160a01b0316146112365760405162461bcd60e51b81526004016104ad90611d7e565b6009546040516323b872dd60e01b81526001600160a01b03909116906323b872dd9061116690309033908690600401611db5565b60006001821015801561127f5750611f408211155b1561128c57506001919050565b611f4182101580156112a05750613a988211155b156112ad57506002919050565b613a9982101580156112c15750614e208211155b156112ce57506003919050565b614e2182101580156112e257506159d88211155b156112ef57506004919050565b6159d9821015801561130357506161a88211155b1561131057506005919050565b506000919050565b80156113db5760015481148061132f575060035481145b8061133b575060025481145b61137c5760405162461bcd60e51b8152602060048201526012602482015271496e76616c6964207374616b652074696d6560701b60448201526064016104ad565b6000611387846103eb565b9050848111156113d95760405162461bcd60e51b815260206004820152601b60248201527f496e7375666669656369656e7420616d6f756e74206f662075766d000000000060448201526064016104ad565b505b600554604051636eb1769f60e11b815233600482015230602482015285916001600160a01b03169063dd62ed3e90604401602060405180830381865afa158015611429573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061144d9190611cd8565b101561146b5760405162461bcd60e51b81526004016104ad90611dec565b600654604051636eb1769f60e11b815233600482015230602482015284916001600160a01b03169063dd62ed3e90604401602060405180830381865afa1580156114b9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114dd9190611cd8565b10156114fb5760405162461bcd60e51b81526004016104ad90611dec565b60075460405163020604bf60e21b81526004810184905230916001600160a01b03169063081812fc90602401602060405180830381865afa158015611544573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906115689190611d61565b6001600160a01b0316146115b65760405162461bcd60e51b8152602060048201526015602482015274151bdad95b881a5cc81b9bdd08185c1c1c9bdd9959605a1b60448201526064016104ad565b6007546040516331a9108f60e11b81526004810184905233916001600160a01b031690636352211e90602401602060405180830381865afa1580156115ff573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116239190611d61565b6001600160a01b0316146116715760405162461bcd60e51b81526020600482015260156024820152743cb7ba9030b932903737ba103a34329037bbb732b960591b60448201526064016104ad565b6005546040516323b872dd60e01b81526001600160a01b03909116906323b872dd906116a590339030908990600401611db5565b6020604051808303816000875af11580156116c4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116e89190611d3f565b506006546040516323b872dd60e01b81526001600160a01b03909116906323b872dd9061171d90339030908890600401611db5565b6020604051808303816000875af115801561173c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906117609190611d3f565b506007546040516323b872dd60e01b81526001600160a01b03909116906323b872dd9061179590339030908790600401611db5565b600060405180830381600087803b1580156117af57600080fd5b505af11580156117c3573d6000803e3d6000fd5b505050506001600460008282546117da9190611dd9565b9091555050600454604080518681526020810186905290810184905260608101839052309133917f1b56594a908ab98ff0c509dce4035e6bae9bde8eff8c4e8d5c1afac95a3ad44d90608001611089565b611833611a9e565b6001600160a01b03811661185d57604051631e4fbdf760e01b8152600060048201526024016104ad565b61186681611acb565b50565b60075460405163020604bf60e21b81526004810183905230916001600160a01b03169063081812fc90602401602060405180830381865afa1580156118b2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118d69190611d61565b6001600160a01b0316146119245760405162461bcd60e51b81526020600482015260156024820152741b185b99081a185cc81b9bdd08185c1c1c9bdd9959605a1b60448201526064016104ad565b6007546040516331a9108f60e11b81526004810183905233916001600160a01b031690636352211e90602401602060405180830381865afa15801561196d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906119919190611d61565b6001600160a01b0316146119df5760405162461bcd60e51b81526020600482015260156024820152743cb7ba9030b932903737ba103a34329037bbb732b960591b60448201526064016104ad565b6007546040516323b872dd60e01b81526001600160a01b03909116906323b872dd90611a1390339030908690600401611db5565b600060405180830381600087803b158015611a2d57600080fd5b505af1158015611a41573d6000803e3d6000fd5b50505050600160046000828254611a589190611dd9565b9091555050600454604080513381523060208201528392917fb1bdd8ee0a079056387b2b46f869978b9651cab9b68bee0c92971908f627b025910160405180910390a350565b6000546001600160a01b03163314610f285760405163118cdaa760e01b81523360048201526024016104ad565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600060208284031215611b2d57600080fd5b5035919050565b6001600160a01b038116811461186657600080fd5b60008060408385031215611b5c57600080fd5b823591506020830135611b6e81611b34565b809150509250929050565b600080600080600060a08688031215611b9157600080fd5b853594506020860135935060408601359250606086013591506080860135611bb881611b34565b809150509295509295909350565b60008060408385031215611bd957600080fd5b8235611be481611b34565b946020939093013593505050565b600080600060608486031215611c0757600080fd5b8335611c1281611b34565b92506020840135611c2281611b34565b929592945050506040919091013590565b60008060008060808587031215611c4957600080fd5b5050823594602084013594506040840135936060013592509050565b600060208284031215611c7757600080fd5b8135611c8281611b34565b9392505050565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761041557610415611c89565b600082611cd357634e487b7160e01b600052601260045260246000fd5b500490565b600060208284031215611cea57600080fd5b5051919050565b6020808252818101527f496e73756666696369656e742062616c616e636520696e20636f6e7472616374604082015260600190565b6001600160a01b03929092168252602082015260400190565b600060208284031215611d5157600080fd5b81518015158114611c8257600080fd5b600060208284031215611d7357600080fd5b8151611c8281611b34565b60208082526017908201527f776520646f6e742068617665207468697320746f6b656e000000000000000000604082015260600190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b8082018082111561041557610415611c89565b602080825260149082015273082d8d8deeec2dcc6ca40dcdee840cadcdeeaced60631b60408201526060019056fea26469706673582212208fa7422be3c840840a73bd26daff2f4492a4bec34d341ef621ddf2eee81db87264736f6c63430008140033";

type BridgeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BridgeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Bridge__factory extends ContractFactory {
  constructor(...args: BridgeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    uvm_address: string,
    dnm_address: string,
    land_address: string,
    stake_address: string,
    wrapper_address: string,
    overrides?: Overrides & { from?: string }
  ): Promise<Bridge> {
    return super.deploy(
      uvm_address,
      dnm_address,
      land_address,
      stake_address,
      wrapper_address,
      overrides || {}
    ) as Promise<Bridge>;
  }
  override getDeployTransaction(
    uvm_address: string,
    dnm_address: string,
    land_address: string,
    stake_address: string,
    wrapper_address: string,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(
      uvm_address,
      dnm_address,
      land_address,
      stake_address,
      wrapper_address,
      overrides || {}
    );
  }
  override attach(address: string): Bridge {
    return super.attach(address) as Bridge;
  }
  override connect(signer: Signer): Bridge__factory {
    return super.connect(signer) as Bridge__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BridgeInterface {
    return new utils.Interface(_abi) as BridgeInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Bridge {
    return new Contract(address, _abi, signerOrProvider) as Bridge;
  }
}
