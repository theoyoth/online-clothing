import { useState } from "react";
import Link from "next/link";

import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "../Reuse";
import Logo from "../Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="relative flex items-center md:justify-between bg-gray-100">
        <div className="md:py-0 z-[10]">
          <Logo />
        </div>
        <nav
          className={`${
            isMenuOpen
              ? "translate-y-[55px] opacity-100 duration-200 ease-in-out"
              : "-translate-y-[100%] opacity-0 duration-200 ease-in-out"
          } fixed left-0 top-0 w-full px-4 py-4 text-center bg-gray-100 z-[-1] md:z-0 md:flex md:w-[80%] md:justify-between md:items-center md:translate-y-[0] md:py-0 md:px-0 md:text-black md:relative`}
        >
          <ul className="md:flex md:basis-1/2 md:justify-between md:items-center md:text-black">
            <NavLink href="Shirt" />
            <NavLink href="Outerwear" />
            <NavLink href="Accessories" />
          </ul>
          <div className="md:flex md:basis-2/5 md:justify-between md:items-center">
            <ul className="mt-4 md:mt-0 md:flex md:justify-around md:items-center w-full">
              <NavLink href="Login" />
              <NavLink href="Signup" />
            </ul>
            <button className="md:pr-2 md:w-[40px]">
              <FaShoppingCart />
            </button>
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
