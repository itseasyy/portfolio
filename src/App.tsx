import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.tsx";

function App() {
  const [mouse, setMouse] = useState({x: 0, y: 0})

  const handleMouse = (event: MouseEvent) => {
      setMouse({x: event.clientX, y: event.clientY})
    }

  useEffect(() => {
    window.addEventListener("mousemove", handleMouse)

    return () => {
      window.removeEventListener("mousemove", handleMouse)
    }
  }, [mouse])

  return (
    <>
    <div className="absolute inset-0 z-10 h-25 aspect-square bg-gray-400/25 rounded-full blur-2xl pointer-events-none"
    style={{ left: mouse.x, top: mouse.y, transform: "translate(-50%, -50%)" }} />

      <div className="flex flex-col h-screen overflow-x-hidden text-gray-500 font-bold
      scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-800">
        <Navbar />

        <div id="main" className="flex flex-col bg-zinc-900">
          <div className="w-screen h-50">hi</div>
          <div className="w-screen h-50">hi</div>
          <div className="w-screen h-50">hi</div>
          <div className="w-screen h-50">hi</div>
          <div className="w-screen h-50">hi</div>
          <div className="w-screen h-50">hi</div>
          <div className="w-screen h-50">hi</div>
          <div className="w-screen h-50">hi</div>
        </div>
      </div>
    </>
  )
}

export default App
