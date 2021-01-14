import { useReducer } from "react"
import { ThemePalette, defaultTheme } from "./defaultTheme"
import { createStrictContext } from "../Useful stuff/StrictContext"

type Action = {type: "switch"}
type Dispatch = (action: Action) => void
type Theme = "dark" | "light"

const [PaletteProvider, usePalette] = createStrictContext<ThemePalette | undefined>(undefined)
const [ThemeProvider_, useTheme] = createStrictContext<Theme | undefined>(undefined)
const [ThemeDispatcher, useThemeDispatch] = createStrictContext<Dispatch | undefined>(undefined)

const themeReducer = (state: Theme, action: Action) : Theme => {
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
        <PaletteProvider value={defaultTheme}>
            <ThemeProvider_ value={state}>
                <ThemeDispatcher value={dispatch}>
                    {children}
                </ThemeDispatcher>
            </ThemeProvider_>
        </PaletteProvider>
    )
}

export {usePalette, useTheme, useThemeDispatch}