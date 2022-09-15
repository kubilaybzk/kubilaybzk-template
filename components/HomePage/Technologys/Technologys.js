import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaSass } from "react-icons/fa";
import { DiReact } from "react-icons/di";
import { TbBrandTailwind, TbBrandNextjs } from "react-icons/tb";
import { AiOutlineAntDesign } from "react-icons/ai";
import { SiFlutter } from "react-icons/si";
import TitleandDesc from "../../Helpers/TitleandDesc/TitleandDesc";

export default function Technologys() {
  let Techs = [
    {
      title: "NextJS",
      icon: (
        <TbBrandNextjs className="text-black dark:text-Yellow text-[56px]" />
      ),
      image: "/Nextjs.png",
    },
    {
      title: "ReactJS",
      icon: <DiReact className="text-black dark:text-Yellow text-[56px]" />,
      image: "/React.png",
    },
    {
      title: "Tailwind",
      icon: (
        <TbBrandTailwind className="text-black dark:text-Yellow text-[56px]" />
      ),
      image: "/tailwind.png",
    },
    {
      title: "Sass/Less",
      icon: <FaSass className="text-black dark:text-Yellow text-[56px]" />,
      image: "/Sass-Less.png",
    },
    {
      title: "Ant-Design",
      icon: (
        <AiOutlineAntDesign className="text-black dark:text-Yellow text-[56px]" />
      ),
      image: "/ant-design.png",
    },
    {
      title: "Flutter",
      icon: <SiFlutter className="text-black dark:text-Yellow text-[56px]" />,
      image: "/flutter.png",
    },
  ];

  return (
    <div className="w-full text-center ">
      <TitleandDesc
        title={"Technologys"}
        desc={"Projelerimde kullandığım ve deneyimlediğim teknolojiler."}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-[54px]">
        {Techs.map((item, key) => {
          return (
            <div
              key={key}
              className="w-full bg-white dark:bg-DarkV1 p-8  flex flex-col items-center justify-center space-y-5"
            >
              {/*       <div className="relative w-full h-12">
                <Image
                  src={item.image}
                  alt="sun"
                  layout="fill"
                  objectFit="contain"
            

                />
               
              </div> */}
              {item.icon}
              <span className="text-lg text-black dark:text-white font-medium">
                {item.title}
              </span>
            </div>
          );
        })}
      </div>{" "}
      <Link href={"/teknolojiler"}>
        <div className="flex flex-row items-center justify-center cursor-pointer">
          <span className="text-[48px] flex flex-col text-Yellow ">. . . </span>
          <span className="text-Yellow text-xl pt-8 ml-2  ">
            More
          </span>
        </div>
      </Link>
    </div>
  );
}
