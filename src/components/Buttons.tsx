import Image from "next/image"
import Link from "next/link"
interface ButtonProps {
	image: StaticImageData
	local: string
	ping: number
	ativo?: boolean
	link?: string
}

const Button = ({ local, ping, image, ativo = false, link = "#" }: ButtonProps) => {
	return (
		<Link href={link} scroll={false}>
			<div
				className={`flex justify-around bg-[#111122]
				rounded-md px-6 py-4 gap-4 ${ativo && "ring-1 ring-green-500"}
				hover:-translate-y-1 transition-all duration-300 cursor-pointer`}>
				<div>
					<Image src={image} quality={2} height={70} width={70} />
				</div>
				<div className="flex flex-col justify-center md:hidden">
					<h2 className="text-base text-gray-300 font-bold">{local}</h2>
					<h3 className="text-base text-gray-300 font-bold">Ping médio {ping}ms</h3>
				</div>
			</div>
		</Link>
	)
}

export default Button
