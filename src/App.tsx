import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar.tsx";
import { AnimatePresence, motion } from "motion/react";

const animationVariants = {
  initial: {
    x: "-50%",
    y: -5,
    opacity: 0
  },

  animate: {
    x: "-50%",
    y: -8,
    opacity: 1
  },

  exit: {
    x: "-50%",
    y: -5,
    opacity: 0
  },
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
    {touch ? null :
    <div className="absolute inset-0 z-10 h-25 aspect-square bg-gray-400/25 rounded-full blur-2xl pointer-events-none"
    style={{ left: mouse.x, top: mouse.y, transform: "translate(-50%, -50%)" }} />}

    <div className="absolute bg-indigo-500 rounded-full opacity-50 blur-2xl h-20" />

      <div className="flex flex-col h-screen overflow-x-hidden text-gray-500 font-bold
      scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-800">
        <Navbar />

        <div id="main" className="flex flex-col bg-zinc-900 h-full">
          {/* HERO */}

          <section id="about" className="h-screen m-10 scroll-mt-[calc(15vh+2.5rem)]">
            <div className="flex flex-col h-full w-5/7 sm:max-w-1/2 gap-5">
              {/* HERO TITLE */}

              <div className="border-b-2 border-white/25 h-fit pb-5">
                <h1 className="text-[5rem] sm:text-[10rem] text-white font-antonio">
                <span className="before:content-[] before:absolute before:inset-0 before:aspect-4/3 before:w-full before:bg-indigo-500
                before:blur-xl before:opacity-50 before:rounded-full before:-translate-1/2 before:left-1/2 before:top-1/2
                name-gradient pr-px">EASY</span>.DEV</h1>
                <p className="text-lg">Professional Roblox developer with 4+ years of scripting experience.</p>
              </div>

              {/* DESCRIPTION */}

              <div className="relative text-indigo-100 text-2xl sm:text-4xl font-medium">
                Hey There! I'm <span className="name-gradient font-bold">EasyDev</span>! <Age hovering={hovering} now={now} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} precise={false} /> Roblox
                scripter and game developer with <span className="name-gradient font-bold">{experience()}+</span> years of experience!
              </div>

            </div>
          </section>
          <div className="h-screen">hi!</div>
        </div>
      </div>
    </>
  )
}

export default App
