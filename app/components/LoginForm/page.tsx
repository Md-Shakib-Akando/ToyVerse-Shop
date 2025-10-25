"use client";

import Image from "next/image";
import React, { useState } from "react";
import loginImg from "../../../public/assets/loginImg.png";
import { auth } from "@/lib/firebase";
import {
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { useRouter, useSearchParams } from "next/navigation";
import Swal from "sweetalert2";

export default function LoginForm() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);


    const from = searchParams.get("from") || "/";


    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "Login successful!",
                timer: 1000,
                showConfirmButton: false,
            });
            router.replace(from)
        } catch (error: unknown) {
            const message =
                error instanceof Error ? error.message : "Login failed";
            Swal.fire({
                icon: "error",
                title: "Error",
                text: message,
                timer: 1000,
                showConfirmButton: false,
            });
        } finally {
            setLoading(false);
        }
    };


    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            Swal.fire({
                icon: "success",
                title: "Success",
                text: "Logged in with Google!",
                timer: 1000,
                showConfirmButton: false,
            });
            router.replace(from)
        } catch (error: unknown) {
            const message =
                error instanceof Error ? error.message : "Google login failed";
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
        <div className="flex justify-between bg-gradient-to-b from-[#b4d7e4] to-[#f7ffe9] p-5 pl-12 max-w-6xl mx-auto rounded-2xl shadow-xl items-center flex-col md:flex-row gap-6">
            <div className="w-full md:w-[40%]">
                <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
                    Sign In
                </h2>

                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="email"
                        className="w-full border px-3 py-2 outline-none border-purple-300 rounded-md"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        className="w-full border border-purple-300 outline-none px-3 py-2 rounded-md"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <div className="flex justify-end">
                        <a href="#" className="text-blue-600 text-sm hover:underline">
                            Forgot Password?
                        </a>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full border border-pink-500 bg-pink-500 text-white py-2 rounded-lg cursor-pointer transition-colors hover:bg-pink-600 text-center"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>

                <div className="my-6 flex justify-center items-center">
                    <div className="border-t border-gray-300 w-20"></div>
                    <span className="mx-3 text-gray-500 text-sm text-center">OR</span>
                    <div className="border-t border-gray-300 w-20"></div>
                </div>

                <button
                    onClick={handleGoogleSignIn}
                    className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-md hover:bg-gray-50 transition text-gray-700 font-medium"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 48 48"
                    >
                        <path
                            fill="#EA4335"
                            d="M24 9.5c3.3 0 6.2 1.1 8.5 3.2l6.4-6.4C34.8 3.5 29.7 1.5 24 1.5 14.7 1.5 6.6 6.8 2.7 14.4l7.8 6.1C12.2 13.5 17.6 9.5 24 9.5z"
                        />
                        <path
                            fill="#34A853"
                            d="M46.1 24.6c0-1.5-.1-3-.4-4.6H24v9h12.6c-.6 3-2.3 5.5-4.9 7.2l7.6 5.9c4.5-4.1 7.1-10.1 7.1-17.5z"
                        />
                        <path
                            fill="#4A90E2"
                            d="M24 47.5c6.5 0 11.9-2.1 15.8-5.7l-7.6-5.9c-2.1 1.4-4.8 2.3-8.2 2.3-6.3 0-11.7-4.2-13.6-10.1l-7.8 6.1C6.7 42.2 14.7 47.5 24 47.5z"
                        />
                        <path
                            fill="#FBBC05"
                            d="M10.4 28.1c-.5-1.4-.8-3-.8-4.6s.3-3.2.8-4.6l-7.8-6.1C1.9 16 1 19.9 1 23.5s.9 7.5 2.6 10.8l7.8-6.2z"
                        />
                    </svg>
                    Continue with Google
                </button>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Don’t have an account?{" "}
                    <a href="/register" className="text-blue-600 hover:underline">
                        Register
                    </a>
                </p>
            </div>

            <div className="w-full md:w-[60%] hidden md:flex relative overflow-hidden group">
                <Image
                    src={loginImg}
                    alt="Login Image"
                    className="w-full transform transition-transform duration-500 group-hover:scale-110 object-cover mb-6"
                />
            </div>
        </div>
    );
}
