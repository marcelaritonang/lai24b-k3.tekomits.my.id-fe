// src/app/components/Sidebar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

interface SidebarProps {
    onClose: () => void;
}

export default function Sidebar({ onClose }: SidebarProps) {
    return (
        <>
            {/* Sidebar with reduced width and better colors */}
            <div className="fixed top-0 left-0 h-full w-[240px] bg-gray-900 text-white transform transition-transform duration-300 z-40">
                {/* Exit Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                    aria-label="Close Sidebar"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>

                <div className="h-full flex flex-col pt-14">
                    {/* User Profile Section */}
                    <div className="px-5 mb-6">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-lime-500 rounded-full flex items-center justify-center text-white font-medium">
                                T
                            </div>
                            <div className="ml-3">
                                <h2 className="text-white font-semibold tracking-wide text-sm">RIANCO'S</h2>
                                <p className="text-gray-400 text-xs">WORKSPACE</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-col py-2">
                        {[
                            { name: 'Home', href: '/' },
                            { name: 'History', href: '/history' },
                            { name: 'Settings', href: '/settings' },
                            { name: 'Team', href: '/team' }
                        ].map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="px-5 py-2.5 text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors text-[15px] rounded-lg mx-2"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Logout Button */}
                    <div className="mt-auto pb-4">
                        <div className="px-5 py-3">
                            <div className="border-t border-gray-800" />
                        </div>
                        <Link 
                            href="/logout"
                            className="px-5 py-2.5 text-gray-400 hover:bg-gray-800/50 hover:text-white transition-colors text-[15px] rounded-lg mx-2 flex items-center"
                        >
                            Logout
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}