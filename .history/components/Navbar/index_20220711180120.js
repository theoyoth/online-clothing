import { useState } from "react";

import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "../Reuse";
import Logo from "../Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 w-full flex items-center md:justify-between bg-gray-100 z-[10]">
        <div className="md:py-0 z-[10]">
          <Logo />
        </div>

        <nav
          className={`${
            isMenuOpen
              ? "translate-y-[55px] opacity-100 duration-200 ease-in-out"
              : "-translate-y-[100%] opacity-0 duration-200 ease-in-out"
          } fixed left-0 top-0 w-full py-4 text-center bg-gray-100 z-[1] md:z-0 md:flex md:w-[80%] md:justify-between md:items-center md:translate-y-[0] md:py-0 md:px-0 md:text-black md:relative md:opacity-100`}
        >
          <div className="md:hidden border-b-2 border-gray-500">
            <p className="ml-4 text-sm text-gray-500 text-left">Navigation</p>
          </div>
          <ul className="md:flex md:basis-3/5 md:justify-between md:items-center md:text-black lg:basis-1/3">
            <NavLink href="Shirts" />
            <NavLink href="Outerwears" />
            <NavLink href="Shoes" />
            <NavLink href="Accessories" />
          </ul>
          <div className="md:flex md:basis-1/3 lg:basis-[20%] md:justify-between md:items-center">
            <ul className="mt-4 md:mt-0 md:flex md:justify-around md:items-center w-full">
              <NavLink href="Login" />
              <NavLink href="Signup" />
            </ul>
          </div>
        </nav>
        <button className="md:pr-2 md:w-[40px] md:translate-x-0 translate-x-[75%] z-10">
          <FaShoppingCart />
        </button>
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