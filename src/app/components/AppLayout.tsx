"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface AppLayoutProps {
    children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="min-h-screen relative">
            {/* Navbar */}
            <Navbar 
                showSidebarToggle={true}
                onToggleSidebar={toggleSidebar}
            />

            {/* Sidebar with animation */}
            <AnimatePresence>
                {sidebarOpen && (
                    <Sidebar onClose={toggleSidebar} />
                )}
            </AnimatePresence>

            {/* Main content with sidebar margin transition */}
            <motion.div
                animate={{
                    marginLeft: sidebarOpen ? "240px" : "0"
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="min-h-screen"
            >
                {children}
            </motion.div>
        </div>
    );
}