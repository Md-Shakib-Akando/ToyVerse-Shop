import Image from "next/image";
import toys from "../../../data/toys.json";
import Link from "next/link";

export default function DiscountToys() {
    const lowRatedToys = toys.filter((toy) => toy.rating <= 4.5);
    const limitedToys = lowRatedToys.slice(0, 6);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-5  pt-6 pb-3">
            {limitedToys.map((toy) => (
                <Link key={toy.toyId} href={`/toys/${toy.toyId}`}>
                    <div
                        data-aos="fade-up"
                        className="relative w-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                        {/* Gradient background - diagonal pink/white */}
                        <div className="absolute inset-0 bg-[linear-gradient(-10deg,white_50%,#fbcfe8_50%)]"></div>

                        <div className="relative z-10 p-6 flex flex-col items-center">
                            {/* Top text area */}
                            <div className="w-full flex justify-between items-start mb-4">
                                <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-20">
                                    20% OFF
                                </div>
                            </div>

                            {/* Product image */}
                            <div className="w-40 h-40 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden shadow-lg border-4 border-white mt-2">
                                <Image
                                    src={toy.pictureURL}
                                    alt="Product"
                                    width={160}
                                    height={160}
                                    className="object-cover w-full h-full"
                                    unoptimized
                                />
                            </div>

                            <div className="mt-3">
                                <h3 className="text-sm font-bold text-pink-700 uppercase">
                                    {toy.toyName}
                                </h3>
                            </div>

                            {/* Dots */}
                            <div className="flex justify-center mt-6 space-x-2">
                                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                                <span className="w-2 h-2 bg-pink-200 rounded-full"></span>
                                <span className="w-2 h-2 bg-pink-200 rounded-full"></span>
                                <span className="w-2 h-2 bg-pink-200 rounded-full"></span>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
