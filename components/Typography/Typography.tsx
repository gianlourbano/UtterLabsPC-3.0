import { CSSProperties } from "react"
import { useTheme, usePalette } from "../../src/ThemeProvider"

interface TextProps {
    type?: "div" | "span" | "h1" | "h2" | "p",
    style?: CSSProperties,
    secondary?: boolean
}

const Typography: React.FC<TextProps> = ({type = "div", secondary, children, style}) => {

    const { color } = usePalette()
    const theme = useTheme()
    const Type = type


    const typoStyle: CSSProperties = {
        color: (!secondary ? `${color[theme].primary.main}`: `${color[theme].secondary.main}`),
        transition: "color 0.35s"
    }
    
    return(
        <Type style={{...typoStyle, style}}>
            {children}
        </Type>
    )
}

export default Typography