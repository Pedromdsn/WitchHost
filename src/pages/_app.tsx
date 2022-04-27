import Head from "next/head"

import "tailwindcss/tailwind.css"
import "../style/index.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>A melhor hospedagem é aqui!</title>
      </Head>
      <div className="bg-[#222230] font-roboto">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
