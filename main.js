function loadSite(){
    bodyHTML = ""

    siteList.forEach(function(element, index){
        bodyHTML+=`
        <a href="`+element.path+`">
            <div class="siteIcon">
                <img class="iconIMG lightIMG" src="`+element.icon[0]+`"><img class="iconIMG darkIMG" src="`+element.icon[1]+`">
                <span class="caption">`+element.title+`</span>
            </div>
        </a>
        `
    })

    document.getElementById("bodyHTML").innerHTML = bodyHTML
}