import Logo from "../Logo";

const Navbar = () => {
  return (
    <>
      <div className="flex border border-black border-1">
        <div>
          <Logo />
        </div>
        <div>menu</div>
        <div>authentication</div>
      </div>
    </>
  );
};

export default Navbar;
