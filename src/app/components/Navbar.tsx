"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface NavbarProps {
    showSidebarToggle?: boolean;
    onToggleSidebar?: () => void;
    onGetStartedClick?: () => void;
}

export default function Navbar({ showSidebarToggle = false, onToggleSidebar, onGetStartedClick }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const hoverTimeoutRef = useRef<NodeJS.Timeout>();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMouseEnter = (label: string) => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
        }
        setHoveredItem(label);
    };

    const handleMouseLeave = () => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
        }
        
        hoverTimeoutRef.current = setTimeout(() => {
            setHoveredItem(null);
        }, 150);
    };

    type NavItem = 
    | { label: string; href: string; dropdownItems?: never }
    | { label: string; dropdownItems: { name: string; href: string }[]; href?: never };


    const navItems: NavItem[] = [
        {
            label: 'Products',
            dropdownItems: [
                { name: 'URL Shortener', href: '/products/url-shortener' },
                { name: 'QR Generator', href: '/products/qr-generator' },
                { name: 'Link Analytics', href: '/products/link-analytics' },
                { name: 'API Access', href: '/products/api-access' },
            ]
        },
        {
            label: 'Solutions',
            dropdownItems: [
                { name: 'For Enterprise', href: '/solutions/enterprise' },
                { name: 'For Marketing', href: '/solutions/marketing' },
                { name: 'For Social Media', href: '/solutions/social-media' },
                { name: 'For Developers', href: '/solutions/developers' },
            ]
        },
        {
            label: 'Resources',
            dropdownItems: [
                { name: 'Documentation', href: '/resources/documentation' },
                { name: 'Blog', href: '/resources/blog' },
                { name: 'Guide', href: '/resources/guide' },
                { name: 'API Docs', href: '/resources/api-docs' },
            ]
        },
        
    ];
    
    
    
    
    

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Left Side - Logo and Hamburger */}
                    <div className="flex items-center gap-4">
                        {/* Hamburger Button - Always visible */}
                        <button
                            onClick={onToggleSidebar}
                            className="p-2 rounded-lg hover:bg-gray-100"
                        >
                            <div className="w-6 h-6 flex flex-col justify-center gap-1">
                                <span className="block w-6 h-0.5 bg-gray-600"></span>
                                <span className="block w-6 h-0.5 bg-gray-600"></span>
                                <span className="block w-6 h-0.5 bg-gray-600"></span>
                            </div>
                        </button>
                        
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-medium shadow-md">
                                L
                            </div>
                            <span className="text-2xl font-bold text-[#8B5CF6]">
                                Lynxs
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-2">
                    {navItems.map((item, index) => (
                        <div 
                            key={index} 
                            className="relative"
                            onMouseEnter={() => handleMouseEnter(item.label)}
                            onMouseLeave={handleMouseLeave}
                        >
                    <button className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${hoveredItem === item.label ? 'text-[#8B5CF6] bg-purple-50' : 'text-gray-700 hover:text-[#8B5CF6]'}`}>
                        {item.label}
                        {item.dropdownItems && (
                            <span className={`ml-1 text-[10px] transition-transform duration-200 ${hoveredItem === item.label ? 'rotate-180' : ''}`}>
                                ▼
                            </span>
                        )}
                    </button>
            
                    {/* Dropdown Menu */}
                    {item.dropdownItems && hoveredItem === item.label && (
                        <div className="absolute left-0 min-w-[200px] mt-1 bg-white rounded-lg shadow-xl border border-gray-100 z-50">
                            {item.dropdownItems.map((dropdownItem, idx) => (
                                <Link
                                    key={idx}
                                    href={dropdownItem.href}
                                    className="block px-4 py-2.5 text-gray-600 hover:text-[#8B5CF6] hover:bg-purple-50 transition-colors duration-150"
                                >
                                    {dropdownItem.name}
                                </Link>
                                ))}
                                </div>
                                )}
                                {!item.dropdownItems && (
                                    <Link
                                        href={item.href || '#'}
                                        className="px-4 py-2 rounded-lg font-medium text-gray-700 hover:text-[#8B5CF6]"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>


                    {/* Right Side - Auth Buttons */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/login"
                            className="px-4 py-2 text-gray-700 hover:text-[#8B5CF6] font-medium"
                        >
                            Login
                        </Link>
                        <button
                            onClick={onGetStartedClick}
                            className="hidden lg:block px-6 py-2 bg-[#8B5CF6] text-white rounded-lg font-medium shadow-md hover:bg-[#7C3AED] transition-colors"
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}