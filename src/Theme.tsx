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
                "shade": "#F9F871",
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
                "shade": "#F9F871",
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
            "secondary": "whitesmoke",
            "shadow": "#8d8a8a"
        },
        "light": {
            "primary": "whitesmoke",
            "secondary": "#191d22",
            "shadow": "#979797",
        }
    }
}