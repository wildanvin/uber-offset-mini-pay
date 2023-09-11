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
          <section className="pt-5 pb-20 w-1800px mx-auto p-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-2">
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

export default About;
