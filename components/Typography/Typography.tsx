import { CSSProperties } from "react"
import { useTheme, usePalette } from "../../src/Theme"

interface TextProps {
    type?: "div" | "span",
    style?: CSSProperties,
    secondary?: boolean
}

const Typography: React.FC<TextProps> = ({type = "div", secondary, children, style}) => {

    const { color } = usePalette()
    const theme = useTheme()
    const Type = type


    const typoStyle: CSSProperties = {
        color: (!secondary ? `${color[theme].primary.main}`: `${color[theme].secondary.main}`)
    }
    
    return(
        <Type style={{...typoStyle, style}}>
            {children}
        </Type>
    )
}

export default Typography