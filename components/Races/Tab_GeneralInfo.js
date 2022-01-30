import dayjs from 'dayjs'
import { motion } from 'framer-motion'
import { _Animation_TabTransition } from '../../global/_Animations'
// import { ArrowsExpandIcon, ClockIcon, LocationMarkerIcon, SaveIcon, TrendingUpIcon } from '@heroicons/react/outline'
import { FiArchive, FiArrowDownLeft, FiClock, FiExpa, FiMapPin, FiTrendingUp } from 'react-icons/fi'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const Tab_GeneralInfo = e => {
    return (
        <motion.div
            className="mt-8 mb-16"
            variants={_Animation_TabTransition}
            initial="initial" animate="animate" exit="exit">
            <p className="text-4xl text-center md:text-left">General Information</p>


            <div className='mt-5 '>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <img src='https://images.unsplash.com/photo-1560223715-a7066e66f501?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' alt="completion rate" className="w-full h-48 lg:h-64 object-cover rounded" />
                    <div className='w-full md:flex md:flex-col md:justify-center'>
                        <div className='grid grid-cols-2 md:flex md:flex-col w-full gap-2 md:gap-0'>
                            <p className='text-right text-xl md:text-left text-green-400'>Race Name</p>
                            <p className='text-xl md:ml-5'>75 Mile Race</p>
                        </div>
                        <div className='grid grid-cols-2 md:flex md:flex-col w-full gap-2 md:gap-0 mt-2 md:mt-5'>
                            <p className='text-right text-xl md:text-left text-green-400'>Participating Loft</p>
                            <p className='text-xl md:ml-5'>Florida Pigeon Derby</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* table */}
            <p className='mt-10 md:mt-20 text-2xl mb-5'>General Status</p>
            <div className='flex flex-col gap-5 lg:flex-row w-full items-center justify-center'>
                {/* completion rate */}
                <div className='relative flex flex-col justify-center lg:py-20 lg:my-0 w-full lg:w-1/2 h-full overflow-hidden my-5'>
                    <CircularProgressbar
                        styles={buildStyles({
                            pathColor: '#1EB854',
                            trailColor: '#151f10',
                            textColor: '#1EB854',
                        })}
                        strokeWidth={10}
                        className='max-h-36'
                        value={500}
                        maxValue={2196}
                        text={`${((500 / 2196) * 100).toFixed(1)}%`} />
                    <p className='text-center text-2xl mt-5 w-full'>Race Completion Rate</p>
                </div>

                {/* general detail */}
                <div className='flex flex-col gap-4 w-full md:w-3/4 lg:w-1/2 justify-between'>
                    <motion.div className='relative flex flex-col border-2 border-green-900 p-2 px-5 rounded'>
                        <p className="text-2xl">Release Point</p>
                        <p className="text-lg ml-10 text-pink-500">75 Miles JR</p>
                        <FiMapPin size={`2.5rem`} className='absolute right-3 top-1/2 -translate-y-1/2 opacity-10' />
                    </motion.div>
                    <motion.div className='relative flex flex-col border-2 border-green-900 p-2 px-5 rounded'>
                        <p className="text-2xl">Distance</p>
                        <p className="text-lg ml-10 text-orange-500">75 Miles / 120.701 Kilometers</p>
                        <FiTrendingUp size={`2.5rem`} className='absolute right-3 top-1/2 -translate-y-1/2 opacity-10' />
                    </motion.div>
                    <motion.div className='relative flex flex-col border-2 border-green-900 p-2 px-5 rounded'>
                        <p className="text-2xl">Release Time</p>
                        <p className="text-lg ml-10 text-yellow-500">{dayjs('January 8 2022').format('MMM D YYYY - hh:mm:ssa - Z')}</p>
                        <FiClock size={`2.5rem`} className='absolute right-3 top-1/2 -translate-y-1/2 opacity-10' />
                    </motion.div>
                    <motion.div className='relative flex flex-col border-2 border-green-900 p-2 px-5 rounded'>
                        <p className="text-2xl">Basketed Pigeons</p>
                        <p className="text-lg ml-10 text-blue-500">2196</p>
                        <FiArchive size={`2.5rem`} className='absolute right-3 top-1/2 -translate-y-1/2 opacity-10' />
                    </motion.div>
                    <motion.div className='relative flex flex-col border-2 border-green-900 p-2 px-5 rounded'>
                        <p className="text-2xl">Arrived Pigeons</p>
                        <p className="text-lg ml-10 text-teal-500">2</p>
                        <FiArrowDownLeft size={`2.5rem`} className='absolute right-3 top-1/2 -translate-y-1/2 opacity-10' />
                    </motion.div>

                    {/* <p className="text-lg">Race Completion Rate</p>
                    <p className="text-lg">{((2 / 2196) * 100).toFixed(2)}%</p> */}


                </div>
            </div>
        </motion.div>
    )
}

export default Tab_GeneralInfo