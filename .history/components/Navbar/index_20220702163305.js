import { useState, useEffect, useRef } from "react";

import Logo from "../Logo";
import styled from "./navbar.module.css";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const windowWidth = useRef();

  const showUpMenu = () => {
    windowWidth.current.classList.toggle("responsive-menu");
  };

  return (
    <>
      <div className="relative flex border items-center border-black border-1">
        <div>
          <Logo />
        </div>
        <nav ref={windowWidth} className={styled.navParent}>
          <div className={styled.navMain}>
            <button className={styled.navCloseBtn} onClick={showUpMenu}>
              <FaTimes />
            </button>
            <ul className={styled.navMenu}>
              <li>Shirt</li>
              <li>Outerwear</li>
              <li>Accessories</li>
            </ul>
            <ul className={styled.navMenu}>
              <li>Login</li>
              <li>Sign up</li>
            </ul>
          </div>
        </nav>

        <button className={styled.navMenuBar} onClick={showUpMenu}>
          <FaBars />
        </button>
      </div>
    </>
  );
};

export default Navbar;
