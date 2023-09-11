import React from "react";
import { Address } from "./scaffold-eth";

interface CardProps {
  id: string;
  txHash: string;
  address: string;
  tokenQuantity: string;
}

const Card: React.FC<CardProps> = ({ id, txHash, address, tokenQuantity }) => {
  return (
    <div className="rounded-lg shadow-md p-4">
      <div className="text-gray-600 flex ml-1.5 text-lg font-normal justify-center flex-col sm:flex-row">
        <Address address={address} />
        <p>
          &nbsp; has retired <b>{tokenQuantity} tons</b> of CO2.{" "}
        </p>
        <p>
          &nbsp;{" "}
          <a
            href={`https://polygonscan.com/tx/${txHash}`}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2"
          >
            See on polygonscan.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Card;
