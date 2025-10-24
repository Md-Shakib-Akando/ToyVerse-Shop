"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/logo.png";
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 py-2 bg-[#FFF5E1] border-b border-gray-300">

            <div className="flex justify-between items-center  py-3 max-w-11/12 mx-auto">
                {/* Logo */}
                <div className="flex items-center ">
                    <Image src={logo} alt="Logo" width={70} height={70} />

                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex gap-6 items-center">
                    <Link href="/" className="hover:text-[#9F62F2] transition font-semibold">
                        Home
                    </Link>
                    <Link href="/allToys" className="hover:text-[#9F62F2] transition font-semibold">
                        All Toys
                    </Link>
                    <Link href="/how-to-buy" className="hover:text-[#9F62F2] transition font-semibold">
                        How To Buy
                    </Link>
                    <Link href="/about" className="hover:text-[#9F62F2] transition font-semibold">
                        About Us
                    </Link>
                    <Link href="/contact" className="hover:text-[#9F62F2] transition font-semibold">
                        Contact
                    </Link>




                </nav>
                <div className="hidden md:block">
                    <div className="flex items-center gap-2">
                        <FaShoppingCart size={24}></FaShoppingCart>
                        <Link href="/login" className="btn bg-[#FFF5E1] border border-[#632EE3] text-[#632EE3] hover:bg-[#632EE3] hover:text-white transition font-semibold">
                            Login
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-[#9F62F2] focus:outline-none"
                >
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
                    <nav className="flex flex-col items-center gap-4 py-4">
                        <Link
                            href="/"
                            className="hover:text-[#9F62F2] transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/profile"
                            className="hover:text-[#9F62F2] transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            My Profile
                        </Link>


                        <Link href="/login" className="btn bg-[#FFF5E1] border border-[#632EE3] text-[#632EE3] hover:bg-[#632EE3] hover:text-white transition font-semibold">
                            Login
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}