import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, lazy } from "react";
import TitleandDesc from "../../Helpers/TitleandDesc/TitleandDesc";

export default function Blogs() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [blogs, setBlogs] = useState([]);
  

  /*
  Kullanıcı adı kısmını değiştirerek kendi medium içeriklerinizi görebilirsiniz.
  */

  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@Kubilaybozak/"
    )
      .then((res) => res.json())
      .then(
        (data) => {
          setIsLoaded(true);
          setBlogs(data.items);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  console.log(blogs)
  return (
    <>


     <TitleandDesc title={"Bloglar"} desc={"Medium içeriklerime aşağıda bulunan kartlara tıklayarak ulaşabilirsiniz."}/>
      <div className="not-prose relative  rounded-xl overflow-hidden max-w-[870px] md:max-w-[1200px] lg:max-w-[870px]">
        <div className="absolute inset-0 bg-grid-slate-100 "></div>
        <div className="relative rounded-xl overflow-auto">
          <div className="relative">
            <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto py-14">
              {blogs.map((item, key) => {
                return (
                  <div
                    key={key}
                    className="snap-center shrink-0  bg-white p-2 dark:bg-DarkV1 pb-0 w-[320px]"
                  >
                    <div className="shrink-0 rounded-lg shadow-xl bg-white relative">
                      <img
                        src={item.thumbnail}
                        alt={item.name}
                        loading="lazy"
                        className="object-contain w-full h-40"
                      />
                    </div>
                    <div className="max-w-[320px] h-12 overflow-hidden text-center  mt-[12px]">
                      <span className="text-black dark:text-white">
                        {item.title}
                      </span>
                    </div>
                    <div className="w-full flex flex-row items-start justify-start pb-4 mt-2 pl-4">
                      <Link href={item.link}>
                        <span className="text-Yellow cursor-pointer">
                          Yazıya git
                        </span>
                      </Link>
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
