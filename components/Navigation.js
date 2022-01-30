import Link from "next/link"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FiMenu } from 'react-icons/fi'

import SideMenu from "./SideMenu"
import { _Animation_SideMenu } from "../global/_Animations"
import Image from "next/image"


const NavigationBar = e => {

    const [sideMenuOpen, setSideMenuOpen] = useState(false)
    const [activeTab, setActiveTab] = useState("")

    return (
        <>
            <AnimatePresence exitBeforeEnter initial={false} >
                {sideMenuOpen && <SideMenu closeHandler={() => { setSideMenuOpen(false) }} />}
            </AnimatePresence>

            <div className="fixed w-full navbar mb-2 shadow-lg bg-green-800 text-base-content z-40 rounded-b-lg md:px-10 lg:px-14">
                <div className="px-2 navbar-start">
                    <FiMenu className="w-7 h-7 mr-3 cursor-pointer lg:hidden" onClick={() => {
                        setSideMenuOpen(!sideMenuOpen)
                    }} />
                    <Link href='/' >
                        <div className="cursor-pointer items-center hidden lg:flex">
                            <Image src="/brand_white.svg" width={35} height={35} />
                            <span className=" font-bold ml-2">
                                BENZING - One Loft Race
                            </span>
                        </div>
                    </Link>
                </div>
                <div className="px-2 mx-2 navbar-center">
                    <Link href='/'>
                        <div className="lg:hidden flex items-center cursor-pointer">
                            <Image src="/brand_white.svg" width={30} height={30} />
                        </div>
                    </Link>
                    <div className="hidden lg:flex items-stretch gap-2">
                        <Link href="/races">
                            <a onClick={() => setActiveTab('Races')} className={`btn btn-sm btn-ghost rounded-btn ${activeTab == 'Races' ? 'shadow-xl' : ''}`}>
                                Races
                            </a>
                        </Link>
                        <Link href="/lofts">
                            <a onClick={() => setActiveTab('Lofts')} className={`btn btn-sm btn-ghost rounded-btn ${activeTab == 'Lofts' ? 'shadow-xl' : ''}`}>
                                Lofts
                            </a>
                        </Link>

                        <a className={`btn btn-ghost btn-sm rounded-btn`}>
                            About
                        </a>
                        <a className={`btn btn-ghost btn-sm rounded-btn`}>
                            Contact
                        </a>
                    </div>
                </div>

                {/* language selector */}
                <div className="navbar-end">
                    <span className="hidden lg:block">Language: </span>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} className="btn btn-ghost rounded-btn ml-2">EN</div>
                        <ul tabIndex={0} className="p-2 menu dropdown-content shadow-lg bg-green-800 rounded text-base-content w-52 m-0">
                            <li className="font-bold"> <a>English</a> </li>
                            <li className="font-bold"> <a>Chinese Simplified</a> </li>
                            <li className="font-bold"> <a>French</a> </li>
                            <li className="font-bold"> <a>Spanish</a> </li>
                            <li className="font-bold"> <a>German</a> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavigationBar