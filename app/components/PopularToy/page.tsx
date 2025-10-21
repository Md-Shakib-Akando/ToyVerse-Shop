import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import toys from '../../../data/toys.json'
export default function ToyCard() {
    return (
        <>
            {toys.map((toy) => (
                <div key={toy.toyId} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">
                    {/* Image */}
                    <div className="relative w-full h-56">
                        <Image
                            src={toy.pictureURL}
                            alt={toy.toyName}
                            fill
                            objectFit="cover"
                            unoptimized
                        />
                    </div>

                    {/* Card Content */}
                    <div className="p-4 flex flex-col flex-grow">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-lg font-semibold text-gray-800">{toy.toyName}</h2>

                            {/* Rating */}
                            <div className="flex items-center mt-2">
                                <FaStar className="text-yellow-400 mr-1" />
                                <span className="text-gray-700 font-medium">{toy.rating}</span>
                            </div>
                        </div>

                        {/* Available Quantity */}
                        <p className="text-gray-500 text-sm mt-1">
                            Available: {toy.availableQuantity}
                        </p>

                        {/* Price */}
                        <p className="text-gray-900 font-bold mt-2 text-lg">${toy.price}</p>

                        {/* View More Button */}
                        <div className="mt-auto">
                            <button className="w-full  border border-[#632EE3]  bg-[#632EE3] text-white py-2 mt-4 rounded-lg cursor-pointer  transition-colors hover:bg-[#9F62F2]">
                                View More
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
