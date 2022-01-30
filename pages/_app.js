import '../styles/globals.css'
import Navigation from '../components/Navigation'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion'
import { useRouter, Router } from 'next/router'
import Footer from '../components/Footer'
import { useState } from 'react'
import { FiArrowUp } from 'react-icons/fi'
import { _Animation_ScrollToTopButton } from '../global/_Animations'

function MyApp({ Component, pageProps }) {
  let router = useRouter()

  // detect scroll y value
  const [isVisible, set_isVisible] = useState(false)
  const toggleSrollVisibility = e => {
    const scrollY = window.scrollY
    if (scrollY > 150) {
      set_isVisible(true)
    } else {
      set_isVisible(false)
    }
  }

  // scroll to top
  const scrollToTop = e => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // window.addEventListener('scroll', toggleSrollVisibility)

  return (
    <>
      <div className='overflow-x-hidden'>
        {/* <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap" rel="stylesheet" />
        </Head> */}
        <Navigation />

        <AnimateSharedLayout>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </AnimateSharedLayout>

        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            className='btn btn-circle btn-ghost fixed z-30 bottom-5 right-5'>
            <FiArrowUp className='h-6 w-6' />
          </motion.button>

        )}

        <Footer />

      </div>
    </>
  )
}

export default MyApp
