import Card from "../../Card/Card"
import { usePalette, useTheme } from "../../../src/ThemeProvider"
import Typography from "../../Typography/Typography"
import styles from "./Slide.module.css"
import { motion } from "framer-motion"
import React from "react"
import Container from "../../Container/Container"

type img = {
    src: string,
    alt: string
}

interface SlideProps {
    title?: string,
    subtitle?: string,
    text?: string,
    img?: img
}

const Slide: React.FC<SlideProps> = ({title, subtitle, text, img}) => {
    const { color } = usePalette()
    const theme = useTheme()

    return(
        <Container
            colortype={["primary", "shade"]} className={styles.container} >
            {img && <img src={img.src} alt={img.alt} className={styles.img} />}
            <div className={styles.innerText}>
                <Typography type="h2">{title}</Typography>
                <Typography type="h4">{subtitle}</Typography>
                <Typography type="p">{text}</Typography>
            </div>
        </Container>
    )
}

export default Slide