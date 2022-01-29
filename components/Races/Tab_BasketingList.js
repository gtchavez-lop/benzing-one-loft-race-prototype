import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import { _Animation_TabTransition } from '../../pages/globals'
import Card from './Card_BasketingList'

const Tab_BasketingList = e => {
    return (
        <motion.div
            className="mt-8"
            variants={_Animation_TabTransition}
            initial="initial" animate="animate" exit="exit">
            <p className="text-4xl text-center md:text-left mb-5">Basketing List</p>

            <div className="form-control mb-10 w-full lg:w-1/2">
                <label className="label">
                    <span className="label-text">Filter Entries</span>
                </label>
                <input type="text" placeholder="Fancier Name or Pigeon ID" className="input input-primary input-bordered" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </motion.div>
    )
}

export default Tab_BasketingList