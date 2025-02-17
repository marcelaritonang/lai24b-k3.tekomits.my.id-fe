export default function BlogPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 p-8">
            <h1 className="text-5xl font-extrabold text-purple-600 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500">
                Blog
            </h1>
            <p className="text-lg text-gray-700 mb-4">
                Stay updated with our latest blog posts, insights, and industry news.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
                <h2 className="text-2xl font-semibold text-indigo-600">Latest Posts</h2>
                <p className="text-gray-600 mt-2">
                    Discover our newest articles and tips to help you grow and optimize your workflows.
                </p>
            </div>
        </div>
    );
}