
export const Button = {
    baseStyle: {
        borderRadius: "5px",
        fontSize: "14px",
        fontWeight: 500,
        _focus: {
            boxShadow: "none",
        },
        textTransform: "capitalize",
    },
    sizes: {
        sm: {
            fontSize: "12px",
        },
        md: {
            fontSize: "14px",
        },
        lg: {
            fontSize: "16px",
        },
        xl: {
            fontSize: "16px",
        }
    },
    variants: {
        primary: {
            color: "white",
            // bg: "blue.500",
            backgroundColor: "#292A2D",
            _hover: {
                bg: "rgba(41, 42, 45, 0.9)",
            },
            fontSize: "16px",
            height: "initial",
        },
        outline: {
            color: "rgba(0,0,0,.85)",
            border: "1px solid",
            backgroundColor: "white",
            borderColor: "#d9d9d9",
            _hover: {
                bg: "rgba(41, 42, 45, 1)",
                color: "#fff",
            },
            fontSize: "16px",
            height: "initial",
        },
        oauth: {
            height: "34px",
            border: "1px solid",
            borderColor: "black",
            backgroundColor: "black",
            _hover: {
                bg: "red",
            },
        },
    },
};