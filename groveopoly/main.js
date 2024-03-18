function randInt(max){
    return Math.floor(Math.random() * max)
}

tilesList = {
    c0: {type: "corner", cornerType: "go"},
    c1: {type: "corner", cornerType: "jail"},
    c2: {type: "corner", cornerType: "parking"},
    c3: {type: "corner", cornerType: "goToJail"},

    b0: {type: "property", location: "elvin citadel", price: 100, set: 1},
    b1: {type: "chest"},
    b2: {type: "property", location: "autumns house", price: 100, set: 1},
    b3: {type: "tax", taxType:"income"},
    b4: {type: "railroad"},
    b5: {type: "property", location: "elvin citadel", price: 100, set: 2},
    b6: {type: "chance"},
    b7: {type: "property", location: "elvin citadel", price: 100, set: 2},
    b8: {type: "property", location: "elvin citadel", price: 100, set: 2},
    
    l0: {type: "property", location: "elvin citadel", price: 100, set: 5},
    l1: {type: "utility", utilityType: "electric"},
    l2: {type: "property", location: "autumns house", price: 100, set: 5},
    l3: {type: "property", location: "MAP", price: "0", set: 5},
    l4: {type: "railroad"},
    l5: {type: "property", location: "elvin citadel", price: 100, set: 6},
    l6: {type: "property", location: "elvin citadel", price: 100, set: 6},
    l7: {type: "chest"},
    l8: {type: "property", location: "elvin citadel", price: 100, set: 6},

    t0: {type: "property", location: "elvin citadel", price: 100, set: 3},
    t1: {type: "chance", location: "hicks", price: "800", set: 9},
    t2: {type: "property", location: "autumns house", price: 100, set: 3},
    t3: {type: "property", location: "MAP", price: "0", set: 3},
    t4: {type: "railroad", location: "elvin citadel", price: 100},
    t5: {type: "property", location: "elvin citadel", price: 100, set: 4},
    t6: {type: "utility", utilityType: "water"},
    t7: {type: "property", location: "elvin citadel", price: 100, set: 4},
    t8: {type: "property", location: "elvin citadel", price: 100, set: 4},

    r0: {type: "property", location: "elvin citadel", price: 100, set: 7},
    r1: {type: "property", location: "hicks", price: 100, set: 7},
    r2: {type: "chest"},
    r3: {type: "property", location: "MAP", price: 100, set: 7},
    r4: {type: "railroad", location: "elvin citadel", price: 100},
    r5: {type: "chance"},
    r6: {type: "property", location: "elvin citadel", price: 100, set: 8},
    r7: {type: "tax", taxType:"luxury"},
    r8: {type: "property", location: "elvin citadel", price: 100, set: 8},
}

pieces = [

]

function onLoad(){
    
    boardHTML = ""
    side="c"
    for(i=0; i<4; i++){
        tile = tilesList[side+i]
        if(tile.cornerType == "go"){
            boardHTML += `<div class='corner tile c${i}'>Pass Go</div>`
        }else if(tile.cornerType == "jail"){
            boardHTML += `<div class='corner tile c${i}'>Jail</div>`
        }else if(tile.cornerType == "parking"){
            boardHTML += `<div class='corner tile c${i}'>Free Parking</div>`
        }else if(tile.cornerType == "goToJail"){
            boardHTML += `<div class='corner tile c${i}'>Go To Jail</div>`
        }
        
    }
    sides = ['b','l','t','r']
    for(i=0; i<4; i++){
        side = sides[i]
        for(j=0; j<9; j++){
            boardHTML += 
            `<div class='${side=="t" ? "top" : side=="b" ? "bottom" : side=="l" ? "left" : side=="r" ? "right" : ""} ${side=="l" || side=="r" ? "sideways" : ""} tile ${side+j}'>`
            tile = tilesList[side+j]
            if(tile.type == "property"){
                boardHTML+=`<div class="${"set"+tile.set} colorOfSet"></div>
                <div class="tileInfo">
                    <div class="location">${tile.location}</div>
                    <div class="price">$${tile.price}</div>
                </div>`
            }else if(tile.type == "railroad"){
                boardHTML += `<div>Tunnel</div><img src="./assets/tunnel.svg">`
            }else if(tile.type == "chance"){
                boardHTML += `<div>Chance?</div>`
            }else if(tile.type == "chest"){
                boardHTML += `<div>Community Chest</div>`
            }else if(tile.type == "tax"){
                if(tile.taxType == "income"){
                    boardHTML += `<div>Income Tax</div>`
                }else if(tile.taxType == "luxury"){
                    boardHTML += `<div>Luxury Tax</div>`
                }
            }else if(tile.type == "utility"){
                if(tile.utilityType == "electric"){
                    boardHTML += `<div>Electric Company</div>`
                }else if(tile.utilityType == "water"){
                    boardHTML += `<div>Water Company</div>`
                }
            }
            boardHTML +=`</div>`
        }
    }
    
    boardHTML += `<div class='em'>GROVEOPOLY</div>`
    document.getElementById("gameBoard").innerHTML = boardHTML
}

function loadPieces(){
    pieces.push({playerNum: 1, name: "isaiah"})
}

function viewCard(path){
    document.getElementById("cardOverlayImage").src = path
    document.getElementById("cardOverlay").style.display = "flex"
}

function hideCard(){
    document.getElementById("cardOverlay").style.display = "none"
}

function rollDice(){
    for(i=0;i<4;i++){
        document.getElementById(`die${i}`).style.opacity = 0
    }
    displayedDice = null
    randomInteger = randInt(6)
    if(randomInteger == 0){displayedDice = [0,1]}
    if(randomInteger == 1){displayedDice = [0,2]}
    if(randomInteger == 2){displayedDice = [0,3]}
    if(randomInteger == 3){displayedDice = [1,2]}
    if(randomInteger == 4){displayedDice = [1,3]}
    if(randomInteger == 5){displayedDice = [2,3]}

    rolls = [randInt(6)+1, randInt(6)+1]

    for(i=0; i<2; i++){
        document.getElementById(`die${displayedDice[i]}`).src = "./assets/dice"+rolls[i]+".svg"
        document.getElementById(`die${displayedDice[i]}`).style.rotate = `${randInt(360)}deg`
        document.getElementById(`die${displayedDice[i]}`).style.opacity = 1
    }

    console.log(rolls[0]+rolls[1])
    return rolls[0]+rolls[1]
}