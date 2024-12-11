"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import AppLayout from "../components/AppLayout";

interface Url {
  id: string;
  long_url: string;
  short_url: string;
  clicks: number;
  created_at: string;
}

export default function DashboardPage() {
  const [urls, setUrls] = useState<Url[]>([]); // State for URLs
  const [inputUrl, setInputUrl] = useState(""); // Input URL
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(""); // Error message
  const [successMessage, setSuccessMessage] = useState(""); // Success message
  const [totalLinks, setTotalLinks] = useState(0); // Total links

  // Fetch data on component load
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location.href = "/login";
    } else {
      fetchUrls(token);
    }
  }, []);

  // Fetch URLs from API
  const fetchUrls = async (token: string) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(
        "http://localhost:8080/v1/api/urls?page=1&per_page=10",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.message || "Failed to fetch URLs");
        return;
      }

      const data = await response.json();
      console.log("Fetched Data:", data); // Debugging fetched data
      if (data.data && Array.isArray(data.data)) {
        const urls = data.data.map((item: any) => item.url); // Extract 'url' object from each entry
        setUrls(urls);
        setTotalLinks(data.meta?.total || 0); // Update total links
      } else {
        setUrls([]);
      }
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Create a short URL
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

      const response = await fetch("http://localhost:8080/v1/api/urls", {
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
      setInputUrl(""); // Reset input
      setSuccessMessage("Short URL created successfully!");
      setTotalLinks((prevTotal) => prevTotal + 1); // Update total links
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Delete a URL
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
      const response = await fetch(`http://localhost:8080/v1/api/urls/${id}`, {
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

      setUrls((prevUrls) => prevUrls.filter((url) => url.id !== id)); // Remove URL from state
      setTotalLinks((prevTotal) => prevTotal - 1); // Update total links
      setSuccessMessage("URL deleted successfully!");
    } catch (error) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppLayout>
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-white">
        <Navbar showSidebarToggle={true} />

        <main className="pt-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
              <p className="text-gray-600">Welcome back, Rianco!</p>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-lg font-semibold mb-4">Create New Link</h2>
                <form onSubmit={handleShorten} className="flex gap-2">
                  <input
                    type="text"
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                    placeholder="Paste your URL here..."
                    className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    disabled={loading}
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50"
                    disabled={loading}
                  >
                    {loading ? "Shortening..." : "Shorten"}
                  </button>
                </form>
                {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
                {successMessage && (
                  <p className="mt-2 text-sm text-green-500">
                    {successMessage}
                  </p>
                )}
              </div>

              {/* Total Links */}
              <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <h2 className="text-lg font-semibold mb-4">Statistics</h2>
                <p className="mb-4">
                  Total Links: <span className="font-bold">{totalLinks}</span>
                </p>
              </div>
            </div>

            {/* Recent Links Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-semibold">Recent Links</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Original URL
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Short Link
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Clicks
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {urls.length === 0 ? (
                      <tr>
                        <td
                          colSpan={4}
                          className="text-center py-4 text-gray-500"
                        >
                          No short URLs found. Create one above!
                        </td>
                      </tr>
                    ) : (
                      urls.map((url) => (
                        <tr key={url.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm text-gray-500 truncate max-w-xs">
                            {url.long_url}
                          </td>
                          <td className="px-6 py-4">
                            <a
                              href={url.short_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-purple-600 hover:text-purple-900 text-sm"
                            >
                              {url.short_url}
                            </a>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {url.clicks || 0}
                          </td>
                          <td className="px-6 py-4">
                            <button
                              onClick={() => handleDelete(url.id)}
                              className="text-red-600 hover:text-red-800 text-sm"
                              disabled={loading}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </AppLayout>
  );
}
