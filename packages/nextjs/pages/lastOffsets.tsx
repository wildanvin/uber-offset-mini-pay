import Head from "next/head";
import { ethers } from "ethers";
import type { NextPage } from "next";
import CardOffset from "~~/components/CardOffset";
import { Spinner } from "~~/components/Spinner";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

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

const LastOffsets: NextPage = () => {
  const {
    data: events,
    isLoading: isLoadingEvents,
    error: errorReadingEvents,
  } = useScaffoldEventHistory({
    contractName: "OffsetHelper",
    eventName: "Redeemed",
    // Specify the starting block number from which to read events.
    fromBlock: 47348803,
    blockData: false,
    transactionData: true,
    receiptData: false,
  });

  console.log(isLoadingEvents);

  const eventList = events?.map(event => (
    <CardOffset
      key={event.transaction.hash}
      txHash={event.transaction.hash}
      address={event.args[0]}
      tokenQuantity={weiToEtherStringDisplay(event.args[3].toString())}
    />
  ));

  return (
    <>
      <Head>
        <title>Uber Offset</title>
        <meta name="description" content="Created with 🏗 scaffold-eth-2" />
      </Head>

      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="w-full lg:w-1/2 px-5">
          <h1 className="text-center mb-8">
            <span className="block text-4xl font-bold">Latest Offsets</span>
          </h1>
          <section className="pt-5 pb-20 w-1800px mx-auto p-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-2">
              <div>
                {isLoadingEvents ? (
                  <div className="flex items-center justify-center">
                    <Spinner />
                  </div>
                ) : (
                  eventList
                )}
              </div>
            </div>
          </section>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default LastOffsets;
