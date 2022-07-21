import { styled } from "../../theme";

export const Box = styled("div", {
    
    variants: {
        align: {
            center: {
                alignItems: "center"
            },
            start: {
                alignItems: "start"
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
                margin: "0 $1",
            },
            2: {
                margin: "0 $2"
            },
            3: {
                margin: "0 $3"
            },
            4: {
                margin: "0 $4",
            },
            5: {
                margin: "0 $5"
            },
            6: {
                margin: "0 $6"
            }
        },
        dimensions: {
            loginContainer: {
                width: "40%",
                height: "70%"
            }
        }
    }
})