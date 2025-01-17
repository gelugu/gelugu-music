import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ams1.vultrobjects.com',
            },
        ],
    },
};

export default nextConfig;
