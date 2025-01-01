"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import AppLayout from "@/app/components/AppLayout";
import { 
  LineChart, 
  BarChart, 
  PieChart, 
  Globe2, 
  Users, 
  Clock, 
  MousePointer, 
  Smartphone, 
  Monitor, 
  ArrowRight 
} from 'lucide-react';

export default function LinkAnalyticsPage() {
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
                    Advanced Link Analytics
                  </h1>
                  <p className="text-gray-600 text-lg mb-8 max-w-2xl">
                    Track your link performance with real-time analytics. Get detailed insights about your audience, their behavior, and engagement patterns.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      href="/signup"
                      className="px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-400 text-white rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all duration-300 text-center"
                    >
                      Get Started Free
                    </Link>
                    <Link
                      href="/demo"
                      className="px-8 py-4 bg-white text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 border border-gray-200 text-center"
                    >
                      View Live Demo
                    </Link>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex-1"
                >
                  <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold">Click Analytics</h3>
                      <select className="text-sm border rounded-lg px-3 py-2">
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                        <option>Last 90 Days</option>
                      </select>
                    </div>
                    {/* Mock Chart */}
                    <div className="h-64 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl flex items-center justify-center">
                      <LineChart className="w-12 h-12 text-purple-400" />
                    </div>
                  </div>
                </motion.div>
              </div>
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
                  Powerful Analytics Features
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Get deep insights into your link performance with our comprehensive analytics tools
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Globe2 className="w-6 h-6 text-purple-600" />,
                    title: "Geographic Data",
                    description: "Track clicks by country, region, and city with detailed maps"
                  },
                  {
                    icon: <Clock className="w-6 h-6 text-purple-600" />,
                    title: "Real-time Analytics",
                    description: "Monitor link performance as it happens with live updates"
                  },
                  {
                    icon: <Users className="w-6 h-6 text-purple-600" />,
                    title: "Audience Insights",
                    description: "Understand your audience with detailed demographic data"
                  },
                  {
                    icon: <Smartphone className="w-6 h-6 text-purple-600" />,
                    title: "Device Analytics",
                    description: "Track visits across desktop, mobile, and tablet devices"
                  },
                  {
                    icon: <LineChart className="w-6 h-6 text-purple-600" />,
                    title: "Trend Analysis",
                    description: "Identify patterns and trends in your link performance"
                  },
                  {
                    icon: <Monitor className="w-6 h-6 text-purple-600" />,
                    title: "Custom Dashboard",
                    description: "Create personalized dashboards with the metrics you need"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-lg flex items-center justify-center mb-4">
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
                  Ready to Unlock Advanced Analytics?
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Start tracking your link performance with our powerful analytics tools.
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