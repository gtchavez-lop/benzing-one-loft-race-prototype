import { motion } from 'framer-motion';
import { _Animation_PageTransition } from "../global/_Animations"

export default function Home() {
  return (
    <motion.div
      variants={_Animation_PageTransition}
      initial="initial"
      animate="animate"
      exit="exit" >
      <div className=" min-h-screen flex flex-col justify-center items-center">
        <p className="text-2xl">This is a Landing Page</p>
      </div>
      <div className=" min-h-screen flex flex-col justify-center items-center">
        <p className="text-2xl">This is a where the summary of the website kicks in</p>
      </div>
    </motion.div>
  )
}
