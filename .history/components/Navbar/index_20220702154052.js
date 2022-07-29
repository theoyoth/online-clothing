import { useState, useEffect, useRef } from "react";

import Logo from "../Logo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [windowWidth, setWindowWidth] = useState(0);
  const windowWidth = useRef(window.innerWidth);

  useEffect(() => {
    return () => {
      console.log(windowWidth);
    };
  }, [windowWidth]);

  return (
    <>
      <div className="relative flex border items-center border-black border-1">
        <div>
          <Logo />
        </div>
        {isMenuOpen && (
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
        )}

        <div className="sm:block md:hidden absolute top-1/2 right-0 -translate-y-1/2">
          <FontAwesomeIcon
            style={{ width: "30px", cursor: "pointer" }}
            icon={faBars}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
