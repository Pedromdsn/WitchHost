import Image from "next/image"
import Link from "next/link"

import { useState } from "react"
import { FaFingerprint } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"

import logo from "../../public/logo.png"

const HeadBar = () => {
	const [mobile, setMobile] = useState(false)

	return (
		<nav className="py-4 flex justify-between items-center px-32 md:justify-center md:mb-40">
			<Logo />
			<div
				className={`flex gap-6 items-center transition-all md:overflow-hidden 
				md:justify-end duration-200 md:text-xl
				${mobile ? "flex-col md:h-60 md:-mb-20" : "md:h-0"}`}>
				<Item text="Minecraft" />
				<Link href="#">
					<div
						className="flex items-center gap-2 px-5 py-3 bg-[#e3008c] 
						rounded text-white font-bold cursor-pointer 
						transition-all hover:-translate-y-1 duration-300">
						<FaFingerprint />
						<span>Area do Cliente</span>
					</div>
				</Link>
			</div>
			<GiHamburgerMenu
				className="hidden md:flex md:absolute top-12 right-20"
				color="#fff"
				size={60}
				onClick={() => setMobile(!mobile)}
			/>
		</nav>
	)
}

interface ItemTypes {
	text: string
	link?: string
}

const Logo = () => {
	return (
		<div className="w-20 h-20 cursor-pointer md:absolute top-10 left-20">
			<Link href="#">
				<Image src={logo} quality={1} />
			</Link>
		</div>
	)
}

const Item = ({ text, link = "#" }: ItemTypes) => {
	return (
		<Link href={link}>
			<div className="text-[#C8C8C8] font-semibold text-xl md:text-2xl cursor-pointer">{text}</div>
		</Link>
	)
}

export default HeadBar
