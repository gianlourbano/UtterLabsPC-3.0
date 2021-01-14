import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from "../components/Header/Header"
import Container from "../components/Container/Container"
import Typography from "../components/Typography/Typography"

import { ThemeProvider } from "../src/Theme"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>UtterLabsPC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <Header />
        <Container center style={{minWidth: "100vw"}}>
          <Typography>hello there</Typography>
        </Container>
      </ThemeProvider>
    </div>
  )
}