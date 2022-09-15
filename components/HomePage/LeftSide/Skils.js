import Link from "next/link";
import React from "react";
import ProgressBar from "../../Helpers/ProgressBar/ProgressBar";


export default function Skils() {
  return (
    <div className="RightMenuContainer !pt-0 items-start ">
      <p className="text-lg text-black dark:text-white font-medium">Yetenekler</p>

      {/*Html*/}
      <div className="flex flex-col w-full">
        <div className="flex flex-row w-full justify-between">
          <span className="font-normal text-[15px] text-ParagraphFont dark:text-white">
            Html
          </span>
          <span className="font-normal text-[15px] text-ParagraphFont dark:text-white">
            90%
          </span>
        </div>
        <ProgressBar width={90} />
      </div>

      {/*Css*/}
      <div className="flex flex-col w-full">
        <div className="flex flex-row w-full justify-between">
          <span className="font-normal text-[15px] text-ParagraphFont dark:text-white">
            Css
          </span>
          <span className="font-normal text-[15px] text-ParagraphFont dark:text-white">
            85%
          </span>
        </div>
        <ProgressBar width={85} />
      </div>

      {/*JS*/}
      <div className="flex flex-col w-full">
        <div className="flex flex-row w-full justify-between">
          <span className="font-normal text-[15px] text-ParagraphFont dark:text-white">
            JavaScript
          </span>
          <span className="font-normal text-[15px] text-ParagraphFont dark:text-white">
            80%
          </span>
        </div>
        <ProgressBar width={80} />
      </div>

      {/*Nextjs*/}
      <div className="flex flex-col w-full">
        <div className="flex flex-row w-full justify-between">
          <span className="font-normal text-[15px] text-ParagraphFont dark:text-white">
            Nextjs
          </span>
          <span className="font-normal text-[15px] text-ParagraphFont dark:text-white">
            90%
          </span>
        </div>
        <ProgressBar width={90} />
      </div>

      {/*React*/}
      <div className="flex flex-col w-full">
        <div className="flex flex-row w-full justify-between">
          <span className="font-normal text-[15px] text-ParagraphFont dark:text-white">
            React
          </span>
          <span className="font-normal text-[15px] text-ParagraphFont dark:text-white">
            90%
          </span>
        </div>
        <ProgressBar width={90} />
      </div>

      {/*Flutter*/}
      <div className="flex flex-col w-full">
        <div className="flex flex-row w-full justify-between">
          <span className="font-normal text-[15px] text-ParagraphFont dark:text-white">
            Flutter
          </span>
          <span className="font-normal text-[15px] text-ParagraphFont dark:text-white">
            60%
          </span>
        </div>
        <ProgressBar width={60} />
      </div>

      <Link href={"/teknolojiler"}>
        <span className="text-Yellow cursor-pointer">Daha fazla...</span>
      </Link>
    </div>
  );
}
