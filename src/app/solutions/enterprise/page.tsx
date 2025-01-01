"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import AppLayout from "@/app/components/AppLayout";
import { Briefcase, ShieldCheck, BarChart3, Users, Globe2, Cpu } from "lucide-react";

export default function ForEnterprisePage() {
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
                  Enterprise Solutions
                </h1>
                <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
                  Empower your business with secure, scalable, and customizable link management tools designed for large-scale enterprises. 
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link
                    href="https://wa.me/+6281398517263"
                    className="inline-flex px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold shadow-lg hover:bg-gray-50 transition-all duration-300 items-center gap-2"
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
                  Why Choose Us for Enterprise?
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Explore the benefits of our enterprise solutions tailored to meet your business needs.
                </p>
              </motion.div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Briefcase className="w-6 h-6 text-purple-600" />,
                    title: "Custom Solutions",
                    description: "Get tailor-made tools and services to fit your business requirements."
                  },
                  {
                    icon: <ShieldCheck className="w-6 h-6 text-purple-600" />,
                    title: "Top-notch Security",
                    description: "Enterprise-grade security to keep your data safe and secure."
                  },
                  {
                    icon: <BarChart3 className="w-6 h-6 text-purple-600" />,
                    title: "Advanced Analytics",
                    description: "Access real-time analytics to track and optimize your campaigns."
                  },
                  {
                    icon: <Users className="w-6 h-6 text-purple-600" />,
                    title: "Team Collaboration",
                    description: "Streamline workflows with team-based link management and reporting."
                  },
                  {
                    icon: <Globe2 className="w-6 h-6 text-purple-600" />,
                    title: "Global Scalability",
                    description: "Designed to handle millions of clicks, ensuring seamless performance."
                  },
                  {
                    icon: <Cpu className="w-6 h-6 text-purple-600" />,
                    title: "High Performance",
                    description: "Built for speed, reliability, and efficiency at any scale."
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

          {/* Call to Action Section */}
          <section className="px-4 sm:px-6 lg:px-8 py-20">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-400 rounded-2xl p-12 text-center relative overflow-hidden"
              >
                <h2 className="text-3xl font-bold text-white mb-6">
                  Let’s Scale Your Business Together
                </h2>
                <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                  Join leading enterprises in utilizing our reliable and secure link management platform.
                </p>
                <Link
                  href="https://wa.me/+6281398517263"
                  className="inline-flex px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold shadow-lg hover:bg-gray-50 transition-all duration-300 items-center gap-2"
                >
                  Contact Sales
                </Link>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </AppLayout>
  );
}
