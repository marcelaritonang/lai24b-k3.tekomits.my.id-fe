"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Mail, Lock, User } from 'lucide-react';
import AppLayout from '../components/AppLayout';

export default function SignUpPage() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState({
        password: '',
        email: ''
    });

    // Password validation function
    const validatePassword = (password: string) => {
        const minLength = 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (password.length < minLength) {
            return 'Password must be at least 8 characters long';
        }
        if (!hasUpperCase) {
            return 'Password must contain at least one uppercase letter';
        }
        if (!hasLowerCase) {
            return 'Password must contain at least one lowercase letter';
        }
        if (!hasNumbers) {
            return 'Password must contain at least one number';
        }
        if (!hasSpecialChar) {
            return 'Password must contain at least one special character';
        }
        return '';
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const password = e.target.value;
        setFormData({ ...formData, password });
        setErrors({ ...errors, password: validatePassword(password) });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const passwordError = validatePassword(formData.password);
        if (passwordError) {
            setErrors({ ...errors, password: passwordError });
            return;
        }
    
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                    first_name: formData.fullName.split(' ')[0],
                    last_name: formData.fullName.split(' ').slice(1).join(' ')
                })
            });
    
            const data = await response.json();
    
            if (response.ok) {
                setIsSubmitted(true);
                setTimeout(() => {
                    router.push('/login');
                }, 3000);
            } else {
                setErrors({
                    ...errors,
                    email: data.message || 'Failed to register. Please try again.'
                });
            }
        } catch (error) {
            setErrors({
                ...errors,
                email: 'Network error. Please try again.'
            });
        }
    };

    return (
        <AppLayout>
            <main className="min-h-screen grid md:grid-cols-2 gap-0">
                {/* Illustration Section */}
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
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-center mb-8"
                            >
                                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-4">
                                    Join LYNX Today
                                </h2>
                                <p className="text-gray-600">Start Managing Your Links Like a Pro</p>
                            </motion.div>

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
                                        alt="Features Preview"
                                        width={400}
                                        height={400}
                                        className="rounded-xl shadow-sm"
                                    />
                                </div>
                            </motion.div>

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
                                        <p className="text-sm text-gray-600">Fast Setup</p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-12 h-12 mx-auto bg-gradient-to-r from-purple-100 to-indigo-100 rounded-full flex items-center justify-center mb-2">
                                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                            </svg>
                                        </div>
                                        <p className="text-sm text-gray-600">Secure</p>
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

                {/* Form Section */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full max-w-md mx-auto p-8"
                >
                    {!isSubmitted ? (
                        <>
                            <div className="text-center mb-8">
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Your Account</h1>
                                <p className="text-gray-600">Join thousands of users managing their links with LYNX</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                            <input
                                                type="text"
                                                value={formData.fullName}
                                                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                                                placeholder="Enter your full name"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                                                placeholder="Enter your email"
                                                required
                                            />
                                        </div>
                                        {errors.email && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="mt-2 text-sm text-red-500"
                                            >
                                                {errors.email}
                                            </motion.p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                            <input
                                                type="password"
                                                value={formData.password}
                                                onChange={handlePasswordChange}
                                                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                                                placeholder="Create a password"
                                                required
                                            />
                                        </div>
                                        {errors.password && (
                                            <motion.p
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="mt-2 text-sm text-red-500"
                                            >
                                                {errors.password}
                                            </motion.p>
                                        )}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            className="mt-3 p-4 bg-gray-50 rounded-lg"
                                        >
                                            <p className="text-xs font-medium text-gray-600 mb-2">Password must contain:</p>
                                            <ul className="text-xs text-gray-500 space-y-1 list-disc pl-4">
                                            <li>One uppercase letter</li>
                                                <li>One lowercase letter</li>
                                                <li>One number</li>
                                                <li>One special character (!@#$%^&*)</li>
                                            </ul>
                                        </motion.div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-400 text-white py-3 rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all duration-300"
                                >
                                    Create Account
                                </button>

                                <p className="text-center text-gray-600">
                                    Already have an account?{' '}
                                    <Link href="/login" className="text-purple-600 hover:text-purple-800 font-medium">
                                        Sign in
                                    </Link>
                                </p>
                            </form>
                        </>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="text-center bg-white p-8 rounded-2xl shadow-lg"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                            >
                                <svg
                                    className="w-8 h-8 text-green-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </motion.div>
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                Verify your email
                            </h2>
                            <p className="text-gray-600 mb-6">
                                We've sent a verification email to<br />
                                <span className="font-medium text-purple-600">{formData.email}</span>
                            </p>
                            <p className="text-sm text-gray-500">
                                Please check your email and verify your account.<br />
                                Redirecting to login page...
                            </p>
                        </motion.div>
                    )}
                </motion.div>
            </main>
        </AppLayout>
    );
}