import Image from "next/legacy/image";

// import Package1 from "@/public/img/clothing/package1.png";

function PackageClothing() {
  return (
    <div className="w-full grid md:grid-cols-2 h-[300px] py-6 px-4 gap-6">
      <div className="relative overflow-hidden">
        <Image
          src="/img/clothing/package-1.png"
          width={700}
          height={500}
          alt="package 1"
        />
        <h2 className="font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 text-white text-[2rem]">
          Shirts
        </h2>
      </div>
      <div className="relative overflow-hidden">
        <Image
          src="/img/clothing/package-2.png"
          width={700}
          height={500}
          alt="package 2"
        />
        <h2 className="font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 text-white text-[2rem]">
          Outerwear
        </h2>
      </div>
    </div>
  );
}

export default PackageClothing;
