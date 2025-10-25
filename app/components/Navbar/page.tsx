"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/logo.png";
import { FaBars, FaShoppingCart, FaTimes } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import Swal from "sweetalert2";
import { useAuth } from "../Auth/AuthProvider";
import { useRouter } from "next/navigation";

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { user, loading } = useAuth();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            Swal.fire({
                icon: "success",
                title: "Logged Out",
                text: "You have successfully logged out.",
                timer: 1000,
                showConfirmButton: false,
            });
            router.push("/login");
        } catch (error: unknown) {
            const message =
                error instanceof Error ? error.message : "Logout failed";
            Swal.fire({
                icon: "error",
                title: "Error",
                text: message,
                timer: 1000,
                showConfirmButton: false,
            });
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 py-2 bg-[#FFF5E1] border-b border-gray-300 shadow-sm">
            <div className="flex justify-between items-center py-3 px-4 md:px-8 max-w-11/12 mx-auto">

                <div className="flex items-center">
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


                <div className="hidden md:flex items-center gap-3 relative">
                    <FaShoppingCart size={22} className="text-gray-700" />


                    {!loading && user ? (
                        <div className="relative">

                            <Image
                                src={user.photoURL || "/assets/default-avatar.png"}
                                alt="User Profile"
                                width={40}
                                height={40}
                                className="rounded-full border border-gray-400 cursor-pointer hover:scale-105 transition"
                                onClick={() => setDropdownOpen(!dropdownOpen)}

                            />


                            {dropdownOpen && (
                                <div className="absolute -right-15 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-md overflow-hidden flex flex-col  justify-center p-3 gap-3">
                                    <Link
                                        href="/profile"
                                        className="block px-4 py-2 text-center text-gray-700 hover:bg-[#f3e8ff] transition"
                                        onClick={() => setDropdownOpen(false)}
                                    >
                                        My Profile
                                    </Link>
                                    <button
                                        onClick={() => {
                                            handleLogout();
                                            setDropdownOpen(false);
                                        }}
                                        className="border  border-[#632EE3] text-[#632EE3] hover:bg-[#632EE3] hover:text-white px-4 py-1 rounded-md transition font-semibold"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link
                            href="/login"
                            className="border border-[#632EE3] text-[#632EE3] hover:bg-[#632EE3] hover:text-white px-4 py-1 rounded-md transition font-semibold"
                        >
                            Login
                        </Link>
                    )}
                </div>


                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-[#9F62F2] focus:outline-none"
                >
                    {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>


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
                            href="/allToys"
                            className="hover:text-[#9F62F2] transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            All Toys
                        </Link>
                        <Link
                            href="/about"
                            className="hover:text-[#9F62F2] transition"
                            onClick={() => setMenuOpen(false)}
                        >
                            About Us
                        </Link>


                        {!loading && user ? (
                            <>
                                <div className="flex items-center gap-2">
                                    <Image
                                        src={user.photoURL || "/assets/default-avatar.png"}
                                        alt="User Profile"
                                        width={35}
                                        height={35}
                                        className="rounded-full border border-gray-400"
                                    />

                                </div>
                                <button
                                    onClick={() => {
                                        handleLogout();
                                        setMenuOpen(false);
                                    }}
                                    className="border border-[#632EE3] text-[#632EE3] hover:bg-[#632EE3] hover:text-white px-4 py-1 rounded-md transition font-semibold"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <Link
                                href="/login"
                                onClick={() => setMenuOpen(false)}
                                className="border border-[#632EE3] text-[#632EE3] hover:bg-[#632EE3] hover:text-white px-4 py-1 rounded-md transition font-semibold"
                            >
                                Login
                            </Link>
                        )}
                    </nav>
                </div>
            )}
        </header>
    );
}
