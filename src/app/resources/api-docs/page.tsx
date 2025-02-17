"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import AppLayout from "@/app/components/AppLayout";
import { Code, ShieldCheck, Globe2, Cpu, Book, ArrowRight } from "lucide-react";

export default function ApiAccessPage() {
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
                  Powerful API Access
                </h1>
                <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
                  Integrate with our scalable and secure APIs to manage your links, analytics, and tracking effortlessly.
                  Built for developers, trusted by enterprises.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="/signup"
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-400 text-white rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all duration-300 text-center"
                  >
                    Get API Access
                  </Link>
                  <Link
                    href="/resources/api-docs"
                    className="px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 border border-gray-200 text-center"
                  >
                    View API Docs
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex-1 text-center"
              >
                <h2 className="text-3xl font-semibold text-gray-800">
                  Key Features
                </h2>
                <ul className="mt-6 space-y-4 text-gray-600">
                  <li>✓ RESTful API with intuitive endpoints</li>
                  <li>✓ High security standards with OAuth</li>
                  <li>✓ Comprehensive documentation and examples</li>
                  <li>✓ Real-time analytics and tracking</li>
                  <li>✓ Scalable infrastructure for global access</li>
                </ul>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="px-4 sm:px-6 lg:px-8 py-20 from-purple-50 via-indigo-50 to-white">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Why Choose Our API?
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Explore the features that make our API the most reliable solution for developers and businesses alike.
                </p>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: <Code className="w-6 h-6 text-purple-600" />,
                    title: "Developer Friendly",
                    description: "Clean and simple RESTful API with extensive documentation."
                  },
                  {
                    icon: <ShieldCheck className="w-6 h-6 text-purple-600" />,
                    title: "Enterprise Grade Security",
                    description: "Secure APIs with OAuth and rate-limiting for peace of mind."
                  },
                  {
                    icon: <Globe2 className="w-6 h-6 text-purple-600" />,
                    title: "Global Scalability",
                    description: "Built on a global infrastructure for seamless performance."
                  },
                  {
                    icon: <Cpu className="w-6 h-6 text-purple-600" />,
                    title: "High Performance",
                    description: "Optimized for low latency and high throughput requests."
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
                  Start Building with Our API Today
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Join thousands of developers building amazing apps with our APIs.
                </p>
                <Link
                  href="/signup"
                  className="inline-flex px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold shadow-lg hover:bg-gray-50 transition-all duration-300 items-center gap-2"
                >
                  Get API Access
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
