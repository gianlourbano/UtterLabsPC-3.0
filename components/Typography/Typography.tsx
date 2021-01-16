import { CSSProperties } from "react"
import { useTheme, usePalette } from "../../src/ThemeProvider"

interface TextProps {
    type?: "div" | "span" | "h1" | "h2" | "h3" | "h4" | "p",
    style?: CSSProperties,
    secondary?: boolean,
    staticColor?: boolean,
    className?: string
}

const Typography: React.FC<TextProps> = ({ type = "div", staticColor, className, secondary, children, style }) => {

    const { color } = usePalette()
    const theme = useTheme()
    const Type = type

    const typoStyle: CSSProperties = {
        color: (staticColor ? `${color["dark"].primary.main}` : (!secondary ? `${color[theme].primary.main}` : `${color[theme].secondary.main}`)),
        transition: "color 0.35s",
    }

    return (
        <Type style={{ ...typoStyle, ...style }} className={className}>
            {children}
        </Type>
    )
}

export default Typography