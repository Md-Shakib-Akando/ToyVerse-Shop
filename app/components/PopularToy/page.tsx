
import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import toys from '../../../data/toys.json'
import Link from 'next/link';

export default function ToyCard() {

    return (
        <>
            {toys.map((toy) => (
                <div data-aos="fade-up" data-aos-duration="2000" key={toy.toyId} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col">

                    <div className="relative w-full h-56 overflow-hidden group">
                        <Image
                            src={toy.pictureURL}
                            alt={toy.toyName}
                            fill
                            objectFit="cover"
                            className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                            unoptimized
                        />
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


                        <div className="flex justify-center mt-2 ">
                            <Link href={`/toys/${toy.toyId}`} className="w-full border border-pink-500  bg-pink-500 text-white py-1 px-2  rounded-lg cursor-pointer  transition-colors hover:bg-pink-500 text-center">
                                View More
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
