import { AnimateSharedLayout, motion } from 'framer-motion'
import Link from 'next/link'
import { _Animation_PageTransition } from '../globals'

const _Transition_CardHover = {
    scale: 1.02,
    transition: {
        easing: [0.06, 0.81, 0.15, 0.93],
        duration: 0.2
    }
}
const _Transition_CardTap = {
    scale: 0.98,
    transition: {
        easing: [0.06, 0.81, 0.15, 0.93],
        duration: 0.0
    }
}

const Card = ({ raceID }) => {
    return (
        <Link href={`./races/${raceID}`}>
            <motion.div
                whileHover={_Transition_CardHover}
                whileTap={_Transition_CardTap}
                className="card card-bordered shadow-md cursor-pointer">
                <figure>
                    <img src="https://images.unsplash.com/photo-1560223715-a7066e66f501?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
                </figure>
                <div className="card-body p-4">
                    {/* race name */}
                    <h2 className="card-title mb-0">75 Mile Race</h2>
                    <p className="mb-5">Florida Pigeon Derby</p>
                    <div className='grid grid-cols-2'>
                        {/* release time */}
                        <p>Status:</p>
                        <p className='text-right text-green-600'>Running</p>
                        {/* pigeon arrival count */}
                        <p>Arrivals:</p>
                        <p className='text-right '>2382</p>
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}

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
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-16 pt-10 gap-3'>

                <Card raceID={1000} />
                <Card raceID={1001} />
                <Card raceID={1002} />
                <Card raceID={1003} />
                <Card raceID={1004} />
            </div>

            {/* completed Races */}
            <p className="text-4xl">Completed Races</p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-16 pt-10 gap-3'>
                <Card raceID={1000} />
                <Card raceID={1001} />
                <Card raceID={1002} />
                <Card raceID={1003} />
                <Card raceID={1004} />
            </div>
        </motion.div>
    )
}

export default Races