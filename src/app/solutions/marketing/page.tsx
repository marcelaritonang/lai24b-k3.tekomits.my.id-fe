"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import AppLayout from "@/app/components/AppLayout";
import { BarChart3, Users, Globe2, MousePointer, ArrowRight } from "lucide-react";

export default function ForMarketingPage() {
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
                  Boost Your Marketing with Powerful Tools
                </h1>
                <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
                  Drive engagement and improve your campaigns with advanced tracking, insights, and custom solutions tailored for marketers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    href="/signup"
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-400 text-white rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all duration-300 text-center"
                  >
                    Get Started Free
                  </Link>
                  <Link
                    href="/contact"
                    className="px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 border border-gray-200 text-center"
                  >
                    Contact Sales
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
                  Marketing Features That Deliver Results
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Discover how our tools can take your marketing campaigns to the next level.
                </p>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: <MousePointer className="w-6 h-6 text-purple-600" />,
                    title: "Click Tracking",
                    description: "Monitor every interaction with precise click analytics."
                  },
                  {
                    icon: <Users className="w-6 h-6 text-purple-600" />,
                    title: "Audience Insights",
                    description: "Understand your audience demographics and behavior."
                  },
                  {
                    icon: <Globe2 className="w-6 h-6 text-purple-600" />,
                    title: "Global Reach",
                    description: "Engage customers worldwide with scalable solutions."
                  },
                  {
                    icon: <BarChart3 className="w-6 h-6 text-purple-600" />,
                    title: "Campaign Analytics",
                    description: "Analyze and optimize your marketing campaigns effectively."
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
                  Ready to Elevate Your Marketing?
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Join thousands of marketers who trust our platform to drive their campaigns.
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
