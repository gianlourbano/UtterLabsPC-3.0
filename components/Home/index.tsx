import Card from "../Card/Card"
import ComputerCard from "./ComputerCards/Card"
import Container from "../Container/Container"
import styles from "./Home.module.css"
import { usePalette, useTheme } from "../../src/ThemeProvider"
import { CSSProperties } from "react"
import Image from "next/image"
import Typography from "../Typography/Typography"
import NewsCard from "./NewsCard/NewsCard"
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher"

const UpperPart: React.FC = () => {
    const {color} = usePalette()
    const theme = useTheme()
    
    return(
        <Container style={{padding: "1vh"}}>
            <NewsCard />
            <div className={styles.side}>
                <Card color={["secondary", "main"]} style={{ flexGrow: 3, height: "45vh", padding: 20 }} ></Card>
            </div>
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