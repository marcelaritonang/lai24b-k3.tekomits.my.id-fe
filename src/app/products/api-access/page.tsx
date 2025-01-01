"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import AppLayout from "@/app/components/AppLayout";
import { Server, Lock, ShieldCheck, Code, ArrowRight } from "lucide-react";

export default function ApiAccessPage() {
  return (
    <AppLayout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-white">
        <Navbar />
        <main className="pt-20">
          {/* Hero Section */}
          <section className="px-4 sm:px-6 lg:px-8 py-20 ">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-12">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex-1"
                >
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                    API Access
                  </h1>
                  <p className="text-gray-600 text-lg mb-8 max-w-2xl">
                    Integrate with our robust API to enhance your application’s functionality.
                    Secure, scalable, and designed for developers.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
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
              </div>
            </div>
          </section>
        </main>
      </div>
    </AppLayout>
  );
}
