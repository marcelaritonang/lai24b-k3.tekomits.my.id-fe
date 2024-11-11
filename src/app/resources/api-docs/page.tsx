export default function ApiDocsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 p-8">
            <h1 className="text-5xl font-extrabold text-purple-600 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-500">
                API Documentation
            </h1>
            <p className="text-lg text-gray-700 mb-4">
                Access comprehensive API documentation for integrating our services into your applications.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-lg mt-4">
                <h2 className="text-2xl font-semibold text-indigo-600">API Overview</h2>
                <p className="text-gray-600 mt-2">
                    Learn about our API endpoints, authentication, and data handling capabilities.
                </p>
            </div>
        </div>
    );
}