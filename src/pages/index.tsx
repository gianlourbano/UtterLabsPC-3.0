import styles from '../../styles/Home.module.css'

import HeaderBG from "../components/Header/HeaderBG"
import { Container, Typography, Carousel, Slide, PageContainer, Card, Button, CardsCarousel} from "../components/components"
import {usePalette, useTheme} from "../components/Theme/ThemeProvider"
import {data} from "../components/Carousel/mockdata"
import {useInView} from "react-intersection-observer"
import ComputerCard from "../components/ComputerCards/Card"

const infocards = [
  {
    img: "./motherboard2.jpg",
    text: "Plan",
    text2: "Use our own pc plan builder here on Utterlabs to plan your perfect gaming rig!"
  }, {
    img: "./social.jpg",
    text: "Share",
    text2: ""
  }, {
    img: "./build.jpg",
    text: "Build",
    text2: ""
  }
]

import { motion } from 'framer-motion'

const UpperPart: React.FC = () => {
  return (
    <Container>
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
  return (
    <main className={styles.middle} >
      <Container vertical className={styles.initialCard} colortype={["secondary", "shade"]}>
        <Typography staticColor className={styles.latest}>Latest builds</Typography>
      </Container>
      <section className={styles.cardlist}>
        {[0, 1, 2, 3, 4, 5, 6].map(index => {
          return <ComputerCard key={index} />
        })}
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
      delayChildren: 0.1,
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

const LowerPart: React.FC = () => {

  const [ref, inView, entry] = useInView({
    threshold: 0.7,
    triggerOnce: true
  });

  return (
    <section>
      <motion.section
        variants={container}
        initial="hidden"
        ref={ref}
        animate={inView ? 'visible' : 'hidden'}
        className={styles.container}
      >
        {[0, 1, 2].map((index) => {
          const style: string = "item" + (index + 1).toString()
          return (
            <motion.div className={`${styles.item} ${styles[style]}`}
              key={index}
              variants={item}
            >
              <img className={styles.img} src={infocards[index].img} alt="" />
              <div className={styles.content}>
                <Typography type="h2">{infocards[index].text}</Typography>
                <Typography type="p">{infocards[index].text2}</Typography>
                <Button>PC Builder</Button>
              </div>
            </motion.div>
          )
        })}
      </motion.section>
    </section>
  )
}

export default function Home() {
  const {background} = usePalette()
  const theme = useTheme()

  return (
    <PageContainer vertical noPadding>
      <HeaderBG />
      <div id="main" className={styles.main} style={{backgroundColor: background[theme].primary, zIndex: 1}}>
        <UpperPart />
        <LowerPart />
      </div>
      <div className={styles.secondary} style={{backgroundColor: background[theme].primaryShade, zIndex: 1}}>
        <CardsCarousel />
      </div>
    </PageContainer>
    
  )
}