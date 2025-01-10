"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import AppLayout from "@/app/components/AppLayout";
import { QrCode, PenTool, Palette, Download, Share2, ArrowRight ,BarChart3} from 'lucide-react';
import { useState } from "react";

export default function QRGeneratorPage() {
  const [qrInput, setQrInput] = useState("");
  const [selectedStyle, setSelectedStyle] = useState("classic");

  const handleGenerateQR = () => {
    // Handle QR generation logic here
    // For now, this will redirect to signup for non-authenticated users
    window.location.href = '/signup';
  };

  return (
    <AppLayout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-white">
        <Navbar />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex-1"
                >
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                    Create Beautiful QR Codes in Seconds
                  </h1>
                  <p className="text-gray-600 text-lg mb-8 max-w-2xl">
                    Generate custom QR codes for your business. Add your brand colors, logo, and create designs that stand out.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/signup"
                      className="px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-400 text-white rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all duration-300 text-center"
                    >
                      Start Creating
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex-1 relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-3xl transform -rotate-6"></div>
                  <div className="relative bg-white rounded-3xl shadow-lg p-6 transform rotate-3 transition-transform hover:rotate-0 duration-300">
                    {/* QR Code Preview Area */}
                    <div className="aspect-square bg-gray-50 rounded-xl flex items-center justify-center">
                      <QrCode className="w-32 h-32 text-purple-400" />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* QR Generator Tool Section */}
          <section className="px-4 sm:px-6 lg:px-8 py-16 from-purple-50 via-indigo-50 to-white">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-purple-50 to-indigo-50 p-8 rounded-2xl shadow-sm"
              >
                <h2 className="text-2xl font-bold text-center mb-6">Create Your QR Code</h2>
                <div className="space-y-6">
                  <div className="flex flex-col gap-4">
                    <input
                      type="text"
                      value={qrInput}
                      onChange={(e) => setQrInput(e.target.value)}
                      placeholder="Enter URL, text, or data for your QR code"
                      className="w-full px-4 py-3 rounded-xl border border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <select
                        value={selectedStyle}
                        onChange={(e) => setSelectedStyle(e.target.value)}
                        className="px-4 py-3 rounded-xl border border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
                      >
                        <option value="classic">Classic Style</option>
                        <option value="rounded">Rounded Style</option>
                        <option value="dotted">Dotted Style</option>
                      </select>
                      <input
                        type="color"
                        className="w-full px-4 py-3 rounded-xl border border-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-400 h-12"
                        defaultValue="#8B5CF6"
                      />
                      <button
                        onClick={handleGenerateQR}
                        className="px-6 py-3 bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-400 text-white rounded-xl font-semibold hover:opacity-90 transition-all duration-300"
                      >
                        Generate QR Code
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Amazing Features
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Create professional QR codes with our powerful features
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <PenTool className="w-6 h-6 text-purple-600" />,
                    title: "Custom Design",
                    description: "Customize your QR codes with colors, logos, and unique patterns"
                  },
                  {
                    icon: <Palette className="w-6 h-6 text-purple-600" />,
                    title: "Brand Colors",
                    description: "Match your QR codes to your brand's color scheme"
                  },
                  {
                    icon: <Download className="w-6 h-6 text-purple-600" />,
                    title: "High Resolution",
                    description: "Download QR codes in high resolution formats"
                  },
                  {
                    icon: <Share2 className="w-6 h-6 text-purple-600" />,
                    title: "Easy Sharing",
                    description: "Share your QR codes directly or download for later use"
                  },
         
                  {
                    icon: <BarChart3 className="w-6 h-6 text-purple-600" />,
                    title: "Scan Analytics",
                    description: "Track scans and analyze QR code performance"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl group hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-400 rounded-2xl p-12 text-center"
              >
                <h2 className="text-3xl font-bold text-white mb-6">
                  Start Creating Your QR Codes Today
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Join thousands of businesses using our QR code generator for their marketing needs.
                </p>
                <Link
                  href="/signup"
                  className="inline-flex px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold shadow-lg hover:bg-gray-50 transition-all duration-300 items-center gap-2"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </AppLayout>
  );
}