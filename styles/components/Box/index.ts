import { styled } from "../../theme";

export const Box = styled("div", {
    
    variants: {
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
                marginTop: "$1",
                marginBottom: "$1"
            },
            2: {
                marginTop: "$2",
                marginBottom: "$2"
            },
            3: {
                marginTop: "$3",
                marginBottom: "$3"
            },
            4: {
                marginTop: "$4",
                marginBottom: "$4"
            },
            5: {
                marginTop: "$5",
                marginBottom: "$5"
            },
            6: {
                marginTop: "$6",
                marginBottom: "$6"
            }
        },
        my: {
            1: {
                marginLeft: "$1",
                marginRight: "$1"
            },
            2: {
                marginLeft: "$2",
                marginRight: "$2"
            },
            3: {
                marginLeft: "$3",
                marginRight: "$3"
            },
            4: {
                marginLeft: "$4",
                marginRight: "$4"
            },
            5: {
                marginLeft: "$5",
                marginRight: "$5"
            },
            6: {
                marginLeft: "$6",
                marginRight: "$6"
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