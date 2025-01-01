"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import AppLayout from "@/app/components/AppLayout";
import { Code, Cpu, ShieldCheck, Book, ArrowRight } from "lucide-react";

export default function DeveloperPage() {
  return (
    <AppLayout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-white">
        <Navbar />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex-1 text-center lg:text-left"
              >
                <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                  Developer Tools & Resources
                </h1>
                <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
                  Build powerful applications with our APIs, SDKs, and tools. Empower developers to innovate with ease.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="/signup"
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-400 text-white rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all duration-300 text-center"
                  >
                    Get Started Free
                  </Link>
                  <Link
                    href="/resources/api-docs"
                    className="px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 border border-gray-200 text-center"
                  >
                    View API Docs
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="px-4 sm:px-6 lg:px-8 py-20 bg-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Why Developers Love Us
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Explore the tools, features, and resources that make our platform the best choice for developers.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: <Code className="w-6 h-6 text-purple-600" />,
                    title: "Powerful APIs",
                    description: "Access robust and scalable APIs to power your apps."
                  },
                  {
                    icon: <Cpu className="w-6 h-6 text-purple-600" />,
                    title: "High Performance",
                    description: "Achieve low latency and high throughput for your applications."
                  },
                  {
                    icon: <ShieldCheck className="w-6 h-6 text-purple-600" />,
                    title: "Secure by Design",
                    description: "Leverage enterprise-grade security for all your integrations."
                  },
                  {
                    icon: <Book className="w-6 h-6 text-purple-600" />,
                    title: "Comprehensive Docs",
                    description: "Explore detailed documentation and examples to get started quickly."
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mb-4">
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
                className="bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-400 rounded-2xl p-12 text-center relative overflow-hidden"
              >
                <h2 className="text-3xl font-bold text-white mb-6">
                  Ready to Build?
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Join thousands of developers building amazing apps with our platform.
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
