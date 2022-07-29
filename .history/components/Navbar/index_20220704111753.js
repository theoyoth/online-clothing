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
        <nav ref={windowWidth} className="">
          <div className={styled.navMain}>
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
            <button className="" onClick={showUpMenu}>
              <FaTimes />
            </button>
          </div>
        </nav>

        <button className="" onClick={showUpMenu}>
          <FaBars />
        </button>
      </div>
    </>
  );
};

export default Navbar;
