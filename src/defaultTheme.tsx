export type Theme = {
    "color": {
        "dark": {
            "primary": {
                main: string,
            },
            "secondary": {
                main: string,
            },
            "tertiary": {
                main: string
            },
        },
        "light": {
            "primary": {
                main: string,
            },
            "secondary": {
                main: string,
            },
            "tertiary": {
                main: string
            },
        }
    },
    "background": {
        "light": {
            primary: string,
            secondary: string
        },
        "dark": {
            primary: string,
            secondary: string
        }
    }
}

export const defaultTheme: Theme = {
    "color": {
        "dark": {
            "primary": {
                main: "#ccd3db",
            },
            "secondary": {
                main: "",
            },
            "tertiary": {
                main: ""
            },
        },
        "light": {
            "primary": {
                main: "#333435",
            },
            "secondary": {
                main: "",
            },
            "tertiary": {
                main: ""
            },
        }
    },
    "background": {
        "dark": {
            primary: "#161B22",
            secondary: "whitesmoke"
        },
        "light": {
            primary: "whitesmoke",
            secondary: "#161B22"
        }
    }
}