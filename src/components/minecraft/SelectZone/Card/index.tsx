import Image from "next/image"
import Link from "next/link"
import Line from "./Line"

interface MineCardProps {
	image: any
	ram?: number
	price?: number
	link?: string
}

const MineCard = ({ image, ram = 0, price = 0, link = "#" }: MineCardProps) => {
	return (
		<div
			className="bg-[#181827] w-[320px] flex flex-col justify-center items-center text-center
		 	px-8 py-6 rounded-xl hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
			<div>
				<Image src={image} quality={33} height={150} width={160} />
			</div>
			<div className="flex flex-col items-center justify-center">
				<h1 className="text-3xl font-bold text-gray-400">{ram}GB de RAM</h1>
				<h2 className="text-2xl font-bold text-gray-100">R{price},00/mês</h2>
			</div>
			<Link href={link}>
				<div
					className="bg-[#222233] text-lg px-16 py-2 my-4
					text-white font-bold rounded-lg cursor-pointer
					hover:brightness-125 transition-all duration-300">
					Escolher Plano
				</div>
			</Link>
			<div className="text-left text-gray-400 font-bold">
				<Line text="Processador Xeon E5-2650v2" />
				<Line text="Banco de dados MySQL" />
				<Line text="Armazenamento SSD" />
				<Line text="Subdomínio grátis" />
				<Line text="Painel de Controle" />
				<Line text="Slots ilimitados" />
			</div>
		</div>
	)
}


export default MineCard
