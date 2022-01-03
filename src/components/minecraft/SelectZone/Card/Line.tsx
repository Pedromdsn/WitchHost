import { FaCheckDouble } from "react-icons/fa"

interface LineProps {
	text: string
}

const Line = ({ text }: LineProps) => {
	return (
		<div className="flex items-center gap-1">
			<FaCheckDouble color="#00ee00" />
			<h4>{text}</h4>
		</div>
	)
}

export default Line
