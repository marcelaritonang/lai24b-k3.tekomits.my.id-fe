"use client";

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Link2 } from 'lucide-react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AppLayout from './components/AppLayout';
import Footer from './components/Footer';

export default function Home() {
    const [activeTab, setActiveTab] = useState("shortener");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const urlSectionRef = useRef<HTMLDivElement>(null);

    const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
    
    const scrollToUrlSection = () => {
        urlSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <AppLayout>
            <div className="min-h-screen bg-white">
                <Navbar 
                    showSidebarToggle={true}
                    onToggleSidebar={toggleSidebar}
                    onGetStartedClick={scrollToUrlSection}
                />

                <AnimatePresence>
                    {sidebarOpen && <Sidebar onClose={toggleSidebar} />}
                </AnimatePresence>

                <div className={`transition-all duration-300 ${sidebarOpen ? 'ml-[280px]' : ''}`}>
                    {/* Initial Hero Section */}
                    <section className="min-h-screen flex items-center justify-center px-4 pt-20 bg-gradient-to-b from-gray-50 to-white">
                        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
                            {/* Text Content */}
                            <motion.div
                            className="flex-1 text-center lg:text-left"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            >
                            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">
                                Shorten your links with{' '}
                                <span className="bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                                LYNX
                                </span>
                            </h1>
                            <p className="text-gray-600 text-lg lg:text-xl max-w-2xl lg:mx-0 mx-auto mb-8">
                                Transform your links into powerful insights. Track and analyze your customer 
                                engagement with our advanced URL shortening solution.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <button
                                onClick={scrollToUrlSection}
                                className="bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-400 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all duration-300"
                                >
                                Get Started Free
                                </button>
                                <button
                                className="bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-sm"
                                >
                                View Pricing
                                </button>
                            </div>
                            </motion.div>

                            {/* Decorative Elements */}
                            <motion.div
                            className="hidden lg:block flex-1 relative"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            >
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-purple-300 to-indigo-300 rounded-full blur-3xl opacity-20"></div>
                            <div className="relative z-10 bg-purple-50 p-10 rounded-3xl shadow-md">
                                <h3 className="text-xl font-semibold text-gray-800">Try it for free!</h3>
                                <p className="text-gray-600 mt-2">Join thousands of businesses simplifying their links with Lynx.</p>
                            </div>
                            </motion.div>
                        </div>
                        </section>


                    {/* URL Shortener Section */}
                    <section 
                        ref={urlSectionRef}
                        className="bg-white py-20"
                    >
                        <div className="max-w-7xl mx-auto px-6">
                            <motion.div 
                                className="max-w-3xl mx-auto"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <div className="flex gap-4">
                                    <div className="flex-1 relative">
                                        <Link2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                        <input
                                            type="text"
                                            placeholder="Paste a link to shorten it"
                                            className="w-full pl-12 pr-4 py-4 rounded-lg border border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-800 bg-white"
                                        />
                                    </div>
                                    <button className="bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-400 text-white px-8 py-4 rounded-lg hover:opacity-90 transition-all duration-300 shadow-lg whitespace-nowrap">
                                        Shorten
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* Why Choose Lynx Section */}
                    <motion.section 
                        className="py-20 px-6 bg-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="max-w-7xl mx-auto text-center">
                            <motion.h2 
                                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-16"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                Why Choose Lynx?
                            </motion.h2>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    {
                                        icon: "/static/integration.svg",
                                        title: "Easy Integration",
                                        description: "Connect and deploy within minutes with our powerful API and comprehensive documentation."
                                    },
                                    {
                                        icon: "/static/global.svg",
                                        title: "Global Access",
                                        description: "Reliable and fast access to your shortened links from anywhere in the world."
                                    },
                                    {
                                        icon: "/static/analytic.svg",
                                        title: "Advanced Analytics",
                                        description: "Deep insights into user behavior with real-time tracking and detailed reports."
                                    }
                                ].map((feature, index) => (
                                    <motion.div 
                                        key={index}
                                        className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                                        initial={{ opacity: 0, x: -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.2 }}
                                        viewport={{ once: true }}
                                    >
                                        <div className="bg-gradient-to-r from-purple-100 via-purple-50 to-indigo-50 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-6">
                                            <Image 
                                                src={feature.icon}
                                                alt={feature.title}
                                                width={28}
                                                height={28}
                                            />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-4">
                                            {feature.title}
                                        </h3>
                                        <p className="text-gray-600">
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.section>

                    {/* Endless Possibilities Section */}
                    <motion.section 
                        className="py-20 px-6 bg-white"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="max-w-7xl mx-auto text-center">
                            <motion.h2 
                                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-4"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                Endless possibilities with a simple link
                            </motion.h2>
                            <motion.p 
                                className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mb-16"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                Our advanced link shortening service allows you to personalize your links and 
                                share them effortlessly.
                            </motion.p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                icon: "/static/security.svg", // Ubah dengan ikon yang sesuai
                                title: "Secure & Reliable",
                                description:
                                    "Enterprise-grade security with 99.9% uptime guarantee for your shortened URLs",
                                },
                                {
                                icon: "/static/target.svg", // Ubah dengan ikon yang sesuai
                                title: "Targeted Reach",
                                description:
                                    "Customize your links for different audiences and track engagement metrics",
                                },
                                {
                                icon: "/static/lightning.svg", // Ubah dengan ikon yang sesuai
                                title: "Lightning Fast",
                                description:
                                    "Optimized infrastructure ensures quick redirects and real-time analytics",
                                },
                            ].map((feature, index) => (
                                <motion.div
                                key={index}
                                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                >
                                <div className="bg-gradient-to-r from-purple-100 via-purple-50 to-indigo-50 w-14 h-14 rounded-lg flex items-center justify-center mx-auto mb-6">
                                    <Image
                                    src={feature.icon}
                                    alt={feature.title}
                                    width={28}
                                    height={28}
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                                </motion.div>
                            ))}
                            </div>
                        </div>
                    </motion.section>
                </div>
            </div>
            <Footer />
        </AppLayout>
    );
}