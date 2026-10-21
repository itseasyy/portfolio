import { motion, stagger } from "motion/react";
import Navbar from "./components/Navbar.tsx";
import LetsWork from "./components/LetsWork.tsx";

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

function App() {
  return (
    <>
      <motion.div
      variants={topVariants}
      // viewport={{ once: true }}
      animate="show"
      initial="hidden"
      className="h-fit min-h-screen text-white font-roboto">
        <div className="absolute z-[-999] inset-0 w-full h-full halftone" />
        <Navbar />

        <section id="top" className="relative section">
          {/* BLOBS */}

          <div className="h-full w-full shrink-0 absolute inset-0">
            <div className="blob-indigo-500 h-[30vh] aspect-3/2 absolute left-1/2 -translate-x-1/2 top-0 opacity-35" />
            <div className="blob-indigo-600 h-[15vh] aspect-3/2 absolute left-0 -translate-y-1/2 top-1/2 opacity-35" />
            <div className="blob-indigo-400 h-[20vh] aspect-3/2 absolute right-0 -translate-y-[calc(50%-100px)] top-1/2 opacity-35" />
          </div>

          {/* HERO */}

          <div className="@container flex flex-col justify-center items-center
          h-[50svh] w-[50svh] absolute top-1/2 left-1/2 -translate-1/2 px-5 py-3">

            <motion.div
            variants={basicFloatIn}
            className="flex justify-center items-center gap-2.5 text-sm font-inter text-white/80 rounded-full bg-gray-700/25 border border-gray-700 px-5 py-1">
              <span className="size-1.5 bg-running rounded-full" />Advanced scripter · avaliable for work
            </motion.div>
            <motion.h1 variants={basicFloatIn} className="text-[clamp(5rem,10cqi,10rem)] font-bold"><span className="glow-gradient before:rounded-full before:opacity-50 name-gradient">Easy</span>Dev</motion.h1>
            <motion.p variants={basicFloatIn}
            className="text-white/80 text-sm sm:text-lg w-full font-medium text-center">Professional Roblox scripter with <span className="name-gradient font-bold">4+</span> of experience in <b>Luau</b>, based in <span className="name-gradient font-bold">Egypt</span>. I specialize in <b>system development</b>, and <b>game logic</b>. I'm looking to apply my skills to new projects and collaborate with other developers to bring games to life.</motion.p>
            <div className="flex h-20 justify-center gap-2.5 items-center w-full py-3">
              <motion.div variants={basicFloatIn} className="h-full w-fit"><LetsWork /></motion.div>
              <motion.a
              variants={basicFloatIn}
              whileHover={{y: -1, scale: 1.02}}
              href="#about"
              className="flex justify-center items-center h-full w-fit shrink-0 rounded-xl border border-white bg-black px-4">Learn More</motion.a>
            </div>

            <motion.div variants={topVariants} className="flex justify-center items-center w-full py-2 px-1 gap-2.5 text-sm">
              <motion.div variants={basicFloatIn} className="font-inter text-white/80 rounded-full bg-gray-700/25 border border-gray-700 px-5 py-1">
                Luau/Lua
              </motion.div>
              <motion.div variants={basicFloatIn} className="font-inter text-white/80 rounded-full bg-gray-700/25 border border-gray-700 px-5 py-1">
                JS/TS
              </motion.div>
              <motion.div variants={basicFloatIn} className="font-inter text-white/80 rounded-full bg-gray-700/25 border border-gray-700 px-5 py-1">
                C#
              </motion.div>
              <motion.div variants={basicFloatIn} className="font-inter text-white/80 rounded-full bg-gray-700/25 border border-gray-700 px-5 py-1">
                Python
              </motion.div>
            </motion.div>

          </div>

          <a href="#about" className="absolute bottom-0 left-1/2 -translate-x-1/2 h-fit w-fit -translate-y-10 text-white/50 cursor-pointer hover:text-white/80 transition-colors duration-100 ease-in"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg></a>
        </section>

        <section id="about" className="relative section">
          <div className="absolute inset-0 -z-999 w-full h-full halftone-variant" />

          {/* BLOBS */}

          <div className="h-full w-full shrink-0 absolute inset-0">
            <div className="blob-indigo-500 h-[40vh] aspect-square absolute left-0 -translate-x-30 -translate-y-1/2 top-1/3 opacity-15" />
            <div className="blob-indigo-600 h-[15vh] aspect-3/2 absolute left-0 -translate-y-1/2 top-1/2 opacity-35" />
            <div className="blob-indigo-400 h-[20vh] aspect-3/2 absolute right-0 bottom-1/3 opacity-35" />
          </div>

          {/* ABOUT ME */}

          <div className="flex h-full w-full p-10 items-stretch">
            <div className="@container flex flex-col gap-10 flex-1 h-full">
              <h1 className="text-[clamp(1rem,10cqi,5rem)] font-mono font-bold flex gap-4 border-b-2 border-b-white/20"><span className="name-gradient">About</span>me.</h1>
              
              <div className="flex flex-col gap-2.5 text-white/80">
                
                <span className="italic text-paragraph font-mono font-light text-white/50">-Who am I?</span>
                <p className="text-paragraph font-sans">Hi, I'm <span className="name-gradient">Easy</span>Dev, a 17-year-old Roblox scripter from Egypt with <i>years of experience</i> in <b>Luau</b>, <b>Python</b>, <b>C#</b>, and <i>some</i> <b>Java</b>.</p>
                
                <span className="italic text-paragraph font-mono font-light text-white/50">-What's my story?</span>
                <p className="text-paragraph font-sans">I've <b>loved</b> game development from a young age, exploring <i>Unity</i> and <i>Godot</i> before finding my place in <b>Roblox</b>. Scripting quickly became my favorite and <i>strongest</i> skill, and I'm excited to turn my passion into a career.</p>
                
                <span className="italic text-paragraph font-mono font-light text-white/50">-What are my goals?</span>
                <p className="text-paragraph font-sans">My goal is to <i>consistently</i> deliver high-quality, reliable systems that exceed expectations. I strive to <i>grow</i> as a developer, tackle <i>new challenges</i>, and bring <i>real value</i> to every project I work on. I'm committed to <b>clear communication</b>, <b>continuous improvement</b>, and helping the teams I work with <i>turn ambitious ideas into reality</i>.</p>
              
              </div>
            </div>

            {/* CIRCLES */}

            <div className="relative hidden sm:block flex-1 p-10">
              <motion.div
              initial={{
                boxShadow: "inset 0 0 0 3px var(--color-indigo-600)"
              }}
              whileHover={{
                scale:1.05,
                boxShadow: "inset 0 0 0 5px var(--color-indigo-600)",
                opacity: 0.4
              }}
              className="absolute bottom-0 h-2/5 aspect-square rounded-full bg-transparent opacity-25" />
              <motion.div
              initial={{
                boxShadow: "inset 0 0 0 3px var(--color-indigo-600)"
              }}
              whileHover={{
                scale:1.05,
                boxShadow: "inset 0 0 0 5px var(--color-indigo-600)",
                opacity: 0.4
              }}
              className="absolute right-0 top-0 h-3/5 aspect-square rounded-full bg-transparent opacity-25" />
            </div>
          </div>
        </section>
      </motion.div>
    </>
  )
}

export default App
