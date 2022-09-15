import React from "react";

import { FaJava } from "react-icons/fa";
import { DiCssTricks, DiLess, DiPhp, DiReact } from "react-icons/di";
import { TbBrandTailwind, TbBrandNextjs, TbApi } from "react-icons/tb";
import { DiJavascript1 } from "react-icons/di";
import {
  SiC,
  SiDart,
  SiFlutter,
  SiJupyter,
  SiMysql,
  SiSass,
  SiTailwindcss,
} from "react-icons/si";
import { IoLogoCss3, IoLogoSass } from "react-icons/io";
import { FaPython } from "react-icons/fa";
import { CgCPlusPlus } from "react-icons/cg";
import { TbCSharp } from "react-icons/tb";
import { BiCodeAlt } from "react-icons/bi";
import ProgressBar from "../components/Helpers/ProgressBar/ProgressBar";
import { AiOutlineAntDesign, AiOutlineDatabase, AiOutlineHtml5 } from "react-icons/ai";
import { GrGraphQl, GrInherit } from "react-icons/gr";
import { VscJson } from "react-icons/vsc";
import { GiCheckboxTree } from "react-icons/gi";

import { GrDocker } from "react-icons/gr";
import { SiPostman } from "react-icons/si";
import { SiVisualstudiocode } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { FaFigma } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { DiEclipse } from "react-icons/di";
import { SiAndroidstudio } from "react-icons/si";
import { SiPycharm } from "react-icons/si";
import { FaUbuntu } from "react-icons/fa";
import { AiFillWindows } from "react-icons/ai";
import { FaReact } from "react-icons/fa";
import { GrDatabase } from "react-icons/gr";
import { RiDatabase2Line } from "react-icons/ri";
import Head from "next/head";

export default function Technologys() {
  //Stepzen,Supebase,MongoDB,NextAuth,Mantine,

  let FrontEnd = [
    {
      icon: <AiOutlineHtml5 className="CardIcons" />,
      title: "HTML",
      percent: "95",
    },
    { icon: <IoLogoCss3 className="CardIcons" />, title: "CSS", percent: "95" },
    { icon: <DiPhp className="CardIcons" />, title: "PHP", percent: "40" },
    {
      icon: <DiReact className="CardIcons" />,
      title: "REACTJS",
      percent: "95",
    },
    {
      icon: <TbBrandNextjs className="CardIcons" />,
      title: "NEXTJS",
      percent: "95",
    },
    {
      icon: <DiJavascript1 className="CardIcons" />,
      title: "JAVASCRİPT",
      percent: "95",
    },
  ];

  let Api = [
    {
      icon: <GrGraphQl className="CardIcons" />,
      title: "GrapHQL",
      percent: "80",
    },
    { icon: <TbApi className="CardIcons" />, title: "RestApi", percent: "60" },
    { icon: <VscJson className="CardIcons" />, title: "Json", percent: "60" },
    {
      icon: <SiMysql className="CardIcons" />,
      title: "SQL / MYSQL",
      percent: "40",
    },
  ];

  let CSS = [
    {
      icon: <SiTailwindcss className="CardIcons" />,
      title: "TAİLWİND",
      percent: "95",
    },
    { icon: <SiSass className="CardIcons" />, title: "SASS", percent: "95" },
    { icon: <DiLess className="CardIcons" />, title: "LESS", percent: "95" },
    {
      icon: <AiOutlineAntDesign className="CardIcons" />,
      title: "Ant-Design",
      percent: "95",
    },
    { icon: null, title: "Module CSS", percent: "95" },
  ];

  let Mobile = [
    {
      icon: <SiFlutter className="CardIcons" />,
      title: "DART / FLUTTER",
      percent: "60",
    },
    {
      icon: <FaReact className="CardIcons" />,
      title: "React Native",
      percent: "40",
    },
  ];
  let AnotherTehs = [
    { icon: <SiC className="CardIcons" />, title: "C", percent: "60" },
    {
      icon: <CgCPlusPlus className="CardIcons" />,
      title: "C++",
      percent: "60",
    },
    { icon: <TbCSharp className="CardIcons" />, title: "C#", percent: "40" },
    { icon: <FaJava className="CardIcons" />, title: "JAVA", percent: "90" },
    { icon: null, title: "NESNE TABANLI PROGRAMLAMA", percent: "90" },
    {
      icon: <GiCheckboxTree className="CardIcons" />,
      title: "VERİ YAPILARI (DATA STRUCTURES)",
      percent: "70",
    },
    {
      icon: <FaPython className="CardIcons" />,
      title: "PYTHON",
      percent: "70",
    },
    {
      icon: <FaPython className="CardIcons" />,
      title: "DOĞAL DİL İŞLEME",
      percent: "50",
    },
    {
      icon: <FaPython className="CardIcons" />,
      title: "MAKİNE ÖĞRENMESİ",
      percent: "20",
    },
    {
      icon: <FaPython className="CardIcons" />,
      title: "GÖRÜNTÜ İŞLEME",
      percent: "30",
    },
  ];

  let Techs = [
    {
      icon: <AiOutlineDatabase className="CardIcons" />,
      title: "Stepzen",
      percent: "40",
    },
    {
      icon: <RiDatabase2Line className="CardIcons" />,
      title: "SupeBase",
      percent: "40",
    },
    {
      icon: <DiMongodb className="CardIcons" />,
      title: "MongoDB",
      percent: "40",
    },
    {
      icon: <GrDocker className="CardIcons" />,
      title: "Docker",
      percent: "40",
    },
    { icon: <FaFigma className="CardIcons" />, title: "Figma", percent: "40" },
    {
      icon: <SiAdobephotoshop className="CardIcons" />,
      title: "Adobe Photoshop",
      percent: "40",
    },
    {
      icon: <AiOutlineVideoCamera className="CardIcons" />,
      title: "VEGAS Pro",
      percent: "40",
    },
    {
      icon: <DiEclipse className="CardIcons" />,
      title: "Eclipse",
      percent: "40",
    },
    {
      icon: <SiJupyter className="CardIcons" />,
      title: "Jupyter notebook",
      percent: "40",
    },
    {
      icon: <SiAndroidstudio className="CardIcons" />,
      title: "Android Studio",
      percent: "40",
    },
    {
      icon: <SiPycharm className="CardIcons" />,
      title: "Pycharm",
      percent: "40",
    },
    {
      icon: <SiVisualstudiocode className="CardIcons" />,
      title: "VSCode",
      percent: "40",
    },
    {
      icon: <SiPostman className="CardIcons" />,
      title: "Postman",
      percent: "40",
    },
  ];

  let OS = [
    {
      icon: <FaUbuntu className="CardIcons" />,
      title: "Ubuntu",
      percent: "40",
    },
    {
      icon: <AiFillWindows className="CardIcons" />,
      title: "Windows",
      percent: "40",
    },
  ];

  return (
    <>
      <Head>
        <title>Teknolojiler -KubilayBzk</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/sonv2.png" />
      </Head>
      <div className="pt-[50px] pb-[25px] flex flex-col items-center justify-center">
        <h1 className="text-vlack  text-center text-xl font-medium  pb-[25px] ">
          Kullandığım/Öğrendiğim Teknolojiler
        </h1>
        <span className="max-w-[400px] text-ParagraphFont text-center text-[15px] font-normal">
          Kullanmış olduğum öğrenmiş ve öğrenmekte olduğum deneyimlediğim
          teknolojileri inceleyebilirsiniz.
        </span>
        <div className="flex flex-col gap-y-3 w-full">
          <CardGroups title={"Front-End"} Data={FrontEnd} />
          <CardGroups title={"CSS"} Data={CSS} />
          <CardGroups title={"Web-Api"} Data={Api} />
          <CardGroups title={"Mobil Uygulama"} Data={Mobile} />
          <CardGroups
            title={"Diğer bilgiğim diller / teknolojiler"}
            Data={AnotherTehs}
          />
          <CardGroups
            title={"Deneyimlerim / Kullandığım programlar"}
            Data={Techs}
          />
          <CardGroups title={"İşletim sistemleri"} Data={OS} />
        </div>
      </div>
    </>
  );
}

function CardGroups({ title, description, Data }) {
  return (
    <div className="w-full text-center ">
      <div className="pt-[50px] pb-[25px] flex flex-col items-start justify-start">
        <h2 className="text-vlack font-normal text-center text-lg  pb-[25px] ">
          {title}
        </h2>
        <span className="max-w-[297px] text-ParagraphFont text-center text-[15px] font-normal">
          {description}
        </span>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {Data.map((item, key) => {
          return (
            <div
              key={key}
              className="flex flex-col justify-center p-6 items-center bg-white dark:bg-DarkV1"
            >
              {item.icon ? item.icon : <BiCodeAlt className="CardIcons" />}
              {/* Yoksa image eklenecek. */}
              <span className="text-ParagraphFont text-center mt-4">
                {item.title}
              </span>
              <div className="w-full mt-5">
                <ProgressBar width={item.percent} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
