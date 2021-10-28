import { IconType } from "react-icons"

interface CardProps {
	Icon: IconType
	title: string
	text: string
}

const Card = ({ Icon, title, text }: CardProps) => {
	return (
		<div className="bg-[#a2a2f20d] min-w-[200px] w-[25vw] md:w-[70vw] md:px-10 md:py-10
		px-5 py-5 rounded-xl gap-3 flex flex-col 
		justify-around items-center text-center
		hover:-translate-y-2 transition-all duration-300">
			<div className="bg-blue-600 p-3 rounded">
				<Icon size={35} color="#fff"/>
			</div>
			<h1 className="font-bold text-gray-400">{title}</h1>
			<h2 className="text-sm text-gray-300">{text}</h2>
		</div>
	)
}

export default Card
