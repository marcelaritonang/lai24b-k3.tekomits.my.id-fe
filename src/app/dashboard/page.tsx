"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link2, Loader2, ExternalLink, Trash2 } from "lucide-react";
import AppLayout from "../components/AppLayout";
import Navbar from "../components/Navbar";

interface Url {
  id: string;
  long_url: string;
  short_url: string;
  clicks: number;
  created_at: string;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, '');

export default function DashboardPage() {
  const [urls, setUrls] = useState<Url[]>([]);
  const [inputUrl, setInputUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [totalLinks, setTotalLinks] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    } else {
      fetchUrls(token);
    }
  }, []);

  const fetchUrls = async (token: string) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(`${BASE_URL}/v1/api/urls?page=1&per_page=10`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || "Failed to fetch URLs");
        return;
      }

      const data = await response.json();
      if (data.data && Array.isArray(data.data)) {
        const urls = data.data.map((item: any) => item.url);
        setUrls(urls);
        setTotalLinks(data.meta?.total || 0);
      }
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Function to handle click tracking
const handleLinkClick = async (urlId: string) => {
  try {
    const token = localStorage.getItem("token");
    // Send request to track click
    await fetch(`${BASE_URL}/v1/api/urls/${urlId}/click`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    
    // Update local state to reflect new click count
    setUrls(prevUrls =>
      prevUrls.map(url =>
        url.id === urlId
          ? { ...url, clicks: (url.clicks || 0) + 1 }
          : url
      )
    );
  } catch (error) {
    console.error("Error tracking click:", error);
  }
};

const handleShorten = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        window.location.href = "/login";
        return;
      }

      const response = await fetch(`${BASE_URL}/v1/api/urls`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ long_url: inputUrl }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || "Failed to create short URL");
        return;
      }

      const data = await response.json();
      setUrls((prevUrls) => [data.data, ...prevUrls]);
      setInputUrl("");
      setSuccessMessage("Short URL created successfully!");
      setTotalLinks((prevTotal) => prevTotal + 1);
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!id) {
      setError("Invalid ID for deletion.");
      return;
    }
    setLoading(true);
    setError("");
    setSuccessMessage("");

    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`${BASE_URL}/v1/api/urls/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || "Failed to delete URL");
        return;
      }

      setUrls((prevUrls) => prevUrls.filter((url) => url.id !== id));
      setTotalLinks((prevTotal) => prevTotal - 1);
      setSuccessMessage("URL deleted successfully!");
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppLayout>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-white">
        <Navbar/>

        <main className="pt-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Dashboard
              </h1>
              <p className="text-gray-600 text-lg mt-2">Welcome back, Rianco!</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-8 bg-white rounded-xl shadow-sm border border-purple-100"
              >
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Create New Link</h2>
                <form onSubmit={handleShorten} className="space-y-4">
                  <div className="relative">
                    <Link2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      type="text"
                      value={inputUrl}
                      onChange={(e) => setInputUrl(e.target.value)}
                      placeholder="Paste your URL here..."
                      className="w-full pl-12 pr-4 py-4 border border-purple-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-800"
                      disabled={loading}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 via-purple-400 to-indigo-400 text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:opacity-90 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                    disabled={loading}
                  >
                    {loading && <Loader2 className="animate-spin" size={20} />}
                    {loading ? "Shortening..." : "Shorten URL"}
                  </button>
                </form>
                <AnimatePresence>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-4 text-sm text-red-500 bg-red-50 p-3 rounded-lg"
                    >
                      {error}
                    </motion.p>
                  )}
                  {successMessage && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="mt-4 text-sm text-green-500 bg-green-50 p-3 rounded-lg"
                    >
                      {successMessage}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-8 bg-white rounded-xl shadow-sm border border-purple-100"
              >
                <h2 className="text-xl font-semibold mb-4 text-gray-800">Statistics</h2>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg">
                    <p className="text-gray-600">Total Links Created</p>
                    <p className="text-4xl font-bold text-gray-800 mt-2">{totalLinks}</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-sm border border-purple-100 overflow-hidden"
            >
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-800">Recent Links</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-purple-50 to-indigo-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Original URL</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Short Link</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Clicks</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <AnimatePresence>
                      {urls.length === 0 ? (
                        <motion.tr
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <td colSpan={4} className="text-center py-8 text-gray-500">
                            No short URLs found. Create one above!
                          </td>
                        </motion.tr>
                      ) : (
                        urls.map((url, index) => (
                          <motion.tr
                            key={url.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ delay: index * 0.1 }}
                            className="hover:bg-gray-50"
                          >
                            <td className="px-6 py-4 text-sm text-gray-500 truncate max-w-xs">
                              {url.long_url}
                            </td>
                            <td className="px-6 py-4">
                              <a
                                href={url.short_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => handleLinkClick(url.id)}
                                className="text-purple-600 hover:text-purple-800 text-sm flex items-center gap-2"
                              >
                                {url.short_url}
                                <ExternalLink size={14} />
                              </a>
                            </td>
                            <td className="px-6 py-4">
                              <span className="text-sm font-medium bg-purple-100 text-purple-800 py-1 px-3 rounded-full">
                                {url.clicks || 0} clicks
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <button
                                onClick={() => handleDelete(url.id)}
                                className="text-red-600 hover:text-red-800 p-2 rounded-lg hover:bg-red-50 transition-colors"
                                disabled={loading}
                              >
                                <Trash2 size={18} />
                              </button>
                            </td>
                          </motion.tr>
                        ))
                      )}
                    </AnimatePresence>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </AppLayout>
  );
}