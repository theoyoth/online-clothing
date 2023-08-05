import { useState } from "react";
import Link from "next/link";

import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import Logo from "../Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="relative flex items-center bg-gray-100 z-[-1]">
        <div>
          <Logo />
        </div>
        <nav
          className={`${
            isMenuOpen
              ? "grid translate-y-[130px] opacity-100 transition-transform duration-500 ease-in-out place-items-center"
              : "hidden opacity-0 -translate-y-1/2 transition-all duration-500 ease-in-out"
          } w-full px-2 py-4 text-center absolute left-0 bg-gray-100 z-100`}
        >
          <ul className="">
            <li className="my-2 relative w-full before:content-[''] before:w-0 before:bg-black before:h-[1px] before:absolute before:bottom-0 before:left-0 hover:before:w-full before:transition-all before:duration-100 before:ease-in">
              <Link href="/shirt">
                <a>Shirt</a>
              </Link>
            </li>
            <li className="my-2 relative w-full before:content-[''] before:w-0 before:bg-black before:h-[1px] before:absolute before:bottom-0 before:left-0 hover:before:w-full before:transition-all before:duration-100 before:ease-in">
              <Link href="/outerwear">
                <a>Outerwear</a>
              </Link>
            </li>
            <li className="my-2 relative w-full before:content-[''] before:w-0 before:bg-black before:h-[1px] before:absolute before:bottom-0 before:left-0 hover:before:w-full before:transition-all before:duration-100 before:ease-in">
              <Link href="/accessories">
                <a>Accessories</a>
              </Link>
            </li>
          </ul>
          <ul className="mt-4">
            <li className="my-2 relative w-full before:content-[''] before:w-0 before:bg-black before:h-[1px] before:absolute before:bottom-0 before:left-0 hover:before:w-full before:transition-all before:duration-100 before:ease-in">
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
            <li className="my-2 relative w-full before:content-[''] before:w-0 before:bg-black before:h-[1px] before:absolute before:bottom-0 before:left-0 hover:before:w-full before:transition-all before:duration-100 before:ease-in">
              <Link href="signup">
                <a>Sign up</a>
              </Link>
            </li>
          </ul>
        </nav>
        <button>
          <FaShoppingCart />
        </button>
        <button
          className={`transition duration-200 ease-in pr-2 absolute right-0 z-100 ${
            isMenuOpen ? "hidden" : "block"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars />
        </button>
        <button
          className={`pr-2 absolute right-0 z-100 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaTimes />
        </button>
      </div>
    </>
  );
};

export default Navbar;
