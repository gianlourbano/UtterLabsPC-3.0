import { relative } from "path"
import { CSSProperties, useEffect, useRef, useState } from "react"
import { useThemeDispatch } from "../../src/ThemeProvider"
import Container from "../Container/Container"
import Typography from "../Typography/Typography"

interface WrapperProps {
    onClick: () => void
}

const Wrapper: React.FC<WrapperProps> = ({onClick, children}) => {
    const style: CSSProperties = {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        alignSelf: "center",
        width: 100,
        borderRadius: 10
    }
    
    return(
        <label onClick={onClick} style={style}>
            {children}
        </label>
    )
}

const Groove: React.FC = ({children}) => {
    const style: CSSProperties = {
        position: "relative",
        width: 70,
        height: 30,
        borderRadius: 30,
        boxShadow: "inset 5px 5px 10px #cccccc, inset -5px -5px 10px #73809b"
    }
    
    return(
        <div style={style}>
            {children}
        </div>
    )
}

const Handle: React.FC<{isOn: boolean}> = ({isOn}) => {
    const style: CSSProperties = {
        width: 30,
        height: 30,
        position: "absolute",
        borderRadius: "50%",
        background: "linear-gradient(145deg, #fff, #99959e)",
        transform: `translateX(${isOn ? "40PX" : "0px"})`,
        transition: "0.35s",
        cursor: "pointer",
    }
    
    return(
        <div style={style}>

        </div>
    )
}

const ThemeSwitcher: React.FC = () => {
    const dispatch = useThemeDispatch()
    const [isOn, setIsOn] = useState(false)

    const isFirstRun = useRef(true);
    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }

        dispatch({ type: "switch" })
    }, [isOn])

    return(
        <div>
            <Wrapper onClick={() => setIsOn(!isOn)}>
                <Groove>
                    <Handle isOn={isOn} />
                </Groove>
            </Wrapper>
        </div>
    )
}

export default ThemeSwitcher