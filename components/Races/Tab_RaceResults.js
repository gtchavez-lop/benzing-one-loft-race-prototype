import { motion } from 'framer-motion'
import { _Animation_TabTransition } from '../../global/_Animations'

const Tab_RaceResults = e => {
    return (
        <motion.div
            className="mt-8"
            variants={_Animation_TabTransition}
            initial="initial" animate="animate" exit="exit">
            <p className="text-4xl text-center md:text-left mb-5">Race Results</p>
            <div className='flex justify-center items-center h-64'>
                <p className='text-red-500 text-2xl'>Race in Progress</p>
            </div>
        </motion.div>
    )
}

export default Tab_RaceResults