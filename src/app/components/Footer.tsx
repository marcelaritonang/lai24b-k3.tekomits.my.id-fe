"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-xl bg-purple-600 flex items-center justify-center text-white font-bold text-xl">
                                L
                            </div>
                            <span className="text-2xl font-bold text-purple-600">Lynx</span>
                        </div>
                        <p className="text-gray-500">
                            Transform your links into powerful insights with our advanced URL shortening solution.
                        </p>
                        <div className="flex space-x-4">
                            
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-gray-500 hover:text-purple-600 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-gray-500 hover:text-purple-600 transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/pricing" className="text-gray-500 hover:text-purple-600 transition-colors">
                                    Pricing
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-gray-500 hover:text-purple-600 transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-4">Products</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/url-shortener" className="text-gray-500 hover:text-purple-600 transition-colors">
                                    URL Shortener
                                </Link>
                            </li>
                            <li>
                                <Link href="/qr-generator" className="text-gray-500 hover:text-purple-600 transition-colors">
                                    QR Generator
                                </Link>
                            </li>
                            <li>
                                <Link href="/analytics" className="text-gray-500 hover:text-purple-600 transition-colors">
                                    Link Analytics
                                </Link>
                            </li>
                            <li>
                                <Link href="/api" className="text-gray-500 hover:text-purple-600 transition-colors">
                                    API Access
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-4">Stay Updated</h3>
                        <p className="text-gray-500 mb-4">Subscribe to our newsletter for the latest updates.</p>
                        <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            />
                            <button 
                                type="submit"
                                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-shadow"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-100">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-500">© 2024 Lynx. All rights reserved.</p>
                        <div className="flex gap-6">
                            <Link href="/privacy" className="text-gray-500 hover:text-purple-600 transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-gray-500 hover:text-purple-600 transition-colors">
                                Terms of Service
                            </Link>
                            <Link href="/cookies" className="text-gray-500 hover:text-purple-600 transition-colors">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}