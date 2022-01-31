import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import Link from 'next/link'
import { _Animation_PageTransition, _Animation_TabTransition } from '../../global/_Animations'
import Card_Race from '../../components/Races/Card_Race'
import { FiGrid, FiList } from 'react-icons/fi'
import { useState } from 'react'




const Races = e => {

    const [_viewMode, _setViewMode] = useState('grid')

    return (
        <motion.div
            variants={_Animation_PageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
            className="min-h-screen px-5 md:px-10 lg:px-40 pt-28 mb-10"
        >
            {/* current Races */}

            <div className='grid grid-cols-3 my-3'>
                <div className=' col-span-2'>
                    <p className="text-4xl">Current Races</p>
                    <p className="mt-3">This is where all races are listed</p>
                </div>
                <div className='flex justify-end items-center gap-2'>
                    <p className='text-xs'>View Style</p>

                    <AnimatePresence>
                        {_viewMode === 'list' ? (
                            <button onClick={() => _setViewMode('grid')}
                                className={`btn btn-ghost btn-circle`}>
                                <FiList size={20} />
                            </button>
                        ) : (
                            <button onClick={() => _setViewMode('list')}
                                className={`btn btn-ghost btn-circle `}>
                                <FiGrid size={20} />
                            </button>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 mt-10 mb-16 gap-2'>
                <div className="form-control col-span-2">
                    <label className="label">
                        <span className="label-text">Filter Search</span>
                    </label>
                    <input type="text" placeholder="Race Name" className="input input-bordered" />
                </div>
                <div className=' col-span-1' />
                <div>
                    <label className="label">
                        <span className="label-text">Sort by</span>
                    </label>
                    <select className="select select-bordered w-full ">
                        <option> 🔼 Date Registered</option>
                        <option> 🔽 Date Registered</option>
                        <option>🔼 Status</option>
                        <option>🔽 Status</option>
                        <option>🔼 Basketing Count</option>
                        <option>🔽 Basketing Count</option>
                        <option> 🔼 Race Name</option>
                        <option> 🔽 Race Name</option>
                        <option> 🔼 Participating Loft</option>
                        <option> 🔽 Participating Loft</option>
                    </select>
                </div>
            </div>

            {/* grid view */}
            <AnimatePresence exitBeforeEnter>
                {_viewMode === 'grid' && (
                    <motion.div variants={_Animation_PageTransition}
                        initial="initial" animate="animate"
                        className=''>
                        {/* card */}
                        <div className='grid grid-cols-1 md:grid-cols-4 mb-32 gap-3'>
                            <Card_Race raceID={1000} />
                            <Card_Race raceID={1001} />
                            <Card_Race raceID={1002} />
                            <Card_Race raceID={1003} />
                            <Card_Race raceID={1004} />
                        </div>

                        {/* completed Races */}
                        <p className="text-4xl mb-10">Completed Races</p>
                        <div className='grid grid-cols-1 md:grid-cols-4 gap-3'>
                            <Card_Race raceID={1000} />
                            <Card_Race raceID={1001} />
                            <Card_Race raceID={1002} />
                            <Card_Race raceID={1003} />
                            <Card_Race raceID={1004} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence exitBeforeEnter>
                {_viewMode === 'list' && (
                    <motion.div variants={_Animation_PageTransition}
                        initial="initial" animate="animate" className=''>
                        <div className="overflow-x-auto mb-16">
                            <table className="table w-full table-compact">
                                <thead>
                                    <tr>
                                        <th>Race Name</th>
                                        <th>Loft</th>
                                        <th>Status</th>
                                        <th>Arrivals</th>
                                        <th />
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>75 Mile Race</td>
                                        <td>Florida Pigeon Derby</td>
                                        <td>Running</td>
                                        <td>2382</td>
                                        <td>
                                            <Link href={`/races/${1000}`}>
                                                <button className='btn btn-primary btn-sm'>View More</button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>75 Mile Race</td>
                                        <td>Florida Pigeon Derby</td>
                                        <td>Running</td>
                                        <td>2382</td>
                                        <td>
                                            <Link href={`/races/${1000}`}>
                                                <button className='btn btn-primary btn-sm'>View More</button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>75 Mile Race</td>
                                        <td>Florida Pigeon Derby</td>
                                        <td>Running</td>
                                        <td>2382</td>
                                        <td>
                                            <Link href={`/races/${1000}`}>
                                                <button className='btn btn-primary btn-sm'>View More</button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>75 Mile Race</td>
                                        <td>Florida Pigeon Derby</td>
                                        <td>Running</td>
                                        <td>2382</td>
                                        <td>
                                            <Link href={`/races/${1000}`}>
                                                <button className='btn btn-primary btn-sm'>View More</button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>75 Mile Race</td>
                                        <td>Florida Pigeon Derby</td>
                                        <td>Running</td>
                                        <td>2382</td>
                                        <td>
                                            <Link href={`/races/${1000}`}>
                                                <button className='btn btn-primary btn-sm'>View More</button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>75 Mile Race</td>
                                        <td>Florida Pigeon Derby</td>
                                        <td>Running</td>
                                        <td>2382</td>
                                        <td>
                                            <Link href={`/races/${1000}`}>
                                                <button className='btn btn-primary btn-sm'>View More</button>
                                            </Link>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>

                        {/* completed Race */}
                        <div className="overflow-x-auto mb-16">
                            <p className='text-2xl mb-6'>Completed Races</p>
                            <table className="table w-full table-compact">
                                <thead>
                                    <tr>
                                        <th>Race Name</th>
                                        <th>Loft</th>
                                        <th>Status</th>
                                        <th>Arrivals</th>
                                        <th />
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>75 Mile Race</td>
                                        <td>Florida Pigeon Derby</td>
                                        <td>Running</td>
                                        <td>2382</td>
                                        <td>
                                            <Link href={`/races/${1000}`}>
                                                <button className='btn btn-primary btn-sm'>View More</button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>75 Mile Race</td>
                                        <td>Florida Pigeon Derby</td>
                                        <td>Running</td>
                                        <td>2382</td>
                                        <td>
                                            <Link href={`/races/${1000}`}>
                                                <button className='btn btn-primary btn-sm'>View More</button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>75 Mile Race</td>
                                        <td>Florida Pigeon Derby</td>
                                        <td>Running</td>
                                        <td>2382</td>
                                        <td>
                                            <Link href={`/races/${1000}`}>
                                                <button className='btn btn-primary btn-sm'>View More</button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>75 Mile Race</td>
                                        <td>Florida Pigeon Derby</td>
                                        <td>Running</td>
                                        <td>2382</td>
                                        <td>
                                            <Link href={`/races/${1000}`}>
                                                <button className='btn btn-primary btn-sm'>View More</button>
                                            </Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>75 Mile Race</td>
                                        <td>Florida Pigeon Derby</td>
                                        <td>Running</td>
                                        <td>2382</td>
                                        <td>
                                            <Link href={`/races/${1000}`}>
                                                <button className='btn btn-primary btn-sm'>View More</button>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default Races