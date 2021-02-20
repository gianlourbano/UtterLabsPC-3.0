import { CSSProperties } from "react"
import { Typography, Button } from "../components"
import { Color } from "../Theme/Theme"
import styles from "./Card.module.css"

type img = {
    src: string,
    alt: string
}

type content = {
    text: string,
    text2: string,
    button: string,
}

interface CardProps {
    color?: Color,
    style?: CSSProperties,
    className?: string,
    img?: img,
    content: content
}

const Card: React.FC<CardProps> = ({ content, color, children, img, className, style }) => {
    
    return(
        <div className={`${styles.item}`}>
            <img className={styles.img} src={img.src} alt={img.alt} />
            <div className={styles.content}>
                <Typography type="h2">{content.text}</Typography>
                <Typography type="p">{content.text2}</Typography>
                <Button>{content.button}</Button>
              </div>
        </div>
    )
}

export default Card