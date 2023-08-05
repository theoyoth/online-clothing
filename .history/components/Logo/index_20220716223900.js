import Image from "next/legacy/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <a>
          <Image
            src="/theoyoth-clothing-logo.png"
            width="100"
            height="50"
            alt="theoyoth clothing logo"
          />
        </a>
      </Link>
    </>
  );
};

export default Logo;
