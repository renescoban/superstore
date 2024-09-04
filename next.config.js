/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.leagueoflegends.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
   // serverComponentsExternalPackages: ["mongoose"] // <-- and this
  },


}

module.exports = nextConfig
