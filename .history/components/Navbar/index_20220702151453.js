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
        <div>authentication</div>
      </div>
    </>
  );
};

export default Navbar;
