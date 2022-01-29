import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { useState } from 'react'
import { _Animation_TabTransition } from '../../pages/globals'
import LiveData_Card from './Card_LiveData'

const _Animation_List_TopTen = {
    initial: { opacity: 0, scaleY: 0, originY: 0 },
    animate: { opacity: 1, scaleY: 1, originY: 0, transition: { ease: [0.1, 0.9, 0, 1], duration: 0.3, staggerChildren: 0.1 } },
    exit: { opacity: 0, scaleY: 0, originY: 0, transition: { ease: [1, 0, 0.9, 0.1], duration: 0.3, staggerChildren: 0.1 } }
}

const Tab_LiveData = e => {
    const [_TopTenDataShown, set_TopTenDataShown] = useState(false)
    const [_MainDataShown, set_MainDataShown] = useState(false)

    return (
        <motion.div
            className="mt-8"
            variants={_Animation_TabTransition}
            initial="initial" animate="animate" exit="exit">
            <p className="text-4xl text-center md:text-left mb-20 md:mb-10">Live Data</p>


            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <motion.div className=''>
                    <p className='text-2xl'>Top 10 Arrivals</p>
                    <button onClick={() => set_TopTenDataShown(_TopTenDataShown ? false : true)}
                        className='btn btn-primary btn-block my-5'>{_TopTenDataShown ? "Hide" : "Show"} List</button>
                    <AnimatePresence exitBeforeEnter>
                        {_TopTenDataShown && (
                            <motion.div variants={_Animation_List_TopTen}
                                initial='initial' animate='animate' exit='exit' layout
                                className='grid grid-cols-1 gap-5'>
                                <AnimateSharedLayout>
                                    <LiveData_Card />
                                    <LiveData_Card />
                                    <LiveData_Card />
                                    <LiveData_Card />
                                    <LiveData_Card />
                                    <LiveData_Card />
                                    <LiveData_Card />
                                    <LiveData_Card />
                                    <LiveData_Card />
                                    <LiveData_Card />
                                </AnimateSharedLayout>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* rest of the data */}
                <motion.div className='mt-10 md:mt-0'>
                    <p className='text-2xl'>Arrivals</p>
                    <button onClick={() => set_MainDataShown(_MainDataShown ? false : true)}
                        className='btn btn-primary btn-block my-5'>{_MainDataShown ? "Hide" : "Show"} List</button>
                    <AnimatePresence exitBeforeEnter>
                        {_MainDataShown && (
                            <motion.div variants={_Animation_List_TopTen}
                                initial='initial' animate='animate' exit='exit' layout
                                className='grid grid-cols-1 gap-5'>
                                <AnimateSharedLayout>
                                    <LiveData_Card />
                                    <LiveData_Card />
                                    <LiveData_Card />
                                    <LiveData_Card />
                                    <LiveData_Card />
                                    <LiveData_Card />
                                    <LiveData_Card />
                                    <LiveData_Card />
                                    <LiveData_Card />
                                    <LiveData_Card />
                                </AnimateSharedLayout>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

            </div>
            {/* top ten */}
        </motion.div>
    )
}

export default Tab_LiveData