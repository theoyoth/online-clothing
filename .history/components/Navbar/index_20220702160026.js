import { useState, useEffect, useRef } from "react";

import Logo from "../Logo";

import { FaBars } from "react-icons/fa";

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
        <div>
          <div>
            <ul className="sm:flex block">
              <li>Shirt</li>
              <li>Outerwear</li>
              <li>Accessories</li>
            </ul>
          </div>
          <div>
            <ul className="sm:flex block">
              <li>Login</li>
              <li>Sign up</li>
            </ul>
          </div>
        </div>

        <div className="sm:block md:hidden absolute top-1/2 right-0 -translate-y-1/2">
          <FaBars
            style={{ width: "30px", cursor: "pointer" }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
