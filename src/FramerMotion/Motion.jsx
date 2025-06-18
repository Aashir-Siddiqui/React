import React from 'react'
import { motion } from "motion/react"

export default function Motion() {
  return (
    <div className='h-lvh bg-green-600'>
      <motion.div
      animate={{
        x:[0,1400,1400,0,0],
        y:[0,0,500,500,0]
      }}
      transition={{
        duration:4,
        delay:1
      }}
      className="w-10 h-10 bg-slate-800"
      >
      </motion.div>
    </div>
  )
}
