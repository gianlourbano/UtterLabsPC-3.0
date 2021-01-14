import styles from "./Header.module.css"
import Container from "../Container/Container"
import Typography from "../Typography/Typography"
import { CSSProperties } from "react"
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher"

const Header: React.FC = () => {
    
    return(
        <header className={styles.main}>
            <Container vertical  center style={{...customContStyle}}>
                <Typography>Hello pex</Typography>
                <ThemeSwitcher />
            </Container>
        </header>
    )
}

const customContStyle: CSSProperties = {
    minHeight: 70,
    alignItems: "center",
}

export default Header