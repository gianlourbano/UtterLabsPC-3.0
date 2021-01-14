import { createContext, useContext, useReducer } from "react"
import { Theme, defaultTheme } from "./defaultTheme"

type Action = {type: "switch"}
type Dispatch = (action: Action) => void
type State = "dark" | "light"

export const ThemePaletteContext = createContext<Theme | undefined>(undefined)
export const ThemeContext = createContext<"dark" | "light" | undefined>(undefined)
export const ThemeDispatchContext = createContext<Dispatch | undefined>(undefined)

const themeReducer = (state: State, action: Action) : State => {
    switch(action.type) {
        case "switch": {
            if(state === "dark") return "light"
            else if(state === "light") return "dark"
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }
}

export const ThemeProvider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, "light")
    
    return(
        <ThemePaletteContext.Provider value={defaultTheme}>
            <ThemeContext.Provider value={state}>
                <ThemeDispatchContext.Provider value={dispatch}>
                    {children}
                </ThemeDispatchContext.Provider>
            </ThemeContext.Provider>
        </ThemePaletteContext.Provider>
    )
}

export const useTheme = () => {
    const context = useContext(ThemePaletteContext)
    if (context === undefined) throw new Error("useTheme is not being used inside of a UI component!")
    return context
}

export const useThemeDispatch = () => {
    const context = useContext(ThemeContext)
    if (context === undefined) throw new Error("useTheme is not being used inside of a UI component!")
    return context
}

export const useDispatchTheme = () => {
    const context = useContext(ThemeDispatchContext)
    if (context === undefined) throw new Error("useTheme is not being used inside of a UI component!")
    return context
}