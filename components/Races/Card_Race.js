import Link from "next/link"
import { motion } from "framer-motion"

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

const Card_Race = ({ raceID }) => {
    return (
        <motion.div
            whileHover={_Transition_CardHover}
            whileTap={_Transition_CardTap}
            className="card card-bordered shadow-md cursor-pointer bg-green-900 bg-opacity-25">
            <figure>
                <img className='h-40 object-cover' src="https://images.unsplash.com/photo-1560223715-a7066e66f501?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
            </figure>
            <div className="card-body p-4">
                {/* race name */}
                <h2 className="card-title mb-0">75 Mile Race</h2>
                <p className="mb-5">Florida Pigeon Derby</p>
                <div className='grid grid-cols-2 text-sm'>
                    {/* release time */}
                    <p>Status:</p>
                    <p className='text-right text-green-600'>Running</p>
                    {/* pigeon arrival count */}
                    <p>Arrivals:</p>
                    <p className='text-right '>2382</p>
                </div>
                <Link href={`/races/${raceID}`}>
                    <button className="btn btn-block btn-sm btn-primary mt-5">View More</button>
                </Link>
            </div>
        </motion.div>
    )
}

export default Card_Race