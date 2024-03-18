function randInt(max){
    return Math.floor(Math.random() * max)
}

tilesList = {
    c0: {loc: "c0", type: "corner", cornerType: "go"},
    c1: {loc: "c1", type: "corner", cornerType: "jail"},
    c2: {loc: "c2", type: "corner", cornerType: "parking"},
    c3: {loc: "c3", type: "corner", cornerType: "goToJail"},

    b0: {loc: "b0", type: "property", location: "elvin citadel", price: 100, set: 1},
    b1: {loc: "b1", type: "chest"},
    b2: {loc: "b2", type: "property", location: "autumns house", price: 100, set: 1},
    b3: {loc: "b3", type: "tax", taxType:"income"},
    b4: {loc: "b4", type: "railroad", set: 9},
    b5: {loc: "b5", type: "property", location: "elvin citadel", price: 100, set: 2},
    b6: {loc: "b6", type: "chance"},
    b7: {loc: "b7", type: "property", location: "elvin citadel", price: 100, set: 2},
    b8: {loc: "b8", type: "property", location: "elvin citadel", price: 100, set: 2},
    
    l0: {loc: "l0", type: "property", location: "elvin citadel", price: 100, set: 5},
    l1: {loc: "l1", type: "utility", utilityType: "electric", set: 9},
    l2: {loc: "l2", type: "property", location: "autumns house", price: 100, set: 5},
    l3: {loc: "l3", type: "property", location: "MAP", price: "0", set: 5},
    l4: {loc: "l4", type: "railroad", set: 9},
    l5: {loc: "l5", type: "property", location: "elvin citadel", price: 100, set: 6},
    l6: {loc: "l6", type: "property", location: "elvin citadel", price: 100, set: 6},
    l7: {loc: "l7", type: "chest"},
    l8: {loc: "l8", type: "property", location: "elvin citadel", price: 100, set: 6},

    t0: {loc: "t0", type: "property", location: "elvin citadel", price: 100, set: 3},
    t1: {loc: "t1", type: "chance", location: "hicks", price: "800", set: 9},
    t2: {loc: "t2", type: "property", location: "autumns house", price: 100, set: 3},
    t3: {loc: "t3", type: "property", location: "MAP", price: "0", set: 3},
    t4: {loc: "t4", type: "railroad", location: "elvin citadel", price: 100, set: 9},
    t5: {loc: "t5", type: "property", location: "elvin citadel", price: 100, set: 4},
    t6: {loc: "t6", type: "utility", utilityType: "water", set: 9},
    t7: {loc: "t7", type: "property", location: "elvin citadel", price: 100, set: 4},
    t8: {loc: "t8", type: "property", location: "elvin citadel", price: 100, set: 4},

    r0: {loc: "r0", type: "property", location: "elvin citadel", price: 100, set: 7},
    r1: {loc: "r1", type: "property", location: "hicks", price: 100, set: 7},
    r2: {loc: "r2", type: "chest"},
    r3: {loc: "r3", type: "property", location: "MAP", price: 100, set: 7},
    r4: {loc: "r4", type: "railroad", location: "elvin citadel", price: 100, set: 9},
    r5: {loc: "r5", type: "chance"},
    r6: {loc: "r6", type: "property", location: "elvin citadel", price: 100, set: 8},
    r7: {loc: "r7", type: "tax", taxType:"luxury"},
    r8: {loc: "r8", type: "property", location: "elvin citadel", price: 100, set: 8},
}

propertySets = [
    ["b0","b2"],
    ["b5","b7","b8"],
    ["l0","l2","l3"],
    ["l5","l6","l8"],
    ["t0","t2","t3"],
    ["r0","r1","r3"],
    ["r6","r8"]
]

players = [
    {name: "Isaiah", money: 0, ownedProperties: {set0:["b0"], set1: ["b5"],set2:["l0"],set3:["l5"],set4:["t0"],set5:[],set6:[],set7:[],set8:[],set9:[]}},
    {name: "p2", money: 323, ownedProperties: {set0:[], set1: [],set2:[],set3:[],set4:[],set5:[],set6:[],set7:[],set8:["r6","r8"],set9:[]}}
]

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
        document.getElementById(`die${displayedDice[i]}`).src = "./assets/dice/dice"+rolls[i]+".svg"
        document.getElementById(`die${displayedDice[i]}`).style.rotate = `${randInt(360)}deg`
        document.getElementById(`die${displayedDice[i]}`).style.opacity = 1
    }

    console.log(rolls[0]+rolls[1])
    return rolls[0]+rolls[1]
}

function drawPossessions(player){
    propertiesHTML = ""

    for(i=0;i<10;i++){
        amountInSet = player.ownedProperties[`set${i}`].length
        if(amountInSet!=0){
            propertiesHTML+=`<div class="cardRow">`
            for(j=0;j<amountInSet;j++){
                cardSource = `'./assets/properties/property-template.svg'`
                propertiesHTML += `
                <img class="propertyCard" src=${cardSource} onclick="viewCard(${cardSource})"
                >`
            }
            for(j=0;j<(6-amountInSet)%3;j++){
                propertiesHTML+=`<div class="fillerCard"></div>`
            }
            propertiesHTML+=`</div>`
        }
    }

    console.log()
    billTypes = [500,100,50,20,10,5,1]
    billType = 0
    if(player.money<=0){
        document.getElementById("money").src = "./assets/money/moneyBlank.svg"
    }else{
        for(i=0;i<billTypes.length; i++){
            if(billTypes[i] <= player.money)
            {
                billType = billTypes[i]
                break
            }
        }
        document.getElementById("money").src = "./assets/money/money"+billType+".svg"
    }
    
    document.getElementById("playerIndicator").innerHTML = player.name
    document.getElementById("moneyCount").innerHTML = `Money: $${player.money}`
    document.getElementById("ownedProperties").innerHTML = propertiesHTML
}