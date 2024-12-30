cube = {
    red: {
        face: [
            ["purple", "red", "red"],
            ["purple", "red", "red"],
            ["red", "red", "red"],
        ],
        adjacent: {top: "blue", right: "yellow", bottom: "green", left: "white"}
    },
    yellow: {
        face: [
            ["purple", "yellow", "yellow"],
            ["purple", "yellow", "yellow"],
            ["yellow", "yellow", "yellow"],
        ],
        adjacent: {top: "green", right: "red", bottom: "blue", left: "orange"}
    },
    blue: {
        face: [
            ["purple", "blue", "blue"],
            ["purple", "blue", "blue"],
            ["blue", "blue", "blue"],
        ],
        adjacent: {top: "white", right: "orange", bottom: "yellow", left: "red"}
    },
    orange: {
        face: [
            ["purple", "orange", "orange"],
            ["purple", "orange", "orange"],
            ["orange", "orange", "orange"],
        ],
        adjacent: {top: "yellow", right: "blue", bottom: "white", left: "green"}
    },
    white: {
        face: [
            ["purple", "white", "white"],
            ["purple", "white", "white"],
            ["white", "white", "white"],
        ],
        adjacent: {top: "red", right: "green", bottom: "orange", left: "blue"}
    },
    green: {
        face: [
            ["purple", "green", "green"],
            ["purple", "green", "green"],
            ["green", "green", "green"],
        ],
        adjacent: {top: "orange", right: "white", bottom: "red", left: "yellow"}
    },
}