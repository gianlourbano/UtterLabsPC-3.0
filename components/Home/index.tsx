import Card from "../Card/Card"
import ComputerCard from "./ComputerCards/Card"
import Container from "../Container/Container"
import styles from "./List.module.css"
import { usePalette, useTheme } from "../../src/ThemeProvider"
import { CSSProperties } from "react"

const UpperPart: React.FC = () => {
    return(
        <Container>
            <Card color={["secondary", "main"]} style={{ flexGrow: 3, height: "45vh" }} >

            </Card>
            <Card className={styles.side} color={["secondary", "shade"]} style={{ flexGrow: 1, marginLeft: "2rem", }}>

            </Card>
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
        <Container style={{maxWidth: "90vw", alignSelf: "center", margin: "1rem", position: "relative"}}>
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
        </Container>
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