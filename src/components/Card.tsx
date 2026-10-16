import { motion } from "motion/react"

type CardProps = {
  title?: string,
  children?: React.ReactNode
}

const variants = {
  hidden: {y: 10, opacity: 0},
  show: {y: 0, opacity: 1},
}

function Card({ title, children }: CardProps) {
  return (
    <motion.div
    variants={variants}
    id="card" className="before:content-[] before:h-full before:w-full before:bg-linear-to-r
    before:from-indigo-400 before:via-black before:to-transparent
    before:blur-md before:opacity-50 before:absolute before:inset-0 before:rounded-2xl
    relative shrink-0 sm:h-full h-55 w-100 bg-indigo-800 rounded-2xl text-white p-5 select-none">
      <motion.div
      whileHover={{
        x: 2
      }}
      className="absolute inset-0 left-1 bg-mauve-950 h-full w-[calc(100%-4px)]
        rounded-2xl flex flex-col p-5 pr-15 gap-2.5">
        <h1 className="flex-1 text-gray-400 italic font-medium bottom-separator h-fit w-full">{title}</h1>
        <p className="flex-9 text-gray-200">{children}</p>
      </motion.div>
    </motion.div>
  )
}

export default Card