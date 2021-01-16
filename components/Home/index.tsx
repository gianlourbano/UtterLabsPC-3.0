import Card from "../Card/Card"
import ComputerCard from "./ComputerCards/Card"
import Container from "../Container/Container"
import styles from "./Home.module.css"
import { usePalette, useTheme } from "../../src/ThemeProvider"
import { CSSProperties } from "react"
import Image from "next/image"
import Typography from "../Typography/Typography"

const UpperPart: React.FC = () => {
    const {color} = usePalette()
    const theme = useTheme()
    
    return(
        <Container style={{padding: "1vh"}}>
            <Card style={
                { 
                    flexGrow: 3, 
                    height: "45vh",
                    background: `linear-gradient(45deg, ${color[theme].secondary.shade}, ${color[theme].tertiary.shade})`
                }
            }></Card>
            <div className={styles.side}>
                <Card color={["secondary", "main"]} style={{ flexGrow: 3, height: "45vh" }} ></Card>
            </div>
        </Container>
    )
}

const MiddlePart: React.FC = () => {

    const {color} = usePalette()
    const theme = useTheme()

    const style: CSSProperties = {
        backgroundColor: `${color[theme].tertiary.main}`
    }

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
        <Container vertical>
            <UpperPart />
            <MiddlePart />
        </Container>
    )
}

export default Home