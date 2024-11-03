// src/app/components/Navbar.tsx

import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <header className="w-full bg-white shadow-md p-4 flex justify-between items-center px-8">
            <Link href="/" className="text-3xl font-bold text-gray-800">
                Lynx
            </Link>
            <nav className="flex gap-8">
                <Link href="/" className="text-gray-600 hover:text-lime-500">
                    Home
                </Link>
                <Link href="/features" className="text-gray-600 hover:text-lime-500">
                    Features
                </Link>
                <Link href="/pricing" className="text-gray-600 hover:text-lime-500">
                    Pricing
                </Link>
                <Link href="/login" className="text-gray-600 hover:text-lime-500">
                    Login
                </Link>
            </nav>
        </header>
    );
};

export default Navbar;
