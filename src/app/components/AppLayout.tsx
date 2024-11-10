"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface AppLayoutProps {
    children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    // Hanya render konten setelah component di-mount di client
    if (!mounted) {
        return null; // atau loading spinner
    }

    return (
        <div className="min-h-screen relative">
            <Navbar 
                showSidebarToggle={true}
                onToggleSidebar={toggleSidebar}
            />

            <AnimatePresence>
                {sidebarOpen && (
                    <Sidebar onClose={toggleSidebar} />
                )}
            </AnimatePresence>

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