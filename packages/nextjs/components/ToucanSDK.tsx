import React from "react";
import { useState } from "react";
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

  const redeemPoolToken = async (): Promise<void> => {
    const redeemedTokenAddress = await toucan.redeemAuto2("NCT", parseEther("1"));
    redeemedTokenAddress && setTco2address(redeemedTokenAddress[0].address);
  };

  const retirePoolToken = async (): Promise<void> => {
    tco2address.length && (await toucan.retire(parseEther("1.0"), tco2address));
  };

  return (
    <>
      {/* <h1 className="text-gray-700 py-2">{name}</h1> */}
      <button
        className="inline-flex w-full justify-center rounded-lg border px-5 my-7 py-2  bg-primary text-white hover:bg-opacity-90"
        onClick={() => redeemPoolToken()}
      >
        {`Redeem ${distance}`}
      </button>
      <button
        className="inline-flex w-full justify-center rounded-lg border px-5 my-5 py-2  bg-primary text-white hover:bg-opacity-90"
        onClick={() => retirePoolToken()}
      >
        {"Retire Tokens"}
      </button>
    </>
  );
};

export default ToucanSDK;
