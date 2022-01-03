import HeadBar from "@/components/HeadBar"
import Minecraft from "@/components/minecraft"
import FootBar from "@/components/FootBar"
import MineCard from "@/components/minecraft/SelectZone/Card"
import MinecraftSellZone from "@/components/minecraft/SellZone"

import earth from "@/public/mine/earth.png"
import grass from "@/public/mine/grass.png"
import cobblestone from "@/public/mine/cobblestone.png"
import coal from "@/public/mine/coal.png"
import iron from "@/public/mine/iron.png"
import redstone from "@/public/mine/redstone.png"
import diamond from "@/public/mine/diamond.png"
import emerald from "@/public/mine/emerald.png"
import obsidian from "@/public/mine/obsidian.png"

const MinecraftEua = () => {
	return (
		<>
			<HeadBar />
			<Minecraft />
			<MinecraftSellZone>
				<MineCard image={earth} ram={2} price={16} link="#" />
				<MineCard image={grass} ram={4} price={32} link="#" />
				<MineCard image={cobblestone} ram={6} price={48} link="#" />
				<MineCard image={coal} ram={8} price={64} link="#" />
				<MineCard image={iron} ram={10} price={80} link="#" />
				<MineCard image={redstone} ram={12} price={96} link="#" />
				<MineCard image={diamond} ram={16} price={128} link="#" />
				<MineCard image={emerald} ram={24} price={192} link="#" />
				<MineCard image={obsidian} ram={32} price={252} link="#" />
			</MinecraftSellZone>
			<FootBar />
		</>
	)
}

export default MinecraftEua
