"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fetchLinkHistory, LinkHistory } from "../../services/historyService";
import Navbar from "../components/Navbar";

export default function HistoryPage() {
    const [linkHistory, setLinkHistory] = useState<LinkHistory[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("all");

    useEffect(() => {
        async function loadLinkHistory() {
            const historyData = await fetchLinkHistory();
            setLinkHistory(historyData);
        }

        loadLinkHistory();
    }, []);

    const filteredHistory = linkHistory.filter(link => {
        const matchesSearch = link.originalLink.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            link.shortLink.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStatus = filterStatus === "all" || link.status.toLowerCase() === filterStatus.toLowerCase();
        return matchesSearch && matchesStatus;
    });

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-white">
            <Navbar showSidebarToggle={true} />
            
            <main className="container mx-auto px-4 pt-24 pb-12">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                        Link History & Analytics
                    </h1>
                    <p className="text-gray-600 text-lg">
                        Track and manage all your shortened URLs in one place
                    </p>
                </motion.div>

                {/* Search and Filter Section */}
                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* Search Bar */}
                        <div className="relative flex-grow max-w-2xl">
                            <input
                                type="text"
                                placeholder="Search links..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full px-4 py-3 pl-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                🔍
                            </span>
                        </div>

                        {/* Filter Buttons */}
                        <div className="flex gap-2">
                            <button
                                onClick={() => setFilterStatus("all")}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                    filterStatus === "all"
                                        ? "bg-purple-600 text-white"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                            >
                                All
                            </button>
                            <button
                                onClick={() => setFilterStatus("active")}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                    filterStatus === "active"
                                        ? "bg-purple-600 text-white"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                            >
                                Active
                            </button>
                            <button
                                onClick={() => setFilterStatus("inactive")}
                                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                                    filterStatus === "inactive"
                                        ? "bg-purple-600 text-white"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                }`}
                            >
                                Inactive
                            </button>
                        </div>
                    </div>
                </div>

                {/* Links Table */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50 text-gray-600">
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Short Link</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Original URL</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">QR Code</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Analytics</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Status</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Created</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {filteredHistory.map((link, index) => (
                                    <motion.tr
                                        key={link.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="hover:bg-gray-50 transition-colors"
                                    >
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <a 
                                                    href={link.shortLink} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="text-purple-600 hover:text-purple-700"
                                                >
                                                    {link.shortLink}
                                                </a>
                                                <button
                                                    onClick={() => navigator.clipboard.writeText(link.shortLink)}
                                                    className="p-1 hover:bg-gray-100 rounded transition-colors"
                                                    title="Copy to clipboard"
                                                >
                                                    📋
                                                </button>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2 max-w-xs">
                                                <Image
                                                    src="/static/globe.svg"
                                                    alt="Website Icon"
                                                    width={20}
                                                    height={20}
                                                    className="rounded"
                                                />
                                                <span className="truncate text-gray-600" title={link.originalLink}>
                                                    {link.originalLink}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="p-2 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                                                <Image 
                                                    src={link.qrCode} 
                                                    alt="QR Code" 
                                                    width={24} 
                                                    height={24}
                                                />
                                            </button>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <span className="text-gray-600 font-medium">2.5k</span>
                                                <div className="w-20 bg-gray-200 rounded-full h-2">
                                                    <div 
                                                        className="bg-purple-600 h-2 rounded-full"
                                                        style={{ width: '70%' }}
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                link.status === "Active"
                                                    ? "bg-green-100 text-green-700"
                                                    : "bg-yellow-100 text-yellow-700"
                                            }`}>
                                                {link.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-gray-500 text-sm">
                                            {link.date}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                    title="Edit"
                                                >
                                                    ✏️
                                                </button>
                                                <button
                                                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                    title="Delete"
                                                >
                                                    🗑️
                                                </button>
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-between px-6 py-4 bg-gray-50">
                        <button className="px-4 py-2 text-gray-600 hover:text-gray-900">Previous</button>
                        <div className="flex items-center gap-2">
                            <button className="w-8 h-8 rounded-lg bg-purple-600 text-white">1</button>
                            <button className="w-8 h-8 rounded-lg text-gray-600 hover:bg-gray-100">2</button>
                            <button className="w-8 h-8 rounded-lg text-gray-600 hover:bg-gray-100">3</button>
                        </div>
                        <button className="px-4 py-2 text-gray-600 hover:text-gray-900">Next</button>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}