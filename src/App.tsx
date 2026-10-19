import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, stagger } from "motion/react";
import Card from "./components/Card.tsx";
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
          h-fit w-fit min-h-[30vh] min-w-[30vw] absolute top-1/2 left-1/2 -translate-1/2 px-5 py-3">

            <motion.div
            variants={basicFloatIn}
            className="flex justify-center items-center gap-2.5 text-md font-inter text-white/80 rounded-full bg-gray-700/25 border border-gray-700 px-5 py-1">
              <span className="size-1.5 bg-running rounded-full" />Advanced scripter · avaliable for work
            </motion.div>
            <motion.h1 variants={basicFloatIn} className="text-[clamp(5rem,10cqi,10rem)] font-bold"><span className="glow-gradient before:rounded-full before:opacity-50 name-gradient">Easy</span>Dev</motion.h1>
            <motion.p variants={basicFloatIn} className="text-white/80 text-lg font-medium text-center">Professional Roblox scripter with <span className="name-gradient font-bold">4+</span> of experience in <b>Luau</b>, based in <span className="name-gradient font-bold">Egypt</span>. I specialize in <b>system development</b>, and <b>game logic</b>. I'm looking to apply my skills to new projects and collaborate with other developers to bring games to life.</motion.p>
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

        <section id="about" className="section">
          about me blah blah blah Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque omnis quod officia tenetur. Architecto quas sequi quod saepe iure voluptates laudantium a eos? Fuga fugiat sed tempora recusandae enim magni.
        </section>
      </motion.div>
    </>
  )
}

export default App
