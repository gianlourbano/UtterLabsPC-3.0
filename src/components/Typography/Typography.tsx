import { CSSProperties } from "react"
import { useTheme, usePalette } from "../Theme/ThemeProvider"
import styles from "./Typography.module.css"

export type comp = "div" | "span" | "h1" | "h2" | "h3" | "h4" | "p"

interface TextProps {
    type?: comp,
    style?: CSSProperties,
    secondary?: boolean,
    staticColor?: boolean,
    className?: string,
    anim?: boolean
}

const Typography: React.FC<TextProps> = ({ type = "div", staticColor, className, anim, secondary, children, style }) => {

    const { color } = usePalette()
    const theme = useTheme()
    const Type = type

    const typoStyle: CSSProperties = {
        color: (staticColor ? `${color["dark"].primary.main}` : (!secondary ? `${color[theme].primary.main}` : `${color[theme].secondary.main}`)),
    }

    const pStyle: CSSProperties = {
        textOverflow: "ellipsis",
        whiteSpace: "pre-wrap",
        overflow: "hidden",
        textAlign: "justify",

        overflowY: "visible",
    }

    const tStyle = type === "p" ? { ...pStyle, ...typoStyle } : typoStyle

    const basic = anim ? styles.typo : ""

    return (
        <Type style={{ ...tStyle, ...style }} className={`${basic} ${className} ${type === "p" ? styles.p : ""}`}>
            {children}
        </Type>
    )
}

export default Typography