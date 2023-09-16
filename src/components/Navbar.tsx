import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React, { Fragment } from "react";
import Image from "next/image";
import logo from "@/components/logo.png";
import mobilelogo from "@/components/mobile-logo.png";
function Navbar() {
  return (
    <div className="z-50 bg-white sticky top-0 ">
      <Popover className=" mx-auto flex items-center md:justify-around border-b-2 px-6  h-[60px]  text-black">
        <h1 className=" font-bold ">
          <Image src={logo} alt="logo" className="w-[100px]" />
        </h1>
        <div className=" grow  md:grow-0">
          <div className=" hidden sm:flex items-center justify-center gap-4 md:gap-8 ">
            <Link href="/">Home</Link>
            <Link href="#vision">Vision</Link>
            <Link href="#mission">Mission</Link>
            <Link href="#team">Core Team</Link>
            <Link href="#contact">Contact us</Link>
          </div>

          <div className=" flex grow items-center justify-end sm:hidden ">
            <Popover.Button className=" inline-flex items-center justify-center rounded-md bg-black p-2 text-white-400   focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray">
              <span className=" sr-only ">Open menu</span>
              <Bars3Icon className=" h-6 w-6 text-white" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Overlay className=" sm:hidden fixed inset-0 bg-black opacity-30 " />
          <Transition
            as={Fragment}
            enter=" duration-200 ease-out "
            enterFrom=" opacity-0 scale-95 "
            enterTo=" opacity-100 scale-100 "
            leave=" duration-100 ease-in"
            leaveFrom="duration-100 scale-100  "
            leaveTo=" opacity-0 scale-95 "
          >
            <Popover.Panel className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden ">
              <div className=" rounded-lg bg-black shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50 text-white ">
                <div className=" px-5 pt-5 pb-6 ">
                  <div className=" flex items-center justify-between ">
                    <Image
                      src={mobilelogo}
                      alt="logo"
                      className="w-[40px] rounded-full"
                    />
                    <div className=" mr-2 ">
                      <Popover.Button className=" inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ">
                        <span className=" sr-only ">Close menu</span>
                        <XMarkIcon className=" h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className=" mt-6 ">
                    <nav className="grid gap-y-8 ">
                      <Link
                        href="/"
                        className=" focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2 hover:bg-white hover:text-black py-2 rounded-lg ease duration-200"
                      >
                        Home
                      </Link>
                      <Link
                        href="#vision"
                        className=" focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2 hover:bg-white hover:text-black py-2 rounded-lg ease duration-200 "
                      >
                        Vision
                      </Link>
                      <Link
                        href="#mission"
                        className=" focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2 hover:bg-white hover:text-black py-2 rounded-lg ease duration-200 "
                      >
                        Mission
                      </Link>
                      <Link
                        href="#team"
                        className=" focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2  hover:bg-white hover:text-black py-2 rounded-lg ease duration-200"
                      >
                        Core Team
                      </Link>
                      <Link
                        href="#contact"
                        className=" focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 px-2 hover:bg-white hover:text-black py-2 rounded-lg ease duration-200"
                      >
                        Contact us
                      </Link>
                    </nav>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </div>
      </Popover>
    </div>
  );
}
export default Navbar;
