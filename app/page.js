import ImageSlider from "@/components/ImageSlider";
import NewArrivalCome from "@/components/NewArrivalCome";
import PackageClothing from "@/components/PackageClothing";

export default async function Home() {
  return (
    <div className="slide-container text-center bg-white">
      <ImageSlider />
      <PackageClothing />
      <NewArrivalCome />
    </div>
  );
};
