import Image from "next/legacy/image";

// import Package1 from "@/public/img/clothing/package1.png";

function PackageClothing() {
  return (
    <div className="w-full">
      <div className="relative">
        <Image src="/img/clothing/package1.png" alt="package 1" />
        {/* <img src="../../public/img/clothing/package-3.png" alt="package 1" /> */}
      </div>
      {/* <div className="relative">
        <Image src={Package1} alt="package 1" />
      </div> */}
    </div>
  );
}

export default PackageClothing;
