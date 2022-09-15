
import React, { lazy } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
export default function TopHero() {
  return (
    <div className="w-full flex flex-col bg-white dark:bg-DarkV1 p-4 max-h-[500px]">
      <div className="w-full flex flex-col justify-start items-baseline">
        <span className="text-[32px] md:text-[48px]  font-bold text-black dark:text-white ">
          Ben Kubilay
        </span>
        <span className="text-[32px] md:text-[48px] font-bold text-black dark:text-white ">
          <b className="text-Yellow">Front-End</b> Developer
        </span>
      </div>

      <div className="flex flex-row w-full">
        <div className="flex-1">
          <p className=" text-ParagraphFont  text-xs md:text-sm">
            Yazılım sektörüne odaklanmış ve kendini her gün bu konuda
            geliştirmeye adamış bir Bilgisayar Mühendisiyim. Çalışkan gayretli
            ve geliştirdiği projelere önem veren birisiyim. Yaptığım her işte bu
            yaklaşımı benimserim.
          </p>
          <Link href={"/iletisim"}>
          <button className="bg-Yellow h-[51px] rounded-[5px] px-[32px] text-center mt-[25px] text-black text-[19px] flex flex-row items-center justify-center ">
            İletişim
            <ArrowRightIcon className="w-3 h-3 mt-[3px] ml-2" />
          </button>
          </Link>
        </div>
        {/*
        <div className="flex-1 flex items-start justify-start md:items-center md:justify-center relative  ">
          <img className="max-h-[250px] md:max-h-[300px]" src="./sonv2.png" alt="Kbozak-Logo V2" />
  </div> */}

        <div
          className={
            "flex-1 flex items-start justify-start md:items-end md:justify-end relative "
          }
        >
          <Image
            src={"/sonv2.png"}
            layout="fill"
            objectFit="contain"
            loading="lazy"
            alt="KubilayBzk-Logo"
          />
        </div>
      </div>
    </div>
  );
}

/*

    <div
      className="w-full bg-white flex items-center justify-center relative dark:bg-DarkV1
    lg:flex-row lg:flex lg:items-start lg:justify-start lg:px-[60px]"
    >
      <div
        className={`
      flex flex-col items-center justify-center max-w-[173px] text-center w-full py-[60px]
      md:max-w-[500px] md:py-[40px]
      lg:items-start lg:justify-start lg:text-start
      `}
      >
        <span className="text-[32px] md:text-[48px]  text-center font-bold text-black dark:text-white ">
          Ben Kubilay
        </span>
        <span className="text-[32px] md:text-[48px] text-center font-bold text-black dark:text-white ">
          <b className="text-Yellow">Front-End</b> Developer
        </span>

        <p className=" hidden md:block max-w-[424px] xl:max-w-[370px] text-normal text-ParagraphFont dark:text-white text-base mt-4">
          Mollit ad dolore anim occaecat tempor. Aute exercitation irure ut
          commodo ipsum esse sunt nulla ipsum. Amet veniam reprehenderit irure
          dolore occaecat anim. Cupidatat irure irure cillum occaecat eiusmod
          irure nulla excepteur enim ullamco sunt labore quis velit.
        </p>

        <button className="bg-Yellow h-[51px] rounded-[5px] px-[32px] text-center mt-[25px] text-black text-[19px] flex flex-row items-center justify-center ">
          İletişim
          <ArrowRightIcon className="w-3 h-3 mt-[3px] ml-2" />
        </button>
      </div>
      <div className="hidden lg:block">
        <img
          className="absolute bottom-0 right-0 w-[350px] h-auto "
          src="https://github.com/kubilaybzk/kubilaybzk/blob/master/code.gif?raw=true"
        />
      </div>
    </div>

    */
