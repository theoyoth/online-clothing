"use client"

// import lib
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/legacy/image";

import { ModelClothing } from "@/lib/assets";

const ImageSlider = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({delay:5000})
  ])

  return (
    <div className='overflow-hidden' ref={emblaRef}>
      <div className="h-auto flex">
        {ModelClothing.map((clothing,idx) => (
          <div
            key={idx}
            className="flex justify-center items-center w-full h-screen relative growth-0 shrink-0 basis-full"
          >
            <Image src={clothing.url} alt={clothing.name} layout="fill" />
        </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
