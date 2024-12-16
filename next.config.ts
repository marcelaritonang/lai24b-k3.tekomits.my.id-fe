import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    //output:"export",
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    env: {
        DISABLE_ESLINT_PLUGIN: 'true',
    },
    // Untuk development
    reactStrictMode: true,
    // Untuk routing
    async rewrites() {
        return [];
    },
    // Untuk headers
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'Referrer-Policy',
                        value: 'strict-origin-when-cross-origin',
                    },
                ],
            },
        ];
    },
    
    // Untuk Compression
    compress: true,
    // Untuk Experimental Features
    experimental: {
        // typedRoutes: true,
        // serverActions: true,
    },
    // Untuk Webpack config jika diperlukan
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Kustomisasi webpack config disini jika diperlukan
        return config;
    },
};

export default nextConfig;