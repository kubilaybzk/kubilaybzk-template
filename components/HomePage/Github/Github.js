import Link from "next/link";
import React, { useEffect, useState } from "react";
import { DiJavascript1 } from "react-icons/di";
import { SiC, SiDart, SiFlutter, SiJupyter } from "react-icons/si";
import { IoLogoCss3, IoLogoSass } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { CgCPlusPlus } from "react-icons/cg";
import { TiCodeOutline } from "react-icons/ti";
import { TbCSharp } from "react-icons/tb";
import TitleandDesc from "../../Helpers/TitleandDesc/TitleandDesc";
export default function Github() {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
/*
  Kullanıcı adı kısmını değiştirerek kendi github içeriklerinizi görebilirsiniz.
  */

    async function getRepo() {
      const resp = await fetch(
        "https://api.github.com/users/kubilaybzk/repos?"
      );

      setRepo(await resp.json());
    }
    getRepo();
  }, []);

  return (
    <>
      {" "}
      <TitleandDesc
        title={"Github Repolarım"}
        desc={
          "Github içeriklerime aşağıda bulunan kartlara tıklayarak ulaşabilirsiniz."
        }
      />
      <div className="not-prose relative  rounded-xl overflow-hidden max-w-[870px] md:max-w-[1200px] lg:max-w-[870px]">
        <div className="absolute inset-0 bg-grid-slate-100 "></div>
        <div className="relative rounded-xl overflow-auto">
          <div className="relative">
            <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto py-14">
              {repo.map((item, key) => {
                return (
                  <div className="snap-center shrink-0" key={key}>
                    <div className="shrink-0 w-80  h-52 rounded-lg shadow-xl bg-white dark:bg-DarkV1">
                      <div className="flex flex-col justify-center items-center w-full h-full gap-y-4">
                        {item.language === "JavaScript" && (
                          <DiJavascript1 className="CardIcons" />
                        )}
                        {item.language === "Python" && (
                          <FaPython className="CardIcons" />
                        )}
                        {item.language === "Dart" && (
                          <SiFlutter className="CardIcons" />
                        )}
                        {item.language === "CSS" && (
                          <IoLogoCss3 className="CardIcons" />
                        )}
                        {item.language === "C++" && (
                          <CgCPlusPlus className="CardIcons" />
                        )}
                        {item.language === "Jupyter Notebook" && (
                          <SiJupyter className="CardIcons" />
                        )}
                        {item.language === "null" && (
                          <TiCodeOutline className="CardIcons" />
                        )}

                        {item.language === null && (
                          <TiCodeOutline className="CardIcons" />
                        )}
                        {item.language === undefined && (
                          <TiCodeOutline className="CardIcons" />
                        )}
                        {item.language === "SCSS" && (
                          <IoLogoSass className="CardIcons" />
                        )}
                        {item.language === "C" && <SiC className="CardIcons" />}
                        {item.language === "C#" && (
                          <TbCSharp className="CardIcons" />
                        )}
                        <div className="max-w-[300px] min-h-[50px] text-center">
                        <span className="text-base text-center text-ParagraphFont dark:text-white">
                          {item.name}
                        </span>
                          </div>
                        <Link href={item.svn_url}>
                          <span className="self-start ml-4 text-Yellow hover:text-Yellow2 cursor-pointer">
                            Repoya git
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/*

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { DiJavascript1 } from "react-icons/di";
import { SiC, SiDart, SiJupyter } from "react-icons/si";
import { IoLogoCss3, IoLogoSass } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { CgCPlusPlus } from "react-icons/cg";
import { TiCodeOutline } from "react-icons/ti";
import { TbCSharp } from "react-icons/tb";

import Slider from "react-slick";

export default function Github() {
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    async function getRepo() {
      const resp = await fetch(
        "https://api.github.com/users/kubilaybzk/repos?"
      );

      setRepo(await resp.json());
    }
    getRepo();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-[853px] mx-auto px-4">
      <Slider centerMode={true} {...settings}>
        {repo.map((item, key) => {
          return (
            <div key={key} className="px-4">
              <div className="flex flex-col justify-center items-center bg-white dark:bg-DarkV1  gap-y-5 w-full h-full">
                {item.language === "JavaScript" && (
                  <DiJavascript1 className="CardIcons" />
                )}
                {item.language === "Python" && (
                  <FaPython className="CardIcons" />
                )}
                {item.language === "Dart" && <SiDart className="CardIcons" />}
                {item.language === "CSS" && (
                  <IoLogoCss3 className="CardIcons" />
                )}
                {item.language === "C++" && (
                  <CgCPlusPlus className="CardIcons" />
                )}
                {item.language === "Jupyter Notebook" && (
                  <SiJupyter className="CardIcons" />
                )}
                {item.language === "null" && (
                  <TiCodeOutline className="CardIcons" />
                )}

                {item.language === null && (
                  <TiCodeOutline className="CardIcons" />
                )}
                {item.language === undefined && (
                  <TiCodeOutline className="CardIcons" />
                )}
                {item.language === "SCSS" && (
                  <IoLogoSass className="CardIcons" />
                )}
                {item.language === "C" && <SiC className="CardIcons" />}
                {item.language === "C#" && <TbCSharp className="CardIcons" />}
                <span>{item.name}</span>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

/*
{repo.map((item, key) => {
            return (
              <div
                key={key}
                className="snap-center shrink-0  bg-white p-2 dark:bg-DarkV1 pb-0"
              >
                <div className=" w-80 h-20  rounded-lg  flex items-center flex-col justify-center ">
                  {item.language === "JavaScript" && (
                    <DiJavascript1 className="CardIcons" />
                  )}
                  {item.language === "Python" && (
                    <FaPython className="CardIcons" />
                  )}
                  {item.language === "Dart" && (
                    <SiDart className="CardIcons" />
                  )}
                  {item.language === "CSS" && (
                    <IoLogoCss3 className="CardIcons" />
                  )}
                  {item.language === "C++" && (
                    <CgCPlusPlus className="CardIcons" />
                  )}
                  {item.language === "Jupyter Notebook" && (
                    <SiJupyter className="CardIcons" />
                  )}
                  {item.language === "null" && (
                    <TiCodeOutline className="CardIcons" />
                  )}

                  {item.language === null && (
                    <TiCodeOutline className="CardIcons" />
                  )}
                  {item.language === undefined && (
                    <TiCodeOutline className="CardIcons" />
                  )}
                  {item.language === "SCSS" && (
                    <IoLogoSass className="CardIcons" />
                  )}
                  {item.language === "C" && (
                    <SiC className="CardIcons" />
                  )}
                  {item.language === "C#" && (
                    <TbCSharp className="CardIcons" />
                  )}
                </div>
                <div className="max-w-[320px] h-14 text-center mt-8">
                  <span className="text-black dark:text-white">
                    {item.name}
                  </span>
                </div>
                <div className="w-full flex flex-row pb-3 pl-3">
                  <Link href={item.svn_url}>
                    <span className="text-Yellow cursor-pointer">
                      Repoya git
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}

 {item.language === "JavaScript" && (
                  <DiJavascript1 className="CardIcons" />
                )}
                {item.language === "Python" && (
                  <FaPython className="CardIcons" />
                )}
                {item.language === "Dart" && (
                  <SiDart className="CardIcons" />
                )}
                {item.language === "CSS" && (
                  <IoLogoCss3 className="CardIcons" />
                )}
                {item.language === "C++" && (
                  <CgCPlusPlus className="CardIcons" />
                )}


                */
