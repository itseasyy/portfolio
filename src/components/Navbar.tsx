import Works from "../assets/works.svg"
import Home from "../assets/home.svg"
import Info from "../assets/info.svg"
import Contact from "../assets/contact.svg"
import Terms from "../assets/terms.svg"
import { useState } from "react"

function Navbar() {
    return (
        <div className="sticky inset-2.5 w-full h-25 m-2.5 z-100 rounded-full backdrop-blur-sm">
            <div className="absolute w-full h-full rounded-full p-0.5
            bg-stroke opacity-70">
                <div className="w-full h-full bg-black-100 rounded-full"></div>
            </div>
            <div className="p-5 h-full w-full flex flex-row items-center text-white opacity-70 font-medium text-2xl">
                <div>EASY.DEV</div>
                <div className="relative w-full h-full flex flex-row-reverse p-2.5">
                    <div className="relative hidden md:flex md:flex-row-reverse">
                        <div className="absolute top-0 h-[calc(100%+20px)] -translate-y-2.5 w-45 -z-10 bg-stroke-bland p-0.5 opacity-70 rounded-full transition-all duration-150 ease-in-out"
                        style={{left: 202*4}}>
                            <div className="w-full h-full bg-[#666666] rounded-full" />
                        </div>

                        <div className="h-full flex flex-row gap-2.5 items-center">
                            <a href="#home" className="button">
                                <img src={Home} className="h-full aspect-square text-white" />
                                Home
                            </a>
                            <div className="divide bg-white hidden lg:flex" />
                            <a href="#about" className="button hidden lg:flex">
                                <img src={Info} className="h-full aspect-square text-white" />
                                About
                            </a>
                            <div className="divide bg-white" />
                            <a href="#works" className="button">
                                <img src={Works} className="h-full aspect-square text-white" />
                                Works
                            </a>
                            <div className="divide bg-white hidden lg:flex" />
                            <a href="#contact" className="button hidden lg:flex">
                                <img src={Contact} className="h-full aspect-square text-white" />
                                Contact
                            </a>
                            <div className="divide bg-white" />
                            <a href="#terms" className="button">
                                <img src={Terms} className="h-full aspect-square text-white" />
                                Terms
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
