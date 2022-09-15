/* eslint-disable @next/next/no-img-element */
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import { HomeIcon, MoonIcon } from "@heroicons/react/24/outline";
const navigation = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Hakkımda", href: "/hakkimda" },
  { name: "Projelerim", href: "/projelerim" },
  { name: "Teknolojiler", href: "/teknolojiler" },
  { name: "İletişim", href: "/iletisim" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const { systemTheme, theme, setTheme } = useTheme();
  const router = useRouter();
  const current = router.asPath;

  return (
    <Disclosure
      as="nav"
      className="bg-white max-w-[1200px] mx-auto mb-4 dark:bg-DarkV1"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              {/* Mobile menu button*/}

              <Link href={"/"}>
                <div className="flex flex-1 cursor-pointer">
                  <div className="flex flex-shrink-0 items-center h-8 w-auto">
                    <img
                      className="block h-8 w-auto"
                      src="./sonv4.png"
                      alt="KubilayBzk.dev -Logo"
                    />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                      Kubilay<b className="text-Yellow">Bzk</b>
                    </span>
                  </div>
                </div>
              </Link>
              {/*Menu*/}
              <div className="hidden sm:ml-3 sm:block">
                <div className="flex space-x-2 items-center justify-center">
                  {navigation.map((item, key) => (
                    <Link href={item.href} key={key}>
                      <span
                        className={classNames(
                          current === item.href
                            ? "bg-Yellow text-white text-[12px] md:text-[14px]"
                            : "text-black dark:text-white text-[12px] md:text-[14px] hover:bg-gray-700 hover:text-white",
                          "block px-3 py-2 rounded-md  font-medium cursor-pointer z-30"
                        )}
                      >
                        {item.name}
                      </span>
                    </Link>
                  ))}
                  {theme === "dark" ? (
                    <div
                      onClick={() => setTheme("light")}
                      className="rounded-full bg-white fill-current w-6 h-6 flex items-center justify-center"
                    >
                      <MoonIcon className="w-4 h-4 text-black fill-current" />
                    </div>
                  ) : (
                    <div
                      onClick={() => setTheme("dark")}
                      className="rounded-full bg-black fill-current w-6 h-6 flex items-center justify-center"
                    >
                      <MoonIcon className="w-4 h-4 text-white fill-current" />
                    </div>
                  )}
                </div>
              </div>
              {/*Hamburger İcon*/}
              <div className="inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item, key) => (
                <Link href={item.href} key={key}>
                  <span
                    className={classNames(
                      current === item.href
                        ? "bg-Yellow text-white"
                        : "text-black dark:text-white hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-[12px] font-medium cursor-pointer z-30"
                    )}
                  >
                    {item.name}
                  </span>
                </Link>
              ))}
              <div className="flex w-full items-center justify-end pr-1">
                {theme === "dark" ? (
                  <div
                    onClick={() => setTheme("light")}
                    className="rounded-full bg-white fill-current w-6 h-6 flex items-center justify-center"
                  >
                    <MoonIcon className="w-4 h-4 text-black fill-current" />
                  </div>
                ) : (
                  <div
                    onClick={() => setTheme("dark")}
                    className="rounded-full bg-black fill-current w-6 h-6 flex items-center justify-center"
                  >
                    <MoonIcon className="w-4 h-4 text-white fill-current" />
                  </div>
                )}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
