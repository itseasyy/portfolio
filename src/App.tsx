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
      <div className="h-screen overflow-clip flex flex-col">
        {touch &&
        <div className="absolute inset-0 z-10 h-25 aspect-square bg-gray-400/25 rounded-full blur-2xl pointer-events-none"
        style={{ left: mouse.x, top: mouse.y, transform: "translate(-50%, -50%)" }} />}

        <Navbar />

        <div className="flex flex-col flex-1 min-h-0 bg-zinc-900 overflow-x-clip overflow-y-auto
          scrollbar-thin scrollbar-track-transparent scrollbar-thumb-zinc-600">
          
          {/* HERO SECTION */}

          <motion.section
          variants={topVariants}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="show"
          id="about" className="h-full shrink-0 p-10">
            
            <div className="relative w-3/4 max-w-225 flex flex-col gap-5 h-full">

              <motion.div
              variants={basicFloatIn}
              className="flex-1 sm:flex-3 bottom-separator font-bold">
                <h1 className="text-[5rem] sm:text-[10rem] text-white font-antonio">
                  <span className="before:content-[] before:absolute before:inset-0 before:aspect-4/3 before:w-full before:bg-indigo-500
                  before:blur-xl before:opacity-50 before:rounded-full before:-translate-1/2 before:left-1/2 before:top-1/2
                  name-gradient pr-px">EASY</span>.DEV</h1>

                <p className="text-lg text-white/50">Professional Roblox developer with 4+ years of scripting experience.</p>

              </motion.div>

              <motion.div
              variants={basicFloatIn}
              className="relative flex-1 text-indigo-100 text-2xl sm:text-4xl bottom-separator">
                Hey There! I'm <span className="name-gradient font-bold">EasyDev</span>! <Age hovering={hovering} now={now} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} precise={false} /> Roblox
                scripter and game developer with <span className="name-gradient font-bold">{experience()}+</span> years of experience!
              </motion.div>

              <motion.h1 variants={basicFloatIn} className="text-gray-400 italic font-medium text-xl">Some of the things I can offer:</motion.h1>
              <motion.div
              className="w-screen
                flex flex-wrap flex-2 gap-2.5">

                <Card title="Clean, and efficient code.">
                  I write <b>clean</b>, <b>maintainable</b> code that's easy to understand, debug, and extend, whether working <i>solo</i> or <i>as part of a team</i>.
                </Card>
                <Card title="Modular, Scalable, systems.">
                  I build <b>modular</b>, <b>scalable</b> systems that <i>integrate seamlessly</i> and work out of the box, prioritizing <i>usability</i> and <i>extensibility</i>.
                </Card>
                <Card title="Object-Oriented Programming (OOP)">
                  I apply <b>object-oriented programming (OOP)</b> principles to structure code into reusable classes and objects, improving <i>readability</i>, <i>maintainability</i>, and <i>scalability</i>.
                </Card>
                <Card title="Custom Gameplay Systems.">
                  I build <i>custom gameplay systems</i> from the ground up, including <b>combat</b>, <b>inventory</b>, and <b>progression</b>, tailored to your game.
                </Card>

              </motion.div>

            </div>

          </motion.section>

          <section id="works" className="h-full shrink-0"></section>

          <div className="h-25 border-t-2 mx-2 shrink-0 w-full text-zinc-600 p-5 flex flex-col items-center justify-center">
            <span>Made with <b>love</b> by a human. Some paragraphs were refined with AI.</span>
            <div className="flex justify-around w-full">
              <span>Property of <a href="https://x.com/easydev_rblx" target="_blank" className="hyperlink">@easydev_rblx</a>.</span>
              <span>Contact via: <a href="https://x.com/easydev_rblx" target="_blank" className="hyperlink">Twitter</a>
              , <a href="https://discord.com/users/702157796023468193" target="_blank" className="hyperlink">Discord</a>
              , or <a href="mailto:easydev.work@gmail.com" target="_blank" className="hyperlink">Email</a></span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
