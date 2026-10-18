import { useEffect, useRef, useState } from "react"
import Logo from "../assets/icon.svg"
import { AnimatePresence, motion } from "motion/react"

function NavButtons() {
  return (
    <div className="flex items-center justify-evenly w-xl h-full">
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
      console.log(scrolled, window.scrollY)
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
    <div className="sticky inset-0 w-full h-[8dvh]
    flex p-5 justify-around items-center select-none text-white
    transition-all duration-200 ease-in z-10"
    style={scrolled ? {borderBottom: "2px solid #ffffff80", backgroundColor: "#00000050", backdropFilter: "blur(10px)"} : {borderBottom: "2px solid transparent", backdropFilter: "blur(0px)"}}>
      <motion.a
      href="#top"
      whileHover={{scale: 1.1, rotate: -5}}
      className="flex items-center justify-around gap-1 h-full p-1.25 w-fit cursor-pointer">
        <img src={Logo} alt="logo" className="h-full aspect-square" />
        <span className="text-xl font-bold"><span className="name-gradient">EASY</span>.DEV</span>
      </motion.a>

      <NavButtons />

      <motion.button
      whileHover={{y: -1, scale:1.02}}
      className="before:content-[] before:h-full before:w-full before:absolute before:inset-0
      before:bg-gradient before:blur-xl before:-z-10 hover:before:translate-y-2
      before:transition-all before:duration-100 before:ease-in
      relative z-10 cursor-pointer h-full w-fit
      font-medium rounded-xl border border-indigo-300 bg-gradient px-4">Let's Work! <span className="text-2xl pl-2.5">→</span></motion.button>

    </div>
  )
}


export default Navbar
