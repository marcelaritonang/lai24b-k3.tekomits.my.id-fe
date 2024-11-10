"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import AppLayout from '../components/AppLayout';
export default function DashboardPage() {
    const [period, setPeriod] = useState('7d'); // '24h', '7d', '30d', 'all'

    // Dummy data - replace with real data
    const recentLinks = [
        {
            id: 1,
            originalUrl: 'https://verylongurl.com/example/path/to/something',
            shortUrl: 'lynx.sh/ab123',
            clicks: 145,
            created: '2 hours ago',
            status: 'active'
        },
        // Add more dummy data
    ];

    return (
        <AppLayout>
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-white">
            <Navbar showSidebarToggle={true} />
            
            <main className="pt-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header Section */}
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                        <p className="text-gray-600">Welcome back, Rianco!</p>
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                            <h2 className="text-lg font-semibold mb-4">Create New Link</h2>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Paste your URL here..."
                                    className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                />
                                <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                                    Shorten
                                </button>
                            </div>
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                            <h2 className="text-lg font-semibold mb-4">Generate QR Code</h2>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="Enter URL or text..."
                                    className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                                />
                                <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                                    Generate
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Stats Overview */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-6 bg-white rounded-xl shadow-sm border border-gray-100"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-gray-500">Total Links</h3>
                                <span className="text-green-500 text-sm">↑12%</span>
                            </div>
                            <p className="text-3xl font-bold text-gray-800">1,234</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="p-6 bg-white rounded-xl shadow-sm border border-gray-100"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-gray-500">Total Clicks</h3>
                                <span className="text-green-500 text-sm">↑8%</span>
                            </div>
                            <p className="text-3xl font-bold text-gray-800">5,678</p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="p-6 bg-white rounded-xl shadow-sm border border-gray-100"
        >
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-gray-500">Active QR Codes</h3>
                                <span className="text-green-500 text-sm">↑15%</span>
                            </div>
                                <p className="text-3xl font-bold text-gray-800">123</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="p-6 bg-white rounded-xl shadow-sm border border-gray-100"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-gray-500">Avg. CTR</h3>
                                    <span className="text-red-500 text-sm">↓3%</span>
                                </div>
                                <p className="text-3xl font-bold text-gray-800">123</p>
                        </motion.div>
                    </div>

                    {/* Recent Links Table */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
                        <div className="p-6 border-b border-gray-100">
                            <h2 className="text-lg font-semibold">Recent Links</h2>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Original URL</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Short Link</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clicks</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {recentLinks.map((link) => (
                                        <tr key={link.id} className="hover:bg-gray-50">
                                            <td className="px-6 py-4 text-sm text-gray-500 truncate max-w-xs">
                                                {link.originalUrl}
                                            </td>
                                            <td className="px-6 py-4">
                                                <a href="#" className="text-purple-600 hover:text-purple-900 text-sm">
                                                    {link.shortUrl}
                                                </a>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                {link.clicks}
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                {link.created}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                                    {link.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    <button className="text-gray-400 hover:text-purple-600">
                                                        📋
                                                    </button>
                                                    <button className="text-gray-400 hover:text-purple-600">
                                                        📊
                                                    </button>
                                                    <button className="text-gray-400 hover:text-purple-600">
                                                        ⚙️
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Bottom Section - could include charts or additional stats */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                            <h2 className="text-lg font-semibold mb-4">Top Performing Links</h2>
                            {/* Add chart or list here */}
                        </div>
                        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                            <h2 className="text-lg font-semibold mb-4">Traffic Sources</h2>
                            {/* Add chart or list here */}
                        </div>
                    </div>
                </div>
            </main>
        </div>
        </AppLayout>
    );
}