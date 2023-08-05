import { useState } from "react";
import Link from "next/link";

import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import Logo from "../Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="relative flex items-center md:items-center md:justify-between bg-gray-100">
        <div className="md:py-0">
          <Logo />
        </div>
        <nav
          className={`${
            isMenuOpen
              ? "grid translate-y-[150px] transition-transform duration-500 ease-in-out place-items-center"
              : "hidden -translate-y-1/2 transition-transform duration-500 ease-in-out"
          } w-full px-2 py-4 text-center absolute left-0 bg-gray-100 z-10 md:z-0 md:flex md:w-[80%] md:justify-between md:items-center md:translate-y-[0] md:py-0 md:px-0 md:text-black md:relative`}
        >
          <ul className="md:flex md:basis-1/2 md:justify-between md:items-center md:text-black">
            <li className="my-2 relative">
              <Link href="/shirt">
                <a className="relative w-full before:content-[''] before:w-0 before:bg-black before:h-[1px] before:absolute before:bottom-[-2px] before:left-0 hover:before:w-full before:transition-all before:duration-100 before:ease-in">
                  Shirt
                </a>
              </Link>
            </li>
            <li className="my-2 relative">
              <Link href="/outerwear">
                <a className="relative w-full before:content-[''] before:w-0 before:bg-black before:h-[1px] before:absolute before:bottom-[-2px] before:left-0 hover:before:w-full before:transition-all before:duration-100 before:ease-in">
                  Outerwear
                </a>
              </Link>
            </li>
            <li className="my-2 relative">
              <Link href="/accessories">
                <a className="relative w-full before:content-[''] before:w-0 before:bg-black before:h-[1px] before:absolute before:bottom-[-2px] before:left-0 hover:before:w-full before:transition-all before:duration-100 before:ease-in">
                  Accessories
                </a>
              </Link>
            </li>
          </ul>
          <div className="md:flex md:basis-2/5 md:justify-between md:items-center">
            <ul className="mt-4 md:mt-0 md:flex md:w-full">
              <li className="my-2 relative w-full">
                <Link href="/login">
                  <a className="relative w-full before:content-[''] before:w-0 before:bg-black before:h-[1px] before:absolute before:bottom-0 before:left-0 hover:before:w-full before:transition-all before:duration-100 before:ease-in">
                    Login
                  </a>
                </Link>
              </li>
              <li className="my-2 relative w-full">
                <Link href="/signup">
                  <a className="relative w-full before:content-[''] before:w-0 before:bg-black before:h-[1px] before:absolute before:bottom-[-2px] before:left-0 hover:before:w-full before:transition-all before:duration-100 before:ease-in">
                    Sign up
                  </a>
                </Link>
              </li>
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
