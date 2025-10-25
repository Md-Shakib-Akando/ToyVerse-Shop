import Link from "next/link";
import Category from "./components/category/page";
import InfoSection from "./components/DeliveryInfo/page";
import FlashSale from "./components/FlashSale/page";
import Hero from "./components/Hero/page";
import ToyCard from "./components/PopularToy/page";
import DiscountToys from "./components/DiscounToys/page";


export default function Home() {
  return (
    <div className="font-sans bg-gradient-to-b from-[#FFF5E1] to-[#E9F3FF]">
      <div>
        <Hero></Hero>
      </div>
      <div>
        <InfoSection></InfoSection>
      </div>
      <div>
        <Category></Category>
      </div>
      <div>
        <FlashSale></FlashSale>
      </div>
      <div className="max-w-11/12 mx-auto">
        <DiscountToys></DiscountToys>
      </div>
      <div className="mt-5 max-w-11/12 mx-auto pb-10">
        <h1 className=" font-bold text-xl md:text-3xl   mb-12 mt-8">Popular Toys</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-5 gap-6">
          <ToyCard></ToyCard>
        </div>
        <div className="flex justify-center mt-8">
          <Link href="/allToys" className=" text-purple-500 text-lg underline px-6 py-3 rounded-xl font-semibold transition hover:cursor-pointer">View More Toys</Link>
        </div>
      </div>
    </div>
  );
}
