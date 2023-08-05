import { useState, useRef } from "react";

import Logo from "../Logo";
import styled from "./navbar.module.css";

import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";

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
          ref={windowWidth}
          className="bg-white w-full px-2 py-4 text-center absolute left-0 top-[55px]"
        >
          <div
            className={`${
              isMenuOpen
                ? "block translate-y-[0px] transition duration-200 ease-in-out"
                : "hidden"
            } transition-all duration-150 ease-in-out -translate-y-1/2`}
          >
            <ul className="">
              <li className="relative w-full before:content-[''] before:w-full before:bg-black before:h-[1px] before:absolute before:bottom-0 before:left-0">
                Shirt
              </li>
              <li className="">Outerwear</li>
              <li className="">Accessories</li>
            </ul>
            <ul className="mt-6">
              <li className="">Login</li>
              <li className="">Sign up</li>
            </ul>
          </div>
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
