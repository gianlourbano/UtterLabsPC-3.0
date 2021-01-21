import Head from 'next/head'
import styles from '../styles/Home.module.css'

import Header from "../components/Header/Header"
import Container from "../components/Container/Container"
import Home_ from "../components/Home/index"

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>UtterLabsPC</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
        <Header />
        <Container vertical style={{ minWidth: "100vw", padding: "0 2rem", marginTop: "50vh" }}>
          <Home_ />
        </Container>
    </div>
  )
}