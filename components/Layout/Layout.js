import Head from "next/head";
import React from "react";
import Leftside from "../HomePage/LeftSide/Leftside";
import RightSide from "../HomePage/RightSide/RightSide";
import SmallNavbar from "./SmallNavbar";

export default function Layout({ children }) {
  return (
    <>
      <SmallNavbar />

      <div className="flex flex-row justify-between max-w-[1200px] mx-auto ">
        <Leftside />

        <div className="w-full mx-4 overflow-y-hidden">{children}</div>

       
      </div>
    </>
  );
}
