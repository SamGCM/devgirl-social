import { styled } from "../../theme";

export const Wrap = styled("ul", {
    display: "flex",
    flexWrap: "wrap",
    variants: {
        align: {
            start: {
                alignItems: "start"
            },
            center: {
                alignItems: "center"
            },
            end: {
                alignItems: "end"
            },
        },
        direction: {
            column: {
                flexDirection: "column"
            },
            row: {
                flexDirection: "row"
            }
        },
        justify: {
            start: {
                justifyContent: "start"
            },
            center: {
                justifyContent: "center"
            },
            spaceBetween: {
                justifyContent: "space-between"
            },
            end: {
                justifyContent: "end"
            },
        },
        spacing: {
            1: {
                "& > li ": {
                    margin: "calc($1 / 2)"
                }
            }
        },
        spacingX: {
            1: {
                "& > li ": {
                    mx: "calc($1 / 2)"
                }
            },
            2: {
                "& > li ": {
                    mx: "calc($2 / 2)"
                }
            },
            3: {
                "& > li ": {
                    mx: "calc($3 / 2)"
                }
            },
            4: {
                "& > li ": {
                    mx: "calc($4 / 2)"
                }
            },
            5: {
                "& > li ": {
                    mx: "calc($5 / 2)"
                }
            },
            6: {
                "& > li ": {
                    mx: "calc($6 / 2)"
                }
            }
        },
        spacingY: {
            1: {
                "& > li ": {
                    my: "calc($1 / 2)"
                }
            }
        }
    }
})