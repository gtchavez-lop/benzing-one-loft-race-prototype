import { AnimateSharedLayout, motion } from 'framer-motion'
import Link from 'next/link'
import { _Animation_PageTransition } from '../../global/_Animations'
import Card_Race from '../../components/Races/Card_Race'




const Races = e => {
    return (
        <motion.div
            variants={_Animation_PageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-screen px-5 md:px-10 lg:px-40 pt-28 mb-10"
        >
            {/* current Races */}
            <p className="text-4xl">Current Races</p>
            <p className="my-3">This is where all races are listed</p>
            <div className="form-control w-1/2 mt-10">
                <label className="label">
                    <span className="label-text">Filter Search</span>
                </label>
                <input type="text" placeholder="Race Name" className="input input-bordered" />
            </div>


            {/* card */}
            <div className='grid grid-cols-1 md:grid-cols-3 mb-16 pt-10 gap-3'>

                <Card_Race raceID={1000} />
                <Card_Race raceID={1001} />
                <Card_Race raceID={1002} />
                <Card_Race raceID={1003} />
                <Card_Race raceID={1004} />
            </div>

            {/* completed Races */}
            <p className="text-4xl">Completed Races</p>
            <div className='grid grid-cols-1 md:grid-cols-3 mb-16 pt-10 gap-3'>
                <Card_Race raceID={1000} />
                <Card_Race raceID={1001} />
                <Card_Race raceID={1002} />
                <Card_Race raceID={1003} />
                <Card_Race raceID={1004} />
            </div>
        </motion.div>
    )
}

export default Races