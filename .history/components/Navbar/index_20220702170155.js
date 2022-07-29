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
        <nav ref={windowWidth} className={styled.navParent}>
          <div className={styled.navMain}>
            <button className={styled.navCloseBtn} onClick={showUpMenu}>
              <FaTimes />
            </button>
            <ul className={styled.navMenu}>
              <li className={styled.navItem}>Shirt</li>
              <li className={styled.navItem}>Outerwear</li>
              <li className={styled.navItem}>Accessories</li>
            </ul>
            <ul className={styled.navMenu}>
              <li className={styled.navItem}>Login</li>
              <li className={styled.navItem}>Sign up</li>
            </ul>
          </div>
          <FaShoppingCart />
        </nav>

        <button className={styled.navMenuBar} onClick={showUpMenu}>
          <FaBars />
        </button>
      </div>
    </>
  );
};

export default Navbar;
