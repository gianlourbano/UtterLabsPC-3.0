import { CSSProperties } from "react"
import Container from "../Container/Container"

import { Color } from "../../src/Theme"

interface CardProps {
    color?: Color,
    style?: CSSProperties,
    className?: string
}

const Card: React.FC<CardProps> = ({ color, children, className, style }) => {
    
    const cardStyle: CSSProperties = {
        borderRadius: 20,
        paddingLeft: 20,
        paddingRight: 20,
    }
    
    return(
        <Container className={className} style={{...cardStyle, ...style}} colortype={color} >
            {children}
        </Container>
    )
}

export default Card