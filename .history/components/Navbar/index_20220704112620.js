import { useState, useRef } from "react";

import Logo from "../Logo";
import styled from "./navbar.module.css";

import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const windowWidth = useRef();

  const showUpMenu = () => {
    windowWidth.current.classList.toggle(styled.responsiveMenu);
  };

  return (
    <>
      <div className="relative flex border items-center border-black border-1">
        <div>
          <Logo />
        </div>
        <nav
          ref={windowWidth}
          className="bg-white absolute left-0 border border-1 border-black"
        >
          <div className="">
            <ul className="">
              <li className="">Shirt</li>
              <li className="">Outerwear</li>
              <li className="">Accessories</li>
            </ul>
            <ul className="">
              <li className="">Login</li>
              <li className="">Sign up</li>
            </ul>
            <button>
              <FaShoppingCart />
            </button>
          </div>
        </nav>
        <button className="absolute right-0" onClick={showUpMenu}>
          <FaTimes />
        </button>

        <button className="absolute right-0" onClick={showUpMenu}>
          <FaBars />
        </button>
      </div>
    </>
  );
};

export default Navbar;
