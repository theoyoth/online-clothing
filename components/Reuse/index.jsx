import Link from "next/link";

const NavLink = ({ href }) => {
  return (
    <li className="my-2 relative">
      <Link href={`/${href}`} className="relative w-full before:content-[''] before:w-0 before:bg-black before:h-[1px] before:absolute before:bottom-[-2px] before:left-0 hover:before:w-full before:transition-all before:duration-100 before:ease-in uppercase text-sm">
        {href}
      </Link>
    </li>
  );
};

const GridClothing = ({ children }) => {
  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 px-2 lg:p-4">
        {children}
      </div>
    </>
  );
};

const FooterDetail = ({ title, items }) => {
  return (
    <div>
      <h2 className="font-semibold">{title}</h2>
      {items.map((item, i) => (
        <ul className="text-sm my-2" key={i}>
          <li>
            <Link href="#" className="relative before:content-[''] before:absolute before:-bottom-1 before:left-0 before:h-[1px] before:bg-black before:w-0 hover:before:w-full before:duration-200 before:ease-in-out cursor-pointer">
              {item}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export { NavLink, GridClothing, FooterDetail };
