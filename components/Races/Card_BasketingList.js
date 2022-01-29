import { FiX } from "react-icons/fi"
import dayjs from "dayjs"
import { AnimatePresence } from "framer-motion"
import { useState } from "react"
import { motion } from "framer-motion"
import Flag from 'react-world-flags'

import { _Animation_BottomMenu } from "../../pages/globals"

const _FancierData = ({ closeHandler }) => {
    console.log('_FancierData')
    return (
        <motion.div
            variants={_Animation_BottomMenu}
            initial="initial" animate="animate" exit="exit"
            className="fixed w-screen h-full bg-gray-900 bg-opacity-50 bottom-0 left-0 z-30">
            <div className="absolute bottom-0 left-0 h-3/4 w-full bg-slate-900">
                <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content ">
                    <div class="lg:px-40 navbar-start">
                        <button className="btn btn-square mr-5" onClick={closeHandler}>
                            <FiX className="w-7 h-7" />
                        </button>
                        <span class="text-lg font-bold">
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
                <div class="navbar mb-2 shadow-lg bg-neutral text-neutral-content ">
                    <div class="lg:px-40 navbar-start">
                        <button className="btn btn-square mr-5" onClick={closeHandler}>
                            <FiX className="w-7 h-7" />
                        </button>
                        <span class="text-lg font-bold">
                            Pigeon Data
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

const Card = e => {
    const [_FancierDataShown, set_FancierDataShown] = useState(false)
    const [_PigeonDataShown, set_PigeonDataShown] = useState(false)

    return (
        <>
            <div className="card shadow bg-green-900 bg-opacity-25 rounded overflow-hidden select-none">
                <div className="card-body p-5">
                    <div className='flex flex-col gap-2'>
                        <div className='grid grid-cols-2 '>
                            <p className='font-bold text-slate-300'>Fancier Name</p>
                            <p>Gerald Chavez</p>
                        </div>
                        <div className='grid grid-cols-2 '>
                            <p className='font-bold text-slate-300'>Team</p>
                            <p>Unassigned</p>
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
                            <p className='font-bold text-slate-300'>Pigeon Name</p>
                            <p>Unassigned</p>
                        </div>
                        <div className='grid grid-cols-2 '>
                            <p className='font-bold text-slate-300'>Basket Time</p>
                            <p>{dayjs('January 8 2022').format('MMM D YYYY - hh:mm:ssa - Z')}</p>
                        </div>
                    </div>

                </div>
                <div className='grid grid-cols-2 mt-2'>
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
            </div>
        </>
    )
}

export default Card