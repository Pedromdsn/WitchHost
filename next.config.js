/** @type {import('next').NextConfig} */
module.exports = {
	swcMinify: true,
  images: {
		formats: ["image/avif", "image/webp"],
	},
  amp: true,
	async redirects() {
    return [
      {
        source: '/minecraft',
        destination: '/minecraft/eua',
        permanent: true,
      },
    ]
  },
}
