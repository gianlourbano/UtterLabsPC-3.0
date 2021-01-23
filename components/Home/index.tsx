import Card from "../Card/Card"
import ComputerCard from "./ComputerCards/Card"
import Container from "../Container/Container"
import styles from "./Home.module.css"
import { usePalette, useTheme } from "../../src/ThemeProvider"
import Typography from "../Typography/Typography"
import Carousel from "../Carousel/Carousel"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { data } from "../Carousel/mockdata"
import Slide from "../Carousel/Slide/Slide"

const UpperPart: React.FC = () => {
    const {color} = usePalette()
    const theme = useTheme()
    
    return(
        <Container style={{padding: "1vh", justifyContent: "center"}}>
            <Carousel className={styles.carousel} autoPlay>
                {data.map((slide, index) => {
                    return(
                        <Slide title={slide.title} subtitle={slide.subtitle} text={slide.text} img={{src:slide.image, alt:""}} key={index}/>
                    )
                })}
            </Carousel>
        </Container>
    )
}

const MiddlePart: React.FC = () => {

    const {color, background} = usePalette()
    const theme = useTheme()

    return(
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
    
    return(
        <main className={styles.lower}>
            <motion.section
            className={styles.container}
            variants={container}
            initial="hidden"
            ref={ref}
            animate={inView ? 'visible' : 'hidden'}
        >
            {[0, 1, 2, 3].map((index) => (
                <motion.div key={index} className={styles.item} variants={item} />
            ))}
        </motion.section>
        </main>
    )
}

const Home: React.FC = () => {
    return(
        <Container vertical className={styles.home}>
            <UpperPart />
            <MiddlePart />
            <LowerPart />
        </Container>
    )
}

export default Home