import React from "react";

export default function Information() {
  var d = new Date();
  var n = d.getFullYear();
  function getAge(birthYear) {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    let age = currentYear - birthYear;
    return age;
  }
  let calculatedAge = getAge(1997);

  return (
    <div className="RightMenuContainer border-t-[2px]  border-t-Background dark:border-t-DarkV2  ">
      <div className="w-full flex flex-row justify-between">
        <span className="bg-Yellow px-2 text-black dark:text-white">Yaş:</span>
        <span className="text-black dark:text-white">{calculatedAge}</span>
      </div>
      <div className="w-full flex flex-row justify-between">
        <span className="bg-Yellow px-2 text-black dark:text-white">
          Ülke:
        </span>
        <span className="text-black dark:text-white">Turkey TR</span>
      </div>
      <div className="w-full flex flex-row justify-between">
        <span className="bg-Yellow px-2 text-black dark:text-white">
          Şehir:
        </span>
        <span className="text-black dark:text-white">Istanbul</span>
      </div>
    </div>
  );
}
