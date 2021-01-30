import { CSSProperties } from "react"
import Container from "../Container/Container"
import { Color } from "../Theme/Theme"
import styles from "./Card.module.css"

type img = {
    src: string,
    alt: string
}

interface CardProps {
    color?: Color,
    style?: CSSProperties,
    className?: string,
    img?: img
}

const Card: React.FC<CardProps> = ({ color, children, img, className, style }) => {
    
    return(
        <div className={`${className} ${styles.container}`} style={{ ...style }} >
            {img && <img src={img.src} alt={img.alt} className={styles.img}/>}
            <div>
                {children}
            </div>
        </div>
    )
}

export default Card