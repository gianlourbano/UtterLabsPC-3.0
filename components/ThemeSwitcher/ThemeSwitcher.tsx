import { useThemeDispatch } from "../../src/Theme"

const ThemeSwitcher: React.FC = () => {
    const dispatch = useThemeDispatch()
    
    return(
        <button onClick={() => dispatch({type: "switch"})}>
            Switch Theme
        </button>
    )
}

export default ThemeSwitcher