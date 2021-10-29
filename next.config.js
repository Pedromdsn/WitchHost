module.exports = {
	swcMinify: true,
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
