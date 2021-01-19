import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from "../components/Header/Header"
import Container from "../components/Container/Container"
import Home_ from "../components/Home/index"
import "animate.css/animate.min.css";

import { ThemeProvider } from "../src/ThemeProvider"
import { useEffect } from 'react'

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>UtterLabsPC</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <ThemeProvider theme="dark">
        <Header />
        <Container vertical style={{ minWidth: "100vw", padding: "0 2rem", marginTop: "30rem" }}>
          <Home_ />
        </Container>
      </ThemeProvider>
    </div>
  )
}