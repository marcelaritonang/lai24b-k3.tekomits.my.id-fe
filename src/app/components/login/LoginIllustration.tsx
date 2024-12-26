"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Lock, ExternalLink } from 'lucide-react';
import { FormEvent } from 'react';

interface LoginFormProps {
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
    error: string | null;
    loading: boolean;
}

export const LoginIllustration: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block relative h-full min-h-[600px] w-full"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-indigo-50 to-white rounded-2xl overflow-hidden">
                {/* Animated background elements */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                >
                    <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-purple-200/50 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
                    <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-indigo-200/50 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-72 h-72 bg-pink-200/50 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
                </motion.div>

                {/* Content Container */}
                <div className="relative h-full flex flex-col items-center justify-center p-8 z-10">
                    {/* Welcome Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-center mb-8"
                    >
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-4">
                            Welcome to LYNX
                        </h2>
                        <p className="text-gray-600">Your Ultimate Link Management Solution</p>
                    </motion.div>

                    {/* Main Illustration */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="relative w-full max-w-md aspect-square"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-3xl transform -rotate-6"></div>
                        <div className="relative bg-white rounded-3xl shadow-lg p-6 transform rotate-3 transition-transform hover:rotate-0 duration-300">
                            <Image
                                src="/static/qr3.jpg"
                                alt="Dashboard Preview"
                                width={400}
                                height={400}
                                className="rounded-xl shadow-sm"
                            />
                        </div>
                    </motion.div>

                    {/* Features List */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="mt-8 text-center"
                    >
                        <div className="flex gap-8 justify-center">
                            <div className="text-center">
                                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full flex items-center justify-center mb-2">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <p className="text-sm text-gray-600">Fast & Reliable</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full flex items-center justify-center mb-2">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <p className="text-sm text-gray-600">Secure Links</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 mx-auto bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full flex items-center justify-center mb-2">
                                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                </div>
                                <p className="text-sm text-gray-600">Analytics</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export const LoginForm: React.FC<LoginFormProps> = ({
    email,
    setEmail,
    password,
    setPassword,
    handleSubmit,
    error,
    loading
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md mx-auto p-8"
        >
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Login to Your Account</h1>
                <p className="text-gray-600">Welcome back! Please enter your details</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                                placeholder="Enter your email"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                                placeholder="Enter your password"
                                required
                            />
                        </div>
                    </div>
                </div>

                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-red-50 rounded-lg"
                    >
                        <p className="text-sm text-red-600">{error}</p>
                    </motion.div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-400 text-white py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all duration-300 disabled:opacity-50 flex items-center justify-center"
                >
                    {loading ? (
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                        'Sign In'
                    )}
                </button>

                <div className="text-center">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{' '}
                        <a href="/register" className="text-purple-600 hover:text-purple-800 font-medium">
                            Sign up
                        </a>
                    </p>
                </div>
            </form>
        </motion.div>
    );
};