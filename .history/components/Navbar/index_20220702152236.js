import Logo from "../Logo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <div className="flex border border-black border-1">
        <div>
          <Logo />
        </div>
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
        <div>
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
    </>
  );
};

export default Navbar;
