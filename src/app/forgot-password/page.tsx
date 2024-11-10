"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import AppLayout from '../components/AppLayout';

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Handle password reset logic here
        setIsSubmitted(true);
    };

    return (
        <AppLayout>
            <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-white">
                <main className="container mx-auto pt-20 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white rounded-2xl p-8 shadow-xl">
                            {/* Form Section */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="w-full md:w-1/2 max-w-md"
                            >
                                {!isSubmitted ? (
                                    <>
                                        <h1 className="text-3xl font-bold text-purple-600 mb-2">
                                            Forgot Password?
                                        </h1>
                                        <p className="text-gray-600 mb-8">
                                            Don't worry! Enter your email and we'll send you a reset link.
                                        </p>

                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Email
                                                </label>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                                                    placeholder="Enter your email"
                                                    required
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                                            >
                                                Send Reset Link
                                            </button>
                                        </form>
                                    </>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="text-center"
                                    >
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <span className="text-2xl">✓</span>
                                        </div>
                                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                            Check your email
                                        </h2>
                                        <p className="text-gray-600 mb-6">
                                            We've sent a password reset link to<br />
                                            <span className="font-medium text-purple-600">{email}</span>
                                        </p>
                                        <p className="text-sm text-gray-500 mb-4">
                                            "Didn't receive the email? Check your spam folder" 
                                        </p>
                                        <button 
                                            onClick={() => setIsSubmitted(false)}
                                            className="text-purple-600 font-medium hover:text-purple-700"
                                        >
                                            Try another email
                                        </button>
                                    </motion.div>
                                )}

                                <div className="mt-6 text-center">
                                    <Link 
                                        href="/login" 
                                        className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center"
                                    >
                                        <span className="mr-2">←</span>
                                        Back to Login
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Illustration Section */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="w-full md:w-1/2 flex justify-center"
                            >
                                <Image
                                    src="/static/qr-illustration.png"
                                    alt="Reset Password Illustration"
                                    width={400}
                                    height={400}
                                    className="object-contain"
                                />
                            </motion.div>
                        </div>
                    </div>
                </main>
            </div>
        </AppLayout>
    );
}