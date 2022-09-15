import Head from "next/head";
import React from "react";
import Abouth from "../components/Abouth/Abouth";

export default function hakkimda() {
  return (
    <>
      <Head>
        <title>Hakkımda -KubilayBzk</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/sonv2.png" />
      </Head>
      <Abouth/>
    </>
  );
}
