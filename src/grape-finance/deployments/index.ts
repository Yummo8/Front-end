export type Deployments = {
  [contractName: string]: {
    address: string;
    type: string;
    abi: any[];
  };
};
