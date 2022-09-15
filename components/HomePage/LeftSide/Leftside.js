import Image from "next/image";
import React from "react";

import Languages from "./Languages";
import Skils from "./Skils";
import ExtraSkils from "./ExtraSkils";
import Social from "./Social";
import Information from "./Information";
export default function Leftside() {
  return (
    <div className="bg-white w-[305px] dark:bg-DarkV1 hidden lg:flex max-h-[1440px]">
      <div className="pl-[40px] pr-[45px] pt-[50px] flex flex-col justify-center items-center">
        <div className="relative w-[150px] h-[150px] rounded-full border-2 overflow-hidden">
          <Image src={"/profile.jpeg"} objectFit="cover" alt="Profile Picture" layout="fill" />
        </div>

        <div className="flex flex-col gap-y-4 mt-8 justify-center items-center text-center">
          <h1 className="text-black dark:text-white text-lg font-medium">
            Kubilay Bozak
          </h1>
          <h2 className="text-sm text-ParagraphFont font-normal">
            Front-End Developer
          </h2>

          <Social />

          <Information />

          <Languages />
          <Skils />
          <ExtraSkils />
        </div>
      </div>
    </div>
  );
}
