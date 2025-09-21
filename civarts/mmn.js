// MMN - Munson Music Notation

function padWithZeroes(number, length=2) {
    return String(number).padStart(length, '0');
}

class MunsonMusicNotation {
    constructor(HTMLElement = null){
        this.pieceBody = []
        this.HTMLElement = HTMLElement
        this.editable = true
    }

    Element_Types = {
        DIVIDER: "DIVIDER",
        OPEN_REPEAT: "OPEN_REPEAT",
        CLOSE_REPEAT: "CLOSE_REPEAT",
        SECTION: "SECTION",
    }

    getJSON(){
        return JSON.stringify(this.pieceBody)
    }

    downloadJSON(){
        try {
            const jsonObject = JSON.parse(this.getJSON());
            const blob = new Blob([JSON.stringify(jsonObject, null, 2)], { type: 'application/json' });
        
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            const today = new Date()
            a.download = `mmnJSON ${today.getFullYear()}${padWithZeroes(today.getMonth()+1)}${padWithZeroes(today.getDate())} ${padWithZeroes(today.getHours())}_${padWithZeroes(today.getMinutes())}_${padWithZeroes(today.getSeconds())}.json`;
        
            document.body.appendChild(a);
            a.click();
        
            // Cleanup
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Invalid JSON string provided:', error);
        }
    }

    getElementHTML(e) {
        const container = document.createElement("div")
        container.classList.add("mmn_section_container")
        
        if(e.type == this.Element_Types.DIVIDER){
            const divider = document.createElement("div")
            divider.classList.add("mmn_divider")
            
            container.appendChild(divider)
            return container
        }

        if(e.type == this.Element_Types.SECTION){
            container.classList.add("mmn_vertical_container")

            const titleLayer = document.createElement("div")
            titleLayer.classList.add("mmn_title_layer")
            titleLayer.innerText = e.title

            const lower = document.createElement("div")
            lower.classList.add("mmn_section_lower")

            for(const part of e.parts){
                console.log(part)

                const partDiv = document.createElement("div")
                partDiv.classList.add("mmn_part")

                const labelDiv = document.createElement("div")
                labelDiv.innerText = part.label ? part.label : ""
                labelDiv.classList.add("mmn_part_label")

                const keyDiv = document.createElement("div")
                keyDiv.innerText = part.key ? part.key : ""
                keyDiv.classList.add("mmn_part_key")

                const timesDiv = document.createElement("div")
                timesDiv.classList.add("mmn_part_times")

                for(const time of part.times){
                    const timeDiv = document.createElement("div")
                    timeDiv.innerText = time

                    timesDiv.appendChild(timeDiv)
                }

                partDiv.appendChild(labelDiv)
                partDiv.appendChild(keyDiv)
                partDiv.appendChild(timesDiv)

                lower.appendChild(partDiv)
            }

            container.appendChild(titleLayer)
            container.appendChild(lower)

            return container
        }

        console.error(e, "Not an HTML object!")
    }

    updateElement() {
        if(!this.HTMLElement){
            console.error("Assign HTML element to MMN object!")
            return
        }

        this.HTMLElement.innerHTML = ""

        const musicContainer = document.createElement("div")
        musicContainer.classList.add("mmn_piece_container")

        for(const section of this.pieceBody){
            const toAppend = this.getElementHTML(section)

            musicContainer.appendChild(toAppend)
        }

        this.HTMLElement.appendChild(musicContainer)
    }
}

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
    ]
    window.mmn.updateElement()
})