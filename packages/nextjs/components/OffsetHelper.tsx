import React from "react";
import { useEffect, useState } from "react";
import { EtherInput } from "./scaffold-eth";
import { parseEther } from "ethers/lib/utils.js";
import { useScaffoldContractRead } from "~~/hooks/scaffold-eth";

type Props = {
  distance: number;
};

const OffsetHelper: React.FC<Props> = ({ distance }) => {
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [daysTraveled, setDaysTraveled] = useState(1);
  const [kmToOffset, setKmToOffset] = useState(distance);
  const [tokensToOffset, setTokenToOffset] = useState(0);
  const tonesOfCO2ByKm = 0.0003;

  const { data: ETHNeeded } = useScaffoldContractRead({
    contractName: "OffsetHelper",
    functionName: "calculateNeededETHAmount",
    args: ["0xD838290e877E0188a4A44700463419ED96c16107", parseEther("1")],
  });

  console.log(`matic needed is ${ETHNeeded}`);

  useEffect(() => {
    const kms = distance * (isRoundTrip ? daysTraveled * 2 : daysTraveled);
    setKmToOffset(kms);
    const tokens = Math.ceil(kms * tonesOfCO2ByKm);
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
          value={daysTraveled}
          onChange={e => setDaysTraveled(parseInt(e.target.value))}
          className="w-20 px-3 py-1 text-gray-700 border rounded-lg focus:outline-none focus:border-primary"
        />
      </div>

      <div className="mt-4">
        <p className="text-lg font-medium text-gray-700">
          {kmToOffset.toLocaleString()} km would need {tokensToOffset} NCT tokens to retire
        </p>
        <p className="text-lg font-medium text-gray-700">Hey you will need {ETHNeeded?.toString()} matic</p>
      </div>
    </>
  );
};

export default OffsetHelper;
