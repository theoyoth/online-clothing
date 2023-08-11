import Image from "next/legacy/image";

function PackageClothing() {
  return (
    <div className="w-full grid md:grid-cols-2 lg:h-[400px] py-2 lg:py-6 px-2 lg:px-4 gap-2 lg:gap-6">
      <div className="relative overflow-hidden">
        <Image
          src="/img/clothing/package-1.webp"
          width={700}
          height={500}
          alt="package 1"
        />
        <h2 className="font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 text-white text-[2rem] drop-shadow-lg shadow-black">
          Shirts
        </h2>
      </div>
      <div className="relative overflow-hidden">
        <Image
          src="/img/clothing/package-2.webp"
          width={700}
          height={500}
          alt="package 2"
        />
        <h2 className="font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 text-white text-[2rem] drop-shadow-lg shadow-black">
          Outerwear
        </h2>
      </div>
    </div>
  );
}

export default PackageClothing;
