import { Dev } from "../asserts/svg"

const FootBar = () => {
	return (
		<div className="flex flex-col justify-center items-center pt-20 pb-10 text-white">
			<h1>Copyright © WitchHost | Todos direitos reservados</h1>
			<h2 className="flex flex-wrap justify-center items-center">
				{Dev} Desenvolvido por&#160;
				<a href="https://cocoblanco.fun" target="_blank" className="font-bold" rel="noreferrer">
					Coco Blanco
				</a>
			</h2>
		</div>
	)
}

export default FootBar
