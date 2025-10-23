import Category from "./components/category/page";
import FlashSale from "./components/FlashSale/page";
import Hero from "./components/Hero/page";
import ToyCard from "./components/PopularToy/page";


export default function Home() {
  return (
    <div className="font-sans bg-gradient-to-b from-[#FFF5E1] to-[#E9F3FF]">
      <div>
        <Hero></Hero>
      </div>
      <div>
        <Category></Category>
      </div>
      <div>
        <FlashSale></FlashSale>
      </div>
      <div className="mt-5 max-w-11/12 mx-auto pb-10">
        <h1 className=" font-bold text-xl md:text-3xl   mb-12 mt-8">Popular Toys</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-5 gap-6">
          <ToyCard></ToyCard>
        </div>
      </div>
    </div>
  );
}
