import Link from 'next/link'
import { FiX } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { _Animation_SideMenu } from '../global/_Animations'

const SideMenu = ({ isOpen, closeHandler }) => {
    return (
        <>
            <motion.div
                variants={_Animation_SideMenu}
                initial="initial"
                animate="open"
                exit="exit"
                className="lg:hidden absolute w-full h-full z-40"
                onClick={closeHandler}
            >
                <div
                    className="w-3/4 md:w-1/2 min-h-full bg-green-800 rounded-br-lg">
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
                            <a className="btn btn-ghost btn-secondary btn-lg" onClick={closeHandler}>
                                Races
                            </a>
                        </Link>
                        <Link href="/lofts" >
                            <a className="btn btn-ghost btn-secondary btn-lg">
                                Lofts
                            </a>
                        </Link>
                        <a className="btn btn-ghost btn-secondary btn-lg">
                            About
                        </a>
                        <a className="btn btn-ghost btn-secondary btn-lg">
                            Contact
                        </a>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default SideMenu