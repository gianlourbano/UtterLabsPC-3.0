import '../../styles/globals.css'
import { ThemeProvider } from "../components/Theme/ThemeProvider"
import Header from "../components/Header/Header"
import { AnimatePresence } from 'framer-motion'

import { Provider } from 'next-auth/client'
import Head from 'next/head'

function MyApp({ Component, pageProps, router }) {
  return(
    <ThemeProvider theme="dark">
      <Head>
        <title>UtterLabsPC</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Provider session={pageProps.session}>
        <Header>
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Header>
      </Provider>
    </ThemeProvider>
  ) 
}

export default MyApp
