"use client"

import { useState } from "react";
import Link from "next/link";

import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateContext } from "@/lib/Context";
import { NavLink } from "../Reuse";
import Logo from "../Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { totalQuantities } = useStateContext();

  return (
    <>
      <div className="fixed top-0 left-0 w-full flex items-center md:justify-between bg-white z-[10] border-b-2 border-black px-4">
        <div className="md:py-0 z-[10]">
          <Logo />
        </div>
        <Link href="/Basket" passHref>
          <div className="md:pr-2 md:w-[30px] md:translate-x-0 translate-x-[75%] cursor-pointer z-10 relative">
            <AiOutlineShopping size={20} />
            <p className="absolute top-[-5px] right-[-6px] md:right-[4px] text-xs">
              {totalQuantities}
            </p>
          </div>
        </Link>
        <nav
          className={`${
            isMenuOpen
              ? "translate-y-[55px] opacity-100 duration-200 ease-in-out"
              : "-translate-y-[100%] opacity-0 duration-200 ease-in-out"
          } fixed left-0 top-0 w-full py-4 text-center bg-white z-[1] md:z-0 md:flex md:w-[80%] md:justify-between md:items-center md:translate-y-[0] md:py-0 md:px-0 md:text-black md:relative md:opacity-100`}
        >
          <div className="md:hidden">
            <p className="ml-4 text-xs text-gray-400 text-left underline">
              Navigation
            </p>
          </div>
          <ul className="md:flex md:basis-3/5 md:justify-between md:items-center md:text-black md:font-semibold lg:basis-[400px]">
            <NavLink href="Shirts" />
            <NavLink href="Outerwears" />
            <NavLink href="Accessories" />
          </ul>
          <div className="md:flex md:basis-1/3 lg:basis-[20%] md:justify-end md:items-center">
            <ul className="mt-4 md:mt-0 md:flex md:justify-between md:items-center md:font-semibold md:w-[120px] w-full">
              <NavLink href="Login" />
              <NavLink href="Signup" />
            </ul>
          </div>
        </nav>
        <button
          className={`md:hidden transition duration-200 ease-in pr-2 absolute right-0 z-10 ${
            isMenuOpen ? "hidden" : "block"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars />
        </button>
        <button
          className={`md:hidden pr-2 absolute right-0 z-10 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaTimes />
        </button>
      </div>
    </>
  );
};

export default Navbar;
