import { useState } from "react";
import Link from "next/link";

import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "../Reuse";
import Logo from "../Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="relative flex items-center md:items-center md:justify-between bg-gray-100 z-[2]">
        <div className="md:py-0">
          <Logo />
        </div>
        <nav
          className={`${
            isMenuOpen
              ? "translate-y-[0] transition-transform duration-500 ease-in-out z-0 absolute left-0"
              : "-translate-y-[100%] duration-200 ease-in-out"
          } w-full px-2 py-4 text-center bg-gray-100 md:z-0 md:flex md:w-[80%] md:justify-between md:items-center md:translate-y-[0] md:py-0 md:px-0 md:text-black md:relative`}
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
          className={`md:hidden transition duration-200 ease-in pr-2 absolute right-0 z-100 ${
            isMenuOpen ? "hidden" : "block"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars />
        </button>
        <button
          className={`md:hidden pr-2 absolute right-0 z-100 ${
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
