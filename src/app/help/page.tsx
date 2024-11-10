"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import AppLayout from '../components/AppLayout';
import Image from 'next/image';

export default function HelpCenterPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('getting-started');

    // FAQ Categories
    const categories = [
        { id: 'getting-started', name: 'Getting Started', icon: '🚀' },
        { id: 'url-shortening', name: 'URL Shortening', icon: '🔗' },
        { id: 'qr-codes', name: 'QR Codes', icon: '📱' },
        { id: 'analytics', name: 'Analytics', icon: '📊' },
        
    ];

    // FAQ Data
    const faqs = {
        'getting-started': [
            {
                question: 'How do I create an account?',
                answer: 'To create an account, click the "Sign Up" button in the top right corner. Fill in your details including name, email, and password. Once submitted, you\'ll receive a confirmation email to verify your account.'
            },
            {
                question: 'What features are included in the free plan?',
                answer: 'The free plan includes basic URL shortening, QR code generation, and basic analytics. You can create up to 50 links per month and access click statistics for the past 30 days.'
            },
            // Add more FAQs
        ],
        // Add more categories
    };

    return (
        <AppLayout>
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-white">
                <main className="container mx-auto pt-20 px-4">
                    {/* Header Section */}
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                            How can we help you?
                        </h1>
                        <p className="text-gray-600 mb-8">
                            Search our help center or browse categories below
                        </p>
                        
                        {/* Search Bar */}
                        <div className="relative max-w-xl mx-auto">
                            <input
                                type="text"
                                placeholder="Search for help..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-6 py-4 pr-12 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                            />
                            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                                🔍
                            </span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-6 bg-white rounded-xl shadow-sm border border-gray-100"
                        >
                            <h3 className="font-semibold mb-2">Quick Start Guide</h3>
                            <p className="text-gray-600 text-sm mb-4">Learn the basics of using Lynx in under 5 minutes.</p>
                            <button className="text-purple-600 text-sm font-medium hover:text-purple-700">
                                Read Guide →
                            </button>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-6 bg-white rounded-xl shadow-sm border border-gray-100"
                        >
                            <h3 className="font-semibold mb-2">Video Tutorials</h3>
                            <p className="text-gray-600 text-sm mb-4">Watch step-by-step guides for using Lynx features.</p>
                            <button className="text-purple-600 text-sm font-medium hover:text-purple-700">
                                Watch Videos →
                            </button>
                        </motion.div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="p-6 bg-white rounded-xl shadow-sm border border-gray-100"
                        >
                            <h3 className="font-semibold mb-2">API Documentation</h3>
                            <p className="text-gray-600 text-sm mb-4">Technical guides for integrating Lynx API.</p>
                            <button className="text-purple-600 text-sm font-medium hover:text-purple-700">
                                View Docs →
                            </button>
                        </motion.div>
                    </div>

                    {/* Categories and FAQs */}
                    <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 mb-12">
                        {/* Categories Sidebar */}
                        <div className="md:col-span-1">
                            <h2 className="font-semibold mb-4 text-gray-800">Categories</h2>
                            <div className="space-y-2">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveCategory(category.id)}
                                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                                            activeCategory === category.id
                                                ? 'bg-purple-50 text-purple-600'
                                                : 'text-gray-600 hover:bg-gray-50'
                                        }`}
                                    >
                                        <span className="mr-2">{category.icon}</span>
                                        {category.name}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* FAQ Content */}
                        <div className="md:col-span-3">
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                                <h2 className="font-semibold mb-6 text-xl">Frequently Asked Questions</h2>
                                <div className="space-y-6">
                                    {faqs[activeCategory as keyof typeof faqs]?.map((faq, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="border-b border-gray-100 last:border-0 pb-6 last:pb-0"
                                        >
                                            <h3 className="font-medium text-gray-800 mb-2">{faq.question}</h3>
                                            <p className="text-gray-600">{faq.answer}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Support Section */}
                    <div className="max-w-3xl mx-auto text-center bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-12">
                        <h2 className="font-semibold mb-4">Still need help?</h2>
                        <p className="text-gray-600 mb-6">
                            Our support team is available 24/7 to assist you with any questions or issues.
                        </p>
                        <div className="flex justify-center gap-4">
                        <a 
                            href="https://wa.me/6281398517263" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors inline-flex items-center gap-2"
                        >
                            {/* Emoji sebagai ikon */}
                            📱 Contact Support
                        </a>
                            
                        </div>
                    </div>
                </main>
            </div>
        </AppLayout>
    );
}