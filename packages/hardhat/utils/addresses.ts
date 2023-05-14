interface IfcAddresses {
  BCT: string;
  NCT: string;
  USDC: string;
  WETH: string;
  WMATIC: string;
}

const addresses: IfcAddresses = {
  // I will be using just alfajores for now
  BCT: "",
  NCT: "",
  USDC: "",
  WETH: "",
  WMATIC: "",
};

export const alfajoresAddresses: IfcAddresses = {
  BCT: "0x4c5f90C50Ca9F849bb75D93a393A4e1B6E68Accb",
  NCT: "0xfb60a08855389F3c0A66b29aB9eFa911ed5cbCB5",
  USDC: "0xa6920Dd986896D5433b4f388FCB705947A6af835",
  WETH: "0x64aEEd758B878d7023A361bBc7F11BCbAD534942",
  WMATIC: "0xF194afDf50B03e69Bd7D057c1Aa9e10c9954E4C9",
};

export default addresses;
