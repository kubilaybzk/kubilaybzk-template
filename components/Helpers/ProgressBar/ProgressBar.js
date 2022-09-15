import React from "react";

export default function ProgressBar({width}) {
  return (
    <div className="w-full bg-Background  dark:bg-black  border border-Yellow rounded-full h-2.5 flex items-center px-[2px]">
      <div className="bg-Yellow h-1 rounded-full" style={{width:`${width}%`}}></div>
    </div>
  );
}
