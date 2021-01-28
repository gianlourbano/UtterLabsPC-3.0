type main = "primary" | "secondary" | "tertiary"
type sec = "main" | "shade"

export type Color = [main, sec]

export type Palette = {
    "primary": {
        "main": string,
        "shade": string,
    },
    "secondary": {
        "main": string,
        "shade": string,
    },
    "tertiary": {
        "main": string,
        "shade": string,
    },
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
                "main": "#dfdfdf",
                "shade": "#4e4f50",
            },
            "secondary": {
                "main": "#134555",
                "shade": "#00747A",
            },
            "tertiary": {
                "main": "#29A685",
                "shade": "#8AD37B",
            },
        },
        "light": {
            "primary": {
                "main": "#4e4f50",
                "shade": "#dfdfdf",
            },
            "secondary": {
                "main": "#8AD37B",
                "shade": "#00747A",
            },
            "tertiary": {
                "main": "#29A685",
                "shade": "#8AD37B",
            },
        }
    },
    "background": {
        "dark": {
            "primary": "#1a1e24",
            "primaryShade": "#31343a",
            "secondary": "whitesmoke",
            "shadow": "#000"
        },
        "light": {
            "primary": "whitesmoke",
            "primaryShade": "#dddddd",
            "secondary": "#191d22",
            "shadow": "#979797",
        }
    }
}