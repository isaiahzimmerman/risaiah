function loadSite(){
    outputHTML = ""
    siteList.forEach(function(element){
        // icons 2 replace
        // ${element.icon[0].replace("icons", "icons2")}
        outputHTML += 
        `<div class="clickable site" id="${element.path}">
            
                <img draggable="false" class="siteImage" src="${element.icon[0].replace("icons", "icons2")}">
            
        </div>`
    })
    document.getElementById("content").innerHTML = outputHTML
}