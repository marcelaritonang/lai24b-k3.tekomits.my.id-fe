"use client";

import React, { useState, useEffect } from 'react';

import Link from 'next/link';

interface NavbarProps {
    showSidebarToggle?: boolean;
    onToggleSidebar?: () => void;
    onGetStartedClick?: () => void;
}

export default function Navbar({ showSidebarToggle = false, onToggleSidebar, onGetStartedClick }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        {
            label: 'Products',
            dropdownItems: ['URL Shortener', 'QR Generator', 'Link Analytics', 'API Access']
        },
        {
            label: 'Solutions',
            dropdownItems: ['For Enterprise', 'For Marketing', 'For Social Media', 'For Developers']
        },
        { label: 'Pricing' },
        { 
            label: 'Resources',
            dropdownItems: ['Documentation', 'Blog', 'Support', 'API Docs']
        }
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo and Left Side */}
                    <div className="flex items-center gap-8">
                        {showSidebarToggle && (
                            <button
                                onClick={onToggleSidebar}
                                className="p-2 rounded-lg hover:bg-gray-100"
                            >
                                <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
                                <span className="block w-6 h-0.5 bg-gray-600 mb-1"></span>
                                <span className="block w-6 h-0.5 bg-gray-600"></span>
                            </button>
                        )}
                        
                        <Link href="/" className="flex items-center gap-2">
                             <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-medium shadow-md">
                                L
                            </div>
                            <span className="text-2xl font-bold text-purple-600">
                                Lynx
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-2">
                        {navItems.map((item, index) => (
                            <div key={index} className="relative group">
                                <button
                                    className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium flex items-center gap-1 rounded-lg hover:bg-gray-50"
                                    onMouseEnter={() => setActiveDropdown(item.label)}
                                    onMouseLeave={() => setActiveDropdown(null)}
                                >
                                    {item.label}
                                    {item.dropdownItems && (
                                        <span className="ml-1">▼</span>
                                    )}
                                </button>
                                
                                {/* Dropdown Menu */}
                                {item.dropdownItems && activeDropdown === item.label && (
                                    <div
                                        className="absolute top-full left-0 w-48 py-2 mt-1 bg-white rounded-xl shadow-xl border border-gray-100"
                                        onMouseEnter={() => setActiveDropdown(item.label)}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        {item.dropdownItems.map((dropdownItem, idx) => (
                                            <a
                                                key={idx}
                                                href="#"
                                                className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-purple-50"
                                            >
                                                {dropdownItem}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Side Buttons */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link
                            href="/login"
                            className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium"
                        >
                            Login
                        </Link>
                        <button
                            onClick={onGetStartedClick}
                            className="px-6 py-2 bg-purple-600 text-white rounded-lg font-medium shadow-md hover:bg-purple-700 transition-colors"
                        >
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center gap-1">
                            <span className="block w-6 h-0.5 bg-gray-600"></span>
                            <span className="block w-6 h-0.5 bg-gray-600"></span>
                            <span className="block w-6 h-0.5 bg-gray-600"></span>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    );
}