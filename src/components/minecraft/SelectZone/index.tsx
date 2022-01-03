import Button from "./Button"
import MageImage from "./MageImage"

import EUA from "@/public/eua.png"
import BR from "@/public/br.png"

import { useRouter } from "next/router"

const SelectZone = () => {
	const router = useRouter()
	const route = router.pathname.split("/")[2].toLocaleLowerCase()

	return (
		<section id="select" className="mt-5 md:mx-10 py-5 flex rounded-2xl mx-auto w-[80vw] justify-around">
			<div className="flex flex-col gap-3 py-20 ">
				<div className="flex gap-3 md:justify-center">
					<Button
						image={EUA}
						local="Estados Unidos, Virginia"
						ping={120}
						link="/minecraft/eua"
						ativo={route == "eua"}
					/>
					<Button image={BR} local="Brasil, São Paulo" ping={20} link="/minecraft/br" ativo={route == "br"} />
				</div>
				<div className="flex flex-col text-gray-400 font-bold my-10 md:text-center">
					<h1 className="text-2xl">Vamos escolher um plano que atenda suas necessidades: </h1>
					<h2 className="text-lg">Processadores Xeon E5-2650 v2 ou similares</h2>
				</div>
			</div>
			<MageImage/>
		</section>
	)
}

export default SelectZone
