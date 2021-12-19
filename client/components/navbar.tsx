import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "next/link";

interface Props {}

const navigation = [
  { name: "Home", href: "/" },
  { name: "Create NFT", href: "/createItem" },
  { name: "My NFTs", href: "/myNFTs" },
];

export const Navbar = (props: Props) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  return (
    <Disclosure
      as="nav"
      className={clsx("fixed z-50 w-full transition-all ease-in-out duration-200", {
        "bg-gray-800 shadow-xl": scrolled,
      })}
    >
      {({ open }) => (
        <>
          <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-center flex-1 sm:items-stretch sm:justify-start">
                <div className="flex items-center flex-shrink-0">
                  <img
                    className="block w-auto h-8 cursor-pointer lg:hidden"
                    src="https://res.cloudinary.com/yektas/image/upload/v1584461901/Blog/static/logo/sylogo-light.png"
                    alt="Workflow"
                  />
                  <img
                    className="hidden w-auto h-8 cursor-pointer lg:block"
                    src="https://res.cloudinary.com/yektas/image/upload/v1584461901/Blog/static/logo/sylogo-light.png"
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <div className="px-3 py-2 text-sm font-medium border-b-2 border-transparent cursor-pointer">
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 items-center hidden pr-2 sm:flex sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button>TEST</button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="bg-gray-700 sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <>
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <div className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-800 hover:text-white">
                      {item.name}
                    </div>
                  </Link>
                ))}
              </>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
