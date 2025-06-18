import React from 'react'
import { motion } from "motion/react"

export default function Button() {
    return (
        <div className='w-full h-lvh bg-neutral-900 [prespective::1000px] transform-perserve-3d flex items-center justify-center'
            style={{
                backgroundImage: `radial-gradient(circle at 0.5px 0.5px, rgba(6, 182, 212, 0.2) 0.5px) transparent 0`,
                backgroundSize: "8px 8px",
                backgroundRepeat: "repeat",
            }}
        >
            <motion.button
                whileHover={{
                    rotateX: 25,
                    rotateY: 10,
                    boxShadow: "0px 20px 50px rgba(8, 112, 184, 0.7)",
                    y: -5,
                }}
                whileTap={{
                    y: 0,
                }}
                style={{
                    translateZ: 100,
                }}
                className='group relative text-white rounded-lg bg-black px-12 py-4
                shadow-[0px_1px_2px_0px_rgba(255,255,255,0.1)_inset, 0px_-1px_2px_0px_rgba(255,255,255,0.1) inset]'
            >
                Contact
                <span className='absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent bg-cyan-500 to-transparent h-px w-3/4 mx-auto'></span>
                <span className='absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-px bg-gradient-to-r from-transparent bg-cyan-500 to-transparent h-[4px] w-full mx-auto blur-sm'></span>
            </motion.button>

        </div>
    )
}
