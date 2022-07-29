import { useState } from "react";

import Logo from "../Logo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex border border-black border-1">
        <div>
          <Logo />
        </div>
        {{
          if(isMenuOpen)(
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

          )
        }}
        
        <div>
          <FontAwesomeIcon style={{ width: "30px" }} icon={faBars} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
