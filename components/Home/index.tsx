import Card from "../Card/Card"
import ComputerCard from "./ComputerCards/Card"
import Container from "../Container/Container"
import styles from "./List.module.css"
import { usePalette, useTheme } from "../../src/ThemeProvider"
import { CSSProperties } from "react"

const UpperPart: React.FC = () => {
    return(
        <Container style={{padding: "1vh"}}>
            <Card color={["secondary", "main"]} style={{ flexGrow: 3, height: "45vh" }} >

            </Card>
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
        <Container style={{maxWidth: "90vw", alignSelf: "center", position: "relative"}}>
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