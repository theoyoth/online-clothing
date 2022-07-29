import Logo from "../Logo";

const Navbar = () => {
  return (
    <>
      <div className="flex border border-black border-1">
        <div>
          <Logo />
        </div>
        <div>
          <ul className="flex">
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
    </>
  );
};

export default Navbar;
