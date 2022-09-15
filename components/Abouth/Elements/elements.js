import React from "react";

export default function InfoComp({ children, title }) {
  return (
    <div className="mt-12 w-full">
      <div className="w-full border-t-2 border-Yellow relative">
        <div className="bg-Yellow absolute  px-4 py-1  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <span className="  text-[12px] md:text-[14px] lg:text-[16px] ">
            {title}
          </span>
        </div>
      </div>
      <div className="mt-6 bg-white dark:bg-DarkV1 p-4 rounded">{children}</div>
    </div>
  );
}
