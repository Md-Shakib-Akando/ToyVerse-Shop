import Hero from "./components/Hero/page";
import ToyCard from "./components/PopularToy/page";


export default function Home() {
  return (
    <div className="font-sans bg-gradient-to-b from-[#FFF5E1] to-[#E9F3FF]">
      <div>
        <Hero></Hero>
      </div>
      <div className="mt-5 max-w-11/12 mx-auto pb-10">
        <h1 className="text-center font-bold text-xl md:text-4xl lg:text-6xl mb-12 mt-20">Popular Toys</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  xl:grid-cols-5 gap-6">
          <ToyCard></ToyCard>
        </div>
      </div>
    </div>
  );
}
