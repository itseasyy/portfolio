import { useEffect, useRef, useState } from "react"
import Logo from "../assets/icon.svg"
import { AnimatePresence, motion } from "motion/react"
import LetsWork from "./LetsWork"

function NavButtons() {
  return (
    <div className="flex items-center justify-evenly w-xl h-full" aria-hidden="true">
      <motion.a whileHover={{y: -2}} whileFocus={{y: -2}}
      href="#about" className="button">About</motion.a>
      <motion.a whileHover={{y: -2}} whileFocus={{y: -2}}
      href="#works" className="button">Works</motion.a>
      <motion.a whileHover={{y: -2}} whileFocus={{y: -2}}
      href="#contact" className="button">Contact</motion.a>
      <motion.a whileHover={{y: -2}} whileFocus={{y: -2}}
      href="#terms" className="button">Terms</motion.a>
    </div>
  )
}

function Navbar() {
  const [menu, showMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const handleMenu = () => {
    const toggle = !menu

    showMenu(toggle)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        if (scrolled == false) setScrolled(true)
      } else if(scrolled == true) setScrolled(false)
    }

    document.addEventListener("scroll", handleScroll)

    handleScroll()

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <div className="sticky inset-0 w-full h-[8vh]
    flex p-5 justify-around items-center select-none text-white
    transition-all duration-200 ease-in z-10"
    style={scrolled ? {borderBottom: "2px solid #ffffff80", backgroundColor: "#00000050", backdropFilter: "blur(24px)"} : {borderBottom: "2px solid transparent", backdropFilter: "blur(0px)"}}>
      <motion.a
      href="#top"
      whileHover={{scale: 1.1, rotate: -5}}
      className="flex items-center justify-around gap-1 h-full p-1.25 w-fit cursor-pointer" aria-hidden="true">
        <img src={Logo} alt="logo" className="h-full aspect-square" />
        <span className="text-xl font-bold"><span className="name-gradient">EASY</span>.DEV</span>
      </motion.a>

      <NavButtons />

      <LetsWork />

    </div>
  )
}


export default Navbar
