import '../styles/globals.css'
import Navigation from '../components/Navigation'
import { AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { useRouter, Router } from 'next/router'
import Footer from '../components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  let router = useRouter()

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

        <Footer />

      </div>
    </>
  )
}

export default MyApp
