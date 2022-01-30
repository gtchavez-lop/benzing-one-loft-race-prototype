import { useState } from "react"
import { useRouter } from "next/router"
import { _Animation_PageTransition, _Animation_TabTransition } from "../../global/_Animations"
import { AnimatePresence, motion } from "framer-motion"
import { FiArchive, FiArrowLeft, FiInfo, FiList, FiRadio } from 'react-icons/fi'

// tabs
import Tab_GeneralInfo from "../../components/Races/Tab_GeneralInfo"
import Tab_BasketingList from "../../components/Races/Tab_BasketingList"
import Tab_LiveData from "../../components/Races/Tab_LiveData"
import Tab_RaceResults from "../../components/Races/Tab_RaceResults"

const RaceDetail = () => {
    // get the raceID from the url
    let router = useRouter()
    const { raceID } = router.query

    // tab index
    const [tabIndex, setTabIndex] = useState(1)

    return (
        <motion.div
            variants={_Animation_TabTransition}
            initial="initial" animate="animate" exit="exit"
            className="min-h-screen px-5 md:px-10 lg:px-40 pt-24 mb-10 flex flex-col">
            <div className="mb-5" onClick={() => router.back()}>
                <button className="btn btn-primary btn-sm btn-link">
                    <FiArrowLeft className="w-5 h-5 mr-5" />
                    <span>Back to Races List</span>
                </button>
            </div>

            {/* information tabs */}
            <div className="">
                {/* tabs */}
                <div className="hidden md:block tabs tabs-boxed rounded ">
                    <a onClick={() => setTabIndex(1)} className={`tab ${tabIndex == 1 ? "tab-active" : ""}`}>General Information</a>
                    <a onClick={() => setTabIndex(2)} className={`tab ${tabIndex == 2 ? "tab-active" : ""}`}>Basketing List</a>
                    <a onClick={() => setTabIndex(3)} className={`tab ${tabIndex == 3 ? "tab-active" : ""}`}>Live Data</a>
                    <a onClick={() => setTabIndex(4)} className={`tab ${tabIndex == 4 ? "tab-active" : ""}`}>Race Results</a>
                </div>
                {/* dropdown */}
                <div className="form-control md:hidden lg:hidden w-full">
                    <label className="label">
                        <span className="label-text">Select Tab</span>
                    </label>
                    <select className="select select-bordered w-full " onChange={e => setTabIndex(e.target.value)}>
                        <option value={1}>General Information</option>
                        <option value={2}>Basketing List</option>
                        <option value={3}>Live Data</option>
                        <option value={4}>Race Results</option>
                    </select>
                </div>
            </div>

            {/* tabs */}
            {/* general info tab */}
            <AnimatePresence>
                {tabIndex == 1 && <Tab_GeneralInfo />}
                {tabIndex == 2 && <Tab_BasketingList />}
                {tabIndex == 3 && <Tab_LiveData />}
                {tabIndex == 4 && <Tab_RaceResults />}
            </AnimatePresence>

            {/* bottom tab */}
            {/* <div className="md:hidden flex justify-around items-center fixed bottom-0 left-0 w-full shadow bg-primary px-5">
                <button onClick={() => setTabIndex(1)} className={`btn ${tabIndex == 1 ? 'btn-accent' : 'btn-ghost'} flex flex-col rounded-sm`}>
                    <FiInfo className="h-5 w-5" />
                    <p className="text-xs">General</p>
                </button>
                <button onClick={() => setTabIndex(2)} className={`btn ${tabIndex == 2 ? 'btn-accent' : 'btn-ghost'} flex flex-col rounded-sm`}>
                    <FiArchive className="h-5 w-5" />
                    <p className="text-xs">Basketing List</p>
                </button>
                <button onClick={() => setTabIndex(3)} className={`btn ${tabIndex == 3 ? 'btn-accent' : 'btn-ghost'} flex flex-col rounded-sm`}>
                    <FiRadio className="h-5 w-5" />
                    <p className="text-xs">Live Data</p>
                </button>
                <button onClick={() => setTabIndex(4)} className={`btn ${tabIndex == 4 ? 'btn-accent' : 'btn-ghost'} flex flex-col rounded-sm`}>
                    <FiList className="h-5 w-5" />
                    <p className="text-xs">Results</p>
                </button>
            </div> */}

        </motion.div>
    )
}

export default RaceDetail