import React from "react";
import { ethers } from "ethers";
import { parseEther } from "ethers/lib/utils.js";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

interface ApproveTokensProps {
  value: string;
}

/*
*********************CELO**********************
OffsetHelper: 0x4242829D15434Fea6606CF995f1BEd68a18C37d1
NCT:          0x02De4766C272abc10Bc88c220D214A26960a7e92
cUSD:         0x765DE816845861e75A25fCA122bb6898B8B1282a
*/

function weiToEtherStringDisplay(weiString: string | undefined): string {
  try {
    const wei = ethers.BigNumber.from(weiString);
    const ether: string = ethers.utils.formatEther(wei).slice(0, 6);
    return ether;
  } catch (error) {
    //console.error("Error converting Wei to Ether (Display):", error);
    return "0.0";
  }
}

const ApproveTokens: React.FC<ApproveTokensProps> = ({ value }) => {
  const { writeAsync } = useScaffoldContractWrite({
    contractName: "cUSD",
    functionName: "approve",
    args: ["0x4242829D15434Fea6606CF995f1BEd68a18C37d1", ethers.BigNumber.from(value)],
  });

  return (
    <div className="flex justify-center">
      <button
        className="w-full lg:w-1/2 mx-auto px-4 py-2 bg-primary rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary"
        onClick={writeAsync}
      >
        Approve {weiToEtherStringDisplay(value)} cUSD tokens
      </button>
    </div>
  );
};

export default ApproveTokens;
