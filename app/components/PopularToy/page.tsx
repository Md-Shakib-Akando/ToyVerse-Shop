
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import toys from '../../../data/toys.json'
import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa";

export default function ToyCard() {
    const popularToy = toys.slice(0, 10);

    return (
        <>
            {popularToy.map((toy) => (
                <div data-aos="fade-up" key={toy.toyId} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">

                    <div className="relative w-full h-56 overflow-hidden group">
                        <Image
                            src={toy.pictureURL}
                            alt={toy.toyName}
                            fill
                            objectFit="cover"
                            className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                            unoptimized
                        />
                        <span className="absolute top-2 right-2 bg-green-600 text-white text-xs  px-2 py-1 rounded-lg shadow">
                            Popular
                        </span>
                    </div>




                    <div className="p-4 flex flex-col ">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-lg font-semibold text-gray-800">{toy.toyName}</h2>


                            <div className="flex items-center mt-2">
                                <FaStar className="text-yellow-400 mr-1" />
                                <span className="text-gray-700 font-medium">{toy.rating}</span>
                            </div>
                        </div>


                        <div className='flex justify-between items-center'>
                            <p className="text-gray-500 text-sm mt-1">
                                Available: {toy.availableQuantity}
                            </p>


                            <p className="text-gray-900 font-bold mt-2 text-lg">${toy.price}</p>
                        </div>


                        <div className="flex justify-center mt-1 ">

                            <Link
                                href={`/toys/${toy.toyId}`}
                                className="inline-flex items-center justify-center gap-2 mt-3 bg-pink-500 text-white text-sm font-medium px-4 py-2 rounded-full shadow hover:bg-pink-600 transition-all duration-300"
                            >
                                View More <FaArrowRight className="text-xs" />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
