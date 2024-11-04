import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
    onToggleSidebar?: () => void;
    showSidebarToggle?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar, showSidebarToggle = true }) => {
    return (
        <header className="w-full bg-white shadow-md p-4 flex justify-between items-center">
            <div className="flex items-center gap-4">
                {showSidebarToggle && (
                    <button
                        onClick={onToggleSidebar}
                        className="hover:opacity-80 transition-opacity"
                        aria-label="Toggle Sidebar"
                    >
                        <Image 
                            src="/static/sidebar.svg"
                            alt="Menu icon"
                            width={24}
                            height={24}
                        />
                    </button>
                )}
                <Link href="/" className="text-3xl font-bold text-gray-800 ml-4">
                    Lynx
                </Link>
            </div>

            <nav className="flex gap-8 items-center">
                <Link href="/" className="text-gray-600 hover:text-lime-500">
                    Home
                </Link>
                <Link href="/features" className="text-gray-600 hover:text-lime-500">
                    Features
                </Link>
                <Link href="/pricing" className="text-gray-600 hover:text-lime-500">
                    Pricing
                </Link>
                <Link 
                    href="/login" 
                    className="text-gray-600 hover:text-lime-500 border border-transparent hover:border-lime-500 px-4 py-2 rounded-md transition-colors"
                >
                    Login
                </Link>
                <Link 
                    href="/get-started" 
                    className="bg-lime-500 text-white px-4 py-2 rounded-md hover:bg-lime-600 transition-colors"
                >
                    Get Started
                </Link>
            </nav>
        </header>
    );
};

export default Navbar;