import React from 'react'

export default function TitleandDesc({title,desc}) {
  return (
    <div className="w-full text-center ">
    <div className="pt-[50px] pb-[25px] flex flex-col items-center justify-center">
      <span className="text-vlack font-normal text-center text-lg  pb-[25px] ">
      {title}
      </span>
      <span className="max-w-[297px] text-ParagraphFont text-center text-[15px] font-normal">
      {desc}
      </span>
    </div>
  </div>
  )
}
