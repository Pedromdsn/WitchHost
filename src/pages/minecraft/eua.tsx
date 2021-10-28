import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"

import HeadBar from "../../components/HeadBar"
import Minecraft from "../../components/mine"
import FootBar from "../../components/FootBar"
import MineCard from "../../components/mine/Card"

import grass from "../../../public/mine/grass.png"

const MinecraftEua = () => {
	const move = useRef()
	return (
		<>
			<HeadBar />
			<Minecraft eua/>
			<div className="mx-28 md:mx-10 flex rounded-2xl flex-wrap justify-around gap-6">
				<MineCard image={grass} ram={2} link="#" />
				<MineCard image={grass} ram={2} link="#" />
				<MineCard image={grass} ram={2} link="#" />
				<MineCard image={grass} ram={2} link="#" />
				<MineCard image={grass} ram={2} link="#" />
				<MineCard image={grass} ram={2} link="#" />
				<MineCard image={grass} ram={2} link="#" />
				<MineCard image={grass} ram={2} link="#" />
				<MineCard image={grass} ram={2} link="#" />
			</div>
			<FootBar />
		</>
	)
}

export default MinecraftEua
