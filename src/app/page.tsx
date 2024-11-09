"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AppLayout from './components/AppLayout';

export default function Home() {
    const [activeTab, setActiveTab] = useState("shortener");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const shortenerRef = useRef<HTMLDivElement>(null);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const scrollToShortener = () => {
        shortenerRef.current?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
        });
    };

    return (
        <AppLayout>
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-white">
            {/* Navbar */}
            <Navbar 
                showSidebarToggle={true}
                onToggleSidebar={toggleSidebar}
                onGetStartedClick={scrollToShortener}
            />

            {/* Sidebar */}
            <AnimatePresence>
                {sidebarOpen && (
                    <Sidebar onClose={toggleSidebar} />
                )}
            </AnimatePresence>

            {/* Main content wrapper */}
            <motion.div
                animate={{
                    marginLeft: sidebarOpen ? "280px" : "0"
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                {/* Hero Section */}
                <motion.main 
                    className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl p-8 mt-12 gap-12 mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Text Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center md:text-left max-w-md"
                    >
                        <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            LYNX <span className="text-gray-800">SHORT URL AND QR CODE GENERATOR</span>
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                            Transform your links into powerful insights. Track, analyze, and optimize your customer engagement with our advanced URL shortening solution.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={scrollToShortener}
                                className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Get Started Free
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-purple-500 text-purple-600 px-8 py-4 rounded-xl font-semibold hover:bg-purple-50 transition-all duration-300"
                            >
                                View Pricing
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-3xl opacity-20 transform -rotate-6"></div>
                        <Image
                            src="/static/qr-illustration.png"
                            alt="QR Code Illustration"
                            width={400}
                            height={400}
                            className="rounded-2xl shadow-2xl relative z-10"
                        />
                    </motion.div>
                </motion.main>

                {/* Secondary Section - Tab Content */}
                <motion.section 
                    ref={shortenerRef} 
                    className="w-full bg-gradient-to-br from-white to-indigo-50/40 backdrop-blur-sm py-16 px-8 mt-20 border-y border-gray-100"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex p-1 bg-gray-100 rounded-xl mb-8">
                            {/* Tab Buttons */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                                    activeTab === "shortener"
                                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                                        : "text-gray-700 hover:bg-gray-200"
                                }`}
                                onClick={() => setActiveTab("shortener")}
                            >
                                🔗 Link Shortener
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                                    activeTab === "qr"
                                        ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                                        : "text-gray-700 hover:bg-gray-200"
                                }`}
                                onClick={() => setActiveTab("qr")}
                            >
                                📷 QR Code
                            </motion.button>
                        </div>

                        {activeTab === "shortener" ? (
                            <motion.div
                                key="shortener"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex flex-col sm:flex-row items-center gap-4 bg-white rounded-xl p-6 shadow-xl border border-gray-100"
                            >
                                <input
                                    type="text"
                                    placeholder="Paste your long URL here..."
                                    className="w-full sm:flex-grow px-6 py-4 border border-gray-200 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
                                >
                                    Shorten URL
                                </motion.button>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="qr"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex flex-col sm:flex-row items-center gap-4 bg-white rounded-xl p-6 shadow-xl border border-gray-100"
                            >
                                <input
                                    type="text"
                                    placeholder="Enter text or URL for QR code..."
                                    className="w-full sm:flex-grow px-6 py-4 border border-gray-200 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                                />
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap"
                                >
                                    Generate QR
                                </motion.button>
                            </motion.div>
                        )}
                    </div>
                </motion.section>

                {/* Features Section */}
                <motion.section 
                    className="w-full py-24 px-8 mt-12 bg-gradient-to-br from-white to-indigo-50 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-6xl mx-auto text-center space-y-16">
                        <h3 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Why Choose Lynx?
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Feature cards */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="group flex flex-col items-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                            >
                                <div className="p-4 bg-indigo-50 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Image src="/static/integration.svg" alt="Easy Integration" width={50} height={50} />
                                </div>
                                <h4 className="text-2xl font-semibold text-gray-800 mb-4">Easy Integration</h4>
                                <p className="text-gray-600">Connect and deploy within minutes with our powerful API and comprehensive documentation.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="group flex flex-col items-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                            >
                                <div className="p-4 bg-purple-50 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Image src="/static/global.svg" alt="Global Access" width={50} height={50} />
                                </div>
                                <h4 className="text-2xl font-semibold text-gray-800 mb-4">Global Access</h4>
                                <p className="text-gray-600">Reliable and fast access to your shortened links from anywhere in the world.</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="group flex flex-col items-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                            >
                                <div className="p-4 bg-pink-50 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Image src="/static/analytic.svg" alt="Advanced Analytics" width={50} height={50} />
                                </div>
                                <h4 className="text-2xl font-semibold text-gray-800 mb-4">Advanced Analytics</h4>
                                <p className="text-gray-600">Deep insights into user behavior with real-time tracking and detailed reports.</p>
                            </motion.div>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                        >
                            Explore All Features
                        </motion.button>
                    </div>
                </motion.section>
            </motion.div>
        </div>
        </AppLayout>
    );
}