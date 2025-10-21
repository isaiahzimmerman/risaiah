document.addEventListener("DOMContentLoaded", function(){    
    const outlineDiv = document.getElementById("mmn_main")

    window.mmn = new MunsonMusicNotation(outlineDiv);
    window.mmn.pieceBody = [
        {type: window.mmn.Element_Types.DIVIDER},
        {
            type: window.mmn.Element_Types.SECTION,
            title: `"Exposition"`,
            parts: [
                {label: "1", key: "f#", times: ["0:00"]},
                {label: "1", key: "A", times: ["0:00"]},
                {label: "1", key: "A", times: ["0:00", "0:00"]},
                {label: "cl", key: "c#", times: ["0:00"]},
            ]
        },
        {type: window.mmn.Element_Types.DIVIDER},
        {
            type: window.mmn.Element_Types.SECTION,
            title: `Development`,
            parts: [
                {label: "1", key: "A", times: ["0:00"]},
                {key: "tr", times: ["0:00"]},
                {label: "?", key: "D", times: ["0:00"]},
                {label: "cl", key: "c#", times: ["0:00"]},
            ]
        },
        {type: window.mmn.Element_Types.DIVIDER},
        {
            type: window.mmn.Element_Types.SECTION,
            title: `Recapitulation`,
            parts: [
                {label: "1", key: "f#", times: ["0:00"]},
                {label: "cl", key: "f#", times: ["0:00"]},
            ]
        },
        {type: window.mmn.Element_Types.DIVIDER},
    ]
    window.mmn.config.editable = true
    window.mmn.updateElement()
    window.mmn.loadFromJSONFile(document.getElementById("jsonUpload"))
})