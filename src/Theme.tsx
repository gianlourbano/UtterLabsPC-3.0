import { useReducer } from "react"
import { Theme, defaultTheme } from "./defaultTheme"
import { createStrictContext } from "../Useful stuff/StrictContext"

type Action = {type: "switch"}
type Dispatch = (action: Action) => void
type State = "dark" | "light"

const [PaletteProvider, usePalette] = createStrictContext<Theme | undefined>(undefined)
const [ThemeProvider_, useTheme] = createStrictContext<"dark" | "light" | undefined>(undefined)
const [ThemeDispatcher, useThemeDispatch] = createStrictContext<Dispatch | undefined>(undefined)

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