import { motion } from 'framer-motion'
import { _Animation_TabTransition } from '../../global/_Animations'

const Tab_Fanciers = e => {
    return (
        <motion.div
            className="mt-8"
            variants={_Animation_TabTransition}
            initial="initial" animate="animate" exit="exit">
            <p className="text-4xl text-center md:text-left mb-5">Registered Fanciers</p>
        </motion.div>
    )
}

export default Tab_Fanciers