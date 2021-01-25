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
    
    const cardStyle: CSSProperties = {
        borderRadius: 30,
        position: "relative",
    }
    
    return(
        <Container className={`${className} ${styles.container}`} style={{ ...cardStyle, ...style }} colortype={color} >
            {img && <img src={img.src} alt={img.alt} className={styles.img}/>}
            {children}
        </Container>
    )
}

export default Card