import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"
import { HiArrowNarrowRight } from "react-icons/hi"

import Mine from "../../../public/mine/mine.png"
import Mine2 from "../../../public/mine/mine2.png"
import Button from "../../components/Buttons"
import EUA from "../../../public/eua.png"
import BR from "../../../public/br.png"

interface MinecraftProps {
	eua?: boolean
	br?: boolean
}

const Minecraft = ({ eua, br }: MinecraftProps) => {
	const move = useRef(null)
	const executeScroll = () => move.current.scrollIntoView()

	return (
		<>
			<div className="bg-[#a2a2f20d] mt-5 py-10 px-16 md:px-10 flex rounded-2xl mx-auto w-[90vw] max-w-[1500px]"> 
				<div className="flex flex-col justify-center items-start gap-5 mr-14 md:m-0 md:text-center md:items-center">
					<h1 className="text-4xl text-blue-500 font-bold">HOSPEDAGEM MINECRAFT</h1>
					<h2 className="text-xl text-[#9e9e9e]">
						Hospedagem Minecraft com tudo que você precisa! Jogue com amigos ou faça um servidor profissional. A escolha
						é sua!
					</h2>

					<div
						className="px-7 py-3 flex items-center gap-2 bg-blue-600 cursor-pointer
							rounded-lg text-white text-lg hover:brightness-90
							transition-all duration-150"
						onClick={() => executeScroll()}>
						Escolha o Plano
						<HiArrowNarrowRight color="#fff" size={20}/>
					</div>
				</div>
				<div className="lg:hidden">
					<Image src={Mine} quality={30} priority/>
				</div>
			</div>

			<div ref={move} className="mt-5 md:mx-10 py-5 flex rounded-2xl mx-auto w-[80vw] justify-around">
				<div className="flex flex-col gap-3 py-20 ">
					<div className="flex gap-3 md:justify-center">
						<Button image={EUA} local="Estados Unidos, Virginia" ping={120} link="/minecraft/eua" ativo={eua} />
						<Button image={BR} local="Brasil, São Paulo" ping={20} link="/minecraft/br" ativo={br} />
					</div>
					<div className="flex flex-col text-gray-400 font-bold my-10 md:text-center">
						<h1 className="text-2xl">Vamos escolher um plano que atenda suas necessidades: </h1>
						<h2 className="text-lg">Processadores Xeon E5-2650 v2 ou similares</h2>
					</div>
				</div>
				<div className="w-1/3 lg:hidden">
					<Image src={Mine2} quality={15} priority/>
				</div>
			</div>
		</>
	)
}

export default Minecraft
