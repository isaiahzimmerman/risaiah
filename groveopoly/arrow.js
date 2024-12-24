currentArrow = {start: NaN, end: NaN}

function placeInTile(element, index){
    // sideways = false
    // if((11 <= index && index <= 19) || (31 <= index && index <= 39)){
    //     sideways = true
    // }
    elementBounds = element.getBoundingClientRect()
    tileBounds = document.getElementsByClassName(boardOrder[index])[0].getBoundingClientRect()
    
    element.style.left = (tileBounds.left + tileBounds.width/2 - elementBounds.width/2)+"px"
    element.style.top = (tileBounds.top + tileBounds.height/2 - elementBounds.height/2)+"px"
}

function drawLine(indexFrom, indexTo, idFrom, idTo){
    console.log(indexFrom, idFrom, idTo)
    document.getElementById("arrowContainer").innerHTML += `<div class="arrowLine" id="arrowLine${indexFrom}"></div>`

    horizontal = true
    if((indexFrom >= 10 && indexFrom <= 19) || (indexFrom >= 30 && indexFrom <= 39)){
        horizontal = false
    }

    boxFrom = document.getElementById(idFrom).getBoundingClientRect()
    boxTo = document.getElementById(idTo).getBoundingClientRect()

    console.log(horizontal?"horizontal":"vertical")

    if(horizontal){
        lineHeight = document.getElementById(`arrowLine${indexFrom}`).getBoundingClientRect().height

        document.getElementById(`arrowLine${indexFrom}`).style.width = Math.abs((boxTo.left - boxFrom.left + boxTo.right - boxFrom.right)/2)+"px"
        document.getElementById(`arrowLine${indexFrom}`).style.left = Math.min(boxFrom.left + boxFrom.width/2, boxTo.left + boxTo.width/2)+"px"
        document.getElementById(`arrowLine${indexFrom}`).style.top = (boxFrom.top + boxFrom.height/2 - lineHeight/2) + "px"

    }else{
        lineWidth = document.getElementById(`arrowLine${indexFrom}`).getBoundingClientRect().width

        document.getElementById(`arrowLine${indexFrom}`).style.height = Math.abs((boxTo.top - boxFrom.top + boxTo.bottom - boxFrom.bottom)/2)+"px"
        document.getElementById(`arrowLine${indexFrom}`).style.top = Math.min(boxFrom.top + boxFrom.height/2, boxTo.top + boxTo.height/2)+"px"
        document.getElementById(`arrowLine${indexFrom}`).style.left = (boxFrom.left + boxFrom.width/2 - lineWidth/2) + "px"
    }
}

function getArrowNodeId(node){
    if(node.type == "start"){
        return "arrowStart"
    }else if(node.type == "end"){
        return "arrowEnd"
    }else if(node.type == "corner"){
        return `arrowCorner${node.cornerNum}`
    }else{
        throw new Error("arrow node type not recognized!")
    }
}

function drawArrow(startIndex, endIndex){
    document.getElementById("arrowContainer").style.display = "unset"

    arrowItems = [{type: "start", index: startIndex}]

    if(endIndex < startIndex){
        endIndex+=40
    }

    arrowCorners = 0
    for(i=10; i < endIndex; i+=10){
        if(startIndex < i && i < endIndex){
            arrowItems.push({type: "corner", index: i%40, cornerNum: arrowCorners})
            arrowCorners ++
        }
    }
    arrowItems.push({type: "end", index: endIndex%40})

    arrowContainerHTML = `<div class="arrowStart" id="arrowStart"></div>`
    for(i=0; i<arrowCorners; i++){
        arrowContainerHTML += `<div class="arrowCorner" id="arrowCorner${i}"></div>`
    }

    arrowDirection = "arrowEndLeft"
    if(endIndex % 40 >= 11 && endIndex % 40 <=20){
        arrowDirection = "arrowEndUp"
    }else if(endIndex % 40 >= 21 && endIndex % 40 <=30){
        arrowDirection = "arrowEndRight"
    }else if(endIndex % 40 >= 31 && endIndex % 40 <=39 || endIndex % 40 == 0){
        arrowDirection = "arrowEndDown"
    }

    arrowContainerHTML += `<div class="arrowEnd ${arrowDirection}" id="arrowEnd"><img class="arrowEndPoint" src="assets/arrow/arrowPoint.svg"></div>`

    document.getElementById("arrowContainer").innerHTML = arrowContainerHTML

    placeInTile(document.getElementById(`arrowStart`), startIndex)
    for(i=0; i<arrowCorners; i++){
        //I think adding the 0.1 fixed arrows not working when moving from 0 (start) by over 10 spaces
        cornerIndex = Math.ceil(startIndex / 10 + i + 0.1)*10 % 40
        placeInTile(document.getElementById(`arrowCorner${i}`), cornerIndex)
    }
    placeInTile(document.getElementById(`arrowEnd`), endIndex%40)

    for(i=0; i<arrowItems.length - 1; i++){
        drawLine(arrowItems[i].index, arrowItems[i+1].index, getArrowNodeId(arrowItems[i]), getArrowNodeId(arrowItems[i+1]))
    }
    console.log(arrowItems)

    currentArrow = {start: startIndex, end: endIndex}
}

function hideArrow(){
    document.getElementById("arrowContainer").style.display = "none"
    currentArrow = {start: NaN, end: NaN}
}

window.addEventListener('resize', function(event) {
    if(!(isNaN(currentArrow.start) || isNaN(currentArrow.end))){
        drawArrow(currentArrow.start, currentArrow.end)
    }
}, true);

//TODO: create an arrow that traces the movement path of the last player to move