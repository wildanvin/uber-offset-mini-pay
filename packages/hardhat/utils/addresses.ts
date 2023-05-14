interface IfcAddresses {
  BCT: string;
  NCT: string;
  USDC: string;
  WETH: string;
  // (Maybe in the future there would be wCELO) WMATIC: string;
}

const addresses: IfcAddresses = {
  // I will be using just alfajores for now
  BCT: "",
  NCT: "",
  USDC: "",
  WETH: "",
  //WMATIC: "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270",
};

export const alfajoresAddresses: IfcAddresses = {
  BCT: "0x4c5f90C50Ca9F849bb75D93a393A4e1B6E68Accb",
  NCT: "0xfb60a08855389F3c0A66b29aB9eFa911ed5cbCB5",
  USDC: "0xa6920Dd986896D5433b4f388FCB705947A6af835",
  WETH: "0x64aEEd758B878d7023A361bBc7F11BCbAD534942",
  //WMATIC: "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889",
};

export default addresses;
