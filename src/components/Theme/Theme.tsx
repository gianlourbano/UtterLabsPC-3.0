type main = "primary" | "secondary" | "tertiary"
type sec = "main" | "shade"

export type Color = [main, sec]

export type PaletteColor = {
    "main": string,
    "light": string,
    "dark": string,
    "text": string
}

export type Palette = {
    "primary": PaletteColor,
    "secondary": PaletteColor,
    "error"?: PaletteColor,
    "warning"?: PaletteColor,
    "info"?: PaletteColor,
    "success"?: PaletteColor,
}

export type BackgroundPalette = {
    "primary": string,
    "primaryShade": string,
    "secondary": string,
    "shadow": string,
}

export type ThemePalette = {
    "color": {
        "dark": Palette,
        "light": Palette,
    },
    "background": {
        "light": BackgroundPalette,
        "dark": BackgroundPalette,
    }
}


export const defaultTheme: ThemePalette = {
    "color": {
        "dark": {
            "primary": {
                "main": "#9c27b0",
                "light": "#ba68c8",
                "dark": "#7b1fa2",
                "text": "#dfdfdf"
            },
            "secondary": {
                "main": "#9c27b0",
                "light": "#c1b",
                "dark": "#72f",
                "text": "#dfdfdf"
            },
        },
        "light": {
            "primary": {
                "main": "#9c27b0",
                "light": "#ba68c8",
                "dark": "#7b1fa2",
                "text": "#dfdfdf"
            },
            "secondary": {
                "main": "#9c27b0",
                "light": "#ba68c8",
                "dark": "#7b1fa2",
                "text": "#dfdfdf"
            },
        }
    },
    "background": {
        "dark": {
            "primary": "#141414",
            "primaryShade": "#0F0F0F",
            "secondary": "whitesmoke",
            "shadow": "#000"
        },
        "light": {
            "primary": "whitesmoke",
            "primaryShade": "#dfdfdf",
            "secondary": "#191d22",
            "shadow": "#979797",
        }
    }
}