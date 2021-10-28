import Link from "next/link"

import { FaDiscord } from "react-icons/fa"

const Discord = () => {
	return (
		<Link href="https://discord.gg/rcKAWjbk" passHref>
			<div
				className="fixed bottom-7 left-7 w-14 h-14 flex justify-center items-center rounded-full cursor-pointer transform hover:rotate-12 hover:w-16 hover:h-16 transition-all duration-300"
				style={{ backgroundColor: "#7289DA" }}>
				<FaDiscord size="35px" color="#fff" className="" />
			</div>
		</Link>
	)
}

export default Discord