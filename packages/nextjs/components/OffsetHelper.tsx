import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ethers } from "ethers";
import { parseEther } from "ethers/lib/utils.js";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { useScaffoldEventSubscriber } from "~~/hooks/scaffold-eth";

type Props = {
  distance: number;
};

function weiToEtherString(weiString: string | undefined): string {
  try {
    const wei = ethers.BigNumber.from(weiString);
    const ether = wei.add(ethers.utils.parseUnits("2000000", 0)); // Adding 2000000 Wei
    const etherString: string = ethers.utils.formatEther(ether);
    return etherString;
  } catch (error) {
    //console.error("Error converting Wei to Ether:", error);
    return "0.0";
  }
}

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

const OffsetHelper: React.FC<Props> = ({ distance }) => {
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [daysTraveled, setDaysTraveled] = useState(1);
  const [daysTraveledShow, setDaysTraveledShow] = useState("1");

  const [kmToOffset, setKmToOffset] = useState(distance);
  const [tokensToOffset, setTokenToOffset] = useState(0);
  const tonesOfCO2ByKm = 0.0002;

  const router = useRouter();

  /*
  ********************POLYGON********************
  NCT: 0xD838290e877E0188a4A44700463419ED96c16107

  *********************CELO**********************
  NCT: b0x02De4766C272abc10Bc88c220D214A26960a7e92
  cUSD: 0x765DE816845861e75A25fCA122bb6898B8B1282a
  */

  const { data: ETHNeeded } = useScaffoldContractRead({
    contractName: "OffsetHelper",
    functionName: "calculateNeededETHAmount",
    args: ["0x02De4766C272abc10Bc88c220D214A26960a7e92", parseEther(tokensToOffset.toString().slice(0, 6))],
  });

  const { data: cUSDNeeded } = useScaffoldContractRead({
    contractName: "OffsetHelper",
    functionName: "calculateNeededTokenAmount",
    args: [
      "0x765DE816845861e75A25fCA122bb6898B8B1282a",
      "0x02De4766C272abc10Bc88c220D214A26960a7e92",
      parseEther(tokensToOffset.toString().slice(0, 6)),
    ],
  });

  const { writeAsync } = useScaffoldContractWrite({
    contractName: "OffsetHelper",
    functionName: "autoOffsetExactOutETH",
    args: ["0x02De4766C272abc10Bc88c220D214A26960a7e92", parseEther(tokensToOffset.toString().slice(0, 6))],
    value: weiToEtherString(ETHNeeded?.toString()),
  });

  useScaffoldEventSubscriber({
    contractName: "OffsetHelper",
    eventName: "Redeemed",
    // The listener function is called whenever a GreetingChange event is emitted by the contract.
    // It receives the parameters emitted by the event,
    listener: () => {
      //console.log(who, poolToken, tco2s, amounts);
      router.push("/lastOffsets");
    },
  });

  // console.log(`tokens to offset in wei: ${parseEther(tokensToOffset.toString().slice(0, 6))}`);
  // console.log(`matic to exchange displayed: ${weiToEtherStringDisplay(ETHNeeded?.toString())}`);
  // console.log(`matic to exchange actually exchanged: ${weiToEtherString(ETHNeeded?.toString())}`);

  useEffect(() => {
    const kms = distance * (isRoundTrip ? daysTraveled * 2 : daysTraveled);
    setKmToOffset(kms);
    const tokens = kms * tonesOfCO2ByKm;

    setTokenToOffset(tokens);
  }, [distance, isRoundTrip, daysTraveled]);

  return (
    <>
      <div className="flex items-center my-4 mt-10">
        <label htmlFor="roundTrip" className="mr-2 text-gray-700">
          Is it a round trip?
        </label>
        <div className="relative inline-block w-10 mr-2 align-middle select-none">
          <input
            type="checkbox"
            name="roundTrip"
            id="roundTrip"
            checked={isRoundTrip}
            onChange={e => setIsRoundTrip(e.target.checked)}
            className="w-6 h-6 rounded-full bg-white border-4 cursor-pointer"
          />
        </div>
      </div>

      <div className="my-4">
        <label htmlFor="daysTraveled" className="mr-2 text-gray-700">
          Days traveled:
        </label>
        <input
          type="number"
          name="daysTraveled"
          id="daysTraveled"
          value={daysTraveledShow}
          onChange={e => {
            const inputValue = e.target.value;
            if (inputValue !== "") {
              setDaysTraveled(parseInt(inputValue));
              setDaysTraveledShow(inputValue);
            } else if (inputValue === "") {
              setDaysTraveled(0);
              setDaysTraveledShow(inputValue);
            }
          }}
          className="w-20 px-3 py-1 text-gray-700 border rounded-lg focus:outline-none focus:border-primary"
        />
      </div>

      <div className="mt-4">
        <p className="text-lg font-medium text-gray-700">
          For {kmToOffset.toLocaleString()} km you will need{" "}
          <b>{weiToEtherStringDisplay(cUSDNeeded?.toString())} cUSD </b> in order to retire{" "}
          {tokensToOffset.toString().slice(0, 6)} TCO2 tokens.
        </p>
      </div>

      <div className="flex justify-center">
        <button
          className="w-full lg:w-1/2 mx-auto px-4 py-2 bg-primary rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={writeAsync}
        >
          Offset this ride(s)
        </button>
      </div>
      <br />
      <br />
    </>
  );
};

export default OffsetHelper;
