import Image from "next/legacy/image";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <Image
          src="/theoyoth-clothing-logo.webp"
          width={100}
          height={50}
          alt="theoyoth clothing logo"
        />
      </Link>
    </>
  );
};

export default Logo;
