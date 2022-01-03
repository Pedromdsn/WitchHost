import Image from "next/image"

import Mine from "@/public/mine/mine.png"

const IslandImage = () => {
	return (
		<aside className="lg:hidden">
			<Image src={Mine} quality={30} priority />
		</aside>
	)
}

export default IslandImage
