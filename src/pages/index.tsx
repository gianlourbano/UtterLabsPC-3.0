import styles from '../../styles/Home.module.css'

import HeaderBG from "../components/Header/HeaderBG"
import { Container, Typography, Carousel, Slide, PageContainer} from "../components/components"
import {usePalette, useTheme} from "../components/Theme/ThemeProvider"
import {data} from "../components/Carousel/mockdata"
import {useInView} from "react-intersection-observer"
import ComputerCard from "../components/ComputerCards/Card"

import { motion } from 'framer-motion'

const UpperPart: React.FC = () => {
  const { color } = usePalette()
  const theme = useTheme()

  return (
    <Container style={{ justifyContent: "center" }}>
      <Carousel className={styles.carousel} autoPlay>
        {data.map((slide, index) => {
          return (
            <Slide title={slide.title} subtitle={slide.subtitle} text={slide.text} img={{ src: slide.image, alt: "" }} key={index} />
          )
        })}
      </Carousel>
    </Container>
  )
}

const MiddlePart: React.FC = () => {

  const { color, background } = usePalette()
  const theme = useTheme()

  return (
    <main className={styles.middle} >
      <Container vertical className={styles.initialCard} colortype={["secondary", "shade"]}>
        <Typography staticColor className={styles.latest}>Latest builds</Typography>
        <img src="/pc.png" className={styles.image} />
      </Container>
      <section className={styles.cardlist}>
        <ComputerCard />
        <ComputerCard />
        <ComputerCard />
        <ComputerCard />
        <ComputerCard />
        <ComputerCard />
        <ComputerCard />
        <ComputerCard />
        <ComputerCard />
        <ComputerCard />
      </section>
    </main>
  )
}

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.2
    }
  }

};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const LowerPart: React.FC = () => {

  const [ref, inView, entry] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  return (
    <motion.section
      variants={container}
      initial="hidden"
      ref={ref}
      animate={inView ? 'visible' : 'hidden'}
      className={styles.container}
    >
      {[0, 1, 2, 3, 4].map((index) => {
        const style: string = "item" + (index + 1).toString()
        return (
          <motion.div className={`${styles.item} ${styles[style]}`}
            key={index}
            variants={item}
            whileHover={{ scale: 1.05 }}
          ></motion.div>
        )
      })}
    </motion.section>
  )
}

export default function Home() {

  return (
    <PageContainer vertical>
      <HeaderBG />
      <div className={styles.main}>
        <UpperPart />
        <MiddlePart />
        <LowerPart />
      </div>
    </PageContainer>
    
  )
}