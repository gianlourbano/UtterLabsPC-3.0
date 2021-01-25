import styles from "./Header.module.css"
import Container from "../Container/Container"
import Typography from "../Typography/Typography"
import React, { CSSProperties, useEffect, useState } from "react"
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher"
import { usePalette, useTheme } from "../../src/ThemeProvider"
import Image from "next/image"

const HeaderBG: React.FC = () => {
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
    }, [])

    return (
        <header className={styles.main} style={{transform: `translateY(${-offset* 0.5}px)`}}>
            <div className={styles.headerSection}>
                <div className={styles.line}><h1 className={styles.labs}>Welcome to UtterLabs!</h1></div>
                <Typography staticColor type="h2">Background landcape scrolls with its own depth </Typography>
            </div>
        </header>
    )
}


export default HeaderBG