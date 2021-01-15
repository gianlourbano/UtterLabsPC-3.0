import styles from "./Header.module.css"
import Container from "../Container/Container"
import Typography from "../Typography/Typography"
import { CSSProperties } from "react"
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher"
import { usePalette, useTheme } from "../../src/ThemeProvider"

const Header: React.FC = () => {
    const { background } = usePalette()
    const theme = useTheme()
    
    const customContStyle: CSSProperties = {
        minHeight: 70,
        alignItems: "center",
    }

    return(
        <header className={styles.main}>
            <Container vertical colortype={["tertiary", "main"]} center style={{...customContStyle}}>
                <Typography>Hello pex</Typography>
                <ThemeSwitcher />
            </Container>
        </header>
    )
}


export default Header