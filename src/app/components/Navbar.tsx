"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface NavbarProps {
    showSidebarToggle?: boolean;
    onToggleSidebar?: () => void;
    onGetStartedClick?: () => void;
}

export default function Navbar({ showSidebarToggle = false, onToggleSidebar, onGetStartedClick }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const router = useRouter();

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
            {/* Navbar content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center text-white font-bold text-xl">
                            L
                        </div>
                        <span className="text-2xl font-bold text-purple-600">Lynx</span>
                    </Link>

                    {/* Navigation Items */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={() => router.push('/login')}
                            className="px-4 py-2 text-gray-600 hover:text-gray-900 font-medium"
                        >
                            Login
                        </button>
                        <button
                            onClick={onGetStartedClick}
                            className="px-6 py-2 bg-purple-600 text-white rounded-lg font-medium shadow-md hover:bg-purple-700 transition-colors"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}