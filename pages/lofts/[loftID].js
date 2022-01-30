import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { _Animation_TabTransition } from '../../global/_Animations'

// tabs
import Tab_ActiveRaces from '../../components/Lofts/Tab_ActiveRaces'
import Tab_Fanciers from '../../components/Lofts/Tab_Fanciers'
import Tab_Races from '../../components/Lofts/Tab_Races'
import Tab_Trainings from '../../components/Lofts/Tab_Trainings'

const LoftDetailPage = e => {
    const router = useRouter()
    const [tabIndex, setTabIndex] = useState(1)

    return (
        <motion.div
            variants={_Animation_TabTransition}
            initial="initial" animate="animate" exit="exit"
            className="min-h-screen px-5 md:px-10 lg:px-40 pt-24 mb-10 flex flex-col">
            <div className="mb-5" >
                <button className="btn btn-primary btn-sm btn-link" onClick={() => router.back()}>
                    <FiArrowLeft className="w-5 h-5 mr-5" />
                    <span>Back to Registered Lofts List</span>
                </button>
            </div>

            {/* loft data */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                <div className='flex justify-center items-center w-full'>
                    <img className='w-full rounded' src="https://picsum.photos/id/1005/400/250" />
                </div>
                <div className='w-full flex flex-col justify-center gap-2 mt-5 md:mt-0'>
                    <div className='grid grid-cols-2 gap-3'>
                        <p className='text-right md:text-left text-green-500'>Loft Name</p>
                        <p> AS Golden Pigeon Race </p>
                    </div>
                    <div className='grid grid-cols-2 gap-3'>
                        <p className='text-right md:text-left text-green-500'>Operator</p>
                        <p>George and Dimitrios Aslanidis</p>
                    </div>
                    <div className='grid grid-cols-2 gap-3'>
                        <p className='text-right md:text-left text-green-500'>Registered Pigeons</p>
                        <p>996</p>
                    </div>
                    <div className='grid grid-cols-2 gap-3'>
                        <p className='text-right md:text-left text-green-500'>Registered Fanciers</p>
                        <p>137</p>
                    </div>
                    <div className='grid grid-cols-2 gap-3'>
                        <p className='text-right md:text-left text-green-500'>Registered Team/s</p>
                        <p>1</p>
                    </div>
                </div>
            </div>

            {/* mobile selec tab */}
            <div className="form-control md:hidden w-full my-5">
                <label className="label">
                    <span className="label-text">Select Tab</span>
                </label>
                <select value={tabIndex} className="select select-bordered w-full" onChange={(e) => setTabIndex(e.target.value)}>
                    <option value={1}>Active Races</option>
                    <option value={2}>Races</option>
                    <option value={3}>Trainings</option>
                    <option value={4}>Fanciers</option>
                </select>
            </div>

            {/* tabs */}
            <div className="tabs tabs-boxed my-5 hidden md:block">
                <a onClick={() => setTabIndex(1)} className={`tab ${tabIndex == 1 ? 'tab-active' : ''}`}>Active Races</a>
                <a onClick={() => setTabIndex(2)} className={`tab ${tabIndex == 2 ? 'tab-active' : ''}`}>Races</a>
                <a onClick={() => setTabIndex(3)} className={`tab ${tabIndex == 3 ? 'tab-active' : ''}`}>Trainings</a>
                <a onClick={() => setTabIndex(4)} className={`tab ${tabIndex == 4 ? 'tab-active' : ''}`}>Fanciers</a>
            </div>
            <AnimatePresence>
                {tabIndex == 1 && (<Tab_ActiveRaces />)}
                {tabIndex == 2 && (<Tab_Races />)}
                {tabIndex == 3 && (<Tab_Trainings />)}
                {tabIndex == 4 && (<Tab_Fanciers />)}
            </AnimatePresence>


        </motion.div>
    )
}

export default LoftDetailPage