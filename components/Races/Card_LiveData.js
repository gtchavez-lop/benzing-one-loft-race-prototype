import { FiX } from "react-icons/fi"
import dayjs from "dayjs"
import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import { motion } from "framer-motion"
import Flag from 'react-world-flags'

import { _Animation_BottomMenu } from "../../global/_Animations"

const _Animation_ShowDetail = {
    initial: { opacity: 0, },
    animate: { opacity: 1, },
    exit: { opacity: 0, }
}

const _FancierData = ({ closeHandler }) => {
    console.log('_FancierData')
    return (
        <motion.div
            variants={_Animation_BottomMenu}
            initial="initial" animate="animate" exit="exit"
            className="fixed w-screen h-full bg-gray-900 bg-opacity-50 bottom-0 left-0 z-30">
            <div className="absolute bottom-0 left-0 h-3/4 w-full bg-slate-900">
                <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content ">
                    <div className="lg:px-40 navbar-start">
                        <button className="btn btn-square mr-5" onClick={closeHandler}>
                            <FiX className="w-7 h-7" />
                        </button>
                        <span className="text-lg font-bold">
                            Fancier Data
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

const _PigeonData = ({ closeHandler }) => {
    console.log('_FancierData')
    return (
        <motion.div
            variants={_Animation_BottomMenu}
            initial="initial" animate="animate" exit="exit"
            className="fixed w-screen h-full bg-gray-900 bg-opacity-50 bottom-0 left-0 z-30">
            <div className="absolute bottom-0 left-0 h-3/4 w-full bg-slate-900">
                <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content ">
                    <div className="lg:px-40 navbar-start">
                        <button className="btn btn-square mr-5" onClick={closeHandler}>
                            <FiX className="w-7 h-7" />
                        </button>
                        <span className="text-lg font-bold">
                            Pigeon Data
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

const LiveData_Card = e => {
    const [_FancierDataShown, set_FancierDataShown] = useState(false)
    const [_PigeonDataShown, set_PigeonDataShown] = useState(false)
    const [_MainDataShown, set_MainDataShown] = useState(false)

    return (
        <>
            <motion.div layout className="card shadow bg-green-900 bg-opacity-25 rounded overflow-hidden select-none">
                <div className="card-body p-5" onClick={() => set_MainDataShown(_MainDataShown ? false : true)}>
                    <div className='flex flex-col gap-2 text-sm'>
                        <div className='grid grid-cols-2 mb-5 text-2xl text-orange-500'>
                            <p className='font-bold '>Rank</p>
                            <p>1</p>
                        </div>
                        <div className='grid grid-cols-2'>
                            <p className='font-bold text-slate-300'>Fancier Name</p>
                            <p>Gerald Chavez</p>
                        </div>
                        <div className='grid grid-cols-2 '>
                            <p className='font-bold text-slate-300'>Country</p>
                            <span className="flex items-center">
                                <Flag code="PHL" className="h-5 mr-2" />
                                <p>Philippines</p>
                            </span>
                        </div>
                        <div className='grid grid-cols-2 '>
                            <p className='font-bold text-slate-300'>Pigeon ID</p>
                            <p>1332429-AU21-IB</p>
                        </div>
                        <div className='grid grid-cols-2 '>
                            <p className='font-bold text-slate-300'>Status</p>
                            <p className="text-green-500">Arrived</p>
                        </div>

                        {/* hidden info */}

                        {!_MainDataShown && (
                            <p layout className="text-center text-xs opacity-50 my-2">
                                Click to show more
                            </p>

                        )}
                        <AnimatePresence>
                            {_MainDataShown && (
                                <motion.div layout variants={_Animation_ShowDetail} initial='initial' animate='animate' exit='exit'>
                                    <div className='grid grid-cols-2 gap-2'>
                                        <p className='font-bold text-slate-300'>Team</p>
                                        <p>Unassigned</p>
                                    </div>
                                    <div className='grid grid-cols-2 '>
                                        <p className='font-bold text-slate-300'>Time of Arrival</p>
                                        <p>{dayjs('January 8 2022').format('MMM D YYYY - hh:mm:ssa - Z')}</p>
                                    </div>
                                    <div className='grid grid-cols-2 '>
                                        <p className='font-bold text-slate-300'>Speed</p>
                                        <p>2139.40 y/min</p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>
                <div className='grid grid-cols-2 '>
                    <button className='btn btn-sm btn-primary rounded-none' onClick={() => {
                        set_FancierDataShown(true)
                    }}>Fancier Data</button>
                    <button className='btn btn-sm btn-primary rounded-none' onClick={() => {
                        set_PigeonDataShown(true)
                    }}>Pigeon Data</button>
                </div>

                <AnimatePresence>
                    {_FancierDataShown && <_FancierData closeHandler={() => set_FancierDataShown(false)} />}
                    {_PigeonDataShown && <_PigeonData closeHandler={() => set_PigeonDataShown(false)} />}
                </AnimatePresence>
            </motion.div>
        </>
    )
}

export default LiveData_Card