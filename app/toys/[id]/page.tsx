"use client";
import ProtectedRoute from "@/app/components/Auth/Protected";
import toys from "@/data/toys.json";
import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToyDetailsPage() {
    const { id } = useParams();
    const toy = toys.find((t) => t.toyId === Number(id));
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("🎉 Your Try Now request has been submitted!");
        setName("");
        setEmail("");
    };
    if (!toy) return notFound();

    return (
        <ProtectedRoute>
            <div className="min-h-screen  bg-gradient-to-b from-[#FFF5E1] to-[#E9F3FF]  pt-30 ">

                <div className="max-w-11/12 mx-auto">
                    <div className="flex flex-col xl:flex-row items-center gap-10">
                        <div className="w-full xl:w-[50%]">
                            <div>
                                <Image
                                    src={toy.pictureURL}
                                    alt={toy.toyName}
                                    width={350}
                                    height={350}
                                    className="w-full object-cover rounded-lg"
                                    unoptimized
                                />
                            </div>
                        </div>

                        <div className="w-full xl:w-[50%]">
                            <div className="flex gap-7 items-center">
                                <h1 className="text-2xl md:text-5xl font-bold text-gray-800 ">
                                    {toy.toyName}

                                </h1>
                                <div className="bg-orange-100 text-orange-700 px-4 py-1 rounded-full font-medium">
                                    {toy.subCategory}
                                </div>

                            </div>

                            <p className="text-gray-600 mt-5 mb-5  xl:mt-14 xl:mb-8 gap-4">
                                Seller: <span className="font-semibold">{toy.sellerName}</span> <br />
                                Contact:{" "}
                                <a
                                    href={`mailto:${toy.sellerEmail}`}
                                    className="text-blue-500 hover:underline"
                                >
                                    {toy.sellerEmail}
                                </a>
                            </p>


                            <div className="flex items-center my-3">
                                <span className="text-4xl font-bold text-pink-500">
                                    ${toy.price.toFixed(2)}
                                </span>
                            </div>

                            <div className="flex items-center gap-2 my-2 text-yellow-500">
                                {"⭐".repeat(5)}
                                <span className="text-gray-600 text-sm">
                                    {toy.rating} rating
                                </span>
                            </div>


                            <p className="text-gray-700 mb-2">
                                <span className="font-semibold">Available Stock:</span>{" "}
                                {toy.availableQuantity} units
                            </p>

                            <p className="text-gray-600 mb-2">{toy.description}</p>




                            <div className="flex gap-4 mt-6">
                                <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition hover:cursor-pointer">
                                    Add to Cart
                                </button>
                                <button className="border border-pink-400 text-pink-500 hover:bg-pink-50 px-6 py-3 rounded-xl font-semibold transition  hover:cursor-pointer">
                                    ❤️ Save to Wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form
                            onSubmit={handleSubmit}
                            className="mt-10   rounded-xl p-6 max-w-8xl mx-auto"
                        >
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Try Now</h2>

                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                                />
                            </div>

                            <div className=" flex justify-end">
                                <button
                                    type="submit"
                                    className="w-fit bg-pink-500 hover:bg-pink-600 text-white py-2 px-2 hover:cursor-pointer rounded-xl font-semibold transition"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                    <ToastContainer position="top-center" autoClose={2000} hideProgressBar />
                </div>
            </div>
        </ProtectedRoute>
    );
}
