import Image from "next/image"

import Mine2 from "@/public/mine/mine2.png"

const MageImage = () => {
  return (
    <aside className="w-1/3 lg:hidden">
      <Image src={Mine2} quality={15} priority alt="Mage Island" />
    </aside>
  )
}

export default MageImage
