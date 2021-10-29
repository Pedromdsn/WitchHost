interface MinecraftSellZoneProps {
	children: React.ReactNode
}

const MinecraftSellZone = ({ children }: MinecraftSellZoneProps) => {
	return <div className="px-20 max-w-[1500px] flex flex-wrap gap-6 mx-auto justify-center">{children}</div>
}

export default MinecraftSellZone
