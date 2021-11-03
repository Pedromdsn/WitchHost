import HeadBar from "@/components/HeadBar"
import Link from "next/link"
import Card from "@/components/home/Card"
import FootBar from "@/components/FootBar"
import Discord from "@/components/Discord"

import { MainImage } from "../asserts/svg"
import { BiWorld } from "react-icons/bi"
import { HiArrowNarrowRight } from "react-icons/hi"

const Home = () => {
	return (
		<>
			<HeadBar />
			<div className="bg-[#a2a2f20d] mt-5 py-10 px-16 md:px-10 flex rounded-2xl mx-auto w-[90vw] max-w-[1300px]">
				<div className="flex flex-col justify-center items-start gap-5 mr-14 md:m-0 md:text-center md:items-center">
					<h1 className="text-4xl text-blue-500 font-bold">SEU FUTURO ESTÁ AQUI.</h1>
					<h2 className="text-xl text-[#9e9e9e]">
						Hospedamos seu projeto com um toque de mágica! Prezamos por segurança, agilidade e sucesso para a sua
						instância! <span className="text-white px-2 bg-blue-600 rounded font-bold cursor-help text-lg">SURPRESO?</span>
					</h2>
					<Link href="/minecraft/eua">
						<div
							className="px-7 py-3 bg-blue-600 cursor-pointer w-52
							rounded-lg text-white text-lg hover:brightness-90
							transition-all duration-150 flex justify-around items-center">
							Comesse aqui <HiArrowNarrowRight color="#fff" size={20}/>
						</div>
					</Link>
				</div>
				<div className="lg:hidden">{MainImage}</div>
			</div>

			<div className="flex flex-wrap gap-10 mt-20 justify-center mx-auto w-[90vw] max-w-[1300px]">
				<Card
					Icon={BiWorld}
					title="Subdomínio GRÁTIS"
					text="A WitchHost disponibiliza vários tipos de subdomínio para o seu servidor de minecraft!"
				/>
				<Card
					Icon={BiWorld}
					title="Painel 100% customizado"
					text="O painel da WitchHost contêm uma interface personalizada para a melhor visualização e entendimento."
				/>
				<Card
					Icon={BiWorld}
					title="Uptime de 99.9%"
					text="A disponibilidade do seu serviço é uma de nossas prioridades por isso conte com o melhor serviço e suporte!"
				/>
				<Card
					Icon={BiWorld}
					title="Proteção contra DDoS"
					text="Nossos servidores dedicados são protegidos por nossa proteção Anti-DDoS e sistemas de mitigação automáticos."
				/>
				<Card
					Icon={BiWorld}
					title="Ativação Instantânea"
					text="Por que esperar pelo seu serviço após fazer o pagamento? Entregamos seu servidor instantaneamente após a confirmação de pagamento."
				/>
				<Card
					Icon={BiWorld}
					title="Servidor sempre online"
					text="Seus servidores não dormem e nós também não. Tentamos garantir o máximo de uptime para todos os clientes."
				/>
			</div>
			<Discord/>
			<FootBar/>
		</>
	)
}

export default Home
