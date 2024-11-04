"use client";

import './styles/globals.css';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Sidebar from './components/Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <html lang="en">
            <body className="flex min-h-screen bg-white overflow-x-hidden">
                {/* Toggle button - hanya muncul saat sidebar tertutup */}
                {!sidebarOpen && (
                    <button
                        onClick={toggleSidebar}
                        className="fixed top-6 left-4 z-50 hover:opacity-80 transition-opacity"
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

                {/* Sidebar with animation */}
                <AnimatePresence>
                    {sidebarOpen && (
                        <Sidebar onClose={toggleSidebar} />
                    )}
                </AnimatePresence>

                {/* Main content area */}
                <motion.main
                    className="w-full"
                    animate={{
                        marginLeft: sidebarOpen ? "280px" : "0",
                        paddingLeft: "0",
                        paddingRight: "0"
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                    {children}
                </motion.main>
            </body>
        </html>
    );
};

export default Layout;