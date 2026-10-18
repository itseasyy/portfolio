import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, stagger } from "motion/react";
import Card from "./components/Card.tsx";
import Navbar from "./components/Navbar.tsx";

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
      <div className="h-fit min-h-screen text-white font-roboto">
        <div className="absolute -z-10 inset-0 w-full h-full bg-grid bg-size-[20px_20px] opacity-25 mask-[radial-gradient(ellipse_at_top,black_20%,transparent_75%)]" />
        <Navbar />

        <section id="top" className="h-full min-h-[90vh] scroll-m-[10vh] px-5 py-3">
          hi
        </section>

        <section id="about" className="h-full scroll-m-[10vh] min-h-[90vh] px-5 py-3">
          about me blah blah blah Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque omnis quod officia tenetur. Architecto quas sequi quod saepe iure voluptates laudantium a eos? Fuga fugiat sed tempora recusandae enim magni.
        </section>
      </div>
    </>
  )
}

export default App
