"use client"
import { motion } from "framer-motion"

const variants = {
hidden: { opacity: 0, x: 0, y: -100},
enter: { opacity: 1, x: 0, y: 0 },
}

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    children
  )
}
