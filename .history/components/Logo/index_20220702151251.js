import Image from "next/legacy/image";
import LogoCloth from "../../public/theoyoth-clothing-logo.png";

const Logo = () => {
  return (
    <div>
      <Image
        src={LogoCloth}
        width="100"
        height="50"
        alt="theoyoth clothing logo"
      />
    </div>
  );
};

export default Logo;
