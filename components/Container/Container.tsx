import { CSSProperties } from "react"
import { useTheme, useThemeDispatch } from "../../src/Theme"

interface ContainerProps {
    vertical?: boolean,
    style?: CSSProperties,
    center?: boolean,
    bgSecondary?: boolean
}

const Container: React.FC<ContainerProps> = ({ center, vertical, bgSecondary, children, style}) => {
    const { background } = useTheme()
    const dispatch = useThemeDispatch()

    const contStyle: CSSProperties = {
        display: "flex", flexDirection: vertical ? "column" : "row",
        justifyContent: center ? "center" : "",
        backgroundColor: !bgSecondary ? `${background[dispatch].primary}` : `${background[dispatch].secondary}`
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