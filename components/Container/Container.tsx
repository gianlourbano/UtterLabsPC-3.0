import { CSSProperties } from "react"
import { useTheme, usePalette } from "../../src/Theme"

interface ContainerProps {
    vertical?: boolean,
    style?: CSSProperties,
    center?: boolean,
    bgSecondary?: boolean
}

const Container: React.FC<ContainerProps> = ({ center, vertical, bgSecondary, children, style}) => {
    const { background } = usePalette()
    const theme = useTheme()

    const contStyle: CSSProperties = {
        display: "flex", flexDirection: vertical ? "column" : "row",
        justifyContent: center ? "center" : "",
        backgroundColor: !bgSecondary ? `${background[theme].primary}` : `${background[theme].secondary}`
    }
    
    return(
        <>
            <div style={{...contStyle, ...style }}>
                { children }
            </div>
        </>
    )
}



export default Container