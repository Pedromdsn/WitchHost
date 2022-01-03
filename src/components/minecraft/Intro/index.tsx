import Link from "next/link"

import IslandImage from "./IslandImage"

import { HiArrowNarrowRight } from "react-icons/hi"

const Intro = () => {
	return (
		<section className="bg-[#a2a2f20d] mt-5 py-10 px-16 md:px-10 flex rounded-2xl mx-auto w-[90vw] max-w-[1500px]">
			<div className="flex flex-col justify-center items-start gap-5 mr-14 md:m-0 md:text-center md:items-center">
				<h1 className="text-4xl text-blue-500 font-bold">HOSPEDAGEM MINECRAFT</h1>
				<h2 className="text-xl text-[#9e9e9e]">
					Hospedagem Minecraft com tudo que você precisa! Jogue com amigos ou faça um servidor profissional. A escolha é
					sua!
				</h2>
				<Link href={"#select"}>
					<div
						className="px-7 py-3 flex items-center gap-2 bg-blue-600 cursor-pointer
						rounded-lg text-white text-lg hover:brightness-90
						transition-all duration-150">
						Escolha o Plano
						<HiArrowNarrowRight color="#fff" size={20} />
					</div>
				</Link>
				<IslandImage />
			</div>
		</section>
	)
}

export default Intro
