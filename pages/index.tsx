import React from "react";
import Head from "next/head";
import "../styles/global.css";
import GksTitle from "../components/GksTitle";

/**
 * Home page (in our case, only page)
 */
const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-200 overflow-hidden">
        <div className="sm:p-10">
          <div className="bg-white max-w-2xl mx-auto shadow-2xl">
            {/* Page contents */}
            <GksTitle />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
