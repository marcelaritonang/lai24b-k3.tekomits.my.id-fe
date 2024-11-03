// src/app/page.tsx

import Image from "next/image";
import { useState } from "react";

export default function Home() {
    const [activeTab, setActiveTab] = useState("shortener");

    return (
        <div className="min-h-screen bg-white flex flex-col items-center">
            {/* Header */}
            <header className="w-full flex justify-between items-center px-8 py-4">
                <h1 className="text-2xl font-bold text-gray-800">Lynx</h1>
                <div className="flex items-center gap-4">
                    <a href="/login" className="text-gray-800 hover:underline">
                        Login
                    </a>
                    <button className="bg-lime-500 text-white px-4 py-2 rounded-md hover:bg-lime-600 transition">
                        Get Started
                    </button>
                </div>
            </header>

            {/* Hero Section */}
            <main className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl p-8 mt-12 gap-12">
                {/* Text Section */}
                <div className="text-center md:text-left max-w-md">
                    <h2 className="text-5xl font-extrabold mb-4 text-gray-800">
                        <span className="text-lime-500">LYNX</span> SHORT URL AND QR CODE GENERATOR
                    </h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        A short link to allows you to collect so much data about your customers & their behaviors.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button className="bg-lime-500 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-lime-600 transition">
                            Sign Up
                        </button>
                        <button className="border-2 border-lime-500 text-lime-500 px-6 py-3 rounded-md font-semibold hover:bg-lime-100 transition">
                            Get A Quote
                        </button>
                    </div>
                </div>

                {/* Image Section */}
                <div>
                    <Image
                        src="/static/qr-illustration.png"
                        alt="QR Code Illustration"
                        width={400}
                        height={400}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </main>

            {/* Secondary Section - Scrollable Content */}
            <section className="w-full bg-gray-100 py-12 px-8 mt-20">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="flex justify-center mb-8">
                        {/* Tab Buttons */}
                        <button
                            className={`px-4 py-2 mr-2 rounded-md font-semibold transition ${
                                activeTab === "shortener"
                                    ? "bg-lime-500 text-white"
                                    : "bg-gray-200 text-gray-800"
                            }`}
                            onClick={() => setActiveTab("shortener")}
                        >
                            <span role="img" aria-label="link">🔗</span> LINK SHORTENER
                        </button>
                        <button
                            className={`px-4 py-2 rounded-md font-semibold transition ${
                                activeTab === "qr"
                                    ? "bg-lime-500 text-white"
                                    : "bg-gray-200 text-gray-800"
                            }`}
                            onClick={() => setActiveTab("qr")}
                        >
                            <span role="img" aria-label="qr">📷</span> QR CODE
                        </button>
                    </div>

                    {/* Content based on the active tab */}
                    {activeTab === "shortener" ? (
                        <div className="flex flex-col sm:flex-row items-center gap-4 bg-white rounded-md p-4 shadow-md">
                            <input
                                type="text"
                                placeholder="Paste link to shorten it"
                                className="w-full sm:flex-grow px-4 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none"
                            />
                            <button className="bg-lime-500 text-white px-6 py-2 rounded-md font-semibold shadow-md hover:bg-lime-600 transition">
                                Shorten
                            </button>
                        </div>
                    ) : (
                        <div className="flex flex-col sm:flex-row items-center gap-4 bg-white rounded-md p-4 shadow-md">
                            <input
                                type="text"
                                placeholder="Enter text to generate QR code"
                                className="w-full sm:flex-grow px-4 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none"
                            />
                            <button className="bg-lime-500 text-white px-6 py-2 rounded-md font-semibold shadow-md hover:bg-lime-600 transition">
                                Generate
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
