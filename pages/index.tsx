import React from "react";
import Head from "next/head";
import "../styles/global.css";
import GksTitle from "../components/GksTitle";
import GksBackground from "../components/GksBackground";
import GksExperience from "../components/GksExperience";
import GksTools from "../components/GksTools";
import GksProjects from "../components/GksProjects";
import GksEducation from "../components/GksEducation";
import GksContact from "../components/GksContact";

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
            <GksBackground />
            <GksExperience />
            <GksTools />
            <GksProjects />
            <GksEducation />
            <GksContact />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
