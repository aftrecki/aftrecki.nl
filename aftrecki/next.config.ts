import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    output: 'export',
    images: { unoptimized: true },
    rewrites: async () => {
        return [
            {
                source: "/2022",
                destination: "/2022/index.html",
            },
            {
                source: "/2024",
                destination: "/2024/index.html",
            },
        ];
    },
};

export default nextConfig;
