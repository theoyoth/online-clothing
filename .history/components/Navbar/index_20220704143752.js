import { useState, useRef } from "react";
import Link from "next/link";

import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import Logo from "../Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const windowWidth = useRef();

  // const showUpMenu = () => {
  //   windowWidth.current.classList.toggle(styled.responsiveMenu);
  // };

  return (
    <>
      <div className="relative flex items-center bg-gray-100">
        <div>
          <Logo />
        </div>
        <nav
          className={`${
            isMenuOpen
              ? "grid translate-y-[0px] opacity-100 transition-all duration-500 ease-in-out place-items-center"
              : "hidden opacity-0 -translate-y-1/2 transition-all duration-500 ease-in-out"
          } w-full px-2 py-4 text-center absolute left-0 top-[55px] bg-gray-100`}
        >
          <ul className="">
            <li className="my-2 relative w-full before:content-[''] before:w-0 before:bg-black before:h-[1px] before:absolute before:bottom-0 before:left-0 hover:before:w-full before:transition-all before:duration-100 before:ease-in">
              Shirt
            </li>
            <li className="my-2 relative w-full before:content-[''] before:w-0 before:bg-black before:h-[1px] before:absolute before:bottom-0 before:left-0 hover:before:w-full before:transition-all before:duration-100 before:ease-in">
              Outerwear
            </li>
            <li className="my-2 relative w-full before:content-[''] before:w-0 before:bg-black before:h-[1px] before:absolute before:bottom-0 before:left-0 hover:before:w-full before:transition-all before:duration-100 before:ease-in">
              Accessories
            </li>
          </ul>
          <ul className="mt-4">
            <li className="my-2 relative w-full before:content-[''] before:w-0 before:bg-black before:h-[1px] before:absolute before:bottom-0 before:left-0 hover:before:w-full before:transition-all before:duration-100 before:ease-in">
              Login
            </li>
            <li className="my-2 relative w-full before:content-[''] before:w-0 before:bg-black before:h-[1px] before:absolute before:bottom-0 before:left-0 hover:before:w-full before:transition-all before:duration-100 before:ease-in">
              Sign up
            </li>
          </ul>
        </nav>
        <button>
          <FaShoppingCart />
        </button>
        <button
          className={`pr-2 absolute right-0 ${isMenuOpen ? "block" : "hidden"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaTimes />
        </button>

        <button
          className={`pr-2 absolute right-0 ${isMenuOpen ? "hidden" : "block"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars />
        </button>
      </div>
    </>
  );
};

export default Navbar;
