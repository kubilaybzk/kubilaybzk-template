import Head from "next/head";
import React from "react";
import Blogs from "../components/HomePage/Blogs/Blogs";
import Github from "../components/HomePage/Github/Github";
import Technologys from "../components/HomePage/Technologys/Technologys";
import TopHero from "../components/HomePage/TopHero/TopHero";

export default function HpmePage() {
  return (
    <>
      <Head>
        <title>AnaSayfa -KubilayBzk</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/sonv2.png" />
      </Head>
      <TopHero />
      <Technologys />
      <Blogs />
      <Github />
    </>
  );
}
