import Image from "next/legacy/image";
import LogoCloth from "../../public/theoyoth-clothing-logo.png";

const Logo = () => {
  return (
    <div>
      <Image src={LogoCloth} layout="responsive" alt="theoyoth clothing logo" />
    </div>
  );
};

export default Logo;
