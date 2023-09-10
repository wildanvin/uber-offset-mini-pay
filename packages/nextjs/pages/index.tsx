import Head from "next/head";
import type { NextPage } from "next";
import DistanceCalculator from "~~/components/DistanceCalculator";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Uber Offset</title>
        <meta name="description" content="Created with 🏗 scaffold-eth-2" />
      </Head>

      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="w-full lg:w-1/2 px-5">
          {/* <h1 className="text-center mb-8">
            <span className="block text-4xl font-bold">Uber Offset</span>
            <span className="block text-2xl mb-2">Offset your Uber (or any other) rides</span>
          </h1> */}
          <div>
            <DistanceCalculator />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default Home;
