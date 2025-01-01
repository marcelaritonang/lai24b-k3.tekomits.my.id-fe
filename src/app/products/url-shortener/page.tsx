"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import Navbar from "@/app/components/Navbar";
import AppLayout from "@/app/components/AppLayout";
import { Link2, Shield, Globe2, BarChart3, ArrowRight } from 'lucide-react';

export default function URLShortenerPage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/signup');
  };

  const handleViewEnterprise = () => {
    router.push('/pricing');
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
                    Transform Your Links into Powerful Insights
                  </h1>
                  <p className="text-gray-600 text-lg mb-8 max-w-2xl">
                    Create short, branded links and track your customer engagement with our advanced URL shortening solution.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link 
                      href="/signup"
                      className="px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-400 text-white rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all duration-300 text-center"
                    >
                      Get Started Free
                    </Link>
                    <Link
                      href="/pricing"
                      className="px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 border border-gray-200 text-center"
                    >
                      View Enterprise Plan
                    </Link>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex-1"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-indigo-100 rounded-3xl transform -rotate-6"></div>
                    <div className="relative bg-white rounded-3xl shadow-lg p-6 transform rotate-3 transition-transform hover:rotate-0 duration-300">
                      <Image
                        src="/static/url-shortener-preview.jpg"
                        alt="URL Shortener Dashboard Preview"
                        width={600}
                        height={400}
                        className="rounded-xl shadow-sm"
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          
          {/* CTA Section */}
          <section className="px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-400 rounded-2xl p-12 text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-10">
                  <Image
                    src="/static/pattern-bg.png"
                    alt="Background Pattern"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="relative z-10">
                  <h2 className="text-3xl font-bold text-white mb-6">
                    Ready to Start Shortening URLs?
                  </h2>
                  <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                    Join thousands of users who trust our platform for their link management needs.
                  </p>
                  <Link
                    href="/signup"
                    className="inline-flex px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold shadow-lg hover:bg-gray-50 transition-all duration-300 items-center gap-2"
                  >
                    Get Started Free
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </AppLayout>
  );
}