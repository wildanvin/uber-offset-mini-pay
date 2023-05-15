import React from "react";
import { useEffect, useState } from "react";
import { parseEther } from "ethers/lib/utils.js";
import ToucanClient from "toucan-sdk";
import { useProvider, useSigner } from "wagmi";

type Props = {
  //name: string;
  distance: number;
};

const ToucanSDK: React.FC<Props> = ({ distance }) => {
  const provider = useProvider();
  const { data: signer } = useSigner();

  const toucan = new ToucanClient("alfajores", provider);
  signer && toucan.setSigner(signer);

  // we will store our return value here
  const [tco2address, setTco2address] = useState("");
  const [isRoundTrip, setIsRoundTrip] = useState(false);
  const [daysTraveled, setDaysTraveled] = useState(1);
  const [kmToOffset, setKmToOffset] = useState(distance);
  const [tokensToOffset, setTokenToOffset] = useState(0);
  const tonesOfCO2ByKm = 0.0003;

  useEffect(() => {
    const kms = distance * (isRoundTrip ? daysTraveled * 2 : daysTraveled);
    setKmToOffset(kms);
    const tokens = Math.ceil(kms * tonesOfCO2ByKm);
    setTokenToOffset(tokens);
  }, [distance, isRoundTrip, daysTraveled]);

  const redeemPoolToken = async (): Promise<void> => {
    const redeemedTokenAddress = await toucan.redeemAuto2("NCT", parseEther(tokensToOffset.toString()));
    redeemedTokenAddress && setTco2address(redeemedTokenAddress[0].address);
  };

  const retirePoolToken = async (): Promise<void> => {
    tco2address.length && (await toucan.retire(parseEther(tokensToOffset.toString()), tco2address));
  };

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
          {kmToOffset.toLocaleString()} km would nedd {tokensToOffset} NCT tokens to retire
        </p>
      </div>

      <button
        className="inline-flex w-full justify-center rounded-lg border px-5 my-7 py-2  bg-primary text-white hover:bg-opacity-90"
        onClick={() => redeemPoolToken()}
      >
        {`Redeem ${tokensToOffset} NCT`}
      </button>
      <button
        className="inline-flex w-full justify-center rounded-lg border px-5 my-5 py-2  bg-primary text-white hover:bg-opacity-90"
        onClick={() => retirePoolToken()}
      >
        {`Retire ${tokensToOffset} TCO2`}
      </button>
    </>
  );
};

export default ToucanSDK;
