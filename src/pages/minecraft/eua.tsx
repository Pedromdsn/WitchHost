import Link from "next/link"
import Image from "next/image"
import { useRef } from "react"

import HeadBar from "../../components/HeadBar"
import Minecraft from "../../components/mine"
import FootBar from "../../components/FootBar"
import MineCard from "../../components/mine/Card"
import MinecraftSellZone from "../../components/mine/SellZone"

import grass from "../../../public/mine/grass.png"

const MinecraftEua = () => {
	const move = useRef()
	return (
		<>
			<HeadBar />
			<Minecraft eua/>
			<MinecraftSellZone>
				<MineCard image={grass} ram={2} link="#" />
				<MineCard image={grass} ram={2} link="#" />
				<MineCard image={grass} ram={2} link="#" />
				<MineCard image={grass} ram={2} link="#" />
				<MineCard image={grass} ram={2} link="#" />
				<MineCard image={grass} ram={2} link="#" />
				<MineCard image={grass} ram={2} link="#" />
				<MineCard image={grass} ram={2} link="#" />
				<MineCard image={grass} ram={2} link="#" />
			</MinecraftSellZone>
			<FootBar />
		</>
	)
}

export default MinecraftEua
