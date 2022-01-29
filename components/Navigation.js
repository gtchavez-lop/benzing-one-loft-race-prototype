import Link from "next/link"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { FiMenu } from 'react-icons/fi'

import SideMenu from "./SideMenu"
import { _Animation_SideMenu } from "../pages/globals"


const NavigationBar = e => {

    const [sideMenuOpen, setSideMenuOpen] = useState(false)

    return (
        <>
            <AnimatePresence exitBeforeEnter initial={false} >
                {sideMenuOpen && <SideMenu closeHandler={() => { setSideMenuOpen(false) }} />}
            </AnimatePresence>

            <div className="fixed w-full navbar mb-2 shadow-lg bg-primary text-base-content z-40">
                <div className="px-2 navbar-start">
                    <FiMenu className="w-7 h-7 mr-3 cursor-pointer lg:hidden" onClick={() => {
                        setSideMenuOpen(!sideMenuOpen)
                    }} />
                    <Link href='/' >
                        <div className="cursor-pointer flex items-center">
                            <span>LOGO</span>
                            <span className="hidden lg:block text-lg font-bold">
                                BENZING - One Loft Race
                            </span>
                        </div>
                    </Link>
                </div>
                <div className="hidden px-2 mx-2 navbar-center lg:flex">
                    <div className="flex items-stretch">
                        <Link href="/races">
                            <a className="btn btn-ghost btn-sm rounded-btn">
                                Races
                            </a>
                        </Link>
                        <Link href="/lofts">
                            <a className="btn btn-ghost btn-sm rounded-btn">
                                Lofts
                            </a>
                        </Link>

                        <a className="btn btn-ghost btn-sm rounded-btn">
                            About
                        </a>
                        <a className="btn btn-ghost btn-sm rounded-btn">
                            Contact
                        </a>
                    </div>
                </div>

                {/* language selector */}
                <div className="navbar-end">
                    <span className="hidden lg:block">Language: </span>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} className="btn btn-ghost rounded-btn ml-2">English</div>
                        <ul tabIndex={0} className="p-2 menu dropdown-content bg-primary text-base-content w-52">
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