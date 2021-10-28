import Header from "next/head"

import "tailwindcss/tailwind.css"
import "../style/index.css"

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Header>
				<title>A melhor hospedagem é aqui!</title>
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
				<meta name="description" content="Minecraft host a um preço super gostoso." />
				<meta name="author" content="Coco Blanco" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
			</Header>
			<div className="bg-[#222230] font-roboto">
				<Component {...pageProps} />
			</div>
		</>
	)
}

export default MyApp
