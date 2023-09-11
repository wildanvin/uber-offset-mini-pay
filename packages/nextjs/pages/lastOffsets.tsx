import Head from "next/head";
import type { NextPage } from "next";
import CardOffset from "~~/components/CardOffset";
import { useScaffoldEventHistory } from "~~/hooks/scaffold-eth";

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
    blockData: true,
    // Apply filters to the event based on parameter names and values { [parameterName]: value },
    //filters: { premium: true }
    // If set to true it will return the transaction data for each event (default: false),
    transactionData: true,
    // If set to true it will return the receipt data for each event (default: false),
    receiptData: false,
  });

  console.log(events);
  return (
    <>
      <Head>
        <title>Uber Offset</title>
        <meta name="description" content="Created with 🏗 scaffold-eth-2" />
      </Head>

      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="w-full lg:w-1/2 px-5">
          <h1 className="text-center mb-8">
            <span className="block text-4xl font-bold">Last Offsets</span>
          </h1>
          <section className="pt-5 pb-20 w-1800px mx-auto p-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-2">
              <CardOffset
                id="0x8df5ef909e0e25d17bae8d746cca3893c8d917b4e17ac10753d94453a62c8aec"
                txHash="0x8df5ef909e0e25d17bae8d746cca3893c8d917b4e17ac10753d94453a62c8aec"
                address="0x4b2b0D5eE2857fF41B40e3820cDfAc8A9cA60d9f"
                tokenQuantity="100"
              />

              <CardOffset
                id="0x8df5ef909e0e25d17bae8d746cca3893c8d917b4e17ac10753d94453a62c8aec"
                txHash="0x8df5ef909e0e25d17bae8d746cca3893c8d917b4e17ac10753d94453a62c8aec"
                address="0x4E01404D07c5C85D35a2b6A6Ad777D29CC51Eaa1"
                tokenQuantity="10"
              />

              <CardOffset
                id="0x8df5ef909e0e25d17bae8d746cca3893c8d917b4e17ac10753d94453a62c8aec"
                txHash="0x8df5ef909e0e25d17bae8d746cca3893c8d917b4e17ac10753d94453a62c8aec"
                address="0x4b2b0D5eE2857fF41B40e3820cDfAc8A9cA60d9f"
                tokenQuantity="0.5"
              />
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
