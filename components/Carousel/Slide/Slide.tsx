import Card from "../../Card/Card"
import { usePalette, useTheme } from "../../../src/ThemeProvider"
import Typography from "../../Typography/Typography"
import styles from "./Slide.module.css"
import { motion } from "framer-motion"

interface SlideProps {
    title?: string,
    subtitle?: string,
    text?: string,
    image?: string,
}

const Slide: React.FC<SlideProps> = ({title, subtitle, text, image}) => {
    const { color } = usePalette()
    const theme = useTheme()

    return(
        <Card
            img={{ src: image, alt: "" }} color={["primary", "shade"]} style={{ height: "100%", userSelect: "none", width: "100%", }} >
            <div className={styles.innerText}>
                <Typography type="h2">{title}</Typography>
                <Typography type="h4">{subtitle}</Typography>
                <Typography type="p">{text}</Typography>
            </div>
        </Card>
    )
}

export default Slide