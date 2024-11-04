    // src/app/login/page.tsx
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle login logic here
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-lime-50 to-white flex items-center justify-center p-4">
            <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center bg-white rounded-2xl p-8 shadow-xl">
                {/* Left Section - Form */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-6"
                >
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl font-bold text-gray-800">Welcome Back!</h1>
                        <p className="text-gray-500 mt-2">Please enter your details to sign in</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none transition"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Password
                            </label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-lime-500 focus:border-transparent outline-none transition"
                                placeholder="Enter your password"
                                required
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="h-4 w-4 text-lime-500 focus:ring-lime-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                                    Remember me
                                </label>
                            </div>
                            <Link href="/forgot-password" className="text-sm text-lime-600 hover:text-lime-700">
                                Forgot password?
                            </Link>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            type="submit"
                            className="w-full bg-lime-500 text-white py-2 rounded-lg hover:bg-lime-600 transition duration-200"
                        >
                            Sign In
                        </motion.button>
                    </form>

                    <p className="text-center text-sm text-gray-600">
                        Don't have an account?{' '}
                        <Link href="/signup" className="text-lime-600 hover:text-lime-700 font-medium">
                            Sign up for free
                        </Link>
                    </p>
                </motion.div>

                {/* Right Section - Illustration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="hidden md:block"
                >
                    <div className="relative h-full min-h-[400px] w-full rounded-xl bg-lime-50 p-6">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Image
                                src="/static/qr-illustration.png"
                                alt="Login Illustration"
                                width={400}
                                height={400}
                                className="object-cover"
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}