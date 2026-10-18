import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar.tsx";
import { AnimatePresence, motion, stagger } from "motion/react";
import Card from "./components/Card.tsx";

const animationVariants = {
  initial: {
    x: "-50%",
    y: 2,
    opacity: 0
  },

  animate: {
    x: "-50%",
    y: -1,
    opacity: 1
  },

  exit: {
    x: "-50%",
    y: 2,
    opacity: 0
  },
}

const topVariants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: stagger(0.1, { startDelay: 0.1 })
    }
  }
}

// const parentVariants = {
//   hidden: {},
//   show: {
//     transition: {
//       delayChildren: stagger(0.1, {
//         startDelay: 1
//       })
//     }
//   }
// }

const basicFloatIn = {
  hidden: {y: 10, opacity: 0},
  show: {y: 0, opacity: 1},
}

const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

type AgeProps = {
  precise: boolean,
  hovering: boolean,
  now: number,
  onMouseEnter: () => void,
  onMouseLeave: () => void
}

function RollingDigit({ digit }: { digit: number }) {
  const ROW_HEIGHT = 32; 

  return (
    <div 
      className="relative flex flex-col align-middle overflow-clip w-[1ch] font-mono font-bold isolate"
      style={{ height: `${ROW_HEIGHT}px`, lineHeight: `${ROW_HEIGHT}px` }}
    >
      <motion.div
        className="absolute left-0 right-0 top-0"
        animate={{y: - digit * ROW_HEIGHT}}
        style={{
          willChange: "transform",
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden"
        }}
      >
        {DIGITS.map((d) => (
          <div 
            key={d} 
            className="relative flex h-8 items-center justify-center select-none"
          >
            {d}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function RollingAge({ value }: { value: string }) {
  const characters = value.split("");

  return (
    <span
      className="flex items-center whitespace-nowrap tabular-nums"
      aria-label={value}
    >
      {characters.map((char, index) => {
        // Keep each position stable, counting from the right.
        const key = characters.length - 1 - index;

        return /\d/.test(char) ? (
          <RollingDigit key={key} digit={Number(char)} />
        ) : (
          <span key={key}>{char}</span>
        );
      })}
    </span>
  );
}

function Age({ precise, now, hovering, onMouseEnter, onMouseLeave }: AgeProps) {
  const ageInYears = (now - BIRTHDAY) / YEAR_IN_MS
  const wholeYears = Math.floor(ageInYears)

  const hasEight = (wholeYears === 18) || String(wholeYears).startsWith("8")

  if (precise) {
    return <RollingAge value={ageInYears.toFixed(8)} />
  }

  return (
    <span>
        {hasEight ? "An" : "A"} <span
          onMouseEnter={() => {
            console.debug("hi")
            onMouseEnter()
          }}
          onMouseLeave={onMouseLeave}
          className="relative cursor-pointer z-100 name-gradient font-bold">
            <AnimatePresence>
                {hovering && 
                <motion.div
                variants={animationVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{duration: 0.1}}
                
                className="absolute z-10 w-fit h-fit pr-2.5 pl-2.5 bg-gray-100 rounded-xl
                bottom-full left-1/2">
                  <span className="text-indigo-500"> <Age hovering={false} now={now} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} precise={true} /> </span>
                </motion.div>}
            </AnimatePresence>

          {Math.floor(ageInYears)}-year</span> old
      </span>
  )
}

const BIRTHDAY = new Date(2009, 2, 29).getTime()
const YEAR_IN_MS = 31536000000

function App() {
  const [hovering, setHovering] = useState<boolean>(false)
  const [now, setNow] = useState(() => Date.now())
  const timerRef = useRef<number | null>(null)

  const onMouseEnter = () => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current)
    }

    timerRef.current = window.setTimeout(() => setHovering(true), 200)
  }

  const onMouseLeave = () => {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current)
      timerRef.current = null
    }

    setHovering(false)
  }

  const [mouse, setMouse] = useState({x: 0, y: 0})
  const [touch, setTouch] = useState(false)

  const detectTouch = () => {
    setTouch(true)
    window.removeEventListener("touchstart", detectTouch)
  }

  const handleMouse = (event: MouseEvent) => {
      setMouse({x: event.clientX, y: event.clientY})
    }

  const experience = () => {
    const start = new Date(2022, 0, 1)
    const rightNow = new Date()

    const experienceInYears = rightNow.getFullYear() - start.getFullYear()

    return String(experienceInYears)
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouse)
    window.addEventListener("touchstart", detectTouch)
    const update = () => setNow(Date.now())
    
    update()
    const timer = window.setInterval(update, 200)

    return () => {
      window.removeEventListener("mousemove", handleMouse)
      window.removeEventListener("touchstart", detectTouch)
      window.clearInterval(timer)
    }
  }, [])

  return (
    <>
      
    </>
  )
}

export default App
