"use client";
import React, { useEffect, useState } from "react";

export default function FlashSale() {
    const initialTime = 8 * 3600 + 30 * 60 + 60;
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {

        const savedTime = typeof window !== "undefined"
            ? localStorage.getItem("flashSaleTime")
            : null;

        if (savedTime) {
            setTimeLeft(parseInt(savedTime, 10));
        }
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    if (typeof window !== "undefined") {
                        localStorage.setItem("flashSaleTime", initialTime.toString());
                    }
                    return initialTime;
                }

                const newTime = prevTime - 1;
                if (typeof window !== "undefined") {
                    localStorage.setItem("flashSaleTime", newTime.toString());
                }
                return newTime;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [initialTime]);


    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = timeLeft % 60;

    const format = (num: number) => String(num).padStart(2, "0");

    return (
        <div className="mt-12">
            <div className="max-w-11/12 mx-auto bg-white p-8 rounded-xl shadow-lg">
                <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                        <h1 className="text-4xl font-extrabold">Flash Sale</h1>
                        <p className="bg-red-400 rounded-full h-fit px-2 py-1 italic font-semibold text-white">
                            Limited time
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <p className="font-semibold">End Time:</p>
                        <div>
                            <span className="bg-black text-white px-2 py-1 rounded-md">
                                {format(hours)}
                            </span>{" "}
                            :
                            <span className="bg-black text-white px-2 py-1 rounded-md ml-1">
                                {format(minutes)}
                            </span>{" "}
                            :
                            <span className="bg-black text-white px-2 py-1 rounded-md ml-1">
                                {format(seconds)}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
