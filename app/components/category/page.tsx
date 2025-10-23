"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/virtual";
import "swiper/css/autoplay";

export default function Category() {
    const category = [
        { id: 1, title: "Dolls", image: "/assets/category/dolls.jpg" },
        { id: 2, title: "Art & Craft", image: "/assets/category/art-carft.jpg" },
        { id: 3, title: "Vehicles", image: "/assets/category/vehicles.jpg" },
        { id: 4, title: "Educational", image: "/assets/category/educational.jpg" },
        { id: 5, title: "Animals", image: "/assets/category/animals.jpg" },
        { id: 6, title: "Action figures", image: "/assets/category/action.jpg" },
        { id: 7, title: "Puzzles", image: "/assets/category/puzzle.jpg" },
        { id: 8, title: "Building toys", image: "/assets/category/bulding-blocks.jpg" },
        { id: 9, title: "Dolls", image: "/assets/category/dolls.jpg" },
        { id: 10, title: "Art & Craft", image: "/assets/category/art-carft.jpg" },
        { id: 11, title: "Vehicles", image: "/assets/category/vehicles.jpg" },
        { id: 12, title: "Educational", image: "/assets/category/educational.jpg" },
        { id: 13, title: "Animals", image: "/assets/category/animals.jpg" },
        { id: 14, title: "Action figures", image: "/assets/category/action.jpg" },
        { id: 15, title: "Puzzles", image: "/assets/category/puzzle.jpg" },
        { id: 16, title: "Building toys", image: "/assets/category/bulding-blocks.jpg" },
    ];

    return (
        <div className="pt-16 px-6 lg:px-8 xl:px-24 ">



            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                spaceBetween={40}
                slidesPerView={2}
                breakpoints={{
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 5 },
                }}
                loop={true}
                className="category-swiper"
            >

                {category.map((cat, index) => (
                    <SwiperSlide key={`virtual-slide-${cat.id}-${index}`} virtualIndex={index}>
                        <div className="flex flex-col items-center justify-center bg-white rounded-lg hover:border hover:border-pink-400 hover:shadow-2xl p-2 cursor-pointer overflow-hidden ">
                            <div className="relative w-full h-44 mb-3 overflow-hidden rounded-lg">
                                <Image
                                    src={cat.image}
                                    alt={cat.title}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-center font-semibold text-gray-800 ">{cat.title}</h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
}
