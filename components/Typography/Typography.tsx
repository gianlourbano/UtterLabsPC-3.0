import { CSSProperties } from "react"
import { useTheme, useThemeDispatch } from "../../src/Theme"

interface TextProps {
    type?: "div" | "span",
    style?: CSSProperties,
    secondary?: boolean
}

const Typography: React.FC<TextProps> = ({type = "div", secondary, children, style}) => {

    const { color } = useTheme()
    const dispatch = useThemeDispatch()
    const Type = type


    const typoStyle: CSSProperties = {
        color: (!secondary ? `${color[dispatch].primary.main}`: `${color[dispatch].secondary.main}`)
    }
    
    return(
        <Type style={{...typoStyle, style}}>
            {children}
        </Type>
    )
}

export default Typography