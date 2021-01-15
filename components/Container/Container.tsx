import { CSSProperties } from "react"
import { useTheme, usePalette } from "../../src/ThemeProvider"
import {Color} from "../../src/Theme"

interface ContainerProps {
    vertical?: boolean,
    style?: CSSProperties,
    center?: boolean,
    bgSecondary?: boolean,
    colortype?: Color, // [0] = primary, secondary, tertiary | [1] = main, shade
    className?: string
}

const Container: React.FC<ContainerProps> = ({ center, vertical, bgSecondary, colortype, children, style, className}) => {
    const { background, color } = usePalette()
    const theme = useTheme()

    const contStyle: CSSProperties = {
        display: "flex", flexDirection: vertical ? "column" : "row",
        justifyContent: center ? "center" : "",
        backgroundColor: colortype ? color[theme][colortype[0]][colortype[1]] : (!bgSecondary ? `${background[theme].primary}` : `${background[theme].secondary}`),
        transition: "background-color 0.35s"
    }
    
    return(
        <>
            <div className={className} style={{...contStyle, ...style }}>
                { children }
            </div>
        </>
    )
}

export default Container