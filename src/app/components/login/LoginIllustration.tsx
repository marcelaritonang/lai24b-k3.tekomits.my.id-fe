"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

export const LoginIllustration = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
        >
            <div className="relative h-full min-h-[400px] w-full rounded-xl bg-gradient-to-br from-indigo-50/50 to-purple-50/50 p-6 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    
                    <Image
                        src="/static/qr-illustration.png"
                        alt="Login Illustration"
                        width={300}
                        height={300}
                        className="object-cover relative z-10"
                    />
                </div>
            </div>
        </motion.div>
    );
}