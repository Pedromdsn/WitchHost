import HeadBar from "../components/HeadBar"
import Link from "next/link"
import Card from "../components/home/Card"

import { MainImage } from "../asserts/svg"
import { BiWorld } from "react-icons/bi"
import FootBar from "../components/FootBar"
import Discord from "../components/Discord"

const Home = () => {
	return (
		<>
			<HeadBar />
			<div className="bg-[#a2a2f20d] mt-5 mx-28 md:mx-10 py-10 px-16 md:px-10 flex rounded-2xl ">
				<div className="flex flex-col justify-center items-start gap-5 mr-14 md:m-0 md:text-center md:items-center">
					<h1 className="text-4xl text-blue-500 font-bold">SEU FUTURO ESTÁ AQUI.</h1>
					<h2 className="text-xl text-[#9e9e9e]">
						Hospedamos seu projeto com um toque de mágica! Prezamos por segurança, agilidade e sucesso para a sua
						instância! <span className="text-white px-2 bg-blue-600 rounded font-bold cursor-help">SURPRESO?</span>
					</h2>
					<Link href="#">
						<div
							className="px-7 py-3 bg-blue-600 cursor-pointer
							rounded-lg text-white text-lg hover:brightness-90
							transition-all duration-150">
							Comesse aqui...
						</div>
					</Link>
				</div>
				<div className="lg:hidden">{MainImage}</div>
			</div>

			<div className="flex flex-wrap gap-10 mt-20 mx-24 justify-center">
				<Card
					Icon={BiWorld}
					title="Subdomínio GRÁTIS"
					text="A WitchHost disponibiliza vários tipos de subdomínio para o seu servidor de minecraft!"
				/>
				<Card
					Icon={BiWorld}
					title="Subdomínio GRÁTIS"
					text="A WitchHost disponibiliza vários tipos de subdomínio para o seu servidor de minecraft!"
				/>
				<Card
					Icon={BiWorld}
					title="Subdomínio GRÁTIS"
					text="A WitchHost disponibiliza vários tipos de subdomínio para o seu servidor de minecraft!"
				/>
				<Card
					Icon={BiWorld}
					title="Subdomínio GRÁTIS"
					text="A WitchHost disponibiliza vários tipos de subdomínio para o seu servidor de minecraft!"
				/>
				<Card
					Icon={BiWorld}
					title="Subdomínio GRÁTIS"
					text="A WitchHost disponibiliza vários tipos de subdomínio para o seu servidor de minecraft!"
				/>
				<Card
					Icon={BiWorld}
					title="Subdomínio GRÁTIS"
					text="A WitchHost disponibiliza vários tipos de subdomínio para o seu servidor de minecraft!"
				/>
			</div>
			<Discord/>
			<FootBar/>
		</>
	)
}

export default Home
