// MMN - Munson Music Notation

function padWithZeroes(number, length=2) {
    return String(number).padStart(length, '0');
}

const EMPTY = "__EMPTY__"

class MunsonMusicNotation {
    constructor(HTMLElement = null){
        this.pieceBody = []
        this.HTMLElement = HTMLElement
        this.editable = true

        document.addEventListener("click", () => {
            if(document.activeElement == document.body){
                this.updateElement()
            }
        })
    }

    Element_Types = {
        DIVIDER: "DIVIDER",
        OPEN_REPEAT: "OPEN_REPEAT",
        CLOSE_REPEAT: "CLOSE_REPEAT",
        SECTION: "SECTION",
    }

    config = {
        showBlanks: true,
        editable: false
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

    isOnlyWhitespace = str => /^\s*$/.test(str);

    makeEditable(element, object, key){
        element.contentEditable = "true"
        element.addEventListener("input", () => {
            object[key] = element.innerText.replace("\n", "")

            if(this.isOnlyWhitespace(object[key])){
                object[key] = EMPTY
            }
        })
    }

    makeTimesEditable(element, object, key){
        element.contentEditable = "true"
        element.addEventListener("input", () => {
            object[key] = element.innerText.trim().split("\n")

            const allWhitespace = object[key].every(val => this.isOnlyWhitespace(val));

            if (allWhitespace){
                object[key] = EMPTY
            }
            console.log(object[key])

            if(object[key] == ""){
                object[key] = EMPTY
            }
        })
    }

    getBlank(){
        return (this.config.showBlanks ? "_" : "")
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
            titleLayer.innerText = e.title && e.title != EMPTY ? e.title : this.getBlank()
            if(this.config.editable){ this.makeEditable(titleLayer, e, "title") }

            const lower = document.createElement("div")
            lower.classList.add("mmn_section_lower")

            for(const part of e.parts){
                // // console.log(part)

                const partDiv = document.createElement("div")
                partDiv.classList.add("mmn_part")

                const labelDiv = document.createElement("div")
                labelDiv.innerText = part.label && part.label != EMPTY ? part.label : this.getBlank()
                labelDiv.classList.add("mmn_part_label")
                if(this.config.editable){ this.makeEditable(labelDiv, part, "label") }
                
                const keyDiv = document.createElement("div")
                keyDiv.innerText = part.key && part.key != EMPTY ? part.key : this.getBlank()
                keyDiv.classList.add("mmn_part_key")
                if(this.config.editable){ this.makeEditable(keyDiv, part, "key") }
                
                const timesDiv = document.createElement("div")
                timesDiv.classList.add("mmn_part_times")
                timesDiv.innerText = part.times && part.times != EMPTY ? part.times.join("\n") : this.getBlank()
                if(this.config.editable){ this.makeTimesEditable(timesDiv, part, "times") }
            
                for(const time of part.times){
                    break
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

    loadFromJSONFile(inputElement) {
        inputElement.addEventListener("change", (event) => {
            const file = event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    this.pieceBody = JSON.parse(e.target.result);
                    this.updateElement();
                } catch (err) {
                    console.error("Failed to load JSON:", err);
                }
            };
            reader.readAsText(file);
        });
    }

    async loadMMNFromServer(filePath) {
        try {
            const response = await fetch(filePath);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            const data = await response.json();

            this.pieceBody = data;
            window.mmn.updateElement();

            console.log("Loaded MMN JSON from:", filePath, data);
        } catch (err) {
            console.error("Failed to load JSON:", err);
        }
    }
}