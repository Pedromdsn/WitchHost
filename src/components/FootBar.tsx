import Link from "next/link"
import { Dev } from "../asserts/svg"

const FootBar = () => {
	return (
		<footer className="flex flex-col justify-center items-center pt-20 pb-10 text-white text-center">
			<h3>Copyright © WitchHost | Todos direitos reservados</h3>
			<h4 className="flex flex-wrap justify-center items-center">
				{Dev} Desenvolvido por&#160;
				<Link href="https://pedromdsn.com" passHref>
					<a className="font-bold">Coco Blanco</a>
				</Link>
			</h4>
		</footer>
	)
}

export default FootBar
