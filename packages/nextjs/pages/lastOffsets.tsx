import Head from "next/head";
import type { NextPage } from "next";
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
    fromBlock: 47351795,
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
          <section className="pt-5 pb-20 w-1800px mx-auto p-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-2">
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Last Offsets</h2>
              <p className="text-gray-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget turpis justo. Vestibulum id ante id
                libero bibendum luctus.
              </p>
              <p className="text-gray-600 mt-4">
                Phasellus euismod, elit non mollis ullamcorper, metus arcu placerat justo, quis bibendum metus elit non
                tortor.
              </p>
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
