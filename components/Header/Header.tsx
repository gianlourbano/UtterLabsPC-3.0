import styles from "./Header.module.css"
import Container from "../Container/Container"
import Typography from "../Typography/Typography"
import { CSSProperties } from "react"
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher"
import { usePalette, useTheme } from "../../src/ThemeProvider"
import Image from "next/image"
import Card from "../Card/Card"

const Logo: React.FC = () => {
    const style: CSSProperties = {
        maxHeight: 70,
        borderRadius: 20,
        paddingLeft: 10,
        paddingRight: 10,

        alignItems: "center",
    }

    return (
        <Container style={style}>
            <Image src="/Logo.png"
                alt="Picture of the author"
                width={70}
                height={70}/>
            <Typography type="h1" style={{ marginLeft: 10 }}>UtterLabsPC</Typography>
        </Container>
    )
}

const Header: React.FC = () => {
    const { background } = usePalette()
    const theme = useTheme()

    const customContStyle: CSSProperties = {
        minHeight: 80,
        alignItems: "center",
    }

    return (
        <header className={styles.main}>
            <Container colortype={["secondary", "shade"]} center style={{ ...customContStyle }}>
                <Typography staticColor>Hello pex</Typography>
                <Logo />
                <ThemeSwitcher />
            </Container>
        </header>
    )
}


export default Header