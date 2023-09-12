import Head from "next/head";
import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>Uber Offset</title>
        <meta name="description" content="Created with 🏗 scaffold-eth-2" />
      </Head>

      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="w-full lg:w-1/2 px-5">
          <h1 className="text-center mb-8">
            <span className="block text-4xl font-bold">How it works?</span>
          </h1>
          <section className="pt-5 pb-20 w-1800px mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
            <div className="flex flex-col space-y-3 text-lg font-normal">
              <p className="text-gray-600 mt-4 mb-0">
                The CO<sub>2</sub> that you offset using this app is backed by the TCO2 token from the Toucan Protocol.
                As the name suggests, each TCO2 token represents 1 tonne of CO<sub>2</sub>.
              </p>
              <p className="text-gray-600 mt-4 mb-0">
                What this app does under the hood is:
                <ol className="list-decimal list-inside mt-2 ml-4 space-y-2">
                  <li className="mb-2">Obtain a Toucan pool token (NCT) by performing a tokenswap on Sushiswap.</li>
                  <li className="mb-2">Redeem the pool token for a TCO2 token.</li>
                  <li className="mb-2">Retire the TCO2 token.</li>
                </ol>
              </p>
              <p className="text-gray-600 mt-4">
                I used the{" "}
                <a
                  href="https://polygonscan.com/address/0x4e01404d07c5c85d35a2b6a6ad777d29cc51eaa1#code"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2"
                >
                  OffsetHelper
                </a>{" "}
                contract (deployed by the Toucan team) to allow a retirement within one transaction. You can read more
                about the Toucan Protocol{" "}
                <a
                  href="https://docs.toucan.earth/toucan/introduction/overview"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2"
                >
                  here
                </a>{" "}
                and more about the Carbon Markets{" "}
                <a
                  href="https://docs.toucan.earth/toucan/introduction/carbon-markets"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2"
                >
                  here
                </a>
                .
              </p>

              <br />

              <p className="text-gray-600 mt-4">
                Calculating the number of tokens needed for redemption is simple. According to{" "}
                <a
                  href="https://www.statista.com/statistics/1185559/carbon-footprint-of-travel-per-kilometer-by-mode-of-transport/#:~:text=The%20carbon%20footprint%20of%20a,of%20CO2%20per%20passenger%20kilometer."
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2"
                >
                  statista.com
                </a>
                , the average carbon emission per kilometer for a typical car is approximately 192 grams, which I've
                rounded up to 200 grams for simplicity. When converted to tonnes, this is equivalent to 0.0002 tonnes.
              </p>
              <p className="text-gray-600 mt-4">
                Google Maps API calculates the distance of your ride, and by multiplying this distance by 0.0002, you
                get the number of tokens you'll retire/offset.
              </p>

              <br />

              <p className="text-gray-600 mt-4">
                Thanks for using this app! If you have any questions or feedback, feel free to reach out on{" "}
                <a
                  href="https://twitter.com/wildanvin"
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-2"
                >
                  twitter
                </a>
                .
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

export default About;
