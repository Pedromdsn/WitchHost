import Image from "next/image"
import Link from "next/link"

import { useState } from "react"
import { FaFingerprint } from "react-icons/fa"
import { GiHamburgerMenu } from "react-icons/gi"

import logo from "@/public/logo.png"

const HeadBar = () => {
  const [mobile, setMobile] = useState(false)

  return (
    <header className="py-4 flex justify-between items-center px-32 md:px-2 md:justify-center md:mb-40">
      <Logo />
      <div
        className={`flex gap-6 items-center transition-all md:overflow-hidden 
				md:justify-end duration-200 md:text-xl
				${mobile ? "flex-col md:h-60 md:-mb-20" : "md:h-0"}`}
      >
        <Item text="Minecraft" link="/minecraft/eua" />
        <Item text="Area Cliente" link="#" destaque />
      </div>
      <GiHamburgerMenu className="hidden md:flex md:absolute top-16 right-10" color="#fff" size={40} onClick={() => setMobile(!mobile)} />
    </header>
  )
}

const Logo = () => {
  return (
    <div className="w-20 h-20 cursor-pointer md:absolute top-10 left-10">
      <Link href="/">
        <Image src={logo} quality={1} alt="Logo" />
      </Link>
    </div>
  )
}

interface ItemTypes {
  text: string
  link?: string
  destaque?: boolean
}

const Item = ({ text, link = "#", destaque }: ItemTypes) => {
  if (!destaque) {
    return (
      <Link href={link}>
        <div className="text-[#C8C8C8] font-semibold text-xl md:text-2xl cursor-pointer">{text}</div>
      </Link>
    )
  }

  return (
    <Link href={link}>
      <div
        className="flex items-center gap-2 px-5 py-3 bg-[#e3008c] 
				rounded text-white font-bold cursor-pointer text-center
				transition-all hover:-translate-y-1 duration-300"
      >
        <FaFingerprint />
        <span>{text}</span>
      </div>
    </Link>
  )
}

export default HeadBar
