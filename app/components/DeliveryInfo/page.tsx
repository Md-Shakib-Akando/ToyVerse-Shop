"use client";
import React from "react";
import { FaTruck, FaUndoAlt, FaHeadset, FaMoneyCheckAlt } from "react-icons/fa";

export default function InfoSection() {
    const features = [
        {
            icon: <FaTruck size={48} />,
            title: "Express Delivery",
            subtitle: "All Over",
        },
        {
            icon: <FaUndoAlt size={48} />,
            title: "Free Return",
            subtitle: "7 Days",
        },
        {
            icon: <FaHeadset size={48} />,
            title: "24/7 Support",
            subtitle: "Online 24 Hours",
        },
        {
            icon: <FaMoneyCheckAlt size={48} />,
            title: "Payment Method",
            subtitle: "Secure Payment",
        },
    ];

    return (
        <div className=" mt-7">
            <div className="max-w-11/12 mx-auto bg-gray-200 py-12 flex flex-col md:flex-row justify-between items-center gap-6 px-6 rounded-lg">
                {features.map((feature, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-4 md:gap-3 text-center md:text-left border-b md:border-b-0 md:border-r border-gray-300 pb-4 md:pb-0 md:pr-4 last:border-r-0"
                    >
                        <div className="text-gray-700">{feature.icon}</div>
                        <div>
                            <h3 className="font-semibold text-gray-800 tex-xl">{feature.title}</h3>
                            <p className="text-gray-500 text-md">{feature.subtitle}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
