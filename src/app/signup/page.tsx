"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
        
        // Validate password
        const passwordError = validatePassword(formData.password);
        if (passwordError) {
            setErrors({ ...errors, password: passwordError });
            return;
        }
    
        try {
            console.log('Sending register request...'); // Debug
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/v1/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                    first_name: formData.fullName.split(' ')[0], // Perhatikan snake_case
                    last_name: formData.fullName.split(' ').slice(1).join(' ')
                })
            });
    
            const data = await response.json();
            console.log('Response:', data); // Debug
    
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
        } catch (error: any) {
            console.error('Sign up error:', error);
            setErrors({
                ...errors,
                email: 'Network error. Please try again.'
            });
        }
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
                                            Welcome to Lynxs!
                                        </h1>
                                        <p className="text-gray-600 mb-8">
                                            Please enter your details to create an account
                                        </p>

                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div>
                                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Full Name
                                                </label>
                                                <input
                                                    id="fullName"
                                                    type="text"
                                                    value={formData.fullName}
                                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                                                    placeholder="Enter your full name"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Email
                                                </label>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                                                    placeholder="Enter your email"
                                                    required
                                                />
                                                {errors.email && (
                                                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                                                )}
                                            </div>

                                            <div>
                                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Password
                                                </label>
                                                <input
                                                    id="password"
                                                    type="password"
                                                    value={formData.password}
                                                    onChange={handlePasswordChange}
                                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                                                    placeholder="Create a password"
                                                    required
                                                />
                                                {errors.password && (
                                                    <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                                                )}
                                                <div className="mt-2 space-y-1">
                                                    <p className="text-xs text-gray-500">Password must contain:</p>
                                                    <ul className="text-xs text-gray-500 space-y-1 list-disc pl-4">
                                                        <li>At least 8 characters</li>
                                                        <li>One uppercase letter</li>
                                                        <li>One lowercase letter</li>
                                                        <li>One number</li>
                                                        <li>One special character (!@#$%^&*)</li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <button
                                                type="submit"
                                                className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors"
                                            >
                                                Sign Up
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

                                <p className="mt-6 text-center text-gray-600">
                                    Already have an account?
                                    <Link href="/login" className="text-purple-600 hover:text-purple-700 font-medium">
                                        Sign in
                                    </Link>
                                </p>
                            </motion.div>

                            {/* Illustration Section */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="w-full md:w-1/2 flex justify-center"
                            >
                                <Image
                                    src="/static/qr3.jpg"
                                    alt="Sign Up Illustration"
                                    width={400}
                                    height={400}
                                    className="object-contain"
                                    unoptimized
                                />
                            </motion.div>
                        </div>
                    </div>
                </main>
            </div>
        </AppLayout>
    );
}