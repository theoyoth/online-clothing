import { useState, useEffect, useRef } from "react";

import Logo from "../Logo";
import styled from "./navbar.module.css";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const windowWidth = useRef();

  // useEffect(() => {
  //   return () => {
  //     console.log(windowWidth);
  //   };
  // }, [windowWidth]);

  const showUpMenu = () => {
    windowWidth.current.classList.toggle("responsive-menu");
  };

  return (
    <>
      <div className="relative flex border items-center border-black border-1">
        <div>
          <Logo />
        </div>
        <nav ref={windowWidth}>
          <ul className="nav-menu">
            <li>Shirt</li>
            <li>Outerwear</li>
            <li>Accessories</li>
          </ul>
          <ul className="nav-menu">
            <li>Login</li>
            <li>Sign up</li>
          </ul>
          <div className="nav-close-btn">
            <FaTimes style={{ cursor: "pointer" }} />
          </div>
        </nav>

        <div className="sm:block md:hidden absolute top-1/2 right-0 -translate-y-1/2">
          <FaBars
            style={{ width: "30px", cursor: "pointer" }}
            onClick={showUpMenu}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
