export interface Env {
  NODE_ENV: 'DEVELOPMENT' | 'PRODUCTION';
  BSC_NODE_URL: string;
  POLYGON_NODE_URL: string;
  BSC_BRIDGE_CONTRACT_ADDRESS: string;
  POLYGON_BRIDGE_CONTRACT_ADDRESS: string;
  BSC_TOKEN_ADDRESS: string;
  POLYGON_TOKEN_ADDRESS: string;
  PRIVATE_KEY: string;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Env {}
  }
}

export {};
