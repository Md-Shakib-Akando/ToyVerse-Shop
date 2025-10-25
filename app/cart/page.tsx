"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProtectedRoute from "../components/Auth/Protected";


interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
    image: string;
    subCategory: string;
}

export default function CartPage() {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);


    const loadCart = () => {
        const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
        setCartItems(cart);
    };

    useEffect(() => {
        loadCart();


        const handler = () => loadCart();
        window.addEventListener("cartUpdated", handler);
        return () => window.removeEventListener("cartUpdated", handler);
    }, []);

    const increment = (id: number) => {
        const updated = cartItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        setCartItems(updated);
        localStorage.setItem("cart", JSON.stringify(updated));
        window.dispatchEvent(new Event("cartUpdated"));
    };

    const decrement = (id: number) => {
        const updated = cartItems.map((item) =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        setCartItems(updated);
        localStorage.setItem("cart", JSON.stringify(updated));
        window.dispatchEvent(new Event("cartUpdated"));
    };

    const removeItem = (id: number) => {
        const updated = cartItems.filter((item) => item.id !== id);
        setCartItems(updated);
        localStorage.setItem("cart", JSON.stringify(updated));
        window.dispatchEvent(new Event("cartUpdated"));
    };

    const subTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <ProtectedRoute>
            <div className="min-h-screen bg-gray-50 pt-35">
                <div className="max-w-10/12 mx-auto flex flex-col lg:flex-row gap-6 lg:gap-10">

                    <div className="flex-1 bg-white rounded-lg shadow-md p-4 sm:p-6 space-y-4">
                        <div className="hidden md:grid grid-cols-4 gap-4 font-semibold border-b pb-2">
                            <span>Product Details</span>
                            <span>Quantity</span>
                            <span>Price</span>
                            <span>Total</span>
                        </div>

                        {cartItems.length === 0 && (
                            <p className="text-gray-500 py-4 text-center">No products in cart.</p>
                        )}

                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col md:grid md:grid-cols-4 items-center gap-4 border-b py-4"
                            >
                                <div className="flex items-center gap-4 w-full h-full">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={60}
                                        height={60}
                                        className="rounded-full object-cover"
                                        unoptimized
                                    />
                                    <div className="flex flex-col">
                                        <p className="font-semibold">{item.name}</p>
                                        <p className="text-gray-500 text-sm">{item.subCategory}</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2 mt-2 md:mt-0">
                                    <button
                                        onClick={() => decrement(item.id)}
                                        className="px-2 py-1 border rounded hover:bg-gray-100"
                                    >
                                        -
                                    </button>
                                    <span>{item.quantity}</span>
                                    <button
                                        onClick={() => increment(item.id)}
                                        className="px-2 py-1 border rounded hover:bg-gray-100"
                                    >
                                        +
                                    </button>
                                </div>

                                <div className="mt-2 md:mt-0">${item.price.toFixed(2)}</div>

                                <div className="flex items-center justify-between mt-2 md:mt-0 w-full md:w-auto">
                                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="text-gray-400 hover:text-red-500 ml-4 md:ml-0"
                                    >
                                        ✕
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>


                    <div className="w-full lg:w-96 bg-white rounded-lg shadow-md p-4 sm:p-6 flex flex-col gap-4">
                        <h2 className="text-xl font-semibold">Total</h2>
                        <div className="flex justify-between text-gray-600">
                            <span>Sub-Total</span>
                            <span>${subTotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-gray-600">
                            <span>Delivery</span>
                            <span>Standard Delivery (Free)</span>
                        </div>

                        <button className="bg-red-600 text-white py-3 rounded-lg mt-4 font-semibold hover:bg-red-700 transition">
                            Check Out
                        </button>
                    </div>
                </div>
            </div>
        </ProtectedRoute>
    );
}
