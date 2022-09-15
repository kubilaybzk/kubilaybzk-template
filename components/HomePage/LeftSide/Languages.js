import React from "react";
import ProgressBar from "../../Helpers/ProgressBar/ProgressBar";

export default function Languages() {
  return (
    <div className="RightMenuContainer !pt-0 items-start ">
      <p className="text-lg text-black dark:text-white font-medium">
        Dil bilgisi
      </p>
      {/*Turkish*/}
      <div className="flex flex-col w-full">
        <div className="flex flex-row w-full justify-between">
          <span className="font-normal text-[15px] text-ParagraphFont dark:text-white">
            Türkçe
          </span>
          <span className="font-normal text-[15px] text-ParagraphFont dark:text-white">
            100%
          </span>
        </div>
        <ProgressBar width={100} />
      </div>
      {/*Englisj*/}
      <div className="flex flex-col w-full">
        <div className="flex flex-row w-full justify-between">
          <span className="font-normal text-[15px] text-ParagraphFont dark:text-white">
            İngilizce
          </span>
          <span className="font-normal text-[15px] text-ParagraphFont dark:text-white">
            75%
          </span>
        </div>
        <ProgressBar width={75} />
      </div>
    </div>
  );
}
