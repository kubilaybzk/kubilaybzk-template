import Link from "next/link";
import React from "react";
import { TbCircleSquare } from "react-icons/tb";

export default function ExtraSkils() {
  return (
    <div className="RightMenuContainer !pt-0 items-start ">
      <p className="text-lg text-black dark:text-white font-medium">
        Ekstra yetenekler
      </p>

      <div className="flex flex-col gap-x-2">
        {/*Tailwind*/}
        <div className="flex flex-row items-center gap-x-3 w-full">
          <TbCircleSquare className="text-Yellow" />
          <span className="text-[15px] font-normal text-ParagraphFont dark:text-white">
            Tailwind
          </span>
        </div>

        {/*Sass*/}
        <div className="flex flex-row items-center gap-x-3 w-full">
          <TbCircleSquare className="text-Yellow" />
          <span className="text-[15px] font-normal text-ParagraphFont dark:text-white">
            Sass
          </span>
        </div>

        {/*Less*/}
        <div className="flex flex-row items-center gap-x-3 w-full">
          <TbCircleSquare className="text-Yellow" />
          <span className="text-[15px] font-normal text-ParagraphFont dark:text-white">
            Less
          </span>
        </div>

        {/*Module Css*/}
        <div className="flex flex-row items-center gap-x-3 w-full">
          <TbCircleSquare className="text-Yellow" />
          <span className="text-[15px] font-normal text-ParagraphFont dark:text-white">
            Module Css
          </span>
        </div>

        {/*GraphQL*/}
        <div className="flex flex-row items-center gap-x-3 w-full">
          <TbCircleSquare className="text-Yellow" />
          <span className="text-[15px] font-normal text-ParagraphFont dark:text-white">
            GraphQL
          </span>
        </div>

        {/*Ant Design*/}
        <div className="flex flex-row items-center gap-x-3 w-full">
          <TbCircleSquare className="text-Yellow" />
          <span className="text-[15px] font-normal text-ParagraphFont dark:text-white">
            Ant Design
          </span>
        </div>
      </div>
      <Link href={"/teknolojiler"}>
        <span className="text-Yellow cursor-pointer">Daha fazla...</span>
      </Link>
    </div>
  );
}
