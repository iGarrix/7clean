/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
	reactStrictMode: false,
	swcMinify: true,
	optimizeFonts: true,
	images: {
		formats: ['image/avif', 'image/webp'],
		remotePatterns: [
			{
				protocol: 'http',
				hostname: '**',
				port: '',
				pathname: '**',
			},
			{
				protocol: 'https',
				hostname: '**',
				port: '',
				pathname: '**',
			},
		],
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
}

module.exports = nextConfig
