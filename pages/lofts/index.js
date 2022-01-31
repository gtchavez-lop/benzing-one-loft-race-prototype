import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { _Animation_PageTransition } from '../../global/_Animations'
import { FiGrid, FiList } from 'react-icons/fi'
import { useState } from 'react'

const LoftCard = ({ loftID }) => {
    return (
        <>
            <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 1, transition: { duration: 0 } }}
                className="card card-bordered shadow-md cursor-pointer bg-green-900 bg-opacity-25">
                <figure>
                    <img className='h-40 object-cover' src="https://picsum.photos/id/1005/400/250" />
                </figure>
                <div className="card-body p-4">
                    <h2 className="card-title"> AS Golden Pigeon Race </h2>
                    <div className='flex flex-col gap-3'>
                        <div className='grid grid-cols-2 text-sm'>
                            <p>Operator</p>
                            <p>George and Dimitrios Aslanidis</p>
                        </div>
                        <div className='grid grid-cols-2 text-sm'>
                            <p>Registered Pigeons</p>
                            <p>996</p>
                        </div>
                        <div className='grid grid-cols-2 text-sm'>
                            <p>Website</p>
                            <p>www.aspigeons.com</p>
                        </div>
                    </div>

                    <Link href={`./lofts/${loftID}`} passHref>
                        <button className="btn btn-block btn-sm btn-primary mt-7">View More</button>
                    </Link>
                </div>
            </motion.div>
        </>
    )
}

const Lofts = e => {

    const [_viewMode, _setViewMode] = useState('list')

    return (
        <>
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
                        <p className="text-4xl">Registered Lofts</p>
                        <p className="mt-3">This is where all registered lofts are listed</p>
                    </div>
                    <div className='flex justify-end items-center gap-2'>
                        <p className='text-xs'>View Style</p>

                        <AnimatePresence>
                            {_viewMode === 'list' ? (
                                <button onClick={() => _setViewMode('grid')}
                                    className={`btn btn-ghost btn-circle `}>
                                    <FiGrid size={20} />
                                </button>
                            ) : (
                                <button onClick={() => _setViewMode('list')}
                                    className={`btn btn-ghost btn-circle`}>
                                    <FiList size={20} />
                                </button>
                            )}
                        </AnimatePresence>
                    </div>
                </div>



                <div className='grid grid-cols-1 md:grid-cols-4  mt-10 mb-16 gap-2'>
                    <div className="form-control col-span-2">
                        <label className="label">
                            <span className="label-text">Filter Search</span>
                        </label>
                        <input type="text" placeholder="Loft Name" className="input input-bordered" />
                    </div>
                    <div className=' col-span-1' />
                    <div>
                        <label className="label">
                            <span className="label-text">Sort by</span>
                        </label>
                        <select className="select select-bordered w-full ">
                            <option> 🔼 Loft Name</option>
                            <option> 🔽 Loft Name</option>
                            <option> 🔼 Basketing Count</option>
                            <option> 🔽 Basketing Count</option>
                            <option> 🔼 Date Registered</option>
                            <option> 🔽 Date Registered</option>
                            <option> 🔼 Participating Loft</option>
                            <option> 🔽 Participating Loft</option>
                            <option> 🔼 Status</option>
                            <option> 🔽 Status</option>
                        </select>
                    </div>
                </div>

                <AnimatePresence exitBeforeEnter>
                    {_viewMode === 'list' && (
                        <motion.div variants={_Animation_PageTransition}
                            initial="initial" animate="animate"
                            className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                            <LoftCard loftID={11010101} />
                            <LoftCard loftID={11010101} />
                            <LoftCard loftID={11010101} />
                            <LoftCard loftID={11010101} />
                            <LoftCard loftID={11010101} />
                        </motion.div>
                    )}

                </AnimatePresence>
                <AnimatePresence>
                    {_viewMode === 'grid' && (
                        <motion.div variants={_Animation_PageTransition}
                            initial="initial" animate="animate"
                            className="overflow-x-auto mb-16">
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
                        </motion.div>

                    )}
                </AnimatePresence>
            </motion.div>
        </>
    )
}

export default Lofts