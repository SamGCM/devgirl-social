import { styled } from "../../theme";

export const Box = styled("div", {
    
    variants: {
        overflow: {
            hidden: {
                overflow: "hidden"
            }
        },
        center: {
            true: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }
        },
        align: {
            center: {
                alignItems: "center"
            },
            start: {
                alignItems: "start"
            },
            end: {
                alignItems: "end"
            }
        },
        flex: {
            true: {
                display: "flex"
            }
        },
        justify: {
            center: {
                justifyContent: "center"
            },
            spaceBetween: {
                justifyContent: "space-between"
            },
            start: {
                justifyContent: "start"
            },
            end: {
                justifyContent: "end"
            }
        },
        flexDirection: {
            column: {
                flexDirection: "column"
            },
            row: {
                flexDirection: "row"
            }
        },
        background: {
            transparent: {
                background: "transparent",
            },

            1: {
                background: "$black023",
            },
            2: {
                background: "$black026",
            },
            3: {
                background: "$black036",
            },
            4: {
                background: "$white023",
            },
            5: {
                background: "$white026",
            },
            6: {
                background: "$white036",
            }
        },
        radius: {
            1: {
                borderRadius: "$1"
            },
            2: {
                borderRadius: "$3"
            },
            3: {
                borderRadius: "$6"
            },
            round: {
                borderRadius: "$round"
            }
        },
        padding: {
            1: {
                padding: "$3"
            },
            2: {
                padding: "$4"
            },
            3: {
                padding: "$5"
            },
            4: {
                padding: "$6"
            },
            5: {
                padding: "$9"
            },
        },
        margin: {
            1: {
                margin: "$1",
            },
            2: {
                margin: "$2"
            },
            3: {
                margin: "$3"
            }
        },
        mx: {
            1: {
                mx: "$1"
            },
            2: {
                mx: "$2"
            },
            3: {
                mx: "$3"
            },
            4: {
                mx: "$4"
            },
            5: {
                mx: "$5"
            },
            6: {
                mx: "$6"
            }
        },
        my: {
            1: {
                my: "$1"
            },
            2: {
                my: "$2"
            },
            3: {
                my: "$3"
            },
            4: {
                my: "$4"
            },
            5: {
                my: "$5"
            },
            6: {
                my: "$6"
            }
        },
        dimensions: {
            loginContainer: {
                width: "40%",
                height: "70%"
            },
            default: {
                width: "80vw"
            },
            max: {
                width: "100%"
            }

        }
    }
})