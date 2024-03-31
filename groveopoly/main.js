function randInt(max){
    return Math.floor(Math.random() * max)
}

tilesList = {
    c0: {loc: "c0", type: "corner", cornerType: "go", players: []},
    c1: {loc: "c1", type: "corner", cornerType: "jail"},
    c2: {loc: "c2", type: "corner", cornerType: "parking"},
    c3: {loc: "c3", type: "corner", cornerType: "goToJail"},

    b0: {loc: "b0", type: "property", location: "Zerbe", price: 60, set: 1, rent: [2, 4, 10, 30, 90, 160, 250], houseCost: 50},
    b1: {loc: "b1", type: "chest"},
    b2: {loc: "b2", type: "property", location: "Sibera", price: 60, set: 1, rent: [4, 8, 20, 60, 180, 320, 450], houseCost: 50},
    b3: {loc: "b3", type: "tax", taxType:"income"},
    b4: {loc: "b4", type: "railroad", set: 9, price: 200, name: "Crawford Tunnel", rent: [25, 50, 100, 200]},
    b5: {loc: "b5", type: "property", location: "Hicks", price: 100, set: 2, rent: [6, 12, 30, 90, 270, 400, 550], houseCost: 50},
    b6: {loc: "b6", type: "chance"},
    b7: {loc: "b7", type: "property", location: "MAP", price: 100, set: 2, rent: [6, 12, 30, 90, 270, 400, 550], houseCost: 50},
    b8: {loc: "b8", type: "property", location: "The Garage", price: 120, set: 2, rent: [8, 16, 40, 100, 300, 450, 600], houseCost: 50},
    
    // , rent: [0, 0, 0, 0, 0, 0, 0], houseCost: 0

    l0: {loc: "l0", type: "property", location: "Ketler", price: 140, set: 3, rent: [10, 20, 50, 150, 450, 625, 750], houseCost: 100},
    l1: {loc: "l1", type: "utility", utilityType: "electric", set: 9, price: 150},
    l2: {loc: "l2", type: "property", location: "Lincoln", price: 140, set: 3, rent: [10, 20, 50, 150, 450, 625, 750], houseCost: 100},
    l3: {loc: "l3", type: "property", location: "Hopeman", price: 160, set:3, rent: [12, 24, 60, 180, 500, 700, 900], houseCost: 100},
    l4: {loc: "l4", type: "railroad", set: 9, price: 200, name: "SAC Tunnel", rent: [25, 50, 100, 200]},
    l5: {loc: "l5", type: "property", location: "Cunningham's Mill", price: 180, set: 4, rent: [14, 28, 70, 200, 550, 750, 950], houseCost: 100},
    l6: {loc: "l6", type: "chest"},
    l7: {loc: "l7", type: "property", location: "Beans on Broad", price: 180, set: 4, rent: [14, 28, 70, 200, 550, 750, 950], houseCost: 100},
    l8: {loc: "l8", type: "property", location: "Jin Sushi", price: 200, set: 4, rent: [16, 32, 80, 220, 600, 800, 1000], houseCost: 100},

    t0: {loc: "t0", type: "property", location: "STEM", price: 220, set: 5, rent: [18, 36, 90, 250, 700, 875, 1050], houseCost: 150},
    t1: {loc: "t1", type: "chance", price: "800", set: 9},
    t2: {loc: "t2", type: "property", location: "Rockwell", price: 220, set: 5, rent: [18, 36, 90, 250, 700, 875, 1050], houseCost: 150},
    t3: {loc: "t3", type: "property", location: "Hoyt", price: 240, set: 5, rent: [20, 40, 100, 300, 750, 925, 1100], houseCost: 150},
    t4: {loc: "t4", type: "railroad", location: "elvin citadel", price: 200, set: 9, name: "McNulty's Tunnel", rent: [25, 50, 100, 200]},
    t5: {loc: "t5", type: "property", location: "Rainbow Bridge", price: 260, set: 6, rent: [22, 44, 110, 330, 800, 975, 1150], houseCost: 150},
    t6: {loc: "t6", type: "property", location: "Rizzebo", price: 260, set: 6, rent: [22, 44, 110, 330, 800, 975, 1150], houseCost: 150},
    t7: {loc: "t7", type: "utility", utilityType: "water", set: 9},
    t8: {loc: "t8", type: "property", location: "South Lobby", price: 280, set: 6, rent: [24, 48, 120, 360, 850, 1025, 1200], houseCost: 150},

    r0: {loc: "r0", type: "property", location: "Elvin Citadel", price: 300, set: 7, rent: [26, 52, 130, 390, 900, 1100, 1275], houseCost: 200},
    r1: {loc: "r1", type: "property", location: "Autumn's Forest", price: 300, set: 7, rent: [26, 52, 130, 390, 900, 1100, 1275], houseCost: 200},
    r2: {loc: "r2", type: "chest"},
    r3: {loc: "r3", type: "property", location: "Murray Estates", price: 320, set: 7, rent: [28, 56, 150, 450, 1000, 1200, 1400], houseCost: 200},
    r4: {loc: "r4", type: "railroad", price: 200, set: 9, name: "Harbison Tunnel", rent: [25, 50, 100, 200]},
    r5: {loc: "r5", type: "chance"},
    r6: {loc: "r6", type: "property", location: "McNulty Manor", price: 350, set: 8, rent: [35, 70, 175, 500, 1100, 1300, 1500], houseCost: 200},
    r7: {loc: "r7", type: "tax", taxType:"luxury"},
    r8: {loc: "r8", type: "property", location: "TMX Towers", price: 400, set: 8, rent: [50, 100, 200, 600, 1400, 1700, 2000], houseCost: 200},
}

propertySets = [
    ["b0","b2"],
    ["b5","b7","b8"],
    ["l0","l2","l3"],
    ["l5","l7","l8"],
    ["t0","t2","t3"],
    ["t5","t6","t8"],
    ["r0","r1","r3"],
    ["r6","r8"]
]

players = []

currentPlayer = 0

boardOrder = []

chanceCards = [
    {path: "./assets/chance/chance-template.svg", buttonText: "stash", isJail: true},
    {path: "./assets/chance/chance-template.svg", buttonText: "stash", isJail: false},
    {path: "./assets/chance/chance-template.svg", buttonText: "stash", isJail: false},
    {path: "./assets/chance/chance-template.svg", buttonText: "stash", isJail: false},
    {path: "./assets/chance/chance-template.svg", buttonText: "stash", isJail: false},
    {path: "./assets/chance/chance-template.svg", buttonText: "stash", isJail: false},
    {path: "./assets/chance/chance-template.svg", buttonText: "stash", isJail: false},
    {path: "./assets/chance/chance-template.svg", buttonText: "stash", isJail: false},
    {path: "./assets/chance/chance-template.svg", buttonText: "stash", isJail: false},
    {path: "./assets/chance/chance-template.svg", buttonText: "stash", isJail: false},
    {path: "./assets/chance/chance-template.svg", buttonText: "stash", isJail: false},
    {path: "./assets/chance/chance-template.svg", buttonText: "stash", isJail: false},
    {path: "./assets/chance/chance-template.svg", buttonText: "stash", isJail: false},
    {path: "./assets/chance/chance-template.svg", buttonText: "stash", isJail: false},
    {path: "./assets/chance/chance-template.svg", buttonText: "stash", isJail: false},
    {path: "./assets/chance/chance-template.svg", buttonText: "stash", isJail: false},
]

chestCards = [
    {path: "./assets/chest/chest-template.svg", buttonText: "stash", isJail: true},
    {path: "./assets/chest/chest-template.svg", buttonText: "exit", isJail: false},
    {path: "./assets/chest/chest-template.svg", buttonText: "exit", isJail: false},
    {path: "./assets/chest/chest-template.svg", buttonText: "exit", isJail: false},
    {path: "./assets/chest/chest-template.svg", buttonText: "exit", isJail: false},
    {path: "./assets/chest/chest-template.svg", buttonText: "exit", isJail: false},
    {path: "./assets/chest/chest-template.svg", buttonText: "exit", isJail: false},
    {path: "./assets/chest/chest-template.svg", buttonText: "exit", isJail: false},
    {path: "./assets/chest/chest-template.svg", buttonText: "exit", isJail: false},
    {path: "./assets/chest/chest-template.svg", buttonText: "exit", isJail: false},
    {path: "./assets/chest/chest-template.svg", buttonText: "exit", isJail: false},
    {path: "./assets/chest/chest-template.svg", buttonText: "exit", isJail: false},
    {path: "./assets/chest/chest-template.svg", buttonText: "exit", isJail: false},
    {path: "./assets/chest/chest-template.svg", buttonText: "exit", isJail: false},
    {path: "./assets/chest/chest-template.svg", buttonText: "exit", isJail: false},
    {path: "./assets/chest/chest-template.svg", buttonText: "exit", isJail: false},
]

pieces = [

]

function randomRotation(spread){
    return Math.random()*spread*2-spread
}

function randomRotations(spread, amount){
    rotations = []
    for(i=0; i<amount; i++){
        rotations.push(randomRotation(spread))
    }
    return rotations
}

gameInfo = {
    playerNames: ["Player 1", "Player 2", "Player 3", "Player 4"],
    spread: 10,
    chanceRotations: randomRotations(10, 3),
    chestRotations: randomRotations(10, 3),
}

// source: https://stackoverflow.com/a/35803660
const isWhitespaceString = str => !/\S/.test(str)

function drawStack(type){
    for(i=0; i<3; i++){
        document.getElementById(type+"Stack"+i).style.rotate = `${gameInfo[type+"Rotations"][i]}deg`
    }
}

function startProcess(step){
    for(i=0; i<2; i++){
        document.getElementById(`start${i}`).style.display = "none"
        if(step == 1){
            drawStartNames()
        }
    }
    document.getElementById(`start${step}`).style.display = "block"
}

function drawStartNames(){
    startNamesHTML = ""
    numPlayers = gameInfo.playerNames.length
    for(j=0; j<numPlayers; j++){
        startNamesHTML += `<div class="startName" id="startName${j}" onclick="editStartName(${j})">${gameInfo.playerNames[j]}</div>`
    }
    if(numPlayers <= 7){
        newPlayerNum = 1
        while(gameInfo.playerNames.indexOf("Player "+newPlayerNum) >= 0){
            newPlayerNum ++
        }
        startNamesHTML += `<img src="./assets/gui/add.svg" id="addNameButton" class="startNameButton buttonClickable" onclick="addStartName(${newPlayerNum})">`
    }
    document.getElementById("startNames").innerHTML = startNamesHTML
}

function addStartName(num){
    gameInfo.playerNames.push("Player "+num)
    drawStartNames()
}

function removeStartName(num){
    gameInfo.playerNames.splice(num,1)
    drawStartNames()
}

function editStartName(playerNum){
    document.getElementById("startName"+playerNum).innerHTML = `<input type='text' class='startNameInput' id='startNameInput${playerNum}'>
    <img src="./assets/gui/confirm.svg" class="startNameButton buttonClickable" onclick="setStartName(${playerNum})">
    <img src="./assets/gui/cancel.svg" class="startNameButton buttonClickable" onclick="cancelSetStartName(${playerNum})">
    <img src="./assets/gui/remove.svg" class="startNameButton buttonClickable" onclick="removeStartName(${playerNum})">`
    document.getElementById(`startNameInput${playerNum}`).value = gameInfo.playerNames[playerNum]
    document.getElementById("startName"+playerNum).setAttribute( "onClick", "javascript: ;")
}

function setStartName(playerNum){
    newName = document.getElementById(`startNameInput${playerNum}`).value
    if(isWhitespaceString(newName) || gameInfo.playerNames.indexOf(newName) >= 0){
        cancelSetStartName(playerNum)
        return
    }
    gameInfo.playerNames[playerNum] = newName
    document.getElementById("startName"+playerNum).outerHTML = `<div class="startName" id="startName${playerNum}" onclick="editStartName(${playerNum})">${gameInfo.playerNames[playerNum]}</div>`
}

function cancelSetStartName(playerNum){
    document.getElementById("startName"+playerNum).outerHTML = `<div class="startName" id="startName${playerNum}" onclick="editStartName(${playerNum})">${gameInfo.playerNames[playerNum]}</div>`
}

function initializeBoard(){
    document.getElementById("startScreen").style.display = "none"
    boardHTML = ""
    side="c"
    for(i=0; i<4; i++){
        tile = tilesList[side+i]
        if(tile.cornerType == "go"){
            boardHTML += `<div class='corner tile c${i}'>go`
        }else if(tile.cornerType == "jail"){
            boardHTML += `<div class='corner tile c${i}'>Jail`
        }else if(tile.cornerType == "parking"){
            boardHTML += `<div class='corner tile c${i}'><img class="cornerImg" src="./assets/corners/parking.svg">`
        }else if(tile.cornerType == "goToJail"){
            boardHTML += `<div class='corner tile c${i}'>Go To Jail`
        }
        boardHTML +=`<div class="players" id="players${tile.loc}">`
        
        for(j=0;j<9;j++){
            boardHTML += `<div class="player" id="${tile.loc}p${j}"></div>`
        }
        boardHTML += `</div></div>`
    }
    sides = ['b','l','t','r']
    for(i=0; i<4; i++){
        side = sides[i]
        for(j=0; j<9; j++){
            boardHTML += 
            `<div class='${side=="t" ? "top" : side=="b" ? "bottom" : side=="l" ? "left" : side=="r" ? "right" : ""} ${side=="l" || side=="r" ? "sideways" : ""} tile ${side+j}'>`
            tile = tilesList[side+j]
            if(tile.type == "property"){
                boardHTML+=`<div class="${"set"+tile.set} colorOfSet buttonClickable" onclick="showOverlay({type: 'propertyCardPreview', loc: '${tile.loc}', path: './assets/properties/${tile.loc}.svg'})"></div>
                <div class="tileInfo">
                    <div class="location">${tile.location}</div>
                    <div class="price">$${tile.price}</div>
                </div>`
                tile.houses = 0
            }else if(tile.type == "railroad"){
                boardHTML += `<div class="railroadName buttonClickable" onclick="showOverlay({type: 'propertyCardPreview', loc: '${tile.loc}', path: './assets/properties/${tile.loc}.svg'})">${tile.name}</div><img src="./assets/tunnel.svg" class="tileImg"><div class="railroad price">$${tile.price}</div>`
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
                boardHTML += `<div class="utilityName buttonClickable" onclick="showOverlay({type: 'propertyCardPreview', loc: '${tile.loc}', path: './assets/properties/${tile.loc}.svg'})">`
                if(tile.utilityType == "electric"){
                    boardHTML += `Electric Company`
                }else if(tile.utilityType == "water"){
                    boardHTML += `Water Company`
                }
                boardHTML += `</div>`
            }
            boardHTML +=`<div class="players" id="players${tile.loc}">`
            for(k=0;k<9;k++){
                boardHTML += `<div class="player" id="${tile.loc}p${k}"></div>`
            }
            boardHTML += `</div></div>`
        }

        
    }

    // for (let key in tilesList) {
    //     tilesList[key].players=[];
    // }

    //create board order
    boardOrder.push("c0")
    for(i=0;i<9;i++){boardOrder.push("b"+i)}
    boardOrder.push("c1")
    for(i=0;i<9;i++){boardOrder.push("l"+i)}
    boardOrder.push("c2")
    for(i=0;i<9;i++){boardOrder.push("t"+i)}
    boardOrder.push("c3")
    for(i=0;i<9;i++){boardOrder.push("r"+i)}
    
    boardHTML += `<div class='em'>
    <div class="cardPile chancePile">
        <img src="./assets/chance/chance-back.svg" class="chanceStackCard" id="chanceStack2">
        <img src="./assets/chance/chance-back.svg" class="chanceStackCard" id="chanceStack1">
        <img src="./assets/chance/chance-back.svg" class="chanceStackCard" id="chanceStack0">
    </div>
    <div class="cardPile chestPile">
        <img src="./assets/chance/chance-back.svg" class="chanceStackCard" id="chestStack2">
        <img src="./assets/chance/chance-back.svg" class="chanceStackCard" id="chestStack1">
        <img src="./assets/chance/chance-back.svg" class="chanceStackCard" id="chestStack0">
    </div>
    <img src="./assets/background.svg">
    </div>`
    document.getElementById("gameBoard").innerHTML = boardHTML

    initializeGame()

    drawStack("chance")
    drawStack("chest")

    document.getElementById("gameContainer").style.display = "grid"
}

function loadPieces(){
    pieces.push({playerNum: 1, name: "isaiah"})
}

//TODO: change overlay system
function showOverlay(args){
    document.getElementById("chanceOverlay").style.display = "none"
    document.getElementById("cardOverlay").style.display = "none"
    document.getElementById("rentOverlay").style.display = "none"
    document.getElementById("rentButtons").style.display = "none"
    document.getElementById("taxOverlay").style.display = "none"
    document.getElementById("taxButtons").style.display = "none"
    document.getElementById("taxButton").style.display = "none"
    document.getElementById("cardOverlayContainer").style.display = "none"

    document.getElementById("purchaseButton").style.display = "none"

    document.getElementById("chanceOverlay").style.display = "none"
    document.getElementById("chanceButtons").style.display = "none"

    document.getElementById("overlay").setAttribute( "onClick", "" )

    //card overlay
    if(args.type == "propertyCard")
    {
        document.getElementById("overlay").setAttribute( "onClick", "javascript: hideCard();")
        viewCard(args.path, {showOwner: false})
    }

    else if(args.type == "propertyCardPreview")
    {
        document.getElementById("overlay").setAttribute( "onClick", "javascript: hideCard();")
        viewCard(args.path, {showOwner: true, owner: whoOwns(tilesList[args.loc])})
    }

    else if(args.type == "rent"){
        if(args.rentAmount.rentType == "property"){
            document.getElementById("rentOverlay").innerText = `${args.property.location} is owned by ${players[args.recipient].name}. Rent${args.rentAmount.rentText} is $${args.rentAmount.rent}.`
        }else if(args.rentAmount.rentType == "railroad"){
            document.getElementById("rentOverlay").innerText = `${args.property.name} is owned by ${players[args.recipient].name}. Rent with ${args.rentAmount.ownedTunnels} tunnel${(args.rentAmount.ownedTunnels > 1) ? "s" : ""} is $${args.rentAmount.rent}.`
        }else{
            throw new Error("rent type not recognized")
        }
        document.getElementById("rentAmount").innerHTML = `($${args.rentAmount.rent})`
        document.getElementById("rentButton").setAttribute( "onClick", `javascript: payRent(${args.rentAmount.rent}, ${args.recipient});`)
        document.getElementById("rentOverlay").style.display = "flex"
        document.getElementById("rentButtons").style.display = "flex"
        console.log(args)
    }

    else if(args.type == "tax"){
        document.getElementById("taxOverlay").innerHTML = `${args.taxDescription}`
        document.getElementById("taxAmount").innerHTML = `($${args.taxAmount})`
        document.getElementById("taxButton").setAttribute( "onClick", `javascript: payTax(${args.taxAmount});`)
        document.getElementById("taxOverlay").style.display = "flex"
        document.getElementById("taxButtons").style.display = "flex"
        if(canAfford(players[currentPlayer], args.taxAmount)){
            document.getElementById("taxButton").style.display = "block"
        }else{
            document.getElementById("taxButton").style.display = "none"
        }
    }

    else if(args.type == "stashedJail"){
        document.getElementById("overlay").setAttribute( "onClick", "javascript: hideCard();")
        document.getElementById("chanceOverlayImage").src = args.path
        document.getElementById("chanceOverlay").style.display = "flex"
    }

    //chance or chest overlay
    else if(args.type =="chance"){
        //TODO: change chance cards so they have different text
        document.getElementById("chanceOverlayImage").src = args.path
        
        document.getElementById("chanceButton").setAttribute( "onClick", (args.isJail ? "javascript: addJail(0)" : "exitChanceOrChest()"))

        document.getElementById("chanceButton").innerHTML = args.buttonText
        document.getElementById("chanceButtons").style.display = "flex"
        document.getElementById("chanceOverlay").style.display = "flex"
    }

    else if(args.type =="chest"){
        //TODO: change chest cards so they have different text
        document.getElementById("chanceOverlayImage").src = args.path
        
        document.getElementById("chanceButton").setAttribute( "onClick", (args.isJail ? "javascript: addJail(1)" : "exitChanceOrChest()"))
        
        document.getElementById("chanceButton").innerHTML = args.buttonText
        document.getElementById("chanceButtons").style.display = "flex"
        document.getElementById("chanceOverlay").style.display = "flex"
    }

    else if(args.type == "property"){
        document.getElementById("purchasePrice").innerHTML = `($${args.price})`
        
        document.getElementById("auctionPrice").innerHTML = `($${(args.price/2)})`
        viewCard(args.path, {showOwner: false})
        document.getElementById("purchaseOverlay").style.display = "flex"
        if(canAfford(players[currentPlayer], args.price)){
            document.getElementById("purchaseButton").style.display = "block"
        }else{
            document.getElementById("purchaseButton").style.display = "none"
        }
    }

    document.getElementById("overlay").style.display = "flex"
}

function exitChanceOrChest(){
    drawPossessions(players[currentPlayer])
    updateNextActionButton()
    hideCard()
}

function addJail(index){
    players[currentPlayer].getOutOfJail[index] = true
    drawPossessions(players[currentPlayer])
    updateNextActionButton()
    hideCard()
}

function viewCard(path, ownerInfo){
    document.getElementById("cardOverlay").src = path
    if(ownerInfo.showOwner){
        if(ownerInfo.owner == -1){
            document.getElementById("propertyOwner").innerHTML = "Unowned"
        }else{
            document.getElementById("propertyOwner").innerHTML = `Owner: ${players[ownerInfo.owner].name}`
        }
        document.getElementById("propertyOwner").style.display = "block"
    }else{
        document.getElementById("propertyOwner").style.display = "none"
    }
    
    document.getElementById("cardOverlay").style.display = "block"
    document.getElementById("cardOverlayContainer").style.display = "flex"
}

function hideCard(){
    document.getElementById("overlay").style.display = "none"
    document.getElementById("purchaseOverlay").style.display = "none"
    updateNextActionButton()
}

function placePlayers(){
    players.forEach(element => {
        console.log(players.length)
        movePiece(element, "c0")
    });
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

    // console.log(rolls[0]+rolls[1])
    return {sum: rolls[0]+rolls[1], doubles: rolls[0] == rolls[1]}
}

function drawPossessions(player){
    propertiesHTML = ""

    for(i=1;i<10;i++){
        amountInSet = player.ownedProperties[`set${i}`].length
        if(amountInSet!=0){
            propertiesHTML+=`<div class="cardRow">`
            for(j=0;j<amountInSet;j++){
                cardSource = `'./assets/properties/${player.ownedProperties[`set${i}`][j]}.svg'`

                propertiesHTML += `
                <img class="propertyCard" src=${cardSource} onclick="showOverlay({type: 'propertyCard', path: ${cardSource}})">`
            }
            for(j=0;j<(6-amountInSet)%3;j++){
                propertiesHTML+=`<div class="fillerCard"></div>`
            }
            propertiesHTML+=`</div>`
        }
    }

    //hardcoded
    for(i=0;i<2;i++){
        if(player.getOutOfJail[i]){
            cardPaths = ["./assets/chance/chance-template.svg", "./assets/chest/chest-template.svg"]
            propertiesHTML +=
            `<div class="cardRow">
                <img src="${cardPaths[i]}" class="getOutOfJail" onclick="showOverlay({type:'stashedJail',path:'${cardPaths[i]}'})">
            </div>`
        }
    }
    
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

function dumbDelete(){
    advancePiece(players[currentPlayer], rollDice())
}

function advancePiece(player, spaces){
    currentPos = boardOrder.indexOf(player.position.substring(0,2))
    
    newPos = (currentPos + spaces) % boardOrder.length
    //somewhat hacky and hardcoded
    if(currentPos > newPos){
        player.money += 200
        drawPossessions(player)
    }
    movePiece(player, boardOrder[newPos])
}

function movePiece(player, position){
    document.getElementById(player.position).style.opacity = 0

    openSpaces = [0,1,2,3,4,5,6,7,8]
    for(i=0;i<players.length;i++){
        if(players[i].position.substring(0,2) == position){
            openSpaces.splice(openSpaces.indexOf(parseInt(players[i].position.substring(3))), 1)
        }
    }

    newPos = position+"p"+openSpaces[randInt(openSpaces.length)]
    player.position = newPos

    newSpot = document.getElementById(newPos)
    newSpot.innerHTML = `<img src="./assets/pieces/${player.piece}">`
    newSpot.style.rotate = `${randInt(360)}deg`
    newSpot.style.opacity = 1

    console.log(`moved ${player.name} to ${newPos}`)

    landOnSpace(tilesList[position])
}

function propertyPurchase(space){
    document.getElementById("purchaseButton").setAttribute( "onClick", `javascript: purchaseProperty(players[currentPlayer],'${space.loc}');`)
    document.getElementById("auctionButton").setAttribute( "onClick", `javascript: auctionProperty(players[currentPlayer],'${space.loc}');`)
    document.getElementById("raiseMoneyButton").setAttribute( "onClick", `javascript: raiseMoney(players[currentPlayer],'${space.loc}');`)
    showOverlay({type:"property", path: "./assets/properties/"+space.loc+".svg", price: space.price})
}

function payRent(price, recipient){
    if(canAfford(players[currentPlayer], price)){
        players[currentPlayer].debts = []
        players[currentPlayer].money -= price
        console.log(recipient)
        players[recipient].money += price
        hideCard()
        drawPossessions(players[currentPlayer])
    }
}

function payTax(amount){
    if(canAfford(players[currentPlayer], amount)){
        players[currentPlayer].debts = []
        players[currentPlayer].money -= amount
        hideCard()
        drawPossessions(players[currentPlayer])
    }
}

function landOnSpace(space){
    console.log(space.type)

    if(space.type == "property" || space.type == "railroad" || space.type == "utility"){
        owner = whoOwns(space)

        //if property is unowned
        if(owner == -1){
            propertyPurchase(space)
        }

        //if property is owned by self
        else if(owner == currentPlayer){
            console.log("curr owns this")
        }

        //if property is owned by someone else
        else{
            rentInfo = getRent(space)
            players[currentPlayer].debts.push({amount: rentInfo, owedTo: owner})
            showOverlay({type: "rent", rentAmount: rentInfo, recipient: owner, property: space})
        }

    }else if(space.type == "chance"){
        chanceCard = getChance()
        showOverlay({type: "chance", path: chanceCard.path, buttonText: chanceCard.buttonText, isJail: chanceCard.isJail})
        console.log("chance card")
    }else if(space.type == "chest"){
        chestCard = getChest()
        showOverlay({type: "chest", path: chestCard.path, buttonText: chestCard.buttonText, isJail: chestCard.isJail})
        console.log("chance card")
    }else if(space.type == "corner"){
        if(space.cornerType == "goToJail"){
            movePiece(players[currentPlayer], "c1")
        }
    }else if(space.type == "tax"){
        // get tax amounts (i think this works)
        //hardcoded
        taxAmount = getTaxAmount(space, players[currentPlayer])
        taxDescription = (space.taxType == "income" ? "Income Tax: Pay $200 or 10% of your assets" : "Luxury Tax: Pay $75")
        players[currentPlayer].debts.push({amount: taxAmount, owedTo: -1, taxDescription: taxDescription})
        showOverlay({type:"tax", taxAmount: taxAmount, taxDescription: taxDescription})
    }
    updateNextActionButton()
}

function getNetWorth(player){
    netWorth = 0
    // Cash on hand
    netWorth += player.money

    // TODO: The printed price of all unmortgaged property


    // TODO: The mortgaged value of mortgaged properties


    // TODO: Printed price of all buildings (houses and hotels) owned


    return netWorth
}

function getTaxAmount(space, player){
    if(space.taxType == "income"){
        return Math.min(Math.round(0.1 * getNetWorth(player) + 0.0001), 200)
    }else if(space.taxType == "luxury"){
        return 75
    }else{
        throw new Error()
    }
}

function raiseMoney(player, location){
    player.raisingFunds = true
    player.savingForProperty = tilesList[location]
    hideCard()
    updateNextActionButton()
}

function ownsColorSet(property){
    owner = whoOwns(property)
    for(i=0; i<propertySets.length; i++){
        if(propertySets[i].indexOf(property.loc) >= 0){
            console.log(propertySets[i])
            console.log(players[owner].ownedProperties["set"+(i+1)])
            return propertySets[i].length == players[owner].ownedProperties["set"+(i+1)].length
        }
    }
}

function getRent(tile){
    if(tile.type == "property"){
        let rentText, rentAmount
        if(ownsColorSet(tile)){
            if(tile.houses == 0){
                rentText = " with color set"
            }else if(tile.houses >= 1 && tile.houses <= 4){
                rentText = ` with ${tile.houses} house${(tile.houses > 1 ? "s" : "")}`
            }else if(tile.houses == 5){
                rentText = " with a hotel"
            }else{
                throw new Error()
            }
            rentAmount = tile.rent[tile.houses + 1]
        }else{
            rentText = ""
            rentAmount = tile.rent[0]
        }
        return {rent: rentAmount, rentText: rentText, rentType: "property"}
    }else if(tile.type == "railroad"){
        //check if multiple tunnels are owned
        owner = whoOwns(tile)
        tunnelCount = 0
        for(i=0; i<players[owner].ownedProperties.set9.length; i++){
            if(tilesList[players[owner].ownedProperties.set9[i]].type == "railroad"){
                tunnelCount++
            }
        }
        tunnelRents = [25, 50, 100, 200]
        console.log(tunnelCount+ " tunnels")
        return {rent: tunnelRents[tunnelCount-1], ownedTunnels: tunnelCount, rentType: "railroad"}
    //TODO: fix utility rent
    }else if(tile.type == "utility"){
        return (4*rollDice().sum)
    }
    console.error("tile type not recognized "+tile.type);
}

function whoOwns(tile){
    for(i=0; i<players.length; i++){
        //hardcoded
        for(j=1; j<10; j++){
            if(players[i].ownedProperties["set"+j].indexOf(tile.loc) >= 0){
                return i
            }
        }
    }
    return -1
}

function nextTurn(){
    currentPlayer++
    if(currentPlayer == players.length){currentPlayer=0}
    drawPossessions(players[currentPlayer])
}

function initializeGame(){
    console.log(gameInfo.playerNames)
    initializePlayers(gameInfo.playerNames)
    drawPossessions(players[0])
    currentPlayer = 0
    players[0].playing = true
    placePlayers()
    updateNextActionButton()
}

function initializePlayers(names){
    for(i=0;i<names.length;i++){
        players.push({
            name: names[i], 
            position: "c0p0",
            money: 1500, 
            ownedProperties: {set1:[], set2: [],set3:[],set4:[],set5:[],set6:[],set7:[],set8:[],set9:[]}, 
            piece: `num${i+1}.svg`, 
            playing: false, 
            doubles: 0, 
            getOutOfJail: [false, false],
            raisingFunds: false,
            savingForProperty: null,
            debts: []
        })
    }
}

function getChance(){
    //TODO: complete this method
    gameInfo.chanceRotations.splice(0,1)
    gameInfo.chanceRotations.push(randomRotation(gameInfo.spread))

    drawStack("chance")
    return chanceCards[0]
}

//TODO: complete this method
function getChest(){
    return chestCards[1]
}

function nextAction(){
    if(players[currentPlayer].debts.length > 0){
        debt = players[currentPlayer].debts[0]
        if(debt.owedTo == -1){
            console.log(debt.taxDescription)
            showOverlay({type: "tax", taxAmount: debt.amount, taxDescription: debt.taxDescription})
        }else{
            showOverlay({type: "rent", rentAmount: debt.amount.rent, rentText: debt.amount.rentText, recipient: debt.owedTo, property: debt.property})
        }
    }else if(players[currentPlayer].raisingFunds){
        propertyPurchase(players[currentPlayer].savingForProperty)
    }else if(players[currentPlayer].playing){
        diceRoll = rollDice()
        advancePiece(players[currentPlayer], diceRoll.sum)
        if(diceRoll.doubles){
            players[currentPlayer].doubles += 1
        }else{
            players[currentPlayer].doubles = 0
            players[currentPlayer].playing = false
        }
    }else{
        nextTurn()
        players[currentPlayer].playing = true
    }
    if(players[currentPlayer].doubles >= 3){
        window.alert("jail!")
        // reset doubles to 0
    }
    updateNextActionButton()
}

function updateNextActionButton(){
    if(players[currentPlayer].debts.length > 0){
        buttonText = "Pay Debt"
    }else if(players[currentPlayer].raisingFunds){
        buttonText = "Raise Funds"
    }else if(players[currentPlayer].playing){
        buttonText = "Roll Dice"
    }else{
        buttonText = "Next Player"
    }

    document.getElementById("nextAction").innerHTML = buttonText
}

function canAfford(player, price){
    if(player.money >= price){
        return true
    }
}

function purchaseProperty(player, location){
    if(canAfford(player, tilesList[location].price)){
        player.money -= tilesList[location].price
        hideCard()
        player.savingForProperty = null
        player.raisingFunds = false
        addProperty(player, location)
        updateNextActionButton()
    }else{
        window.alert("not enough money!")
    }
}

function auctionProperty(player, location){
    hideCard()
    //TODO: implement and fix this method
}

function checkSet(location){
    return tilesList[location].set
}

function addProperty(player, location){
    player.ownedProperties["set"+checkSet(location)].push(location)
    drawPossessions(player)
}

function removeProperty(player, location){

}