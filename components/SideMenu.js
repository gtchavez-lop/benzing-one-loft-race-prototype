import Link from 'next/link'
import { FiX } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { _Animation_SideMenu } from '../pages/globals'

const SideMenu = ({ isOpen, closeHandler }) => {
    return (
        <>
            <motion.div
                variants={_Animation_SideMenu}
                initial="initial"
                animate="open"
                exit="exit"
                className="lg:hidden fixed w-full h-full z-50 "
                onClick={closeHandler}
            >
                <div
                    className="w-3/4 md:w-1/2 min-h-full bg-primary">
                    {/* header */}
                    <div className="w-full navbar">
                        <div className="px-2 navbar-start">
                            <FiX className="w-7 h-7 mr-3 cursor-pointer lg:hidden"
                                onClick={closeHandler} />
                        </div>
                    </div>
                    {/* content */}
                    <div className="flex flex-col justify-between gap-y-4 mt-10">
                        <Link href="/races" >
                            <a className="btn btn-ghost rounded-btn" onClick={closeHandler}>
                                Races
                            </a>
                        </Link>
                        <Link href="/lofts" >
                            <a className="btn btn-ghost rounded-btn">
                                Lofts
                            </a>
                        </Link>
                        <a className="btn btn-ghost rounded-btn">
                            About
                        </a>
                        <a className="btn btn-ghost rounded-btn">
                            Contact
                        </a>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default SideMenu