import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from "../components/Header/Header"
import Container from "../components/Container/Container"
import Typography from "../components/Typography/Typography"
import Home_ from "../components/Home/index"

import { ThemeProvider } from "../src/ThemeProvider"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>UtterLabsPC</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <ThemeProvider theme="light">
        <Header />
        <Container vertical style={{minWidth: "100vw", flexGrow: 1, marginTop: 70, padding: "2rem"}}>
          <Home_ />
        </Container>
      </ThemeProvider>
    </div>
  )
}