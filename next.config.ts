import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for Netlify
  output: 'export',
  
  // Disable image optimization for testing
  images: {
    unoptimized: true,
  },
  
  // Comment out or remove this line temporarily
  trailingSlash: true,
  
  // Basic environment
  env: {
    NEXT_PUBLIC_SITE_URL: 'http://localhost:3000', 
  },
};

export default nextConfig;