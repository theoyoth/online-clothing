import Image from "next/legacy/image";

// import Package1 from "@/public/img/clothing/package1.png";

function PackageClothing() {
  return (
    <div className="w-full grid md:grid-cols-2">
      <div className="relative overflow-hidden">
        <Image
          src="/img/clothing/package1.png"
          width="500"
          height="500"
          alt="package 1"
        />
        {/* <img src="../../public/img/clothing/package-3.png" alt="package 1" /> */}
      </div>
      {/* <div className="relative">
        <Image src={Package1} alt="package 1" />
      </div> */}
    </div>
  );
}

export default PackageClothing;
