export interface Env {
  NODE_ENV: 'DEVELOPMENT' | 'PRODUCTION';
  BSC_BRIDGE_CONTRACT_ADDRESS: string;
  POLYGON_BRIDGE_CONTRACT_ADDRESS: string;
  BSC_UVM_ADDRESS: string;
  BSC_DNM_ADDRESS: string;
  POLYGON_UVM_ADDRESS: string;
  POLYGON_DNM_ADDRESS: string;
  DESTINATION_PRIVATE_KEY: string;
  ORIGIN_PRIVATE_KEY: string;
  HARDHAT: string;
  SEPOLIA: string;
  BSC_TESTNET: string;
  BSC_MAINNET: string;
  MUMBAI: string;
  POLYGON: string;
  MYSQL_ROOT_HOST: string;
  MYSQL_PORT: string;
  MYSQL_USER: string;
  MYSQL_ROOT_PASSWORD: string;
  MYSQL_PASSWORD: string;
  MYSQL_DATABASE: string;
  CONFIRMATION_BLOCKS: string;
  POLYGON_NFT_ADDRESS: string;
  POLYGON_STAKE_ADDRESS: string;
  BSC_API_KEY: string;
  NET_MODE: 'TEST' | 'MAIN';
  POLYGON_WRAPPER_ADDRESS: string;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Env {}
  }
}

export {};
