cursorInfo = {
    velocity: {x: 1, y: 1},
    mousePos: {x: 0, y: 0},
    prevTouching: null,
    size: {w: "20px", h: "20px", br: "10px"}
}

clickableBounds = []

document.addEventListener('mousemove', function(event){
    var x = event.clientX;
    var y = event.clientY;
    
    cursorInfo.mousePos = {x: x-10, y: y-10};

    if(cursorInfo.touching != null){
        touchingBox = document.getElementById(cursorInfo.touching).getBoundingClientRect()
    
        document.getElementById(cursorInfo.touching).style.translate = `${((x - touchingBox.x) / (touchingBox.width) - 0.5) * 25}px ${((y - touchingBox.y) / (touchingBox.height) - 0.5) * 25}px`
        // document.getElementById(cursorInfo.touching).style.borderColor = "rgba(0,0,0,0)"
    }else{
        if(cursorInfo.prevTouching != null){
            document.getElementById(cursorInfo.prevTouching).style.translate = "0 0"
            // document.getElementById(cursorInfo.prevTouching).style.borderColor = "white"
        }
    }

    hovers = document.elementsFromPoint(x,y)
    hoverText = null
    for(i=0;i<hovers.length;i++){
        if(hovers[i].classList.contains("hoverableText")){
            hoverText = hovers[i]
        }
    }
    if(hoverText != null){
        if(cursorInfo.touching==null)
        {
            changeCursorShape(hoverText.parentNode.nodeName)
            document.getElementById("cursor").style.backgroundColor = "rgba(47, 92, 255, 0.71)";
            document.getElementById("cursor").style.translate = "4px 0";
        }
        // console.log("blue")
    }else{
        cursorInfo.size = {w: "20px", h: "20px", br: "10px"}
        document.getElementById("cursor").style.backgroundColor = "rgba(215, 215, 215, 0.342)";
        // console.log("gray")
        document.getElementById("cursor").style.translate = "0 0";
    }
});
function jiggleMouse(){
    mouseMoveEvent = new MouseEvent('mousemove', {
        bubbles: true,
        cancelable: true,
        clientX: cursorInfo.mousePos.x+10,
        clientY: cursorInfo.mousePos.y+10
    });
    document.dispatchEvent(mouseMoveEvent);
}

function resetMovablesPositions(){
    clickableBounds.forEach(element => {
        if(element.id != cursorInfo.touching){
            document.getElementById(element.id).style.translate = "0 0"
            // document.getElementById(element.id).style.borderColor = "white"
        }
    });
    jiggleMouse()
}

function moveCursorTowardMouse(){
    cursorRect = document.getElementById("cursor").getBoundingClientRect()

    if(cursorInfo.touching != null){
        const scrollDistance = window.scrollY
        targetBox = document.getElementById(cursorInfo.touching).getBoundingClientRect()

        // targetBox.x -= 10 
        // targetBox.y -= 10
        
        dist = {x: targetBox.x - cursorRect.x, y: targetBox.y - cursorRect.y}
        document.getElementById("cursor").style.width = `${document.getElementById(cursorInfo.touching).getBoundingClientRect().width}px`
        document.getElementById("cursor").style.height = `${document.getElementById(cursorInfo.touching).getBoundingClientRect().height}px`
        document.getElementById("cursor").style.borderRadius = `calc(var(--pss) * 0.5)`
    }else{
        dist = {x: cursorInfo.mousePos.x - cursorRect.x, y: cursorInfo.mousePos.y - cursorRect.y}
        document.getElementById("cursor").style.width = cursorInfo.size.w
        document.getElementById("cursor").style.height = cursorInfo.size.h
        document.getElementById("cursor").style.borderRadius = cursorInfo.size.br
    }
    
    resetMovablesPositions()
    


    document.getElementById("cursor").style.left = `${cursorRect.x + dist.x/2}px`
    document.getElementById("cursor").style.top = `${cursorRect.y + dist.y/2}px`

    cursorCenter = getCenter(cursorRect)

    for(i=0; i<clickableBounds.length; i++){
        element = clickableBounds[i]
        if(
            element.box.x+element.box.width > cursorInfo.mousePos.x+10 &&
            element.box.x-10 < cursorInfo.mousePos.x &&
            element.box.y+element.box.height > cursorInfo.mousePos.y+10+window.scrollY &&
            element.box.y-10 < cursorInfo.mousePos.y+window.scrollY){
            cursorInfo.touching = element.id
            // document.getElementById("cursor").style.opacity = 0
            break;
        }else{
            if(cursorInfo.touching != null){
                cursorInfo.prevTouching = cursorInfo.touching
            }
            cursorInfo.touching = null
            // document.getElementById("cursor").style.opacity = 1
        }
    };
}

document.addEventListener('click', () => {
    mousePressed()
});

function getCenter(rect){
    return {y: (rect.top+rect.bottom)/2, x: (rect.left+rect.right)/2}
}

function getBoundingBoxes(){
    clickables = document.getElementsByClassName("clickable")
    clickableBounds = []
    for(i=0; i<clickables.length; i++){
        box = clickables[i].getBoundingClientRect()
        box.x-=10
        box.y-=10
        box.y += window.scrollY
        box.height += 20
        box.width += 20

        clickableBounds.push({box: box, id: clickables[i].id})
    }
}

function onLoad(){
    loadSite()

    // window.scroll(0,0)

    getBoundingBoxes()
    window.addEventListener('resize', () => {
        getBoundingBoxes()
    });
}

function openInNewTab(url) {
    window.open(url, '_blank').focus();
}

function mousePressed(){
    if(cursorInfo.touching != null){
        switch(cursorInfo.touching){
            case "test1":
                console.log("test 1")
                break;
            
            default:
                // openInNewTab(cursorInfo.touching)
                window.location = cursorInfo.touching
        }
    }
}

setInterval(moveCursorTowardMouse, 5)
setInterval(resetMovablesPositions, 500)

function changeCursorShape(size){
    height = "20px"
    switch(size){
        case "P":
            height = "calc(var(--pss) * 4)"
            break;
        case "H1":
            height = "calc(var(--pss) * 5.5)"
            break;
    }
    cursorInfo.size.w = "4px"
    cursorInfo.size.h = height
}