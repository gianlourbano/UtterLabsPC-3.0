import Card from "../Card/Card"
import ComputerCard from "./ComputerCards/Card"
import Container from "../Container/Container"
import styles from "./Home.module.css"
import { usePalette, useTheme } from "../../src/ThemeProvider"
import Typography from "../Typography/Typography"
import Carousel from "../Carousel/Carousel"

import { data } from "../Carousel/mockdata"
import Slide from "../Carousel/Slide/Slide"

const UpperPart: React.FC = () => {
    const {color} = usePalette()
    const theme = useTheme()
    
    return(
        <Container style={{padding: "1vh", justifyContent: "center"}}>
            <Carousel className={styles.carousel}>
                {data.map((slide, index) => {
                    return(
                        <Slide title={slide.title} subtitle={slide.subtitle} text={slide.text} image={slide.image} key={index}/>
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

const Home: React.FC = () => {
    return(
        <Container vertical className={styles.home}>
            <UpperPart />
            <MiddlePart />
        </Container>
    )
}

export default Home