import React from "react";
import Head from "next/head";
import "../styles/global.css";
import { RedesignContact } from "../components/redesign/RedesignContact";
import { RedesignHero } from "../components/redesign/RedesignHero";
import { RedesignTools } from "../components/redesign/RedesignTools";
import { RedesignExperience } from "../components/redesign/RedesignExperience";
import { RedesignProjects } from "../components/redesign/RedesignProjects";
// FONTS
import "fontsource-sansita-swashed";
import "fontsource-montserrat";
import "fontsource-montserrat/700.css";

/**
 * Home page (in our case, only page)
 */
const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Grant Sander</title>
        <link rel="icon" href="/favicon.ico" />
        <meta lang="en" />
        <meta name="description" content="Grant Sander's Portfolio site" />
      </Head>
      <div className="bg-gray-100">
        {/* Page contents */}
        {/*<RedesignHeader />*/}
        <RedesignHero />
        <RedesignExperience />
        <RedesignTools />
        <RedesignProjects />
        <RedesignContact />
      </div>
    </div>
  );
};
export default Home;
