import Logo from "../assets/icon.svg"
import { motion } from "motion/react"
function Navbar() {
  return (
    <div className="sticky inset-0 bg-mist-950 w-screen min-h-[15vh]
    flex justify-around items-center p-7.5 gap-2.5 text-xl">
      <motion.a
      whileHover={{ scale: 1.1, rotate: -5 }}
      href="#" className="h-16 aspect-square flex justify-center items-center gap-1.5 text-white">
        <img src={Logo} alt="logo"
        className="h-full aspect-square" />
        EASY.DEV
      </motion.a>
      <div className="hidden sm:flex gap-2.5">
        <motion.a whileHover={{translateY: -2}} href="#" className="button">About</motion.a>
        <motion.a whileHover={{translateY: -2}} href="#" className="button">Works</motion.a>
        <motion.a whileHover={{translateY: -2}} href="#" className="button">Contact</motion.a>
        <motion.a whileHover={{translateY: -2}} href="#" className="button">Terms</motion.a></div>
        <motion.button className="h-16 aspect-square cursor-pointer rounded-2xl hover:bg-white/25
        transition-colors duration-100 ease-in">a
      </motion.button>
    </div>
  )
}

export default Navbar
