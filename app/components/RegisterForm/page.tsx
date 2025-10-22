import Image from 'next/image'
import React from 'react'
import RegImg from '../../../public/assets/RegImg.png'
export default function RegisterForm() {
    return (
        <div className='flex justify-between   bg-gradient-to-b from-[#b4d7e4] to-[#f7ffe9]  p-5 pl-12 max-w-6xl mx-auto   rounded-2xl shadow-xl items-center flex-col md:flex-row gap-6'>

            <div className="w-full md:w-[40%] ">
                <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
                    Create Your Account
                </h2>

                <form className="space-y-5">
                    <input
                        type="email"
                        className="w-full border border-purple-300 px-4 py-3 rounded-md  outline-none transition"
                        placeholder="Email Address"

                        required
                    />
                    <input
                        type="password"
                        className="w-full border border-purple-300 px-4 py-3 rounded-md  outline-none transition"
                        placeholder="Password"

                        required
                    />
                    <input
                        type="password"
                        className="w-full border border-purple-300 px-4 py-3 rounded-md 
                         outline-none transition"
                        placeholder="Confirm Password"

                        required
                    />



                    <button
                        type="submit"
                        className="w-full border border-pink-500  bg-pink-500 text-white py-2   rounded-lg cursor-pointer  transition-colors hover:bg-pink-500 text-center"
                    >
                        Sign Up
                    </button>
                </form>

                <div className="my-6 flex justify-center items-center">
                    <div className=" border-t border-gray-300"></div>
                    <span className="mx-3 text-gray-500 text-sm">OR</span>
                    <div className=" border-t border-gray-300"></div>
                </div>

                <button

                    className="w-full flex items-center justify-center gap-3 border border-gray-300 py-3 rounded-md hover:bg-gray-50 transition text-gray-700 font-medium"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 48 48">
                        <path fill="#EA4335" d="M24 9.5c3.3 0 6.2 1.1 8.5 3.2l6.4-6.4C34.8 3.5 29.7 1.5 24 1.5 14.7 1.5 6.6 6.8 2.7 14.4l7.8 6.1C12.2 13.5 17.6 9.5 24 9.5z" />
                        <path fill="#34A853" d="M46.1 24.6c0-1.5-.1-3-.4-4.6H24v9h12.6c-.6 3-2.3 5.5-4.9 7.2l7.6 5.9c4.5-4.1 7.1-10.1 7.1-17.5z" />
                        <path fill="#4A90E2" d="M24 47.5c6.5 0 11.9-2.1 15.8-5.7l-7.6-5.9c-2.1 1.4-4.8 2.3-8.2 2.3-6.3 0-11.7-4.2-13.6-10.1l-7.8 6.1C6.7 42.2 14.7 47.5 24 47.5z" />
                        <path fill="#FBBC05" d="M10.4 28.1c-.5-1.4-.8-3-.8-4.6s.3-3.2.8-4.6l-7.8-6.1C1.9 16 1 19.9 1 23.5s.9 7.5 2.6 10.8l7.8-6.2z" />
                    </svg>
                    Continue with Google
                </button>

                <p className="mt-6 text-center text-gray-600 text-sm">
                    Already have an account?{" "}
                    <a href="/login" className="text-blue-600 font-medium hover:underline">
                        Log In
                    </a>
                </p>
            </div>
            <div className='w-full md:w-[60%] relative overflow-hidden hidden md:flex group'>
                <Image src={RegImg} alt="Register Image" className="w-full transform transition-transform duration-500 group-hover:scale-110  object-cover mb-6" />
            </div>
        </div>
    )
}
