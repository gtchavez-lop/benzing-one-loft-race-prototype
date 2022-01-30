import { motion } from 'framer-motion'
import { _Animation_TabTransition } from '../../global/_Animations'
import Card_Race from '../../components/Races/Card_Race'

const Tab_Races = e => {
    return (
        <motion.div
            className="mt-8"
            variants={_Animation_TabTransition}
            initial="initial" animate="animate" exit="exit">
            <p className="text-4xl text-center md:text-left mb-5">Races</p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                <Card_Race raceID={1000} />
                <Card_Race raceID={1000} />
                <Card_Race raceID={1000} />
                <Card_Race raceID={1000} />
            </div>
        </motion.div>
    )
}

export default Tab_Races