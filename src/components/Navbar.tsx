import { useEffect, useState } from "react"
import Logo from "../assets/icon.svg"
import { AnimatePresence, motion } from "motion/react"
import LetsWork from "./LetsWork"

function NavButtons() {
  return (
    <>
      <motion.a whileHover={{y: -2}} whileFocus={{y: -2}}
      href="#about" className="button">About</motion.a>
      <motion.a whileHover={{y: -2}} whileFocus={{y: -2}}
      href="#works" className="button">Works</motion.a>
      <motion.a whileHover={{y: -2}} whileFocus={{y: -2}}
      href="#contact" className="button">Contact</motion.a>
      <motion.a whileHover={{y: -2}} whileFocus={{y: -2}}
      href="#terms" className="button">Terms</motion.a>
    </>
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
    <div className="sticky inset-0 w-full min-h-26 h-[8lvh]
    flex p-5 justify-around items-center select-none text-white
    transition-all duration-200 ease-in z-10"
    style={scrolled ? {borderBottom: "2px solid #ffffff80", backgroundColor: "#05060b50", backdropFilter: "blur(24px)"} : {borderBottom: "2px solid transparent", backdropFilter: "blur(0px)"}}>
      <motion.a
      href="#top"
      whileHover={{scale: 1.1, rotate: -5}}
      className="flex items-center justify-around gap-1 h-full p-1.25 w-fit cursor-pointer" aria-hidden="true">
        <img src={Logo} alt="logo" className="h-full min-h-10.5 aspect-square" />
        <span className="text-xl font-bold"><span className="name-gradient">EASY</span>.DEV</span>
      </motion.a>

      <div className="hidden sm:flex items-center justify-evenly w-lg md:w-xl h-full" aria-hidden="true">
        <NavButtons />
      </div>

      <div className="hidden sm:block h-full"><LetsWork /></div>

      <motion.div
      whileHover={{scale: 1.05}}
      className="block sm:hidden p-2.5 rounded-xl bg-gray-500/25 border border-gray-500
      cursor-pointer hover:bg-gray-500/50 transition-colors duration-100 ease-in"
      onClick={handleMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" 
        width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2"
        stroke-linecap="round" stroke-linejoin="round" className="size-full" aria-hidden="true">
        <path d="M4 5h16" />
        <path d="M4 12h16" />
        <path d="M4 19h16" />
      </svg>
      </motion.div>

      {/* NAV MENU */}
      <AnimatePresence>
        {menu &&
        <motion.div
        initial={{y: 2, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        exit={{y: 2, opacity: 0}}
        className="flex flex-col absolute right-0 bottom-0 translate-y-full -translate-x-1/2 h-fit
        bg-[#05060b80] backdrop-blur-3xl gap-2 z-99
        rounded-2xl border border-white/25 p-5">
          <NavButtons />
        </motion.div>}
      </AnimatePresence>

    </div>
  )
}


export default Navbar
