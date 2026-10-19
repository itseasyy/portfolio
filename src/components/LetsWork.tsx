import { motion } from "motion/react"

function LetsWork() {
  return (
    <motion.a
      whileHover={{y: -1, scale:1.02}}
      href="#contact"
      aria-hidden="true"
      className="flex justify-center items-center glow-gradient hover:before:translate-y-2
      before:transition-all before:duration-100 before:ease-in
      z-10 cursor-pointer h-full w-fit shrink-0
      font-medium rounded-xl border border-indigo-300 bg-gradient px-4">Let's Work! <span className="text-2xl pl-2.5">→</span></motion.a>
  )
}

export default LetsWork
