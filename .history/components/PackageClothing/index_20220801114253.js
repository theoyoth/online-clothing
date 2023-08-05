import Image from "next/image";

import Package1 from "@/public/img/clothing/package1.png"

function PackageClothing() {
  return (
    <div className="w-full">
      <div className="relative">
        <Image src={} alt="package 1"/>
        <img src="../../public/img/clothing/package-3.png" alt="package 1" />
      </div>
      <div className="relative">
        <img src="../../public/img/clothing/package-4.png" alt="package 2" />
      </div>
    </div>
  );
}

export default PackageClothing;
