import { useRouter } from "next/router"
import { useLayoutEffect } from "react"

const Minecraft = () => {
	const router = useRouter()
	useLayoutEffect(() => {
		router.push("/minecraft/eua")
	})
	return (
		<div className="h-screen flex justify-center items-center">
			<div className="text-8xl font-bold text-white">Loading...</div>
		</div>
	)
}

export default Minecraft
