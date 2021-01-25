import '../styles/globals.css'
import { ThemeProvider } from "../src/ThemeProvider"
import Header from "../components/Header/Header"
import { AnimatePresence } from 'framer-motion'
import Head from 'next/head'

function MyApp({ Component, pageProps, router }) {
  return(
    <ThemeProvider theme="dark">
      <Head>
        <title>UtterLabsPC</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Header>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Header>
    </ThemeProvider>
  ) 
}

export default MyApp
