/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "custom",
    loaderFile: './node_modules/@uploadcare/nextjs-loader/build/loader.js',
    remotePatterns: [
			{
				protocol: 'https',
				hostname: '**',
			},
    ]
  }

};

export default nextConfig;
