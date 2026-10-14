import { useState } from "react"
import Logo from "../assets/icon.svg"
import { AnimatePresence, motion } from "motion/react"

function NavButtons() {
  return (
    <>
      <motion.a whileHover={{y: -2}} whileFocus={{y: -2}}
      href="#" className="button"
      aria-haspopup="true">About</motion.a>
      <motion.a whileHover={{y: -2}} whileFocus={{y: -2}}
      href="#" className="button">Works</motion.a>
      <motion.a whileHover={{y: -2}} whileFocus={{y: -2}}
      href="#" className="button">Contact</motion.a>
      <motion.a whileHover={{y: -2}} whileFocus={{y: -2}}
      href="#" className="button">Terms</motion.a>
    </>
  )
}

function Navbar() {
  const [menu, showMenu] = useState(false)

  const handleMenu = () => {
    const toggle = !menu

    showMenu(toggle)
  }

  return (
    <div className="z-2700 sticky inset-0 bg-mist-950 w-screen min-h-[15vh]
    flex justify-around items-center p-7.5 gap-2.5 text-xl">
      <motion.a
      tabIndex={-1}
      whileHover={{ scale: 1.1, rotate: -5 }}
      href="#" className="h-16 aspect-square flex justify-center items-center gap-1.5 text-white">
        <img src={Logo} alt="logo"
        className="h-full aspect-square" />
        EASY.DEV
      </motion.a>

      <div className="hidden sm:flex gap-2.5">
        <NavButtons />
      </div>

      <div className="relative flex justify-around gap-1">
        <motion.button className="h-16 aspect-square cursor-pointer rounded-2xl focus:bg-white/25 hover:bg-white/25
        transition-colors duration-100 ease-in
        outline-none focus:border focus:border-white/50">a</motion.button>

        <button className="sm:hidden cursor-pointer h-16 aspect-square focus:bg-white/25 hover:bg-white/25 rounded-2xl
        transition-colors duration-100 ease-in
        outline-none focus:border focus:border-white/50"
        onClick={handleMenu}>☰</button>

        <AnimatePresence>
          {menu ? <motion.div
          initial={{
            y: 10,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          exit={{
            y: 10,
            opacity: 0
          }}
          transition={{
            duration: 0.1
          }}
          className="absolute right-0 bottom-0 translate-y-full bg-mist-950 w-full h-fit
          flex flex-col p-2.5 rounded-3xl drop-shadow-xl">
            <NavButtons />
          </motion.div> : null}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Navbar
