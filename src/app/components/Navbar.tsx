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
    const dropdownRef = useRef<HTMLDivElement>(null);

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

    const handleDropdownMouseEnter = () => {
        if (hoverTimeoutRef.current) {
            clearTimeout(hoverTimeoutRef.current);
        }
    };

    const handleDropdownMouseLeave = () => {
        setHoveredItem(null);
    };

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
            dropdownItems: ['Documentation', 'Blog', 'Guide', 'API Docs']
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
                                <button className={`
                                    px-4 py-2 rounded-lg font-medium 
                                    transition-all duration-200
                                    ${hoveredItem === item.label ? 'text-[#8B5CF6] bg-purple-50' : 'text-gray-700 hover:text-[#8B5CF6]'}
                                    flex items-center gap-1
                                    ${item.label === 'Resources' ? 'group' : ''}
                                `}>
                                    {item.label}
                                    {item.dropdownItems && (
                                        <span className={`
                                            ml-1 text-[10px]
                                            transition-transform duration-200
                                            ${hoveredItem === item.label ? 'rotate-180 text-[#8B5CF6]' : ''}
                                            ${item.label === 'Resources' ? 'group-hover:text-[#8B5CF6]' : ''}
                                        `}>
                                            ▼
                                        </span>
                                    )}
                                </button>
                                
                                {/* Dropdown Menu */}
                                {item.dropdownItems && hoveredItem === item.label && (
                                    <div
                                        ref={dropdownRef}
                                        onMouseEnter={handleDropdownMouseEnter}
                                        onMouseLeave={handleDropdownMouseLeave}
                                        className={`
                                            absolute left-0 min-w-[200px]
                                            bg-white rounded-lg shadow-xl border border-gray-100
                                            transform transition-all duration-200 ease-out
                                            ${hoveredItem === item.label ? 'opacity-100 translate-y-1' : 'opacity-0 translate-y-0 pointer-events-none'}
                                        `}
                                        style={{
                                            marginTop: '0.5rem',
                                            zIndex: 1000
                                        }}
                                    >
                                        {item.dropdownItems.map((dropdownItem, idx) => (
                                            <a
                                                key={idx}
                                                href="#"
                                                className={`
                                                    block px-4 py-2.5
                                                    text-gray-600 hover:text-[#8B5CF6] hover:bg-purple-50
                                                    transition-colors duration-150 text-sm font-medium
                                                    ${idx === 0 ? 'rounded-t-lg' : ''}
                                                    ${idx === item.dropdownItems.length - 1 ? 'rounded-b-lg' : ''}
                                                `}
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
                            className="px-4 py-2 text-gray-700 hover:text-[#8B5CF6] font-medium"
                        >
                            Login
                        </Link>
                        <button
                            onClick={onGetStartedClick}
                            className="px-6 py-2 bg-[#8B5CF6] text-white rounded-lg font-medium shadow-md hover:bg-[#7C3AED] transition-colors"
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