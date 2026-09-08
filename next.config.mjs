import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['192.168.1.31', 'localhost'],
  images: {
    domains: [
      'mea-nova.vercel.app',
      'meanova.vercel.app',
      'public.blob.vercel-storage.com',
    ],
    unoptimized: true,
     formats: ['image/avif', 'image/webp'],
  },
  webpack: (webpackConfig) => {
    webpackConfig.resolve.extensionAlias = {
      '.cjs': ['.cts', '.cjs'],
      '.js': ['.ts', '.tsx', '.js', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    }

    return webpackConfig
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
