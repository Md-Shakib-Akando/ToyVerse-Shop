import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";
export default function Footer() {
    return (
        <footer className="bg-gradient-to-t from-[#E9F3FF] to-[#FFF5E1] text-gray-700 ">
            <div className="max-w-11/12 mx-auto px-4 sm:px-6 lg:px-8 py-10">

                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">

                    <div>
                        <Image src={logo} alt="Logo" width={90} height={90} />
                        <p className="text-gray-700 max-w-xs">
                            Your one-stop platform to explore, manage, and add amazing ToY.
                        </p>
                    </div>


                    <div className="flex flex-col sm:flex-row gap-8">
                        <div>
                            <h3 className="font-semibold mb-2">Company</h3>
                            <ul className="space-y-1">
                                <li>
                                    <Link href="/terms" className="hover:text-[#9F62F2] transition">
                                        Terms & Conditions
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/privacy" className="hover:text-[#9F62F2] transition">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="hover:text-[#9F62F2] transition">
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">Follow Us</h3>
                            <div className="flex gap-4 mt-1">
                                <a href="#" className="hover:text-[#9F62F2] transition">
                                    <FaFacebookF size={20} />
                                </a>
                                <a href="#" className="hover:text-[#9F62F2] transition">
                                    <FaTwitter size={20} />
                                </a>
                                <a href="#" className="hover:text-[#9F62F2] transition">
                                    <FaInstagram size={20} />
                                </a>
                                <a href="#" className="hover:text-[#9F62F2] transition">
                                    <FaLinkedinIn size={20} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-300 mt-8 pt-4 text-center text-gray-600 text-sm">
                    &copy; {new Date().getFullYear()} ToY. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
