// src/app/page.tsx
"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
    const [activeTab, setActiveTab] = useState("shortener");

    return (
        <div className="min-h-screen bg-white flex flex-col items-center">
            {/* Header */}
            <header className="w-full flex justify-between items-center px-8 py-4">
                <div className="flex items-center">
                    
                    <h1 className="text-2xl font-bold text-gray-800 ml-10">Lynx</h1>
                </div>
                <div className="flex items-center gap-4">
                    <a href="/login" className="text-gray-800 hover:underline">
                        Login
                    </a>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-lime-500 text-white px-4 py-2 rounded-md hover:bg-lime-600 transition"
                    >
                        Get Started
                    </motion.button>
                </div>
            </header>

            {/* Hero Section */}
            <main className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl p-8 mt-12 gap-12">
                {/* Text Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center md:text-left max-w-md"
                >
                    <h2 className="text-5xl font-extrabold mb-4 text-gray-800">
                        <span className="text-lime-500">LYNX</span> SHORT URL AND QR CODE GENERATOR
                    </h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        A short link to allows you to collect so much data about your customers & their behaviors.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-lime-500 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:bg-lime-600 transition"
                        >
                            Sign Up
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-lime-500 text-lime-500 px-6 py-3 rounded-md font-semibold hover:bg-lime-100 transition"
                        >
                            Get A Quote
                        </motion.button>
                    </div>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <Image
                        src="/static/qr-illustration.png"
                        alt="QR Code Illustration"
                        width={400}
                        height={400}
                        className="rounded-lg shadow-lg"
                    />
                </motion.div>
            </main>

            {/* Secondary Section - Tab Content */}
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
                            🔗 LINK SHORTENER
                        </button>
                        <button
                            className={`px-4 py-2 rounded-md font-semibold transition ${
                                activeTab === "qr"
                                    ? "bg-lime-500 text-white"
                                    : "bg-gray-200 text-gray-800"
                            }`}
                            onClick={() => setActiveTab("qr")}
                        >
                            📷 QR CODE
                        </button>
                    </div>

                    {activeTab === "shortener" ? (
                        <motion.div
                            key="shortener"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col sm:flex-row items-center gap-4 bg-white rounded-md p-4 shadow-md"
                        >
                            <input
                                type="text"
                                placeholder="Paste link to shorten it"
                                className="w-full sm:flex-grow px-4 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="bg-lime-500 text-white px-6 py-2 rounded-md font-semibold shadow-md hover:bg-lime-600 transition"
                            >
                                Shorten
                            </motion.button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="qr"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col sm:flex-row items-center gap-4 bg-white rounded-md p-4 shadow-md"
                        >
                            <input
                                type="text"
                                placeholder="Enter text to generate QR code"
                                className="w-full sm:flex-grow px-4 py-2 border border-gray-300 rounded-md text-gray-600 focus:outline-none"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="bg-lime-500 text-white px-6 py-2 rounded-md font-semibold shadow-md hover:bg-lime-600 transition"
                            >
                                Generate
                            </motion.button>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* Additional Section - Features and Call to Action */}
            <section className="w-full py-16 px-8 mt-12 bg-white">
                <div className="max-w-6xl mx-auto text-center space-y-12">
                    <h3 className="text-4xl font-extrabold text-gray-800">Why Choose Lynx?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex flex-col items-center p-6 border rounded-lg shadow-md"
                        >
                            <Image src="/static/integration.svg" alt="Easy Integration" width={50} height={50} />
                            <h4 className="text-xl font-semibold mt-4 text-gray-700">Easy Integration</h4>
                            <p className="text-gray-600 mt-2">Integrate with your existing systems effortlessly.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-col items-center p-6 border rounded-lg shadow-md"
                        >
                            <Image src="/static/global.svg" alt="Global Access" width={50} height={50} />
                            <h4 className="text-xl font-semibold mt-4 text-gray-700">Global Access</h4>
                            <p className="text-gray-600 mt-2">Reach customers all over the world with reliable links.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col items-center p-6 border rounded-lg shadow-md"
                        >
                            <Image src="/static/analytic.svg" alt="Advanced Analytics" width={50} height={50} />
                            <h4 className="text-xl font-semibold mt-4 text-gray-700">Advanced Analytics</h4>
                            <p className="text-gray-600 mt-2">Gain insights into user engagement and behavior.</p>
                        </motion.div>
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="bg-lime-500 text-white px-8 py-4 rounded-md font-semibold shadow-md hover:bg-lime-600 transition"
                    >
                        Learn More
                    </motion.button>
                </div>
            </section>
        </div>
    );
}
