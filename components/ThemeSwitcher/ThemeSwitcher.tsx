import { useDispatchTheme } from "../../src/Theme"
const ThemeSwitcher: React.FC = () => {
    const dispatch = useDispatchTheme()
    
    return(
        <button onClick={() => dispatch({type: "switch"})}>
            Switch Theme
        </button>
    )
}

export default ThemeSwitcher