import Link from "next/link";
import React from "react";
import { HomeIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import {SiAboutdotme} from 'react-icons/si'
import {GrWorkshop} from 'react-icons/gr'
import {FaLaptopCode} from 'react-icons/fa'
import {AiOutlineContacts} from 'react-icons/ai'

export default function RightSide() {
  const router = useRouter();
  let routerPath = router.asPath;
  const { systemTheme, theme, setTheme } = useTheme();

  return (
    <div className="bg-White dark:bg-DarkV1  flex-col w-[108px] items-center justify-center pt-12 max-h-[1440px]  hidden lg:flex">
      <div className="space-y-14">
        {theme === "dark" ? (
          <div onClick={() => setTheme('light')} className="rounded-full bg-white fill-current w-10 h-10 flex items-center justify-center">
            <MoonIcon  className="w-4 h-4 text-black fill-current" />
          </div>
        ) : (
          <div onClick={() => setTheme('dark')}  className="rounded-full bg-black fill-current w-10 h-10 flex items-center justify-center">
            <MoonIcon className="w-4 h-4 text-white fill-current" />
          </div>
        )}

        <div className="flex flex-col gap-y-[43px]  h-[800px]">
          <Link href={"/"}>
            <div
              className={`${
                routerPath === "/" ? "bg-Yellow" : "bg-Background"
              } RightIconContainer`}
            >
              <HomeIcon
                className={`${
                  routerPath === "/" ? "text-black" : "text-ParagraphFont"
                } RightIcons`}
              />
            </div>
          </Link>

          <Link href={"/hakkimda"}>
            <div
              className={`${
                routerPath === "/hakkimda" ? "bg-Yellow" : "bg-Background"
              } RightIconContainer`}
            >
              <SiAboutdotme
                className={`${
                  routerPath === "/hakkimda" ? "text-black" : "text-ParagraphFont"
                } RightIcons`}
              />
            </div>
          </Link>

          <Link href={"/projelerim"}>
            <div
              className={`${
                routerPath === "/projelerim" ? "bg-Yellow" : "bg-Background"
              } RightIconContainer`}
            >
              <GrWorkshop
                className={`${
                  routerPath === "/projelerim" ? "text-black" : "text-ParagraphFont"
                } RightIcons`}
              />
            </div>
          </Link>

          <Link href={"teknolojiler"}>
            <div
              className={`${
                routerPath === "/teknolojiler" ? "bg-Yellow" : "bg-Background"
              } RightIconContainer`}
            >
              <FaLaptopCode
                className={`${
                  routerPath === "/teknolojiler" ? "text-black" : "text-ParagraphFont"
                } RightIcons`}
              />
            </div>
          </Link>

          <Link href={"/iletisim"}>
            <div
              className={`${
                routerPath === "/iletisim" ? "bg-Yellow" : "bg-Background"
              } RightIconContainer`}
            >
              <AiOutlineContacts
                className={`${
                  routerPath === "/iletisim" ? "text-black" : "text-ParagraphFont"
                } RightIcons`}
              />
            </div>
          </Link>

 
        </div>
      </div>
    </div>
  );
}
