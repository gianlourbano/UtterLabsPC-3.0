import styles from "./Header.module.css"
import Container from "../Container/Container"
import Typography from "../Typography/Typography"
import { CSSProperties, useEffect, useState } from "react"
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher"
import { usePalette, useTheme } from "../../src/ThemeProvider"
import Image from "next/image"

const Logo: React.FC = () => {
    return (
        <Container className={styles.logo}>
            <Image src="/Logo.png"
                alt=""
                width={70}
                height={70}/>
            <Typography type="h1" style={{ marginLeft: 10 }}>UtterLabsPC</Typography>
        </Container>
    )
}

const Header: React.FC = () => {
    const { background } = usePalette()
    const theme = useTheme()

    const [offset, setOffset] = useState(0)

    useEffect(() => {
        function handleScroll() {
            setOffset(window.pageYOffset);
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [offset])

    return (
        <header className={styles.main} style={{transform: `translateY(${-offset* 0.5}px)`}}>
            <div className={styles.headerSection}>
                <Typography staticColor type="h1">Scroll down to see the parallax effect</Typography>
                <Typography staticColor type="h2">Background landcape scrolls with its own depth </Typography>
            </div>
        </header>
    )
}


export default Header