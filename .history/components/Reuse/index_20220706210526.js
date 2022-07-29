import Link from "next/link";

const NavLink = ({ href }) => {
  return (
    <li className="my-2 relative">
      <Link href={`/${href}`}>
        <a className="relative w-full before:content-[''] before:w-0 before:bg-black before:h-[1px] before:absolute before:bottom-[-2px] before:left-0 hover:before:w-full before:transition-all before:duration-100 before:ease-in">
          {href}
        </a>
      </Link>
    </li>
  );
};

const GridClothing = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {children}
      </div>
    </>
  );
};

export { NavLink, GridClothing };
