"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaStar, FaArrowRight } from "react-icons/fa";
import toys from "../../data/toys.json";
import Link from "next/link";

const categories = [...new Set(toys.map((toy) => toy.subCategory))];

export default function AllToysPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [priceSort, setPriceSort] = useState(""); // "" | "asc" | "desc"
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    // Filter & sort toys
    const filteredToys = toys
        .filter((toy) => toy.toyName.toLowerCase().includes(searchQuery.toLowerCase()))
        .filter((toy) => selectedCategory === "All" || toy.subCategory === selectedCategory)
        .sort((a, b) => {
            if (priceSort === "asc") return a.price - b.price;
            if (priceSort === "desc") return b.price - a.price;
            return 0;
        });

    // Pagination
    const totalPages = Math.ceil(filteredToys.length / itemsPerPage);
    const paginatedToys = filteredToys.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };


    return (
        <div className="max-w-11/12 mx-auto px-4 py-6 mt-40">
            {/* Search bar */}
            <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search toys..."
                    className="w-full md:w-1/2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className="flex flex-col md:flex-row gap-6">
                {/* Sidebar */}
                <div className="w-full md:w-1/4 space-y-6">
                    {/* Category Filter */}
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="font-semibold mb-3">Category</h3>
                        <ul className="space-y-2">
                            <li
                                className={`cursor-pointer ${selectedCategory === "All" ? "font-bold text-pink-500" : ""
                                    }`}
                                onClick={() => setSelectedCategory("All")}
                            >
                                All
                            </li>
                            {categories.map((cat) => (
                                <li
                                    key={cat}
                                    className={`cursor-pointer ${selectedCategory === cat ? "font-bold text-pink-500" : ""
                                        }`}
                                    onClick={() => setSelectedCategory(cat)}
                                >
                                    {cat}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Price Sort Dropdown */}
                    <div className="bg-white p-4 rounded-lg shadow">
                        <h3 className="font-semibold mb-3">Sort by Price</h3>
                        <select
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                            value={priceSort}
                            onChange={(e) => setPriceSort(e.target.value)}
                        >
                            <option value="">Default</option>
                            <option value="asc">Low to High</option>
                            <option value="desc">High to Low</option>
                        </select>
                    </div>
                </div>

                {/* Toy Cards */}
                <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {paginatedToys.map((toy) => (
                        <div
                            data-aos="fade-up"
                            key={toy.toyId}
                            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
                        >
                            <div className="relative w-full h-56 overflow-hidden group">
                                <Image
                                    src={toy.pictureURL}
                                    alt={toy.toyName}
                                    fill
                                    className="object-cover transform transition-transform duration-500 group-hover:scale-110"
                                    unoptimized
                                />
                                <span className="absolute top-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded-lg shadow">
                                    Popular
                                </span>
                            </div>

                            <div className="p-4 flex flex-col">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-lg font-semibold text-gray-800">{toy.toyName}</h2>
                                    <div className="flex items-center mt-2">
                                        <FaStar className="text-yellow-400 mr-1" />
                                        <span className="text-gray-700 font-medium">{toy.rating}</span>
                                    </div>
                                </div>

                                <div className="flex justify-between items-center mt-2">
                                    <p className="text-gray-500 text-sm">Available: {toy.availableQuantity}</p>
                                    <p className="text-gray-900 font-bold text-lg">${toy.price}</p>
                                </div>

                                <div className="flex justify-center mt-3">
                                    <Link
                                        href={`/toys/${toy.toyId}`}
                                        className="inline-flex items-center justify-center gap-2 bg-pink-500 text-white text-sm font-medium px-4 py-2 rounded-full shadow hover:bg-pink-600 transition-all duration-300"
                                    >
                                        View More <FaArrowRight className="text-xs" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}

                    {paginatedToys.length === 0 && (
                        <p className="col-span-full text-center text-gray-500 mt-10">No toys found.</p>
                    )}
                </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center mt-6 space-x-2 flex-wrap">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`px-3 py-1 rounded ${currentPage === page ? "bg-pink-500 text-white" : "bg-gray-100 text-gray-700"
                                }`}
                        >
                            {page}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
