function randInt(max){
    return Math.floor(Math.random() * max)
}

//stolen

function shuffle(array, seed) {                // <-- ADDED ARGUMENT
    var m = array.length, t, i;
    seed *= 10
    // While there remain elements to shuffle…
    while (m) {
  
      // Pick a remaining element…
      i = Math.floor(random(seed) * m--);        // <-- MODIFIED LINE
  
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
      ++seed                                     // <-- ADDED LINE
    }
  
    return array;
}

function random(seed) {
    var x = Math.sin(seed++) * 10000; 
    return x - Math.floor(x);
}

//stolen https://stackoverflow.com/questions/16801687/javascript-random-ordering-with-seed Ulf Aslak

tilesList = {
    c0: {loc: "c0", type: "corner", cornerType: "go"},
    c1: {loc: "c1", type: "corner", cornerType: "jail"},
    c2: {loc: "c2", type: "corner", cornerType: "parking"},
    c3: {loc: "c3", type: "corner", cornerType: "goToJail"},

    b0: {loc: "b0", type: "property", location: "Zerbe", price: 60, set: 1, rent: [2, 4, 10, 30, 90, 160, 250], houseCost: 50, ownedHouses: 0},
    b1: {loc: "b1", type: "chest"},
    b2: {loc: "b2", type: "property", location: "Sibera", price: 60, set: 1, rent: [4, 8, 20, 60, 180, 320, 450], houseCost: 50, ownedHouses: 0},
    b3: {loc: "b3", type: "tax", taxType:"income"},
    b4: {loc: "b4", type: "railroad", set: 9, price: 200, name: "Crawford Tunnel", rent: [25, 50, 100, 200]},
    b5: {loc: "b5", type: "property", location: "Hicks", price: 100, set: 2, rent: [6, 12, 30, 90, 270, 400, 550], houseCost: 50, ownedHouses: 0},
    b6: {loc: "b6", type: "chance"},
    b7: {loc: "b7", type: "property", location: "MAP", price: 100, set: 2, rent: [6, 12, 30, 90, 270, 400, 550], houseCost: 50, ownedHouses: 0},
    b8: {loc: "b8", type: "property", location: "The Garage", price: 120, set: 2, rent: [8, 16, 40, 100, 300, 450, 600], houseCost: 50, ownedHouses: 0},
    
    // , rent: [0, 0, 0, 0, 0, 0, 0], houseCost: 0

    l0: {loc: "l0", type: "property", location: "Ketler", price: 140, set: 3, rent: [10, 20, 50, 150, 450, 625, 750], houseCost: 100, ownedHouses: 0},
    l1: {loc: "l1", type: "utility", utilityType: "electric", set: 9, price: 150, name: "electric company change"},
    l2: {loc: "l2", type: "property", location: "Lincoln", price: 140, set: 3, rent: [10, 20, 50, 150, 450, 625, 750], houseCost: 100, ownedHouses: 0},
    l3: {loc: "l3", type: "property", location: "Hopeman", price: 160, set:3, rent: [12, 24, 60, 180, 500, 700, 900], houseCost: 100, ownedHouses: 0},
    l4: {loc: "l4", type: "railroad", set: 9, price: 200, name: "SAC Tunnel", rent: [25, 50, 100, 200]},
    l5: {loc: "l5", type: "property", location: "Cunningham's Mill", price: 180, set: 4, rent: [14, 28, 70, 200, 550, 750, 950], houseCost: 100, ownedHouses: 0},
    l6: {loc: "l6", type: "chest"},
    l7: {loc: "l7", type: "property", location: "Beans on Broad", price: 180, set: 4, rent: [14, 28, 70, 200, 550, 750, 950], houseCost: 100, ownedHouses: 0},
    l8: {loc: "l8", type: "property", location: "Jin Sushi", price: 200, set: 4, rent: [16, 32, 80, 220, 600, 800, 1000], houseCost: 100, ownedHouses: 0},

    t0: {loc: "t0", type: "property", location: "STEM", price: 220, set: 5, rent: [18, 36, 90, 250, 700, 875, 1050], houseCost: 150, ownedHouses: 0},
    t1: {loc: "t1", type: "chance", price: "800", set: 9},
    t2: {loc: "t2", type: "property", location: "Rockwell", price: 220, set: 5, rent: [18, 36, 90, 250, 700, 875, 1050], houseCost: 150, ownedHouses: 0},
    t3: {loc: "t3", type: "property", location: "Hoyt", price: 240, set: 5, rent: [20, 40, 100, 300, 750, 925, 1100], houseCost: 150, ownedHouses: 0},
    t4: {loc: "t4", type: "railroad", price: 200, set: 9, name: "McNulty's Tunnel", rent: [25, 50, 100, 200]},
    t5: {loc: "t5", type: "property", location: "Rainbow Bridge", price: 260, set: 6, rent: [22, 44, 110, 330, 800, 975, 1150], houseCost: 150, ownedHouses: 0},
    t6: {loc: "t6", type: "property", location: "Rizzebo", price: 260, set: 6, rent: [22, 44, 110, 330, 800, 975, 1150], houseCost: 150, ownedHouses: 0},
    t7: {loc: "t7", type: "utility", utilityType: "water", set: 9, name: "water company change", price: 150},
    t8: {loc: "t8", type: "property", location: "South Lobby", price: 280, set: 6, rent: [24, 48, 120, 360, 850, 1025, 1200], houseCost: 150, ownedHouses: 0},

    r0: {loc: "r0", type: "property", location: "Thorn Stadium", price: 300, set: 7, rent: [26, 52, 130, 390, 900, 1100, 1275], houseCost: 200, ownedHouses: 0},
    r1: {loc: "r1", type: "property", location: "Don Lyle Field", price: 300, set: 7, rent: [26, 52, 130, 390, 900, 1100, 1275], houseCost: 200, ownedHouses: 0},
    r2: {loc: "r2", type: "chest"},
    r3: {loc: "r3", type: "property", location: "Longnecker Pool", price: 320, set: 7, rent: [28, 56, 150, 450, 1000, 1200, 1400], houseCost: 200, ownedHouses: 0},
    r4: {loc: "r4", type: "railroad", price: 200, set: 9, name: "Harbison Tunnel", rent: [25, 50, 100, 200]},
    r5: {loc: "r5", type: "chance"},
    r6: {loc: "r6", type: "property", location: "McNulty Manor", price: 350, set: 8, rent: [35, 70, 175, 500, 1100, 1300, 1500], houseCost: 200, ownedHouses: 0},
    r7: {loc: "r7", type: "tax", taxType:"luxury"},
    r8: {loc: "r8", type: "property", location: "TMX Towers", price: 400, set: 8, rent: [50, 100, 200, 600, 1400, 1700, 2000], houseCost: 200, ownedHouses: 0},
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

tunnels = ["b4", "l4", "t4", "r4"]

utilities = ["l1","t7"]

players = []

currentPlayer = 0

boardOrder = []

chanceCards = [
    //TODO: implement different types of chance and chest cards and actions going with them
    {path: "./assets/chance/chance-template.svg", buttonText: "stash", cardAction: {type: "jail"}},
    {path: "./assets/chance/chance-template.svg", buttonText: "go to TMX", cardAction: {type: "move", loc: "r8"}},
    {path: "./assets/chance/chance-template.svg", buttonText: "go to go", cardAction: {type: "move", loc: "c0"}},
    {path: "./assets/chance/chance-template.svg", buttonText: "go to Hoyt", cardAction: {type: "move", loc: "t3"}},
    {path: "./assets/chance/chance-template.svg", buttonText: "go to Ketler", cardAction: {type: "move", loc: "l0"}},

    //move to nearest Railroad, pay 2x rent
    {path: "./assets/chance/chance-template.svg", buttonText: "move to nearest tunnel", cardAction: {type: "move", loc: 0}},
    
    //move to nearest utility, pay auto 10x multiplier
    {path: "./assets/chance/chance-template.svg", buttonText: "nearest utility", cardAction: {type: "gain", amount: 0}},
    
    {path: "./assets/chance/chance-template.svg", buttonText: "+50", cardAction: {type: "gain", amount: 50}},
    {path: "./assets/chance/chance-template.svg", buttonText: "-15", cardAction: {type: "loss", amount: 0}},

    //move back 3 Spaces
    {path: "./assets/chance/chance-template.svg", buttonText: "back 3 spaces", cardAction: {type: "gain", amount: 0}},

    //-25/house, 100/hotel
    {path: "./assets/chance/chance-template.svg", buttonText: "lose money per house and hotel", cardAction: {type: "lossPerHouseAndHotel", amounts: {house:25, hotel: 100}}},

    {path: "./assets/chance/chance-template.svg", buttonText: "move to b4", cardAction: {type: "move", loc: "b4"}},

    //50 to each player
    {path: "./assets/chance/chance-template.svg", buttonText: "50 to each player", cardAction: {type: "gain", amount: 0}},

    {path: "./assets/chance/chance-template.svg", buttonText: "+150", cardAction: {type: "gain", amount: 150}},

    {path: "./assets/chance/chance-template.svg", buttonText: "go to jail", cardAction: {type: "move", loc: "jail"}},

    //EXTRA CARD
    {path: "./assets/chance/chance-template.svg", buttonText: "+0", cardAction: {type: "gain", amount: 0}},
]

chestCards = [
    {path: "./assets/chest/chest-template.svg", buttonText: "stash", cardAction: {type: "jail"}},
    {path: "./assets/chest/chest-template.svg", buttonText: "+200", cardAction: {type: "gain", amount: 200}},
    {path: "./assets/chest/chest-template.svg", buttonText: "+200", cardAction: {type: "gain", amount: 200}},
    {path: "./assets/chest/chest-template.svg", buttonText: "+100", cardAction: {type: "gain", amount: 100}},
    {path: "./assets/chest/chest-template.svg", buttonText: "+100", cardAction: {type: "gain", amount: 100}},
    {path: "./assets/chest/chest-template.svg", buttonText: "+100", cardAction: {type: "gain", amount: 100}},
    {path: "./assets/chest/chest-template.svg", buttonText: "+50", cardAction: {type: "gain", amount: 50}},
    {path: "./assets/chest/chest-template.svg", buttonText: "+25", cardAction: {type: "gain", amount: 25}},
    {path: "./assets/chest/chest-template.svg", buttonText: "+20", cardAction: {type: "gain", amount: 20}},
    {path: "./assets/chest/chest-template.svg", buttonText: "+10", cardAction: {type: "gain", amount: 10}},
    {path: "./assets/chest/chest-template.svg", buttonText: "-100", cardAction: {type: "lose", amount: 100}},
    {path: "./assets/chest/chest-template.svg", buttonText: "-50", cardAction: {type: "lose", amount: 50}},
    {path: "./assets/chest/chest-template.svg", buttonText: "-50", cardAction: {type: "lose", amount: 50}},
    {path: "./assets/chest/chest-template.svg", buttonText: "go jail", cardAction: {type: "move", loc: "jail"}},
    {path: "./assets/chest/chest-template.svg", buttonText: "-10/p", cardAction: {type: "gainPerPlayer", amount: 10}},
    {path: "./assets/chest/chest-template.svg", buttonText: "-40/h, 115/H", cardAction: {type: "losePerHouse", amounts: {house:40, hotel: 115}}},
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
    houseOwnership: null,
    newHouseState: null,
    //changes from old mode to bob mode
    newinventorystyle: true,
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
    document.getElementById("startName"+playerNum).innerHTML = `<input type='text' class='startNameInput' id='startNameInput${playerNum}' maxlength="10">
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
            boardHTML += `<div class='corner tile c${i}'><img class="cornerImg" src="./assets/corners/jail.svg">`
            boardHTML +=`<div class="jailplayers" id="players${tile.loc}">`
            for(j=0;j<9;j++){
                boardHTML += `<div class="player p${j}" id="${tile.loc}p${j}"></div>`
            }
            boardHTML += `<div class="jailcell">`

            for(j=0;j<9;j++){
                boardHTML += `<div class="player p${j}" id="jlp${j}"></div>`
            }
            
            boardHTML += `</div></div></div>`
        }else if(tile.cornerType == "parking"){
            boardHTML += `<div class='corner tile c${i}'><img class="cornerImg" src="./assets/corners/parking.svg">`
        }else if(tile.cornerType == "goToJail"){
            boardHTML += `<div class='corner tile c${i}'>Go To Jail`
        }
        
        if(tile.cornerType != "jail"){
            boardHTML +=`<div class="players" id="players${tile.loc}">`
            for(j=0;j<9;j++){
                boardHTML += `<div class="player p${j}" id="${tile.loc}p${j}"></div>`
            }
            boardHTML += `</div></div>`
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
                boardHTML+=`<div class="${"set"+tile.set} colorOfSet buttonClickable" onclick="showOverlay({type: 'propertyCardPreview', loc: '${tile.loc}', path: './assets/properties/${tile.loc}.svg'})">
                    <div class="house" id="${tile.loc}house1"></div>
                    <div class="house" id="${tile.loc}house2"></div>
                    <div class="house" id="${tile.loc}house3"></div>
                    <div class="house" id="${tile.loc}house4"></div>
                    <div class="hotel" id="${tile.loc}hotel"></div>
                </div>
                <div class="tileInfo">
                    <div class="location">${tile.location}</div>
                    <div class="price">$${tile.price}</div>
                </div>`
                tile.ownedHouses = 0
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

function getColorSet(location){
    for(i=0; i<propertySets.length; i++){
        if(propertySets[i].indexOf(location) >= 0){
            return propertySets[i]
        }
    }
}

function sellHouse(location){

}

function getMortgage(space){
    return Math.round(space.price * 0.5)
}




function getRepayment(space){
    return Math.round(1.1 * getMortgage(space))
}

function mortgageCard(playerNum, location){
    numHousesAndHotels = getHousesAndHotels(players[playerNum])
    if(numHousesAndHotels.houses > 0 || numHousesAndHotels.hotels > 0){
        showOverlay({type: "alert", alertMessage: "Mortgaged properties cannot have houses or hotels on their color set!"})
    }else{
        players[playerNum].mortgaged.push(location)
        players[playerNum].money += getMortgage(tilesList[location])
        drawPossessions(players[currentPlayer])
    }
}

function unmortgageCard(playerNum, location){
    //TODO: fully implement mortgage functionality
    if(canAfford(players[playerNum], getRepayment(tilesList[location]))){
        players[playerNum].mortgaged.splice(players[playerNum].mortgaged.indexOf(location), 1)
        players[playerNum].money -= getRepayment(tilesList[location])
        drawPossessions(players[currentPlayer])
    }
}

function isMortgaged(location){
    owner = whoOwns(tilesList[location])
    if (owner == -1){return false}
    return players[owner].mortgaged.indexOf(location) >= 0
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
    document.getElementById("mortgageButton").style.display = "none"
    document.getElementById("buyHousesButton").style.display = "none"
    document.getElementById("playerOverlay").style.display = "none"
    document.getElementById("auctionOverlay").style.display = "none"
    document.getElementById("alertOverlay").style.display = "none"
    document.getElementById("alertButton").style.display = "none"
    document.getElementById("housesOverlay").style.display = "none"
    document.getElementById("houseConfirm").innerHTML = "No Change"
    document.getElementById("houseConfirm").setAttribute( "onClick", "")

    document.getElementById("purchaseButton").style.display = "none"

    document.getElementById("chanceOverlay").style.display = "none"
    document.getElementById("chanceButtons").style.display = "none"
    document.getElementById("housesButtons").style.display = "none"
    document.getElementById("escapeJailOverlay").style.display = "none"
    document.getElementById("escapeJailButtons").style.display = "none"
    document.getElementById("useGetOutOfJail").style.display = "none"


    document.getElementById("overlay").setAttribute( "onClick", "" )

    //card overlay
    if(args.type == "propertyCard")
    {
        document.getElementById("overlay").setAttribute( "onClick", "javascript: hideCard();")
        viewCard(args.path, {showOwner: false})
        if(!isMortgaged(args.loc)){
            document.getElementById("mortgageButton").innerHTML = `Mortgage ($${getMortgage(tilesList[args.loc])})`
            document.getElementById("mortgageButton").setAttribute( "onClick", `javascript: mortgageCard(${currentPlayer}, '${args.loc}');`)
        }else{
            document.getElementById("mortgageButton").innerHTML = `Unmortgage ($${Math.round(1.1 * getMortgage(tilesList[args.loc]))})`
            document.getElementById("mortgageButton").setAttribute( "onClick", `javascript: unmortgageCard(${currentPlayer}, '${args.loc}');`)
        }
        // document.getElementById("buyHousesButton").setAttribute( "onClick", `javascript: buyHouses(${currentPlayer}, '${args.loc}');`)
        document.getElementById("mortgageButton").style.display = "flex"
        // document.getElementById("buyHousesButton").style.display = "flex"
    }

    else if(args.type == "propertyCardPreview")
    {
        console.log(args.loc)
        setTimeout(function() {
            document.getElementById("overlay").setAttribute( "onClick", "javascript: hideCard();")
            viewCard(args.path, {showOwner: true, owner: whoOwns(tilesList[args.loc])})
        }, 10);
    }

    else if(args.type == "rent"){
        if(args.rentAmount.rentType == "property"){
            document.getElementById("rentOverlay").innerText = `${args.property.location} is owned by ${players[args.recipient].name}. Rent${args.rentAmount.rentText} is $${args.rentAmount.rent}.`
        }else if(args.rentAmount.rentType == "railroad"){
            document.getElementById("rentOverlay").innerText = `${args.property.name} is owned by ${players[args.recipient].name}. Rent with ${args.rentAmount.ownedTunnels} tunnel${(args.rentAmount.ownedTunnels > 1) ? "s" : ""} is $${args.rentAmount.rent}.`
        }else if(args.rentAmount.rentType == "utility"){
            document.getElementById("rentOverlay").innerText = `${args.property.name} is owned by ${players[args.recipient].name}. Rent with ${args.rentAmount.rentText} is ${args.rentAmount.multiplier} times a dice roll (rolled ${args.rentAmount.diceRoll}), which is $${args.rentAmount.rent}.`
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
    else if(args.type =="chance" || args.type=="chest"){
        //TODO: change chance cards so they have different text
        document.getElementById("chanceOverlayImage").src = args.path

        if(args.type=="chance"){
            document.getElementById("chanceButton").setAttribute( "onClick", (args.isJail ? "javascript: addJail(0)" : "exitChanceOrChest()"))
        }else if(args.type == "chest"){
            document.getElementById("chanceButton").setAttribute( "onClick", (args.isJail ? "javascript: addJail(1)" : "exitChanceOrChest()"))
        }
        
        document.getElementById("chanceButton").setAttribute( "onClick", (args.isJail ? "javascript: addJail(0)" : args.clickAction + ";drawPossessions(players[currentPlayer])"))

        document.getElementById("chanceButton").innerHTML = args.buttonText
        document.getElementById("chanceButtons").style.display = "flex"
        document.getElementById("chanceOverlay").style.display = "flex"
    }

    // else if(args.type =="chest"){
    //     //TODO: change chest cards so they have different text
    //     document.getElementById("chanceOverlayImage").src = args.path
        
    //     document.getElementById("chanceButton").setAttribute( "onClick", (args.isJail ? "javascript: addJail(1)" : "exitChanceOrChest()"))
        
    //     document.getElementById("chanceButton").innerHTML = args.buttonText
    //     document.getElementById("chanceButtons").style.display = "flex"
    //     document.getElementById("chanceOverlay").style.display = "flex"
    // }

    else if(args.type == "property"){
        document.getElementById("purchasePrice").innerHTML = `($${args.price})`
        viewCard(args.path, {showOwner: false})
        document.getElementById("purchaseOverlay").style.display = "flex"
        if(canAfford(players[currentPlayer], args.price)){
            document.getElementById("purchaseButton").style.display = "block"
        }else{
            document.getElementById("purchaseButton").style.display = "none"
        }
    }

    else if(args.type == "auction"){
        document.getElementById("auctionOverlay").style.display = "flex"
    }

    else if(args.type == "player"){
        document.getElementById("playerOverlay").style.display = "flex"
    }

    else if(args.type == "buyHouses"){
        setNum = args.set-1
        buyHousesHTML = `<div class="buyHousesTitle">Buy Houses ($${tilesList[propertySets[setNum][0]].houseCost} each)</div>`
        currSet = propertySets[setNum]
        gameInfo.houseOwnership = []
        gameInfo.newHouseState = []
        for(i=0; i<currSet.length; i++)
        {
            houseNum = tilesList[currSet[i]].ownedHouses
            gameInfo.houseOwnership.push(houseNum)
            gameInfo.newHouseState.push(houseNum)
            buyHousesHTML += `<div class="buyHousesProperty">
            <div class="buyHousesPropertyName">
            ${tilesList[currSet[i]].location}
            </div>
            <img class="buyHousesAddHouseButton" src="assets/houses/house0.svg" id="property${i}house0" onclick="toggleHouse(${i}, 'house0', ${setNum})" style="${houseNum==0 ?"background-color: #a2d0f2" : ""}">
            <img class="buyHousesAddHouseButton" src="assets/houses/house1.svg" id="property${i}house1" onclick="toggleHouse(${i}, 'house1', ${setNum})" style="${houseNum==1 ?"background-color: #a2d0f2" : ""}">
            <img class="buyHousesAddHouseButton" src="assets/houses/house2.svg" id="property${i}house2" onclick="toggleHouse(${i}, 'house2', ${setNum})" style="${houseNum==2 ?"background-color: #a2d0f2" : ""}">
            <img class="buyHousesAddHouseButton" src="assets/houses/house3.svg" id="property${i}house3" onclick="toggleHouse(${i}, 'house3', ${setNum})" style="${houseNum==3 ?"background-color: #a2d0f2" : ""}">
            <img class="buyHousesAddHouseButton" src="assets/houses/house4.svg" id="property${i}house4" onclick="toggleHouse(${i}, 'house4', ${setNum})" style="${houseNum==4 ?"background-color: #a2d0f2" : ""}">
            <img class="buyHousesAddHouseButton" src="assets/houses/hotel.svg" id="property${i}hotel" onclick="toggleHouse(${i}, 'hotel', ${setNum})" style="${houseNum==5 ?"background-color: #a2d0f2" : ""}">
            </div>`
        }
        document.getElementById("housesOverlay").innerHTML = buyHousesHTML
        document.getElementById("housesOverlay").style.display = "flex"
        document.getElementById("housesButtons").style.display = "flex"
    }

    else if(args.type == "alert"){
        document.getElementById("alertOverlay").innerHTML = args.alertMessage
        document.getElementById("alertButton").setAttribute( "onClick", "hideCard()")
        if(args.alertButtonAction != null){
            document.getElementById("alertButton").setAttribute( "onClick", args.alertButtonAction)
        }
        document.getElementById("alertOverlay").style.display = "flex"
        document.getElementById("alertButton").style.display = "flex"
    }

    else if(args.type == "escapeJail"){
        document.getElementById("escapeJailOverlay").innerHTML = `You're in jail. ${3-args.rollAttempts} rolls remaining.`
        document.getElementById("escapeJailOverlay").style.display = "flex"
        document.getElementById("escapeJailButtons").style.display = "flex"
        if(args.hasGetOutOfJail){
            document.getElementById("useGetOutOfJail").style.display = "flex"
        }
    }

    document.getElementById("overlay").style.display = "flex"
}

function toggleHouse(propertyNum, houseTier, setNum){
    houseTiers = ['house0', 'house1', 'house2', 'house3', 'house4', 'hotel']
    newTier = houseTiers.indexOf(houseTier)
    gameInfo.newHouseState[propertyNum] = newTier
    for(i=0; i<6; i++){
        if(i!=gameInfo.houseOwnership[propertyNum]){
            document.getElementById(`property${propertyNum}${houseTiers[i]}`).style.backgroundColor = "white"
        }
    }
    newColor = "white"
    if(newTier == gameInfo.houseOwnership[propertyNum]){
        newColor = "#a2d0f2"
    }
    if(newTier > gameInfo.houseOwnership[propertyNum]){
        newColor = "#afffb2"
    }else if(newTier < gameInfo.houseOwnership[propertyNum]){
        newColor = "#ffafaf"
    }
    document.getElementById(`property${propertyNum}${houseTier}`).style.backgroundColor = newColor
    updateHouseConfirmButton(propertySets[setNum][0])
}

function updateHouseConfirmButton(loc){
    housesToBuy = 0
    housesToSell = 0
    for(i=0;i<gameInfo.newHouseState.length; i++){
        changeInHouseAmount = gameInfo.newHouseState[i] - gameInfo.houseOwnership[i]
        if(changeInHouseAmount > 0){
            housesToBuy += changeInHouseAmount
        }else if(changeInHouseAmount < 0){
            housesToSell += Math.abs(changeInHouseAmount)
        }
    }

    houseMoneyChange = tilesList[loc].houseCost * housesToBuy - tilesList[loc].houseCost * housesToSell/2
    houseConfirmHTML = ""
    houseConfirmOnclick = ""
    if(Math.max(...gameInfo.newHouseState) - Math.min(...gameInfo.newHouseState) > 1){
        houseConfirmHTML = "Balance Houses!"
    }else{
        if(houseMoneyChange < 0){
            houseConfirmHTML = `Confirm (+$${Math.abs(houseMoneyChange)})`
            houseConfirmOnclick = `addHouses(${tilesList[loc].set}, ${houseMoneyChange})`
        }else if(houseMoneyChange > 0){
            if(canAfford(players[currentPlayer], houseMoneyChange)){
                houseConfirmHTML = `Confirm ($${Math.abs(houseMoneyChange)})`
                houseConfirmOnclick = `addHouses(${tilesList[loc].set}, ${houseMoneyChange})`
            }else{
                houseConfirmHTML = `Not Enough Money!`
            }
        }else{
            houseConfirmHTML = `No Change`
        }
    }
    document.getElementById("houseConfirm").innerHTML = houseConfirmHTML
    document.getElementById("houseConfirm").setAttribute( "onClick", houseConfirmOnclick)
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
    document.getElementById("possessions").innerHTML = getPossessionsHTML(player, {showActionButtons: true,isOverlay:false, canTrade:false})
    updateNextActionButton()
}

function getPossessionsHTML(player, args){
    propertiesHTML = ""
    playerNum = players.indexOf(player)

    for(i3=1;i3<10;i3++){
        amountInSet = player.ownedProperties[`set${i3}`].length

        if(gameInfo.newinventorystyle){        
            hasTunnel = whoOwns(tilesList["b4"])==playerNum || whoOwns(tilesList["l4"])==playerNum || whoOwns(tilesList["t4"])==playerNum || whoOwns(tilesList["r4"]) ==playerNum
            hasUtility = whoOwns(tilesList["l1"])==playerNum || whoOwns(tilesList["t7"])==playerNum
            if(amountInSet != 0 /*TODO: fix for railroads and utilities*/){
                if(i3 != 9){
                    propertiesHTML+=`<div class="invcontainer invset${i3}"><div class="invproperties">`

                    overlayZ = ""

                    for(j1=0;j1<propertySets[i3-1].length;j1++){
                        currentTileGP = tilesList[propertySets[i3-1][j1]]

                        overlayType = "propertyCard"

                        cardSource = `'./assets/properties/${currentTileGP.loc}.svg'`
                        cardMortgaged = player.mortgaged.indexOf(currentTileGP.loc) >= 0
                        cardOwned = whoOwns(currentTileGP) == playerNum

                        if(args.isOverlay){
                            overlayZ = `style = "z-index: 5"`
                            overlayType = "propertyCardPreview"
                        }
                        if(!cardOwned){
                            overlayType = "propertyCardPreview"
                        }

                        propertiesHTML += `<div 
                        class="invproperty ${cardOwned ? "" : "invunowned" }"
                        onclick="showOverlay({type: '${overlayType}', path: ${cardSource}, loc: '${currentTileGP.loc}'})"
                        ${overlayZ}
                        >${cardMortgaged ? "(" : ""}${currentTileGP.location}${cardMortgaged ? ")" : ""}</div>`
                    }

                    propertiesHTML += `</div>`
                        
                    propertiesHTML += `<div class="invbuyhouses">
                            <img src="assets/houses/buyhouses.svg" class="invbuyhousebutton" onclick="buyHouses(${playerNum}, '${currentTileGP.loc}')">
                        </div>
                    </div>`
                }else{
                    if(hasTunnel){
                        overlayZ = ""
    
                        propertiesHTML+=`<div class="invcontainer invtunnels">`
                        for(j1=0;j1<4;j1++){
                            currentTileGP = tilesList[tunnels[j1]]
    
                            overlayType = "propertyCard"
    
                            cardSource = `'./assets/properties/${currentTileGP.loc}.svg'`
                            cardMortgaged = player.mortgaged.indexOf(currentTileGP.loc) >= 0
                            cardOwned = whoOwns(currentTileGP) == playerNum
    
                            if(args.isOverlay){
                                overlayZ = `style = "z-index: 5"`
                                overlayType = "propertyCardPreview"
                            }
                            if(!cardOwned){
                                overlayType = "propertyCardPreview"
                            }
    
                            propertiesHTML+=`<div class="invtunnel invtunnel${j1} ${cardOwned ? "" : "invunowned" }" onclick="showOverlay({type: '${overlayType}', path: ${cardSource}, loc: '${currentTileGP.loc}'})" ${overlayZ}>${cardMortgaged ? "(" : ""}${tilesList[tunnels[j1]].name}${cardMortgaged ? ")" : ""}</div>`
                        }
                        propertiesHTML+=`<div class="invtunnelindicator"><img src="assets/tunnel.svg"></div>`
                        propertiesHTML+=`</div>`
                    }
                    if (hasUtility){
                        overlayZ = ""
    
                        propertiesHTML+=`<div class="invcontainer invutilities">`
                        for(j1=0;j1<2;j1++){
                            currentTileGP = tilesList[utilities[j1]]
    
                            overlayType = "propertyCard"
    
                            cardSource = `'./assets/properties/${currentTileGP.loc}.svg'`
                            cardMortgaged = player.mortgaged.indexOf(currentTileGP.loc) >= 0
                            cardOwned = whoOwns(currentTileGP) == playerNum
    
                            if(args.isOverlay){
                                overlayZ = `style = "z-index: 5"`
                                overlayType = "propertyCardPreview"
                            }
                            if(!cardOwned){
                                overlayType = "propertyCardPreview"
                            }
    
                            propertiesHTML+=`<div class="invutility ${cardOwned ? "" : "invunowned" }" onclick="showOverlay({type: '${overlayType}', path: ${cardSource}, loc: '${currentTileGP.loc}'})" ${overlayZ}>${cardMortgaged ? "(" : ""}${currentTileGP.name}${cardMortgaged ? ")" : ""}</div>`
                        }
                        propertiesHTML+=`</div>`
                    }
                }
                
            }
        }else{
            if(amountInSet!=0){
                propertiesHTML+=`<div class="cardRow">`
                for(j=0;j<amountInSet;j++){
                    tile = tilesList[player.ownedProperties[`set${i3}`][j]]
                    cardSource = `'./assets/properties/${player.ownedProperties[`set${i3}`][j]}.svg'`
                    overlayZ = ""
                    overlayType = "propertyCard"
                    if(args.isOverlay){
                        overlayZ = `style = "z-index: 5"`
                        overlayType = "propertyCardPreview"
                    }
                    if(player.mortgaged.indexOf(tile.loc) >= 0){
                        propertiesHTML += `<div class="mortgagedCard propertyCard" ${overlayZ} onclick="showOverlay({type: '${overlayType}', path: ${cardSource}, loc: '${tile.loc}'})">${(tile.type=="property" ? tile.location : tile.name)} (Mortgaged)</div>`
                    }else{
                        propertiesHTML += `
                        <img class="propertyCard" ${overlayZ} src=${cardSource} onclick="showOverlay({type: '${overlayType}', path: ${cardSource}, loc: '${tile.loc}'})">`
                    }
                }
                for(j=0;j<(6-amountInSet)%3;j++){
                    propertiesHTML+=`<div class="fillerCard"></div>`
                }
                propertiesHTML+=`</div>`
            }
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
    moneySource = ""
    if(player.money<=0){
        moneySource = "./assets/money/moneyBlank.svg"
    }else{
        for(i=0;i<billTypes.length; i++){
            if(billTypes[i] <= player.money)
            {
                billType = billTypes[i]
                break
            }
        }
        moneySource = "./assets/money/money"+billType+".svg"
    }

    possessionsHTML = `<div class="playerIndicator" id="playerIndicator">${player.name}</div>
    <div class="moneyContainer">
        <div class="moneyCount" id="moneyCount">Money: $${player.money}</div>
        <img class="money" id="money" src="${moneySource}">
    </div>
    <div class="ownedProperties" id="ownedProperties">${propertiesHTML}</div>`
    if(args.showActionButtons){
        possessionsHTML += `<div class="actionButtons">
        <div class="nextAction" id="nextAction" onclick="nextAction()">Next Action</div></div>`
    }
    if(args.canTrade){
        possessionsHTML += `<div class="startTradeButton" onclick="startTrade(${currentPlayer}, ${playerNum})">Trade</div>`
    }
    return possessionsHTML
}

function dumbDelete(){
    advancePiece(players[currentPlayer], rollDice())
}

function preloadAllImages(){
    imagePaths.forEach(path => {
        preloadImage(path)
    });
}

function preloadImage(url){new Image().src=url;}

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
    document.getElementById(player.position).style.display = "none"

    openSpaces = [0,1,2,3,4,5,6,7,8]
    for(i=0;i<players.length;i++){
        if(players[i].position.substring(0,2) == position){
            openSpaces.splice(openSpaces.indexOf(parseInt(players[i].position.substring(3))), 1)
        }
    }

    newPos = position+"p"+openSpaces[randInt(openSpaces.length)]
    player.position = newPos

    newSpot = document.getElementById(newPos)
    console.log(player)
    newSpot.innerHTML = `<img onclick="showPlayer(${players.indexOf(player)})" src="./assets/pieces/${player.piece}">`
    newSpot.style.rotate = `${randInt(360)}deg`
    newSpot.style.display = "flex"

    console.log(`moved ${player.name} to ${newPos}`)

    if(position != "jl"){
        landOnSpace(tilesList[position])
    }
}

function showPlayer(playerNum){
    playerOverlayHTML = ""
    canTrade = currentPlayer != playerNum
    playerOverlayHTML = getPossessionsHTML(players[playerNum], {showActionButtons: false, isOverlay:true, canTrade: canTrade})
    document.getElementById("playerPossessions").innerHTML = playerOverlayHTML
    showOverlay({type: "player"})
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

function distanceToSpace(player, loc){
    currentPos = boardOrder.indexOf(player.position.substring(0,2))
    newPos = boardOrder.indexOf(loc)
    return (newPos-currentPos+40)%40
}

function landOnSpace(space){
    console.log(space.type)

    if(space.type == "property" || space.type == "railroad" || space.type == "utility"){
        owner = whoOwns(space)

        console.log(owner)

        //if property is unowned
        if(owner == -1){
            console.log("attempting to purchase "+space.loc)
            propertyPurchase(space)
        }

        //if property is owned by self
        else if(owner == currentPlayer){
            console.log("curr owns this")
        }

        //if property is owned by someone else
        else{
            if(isMortgaged(space.loc)){
                //if property is mortgaged no rent is owed
                console.log("property is mortgaged")
            }else{
                rentInfo = getRent(space)
                players[currentPlayer].debts.push({amount: rentInfo, owedTo: owner, property: space})
                showOverlay({type: "rent", rentAmount: rentInfo, recipient: owner, property: space})
            }
        }

    }else if(space.type == "chance" || space.type == "chest"){
        let currentCard
        if(space.type == "chance"){
            currentCard = getChance()
        }else if(space.type == "chest"){
            currentCard = getChest()
        }

        //TODO: 4/18 where i left off
        
        clickAction = `exitChanceOrChest();`

        console.log(space.type)
        console.log(currentCard.cardAction.type)

        switch(currentCard.cardAction.type){
            //gain money
            case "gain":
                clickAction += `players[currentPlayer].money += ${currentCard.cardAction.amount}`
                console.log(`players[currentPlayer].money += ${currentCard.cardAction.amount}`)
                break

            case "jail":
                if(space.type == "chance"){
                    clickAction += "addJail(0)"
                }else if (space.type == "chest"){
                    clickAction += "addJail(1)"
                }else{
                    throw new Error("How?")
                }
                break

            case "move":
                console.log(`chance action: move to ${currentCard.cardAction.loc}`)
                clickAction += `advancePiece(players[currentPlayer], distanceToSpace(players[currentPlayer], "${currentCard.cardAction.loc}"))`
                break

            case "lossPerHouseAndHotel":
                ownedHousesAndHotels = getHousesAndHotels(players[currentPlayer])
                lossAmount = currentCard.cardAction.amounts.house * ownedHousesAndHotels.houses + currentCard.cardAction.amounts.hotel * ownedHousesAndHotels.hotels

                console.log(`chance action: lose per house and hotel. lose ${lossAmount}`)

                lossDescription = `Taxed $${currentCard.cardAction.amounts.house} per house with ${ownedHousesAndHotels.houses} houses and $${currentCard.cardAction.amounts.hotel} per hotel with ${ownedHousesAndHotels.hotels} hotels.`
                
                players[currentPlayer].debts.push({amount: lossAmount, owedTo: -1, taxDescription: lossDescription})
                clickAction+= `showOverlay({type: "tax", taxAmount: ${lossAmount}, taxDescription: "${lossDescription}"})`
                break
        }
        drawPossessions(players[currentPlayer])

        showOverlay({type: space.type, path: currentCard.path, buttonText: currentCard.buttonText, isJail: currentCard.cardAction.type == "jail", clickAction: clickAction})

    // }else if(space.type == "chest"){
    //     chestCard = getChest()
    //     console.log(chestCard)
    //     showOverlay({type: "chest", path: chestCard.path, buttonText: chestCard.buttonText, isJail: chestCard.cardAction.type == "jail"})
    //     console.log("chance card")
    }else if(space.type == "corner"){
        if(space.cornerType == "goToJail"){
            sendToJail(players[currentPlayer], "space")
        }
    }else if(space.type == "tax"){
        // get tax amounts (i think this works)
        //hardcoded
        taxAmount = getTaxAmount(space, players[currentPlayer])
        taxDescription = (space.taxType == "income" ? `Income Tax: Pay $200 or 10% of your assets ($${taxAmount}).` : "Luxury Tax: Pay $75")
        players[currentPlayer].debts.push({amount: taxAmount, owedTo: -1, taxDescription: taxDescription})
        showOverlay({type:"tax", taxAmount: taxAmount, taxDescription: taxDescription})
    }
    updateNextActionButton()
}

function addHouses(set, price){
    players[currentPlayer].money -= price
    for(i=0; i<propertySets[set-1].length; i++){
        tilesList[propertySets[set-1][i]].ownedHouses = gameInfo.newHouseState[i]
    }
    hideCard()
    drawPossessions(players[currentPlayer])
    updateNextActionButton()
    updateHousesDisplay(set)
}

function updateHousesDisplay(set){
    for(i=0; i<propertySets[set-1].length; i++){
        currentTile = tilesList[propertySets[set-1][i]]
        document.getElementById(`${currentTile.loc}house1`).style.display = "none"
        document.getElementById(`${currentTile.loc}house2`).style.display = "none"
        document.getElementById(`${currentTile.loc}house3`).style.display = "none"
        document.getElementById(`${currentTile.loc}house4`).style.display = "none"
        document.getElementById(`${currentTile.loc}hotel`).style.display = "none"
        if(currentTile.ownedHouses == 5){
            document.getElementById(`${currentTile.loc}hotel`).style.display = "flex"
        }else{
            if(currentTile.ownedHouses >= 1){
                document.getElementById(`${currentTile.loc}house1`).style.display = "flex"
            }
            if(currentTile.ownedHouses >= 2){
                document.getElementById(`${currentTile.loc}house2`).style.display = "flex"
            }
            if(currentTile.ownedHouses >= 3){
                document.getElementById(`${currentTile.loc}house3`).style.display = "flex"
            }
            if(currentTile.ownedHouses >= 4){
                document.getElementById(`${currentTile.loc}house4`).style.display = "flex"
            }
        }
    }
}

function hasMortgagedInSet(set){
    for(i1=0; i1 < propertySets[set-1].length; i1++){
        if(isMortgaged(propertySets[set-1][i1])){
            return true
        }
    }
    return false
}

function buyHouses(playerNum, loc){
    if(hasMortgagedInSet(tilesList[loc].set)){
        showOverlay({type: "alert", alertMessage: "All properties in set must be unmortgaged to purchase houses!"})
        return
    }
    if(!ownsColorSet(tilesList[loc])){
        showOverlay({type: "alert", alertMessage: "You must own color set to purchase houses!"})
        return
    }
    showOverlay({type: "buyHouses", set: tilesList[loc].set})
}

function getHousesAndHotels(player){
    //TODO: finish this and chance
    houses = 0
    hotels = 0
    for(ind=0; ind<boardOrder.length; ind++)
    {
        if(whoOwns(tilesList[boardOrder[ind]]) == players.indexOf(player)){
            numHouses = tilesList[boardOrder[ind]].ownedHouses
            if(!isNaN(numHouses)){
                if(numHouses == 5){
                    hotels ++
                }else{
                    houses += numHouses
                }
            }
        }
    }
    return {houses: houses, hotels: hotels}
}

function getPropertiesList(player){
    op = player.ownedProperties
    return op.set1.concat(op.set2.concat(op.set3.concat(op.set4.concat(op.set5.concat(op.set6.concat(op.set7.concat(op.set8.concat(op.set9))))))))
}

function getNetWorth(player){
    netWorth = 0
    // Cash on hand
    netWorth += player.money

    propertiesList = getPropertiesList(player)
    for(i2=0; i2<propertiesList.length; i2++){
        cp = propertiesList[i2]
        if(!isMortgaged(cp)){
            //The printed price of all unmortgaged property
            netWorth += tilesList[cp].price
        }else{
            //The mortgaged value of mortgaged properties
            netWorth += tilesList[cp].price/2
        }

        //Printed price of all buildings (houses and hotels) owned
        
        numHouses = tilesList[propertiesList[i2]].ownedHouses
        if(!isNaN(numHouses)){
            netWorth += numHouses * tilesList[propertiesList[i2]].houseCost
        }
    }

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
    if(owner == -1){return false}
    for(i=0; i<propertySets.length; i++){
        if(propertySets[i].indexOf(property.loc) >= 0){
            return propertySets[i].length == players[owner].ownedProperties["set"+(i+1)].length
        }
    }
}

function getRent(tile){
    console.log(tile)
    if(tile.type == "property"){
        let rentText, rentAmount
        if(ownsColorSet(tile)){
            if(tile.ownedHouses == 0){
                rentText = " with color set"
            }else if(tile.ownedHouses >= 1 && tile.ownedHouses <= 4){
                rentText = ` with ${tile.ownedHouses} house${(tile.ownedHouses > 1 ? "s" : "")}`
            }else if(tile.ownedHouses == 5){
                rentText = " with a hotel"
            }else{
                throw new Error()
            }
            rentAmount = tile.rent[tile.ownedHouses + 1]
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
        owner = whoOwns(tile)

        utilityCount = 0

        for(i=0; i<players[owner].ownedProperties.set9.length; i++){
            if(tilesList[players[owner].ownedProperties.set9[i]].type == "utility"){
                utilityCount++
            }
        }

        sumOfTwoDice = rollDice().sum
        multiplier = NaN
        if(utilityCount == 1){
            multiplier = 4
            rentText = `one utility`
        }else if(utilityCount == 2){
            multiplier = 10
            rentText = `both utilities`
        }else{
            console.error(`something went wrong here... utility count: ${utilityCount}, should be 1 or 2`)
        }
        
        rentAmount = (multiplier*sumOfTwoDice)

        return {rent: rentAmount, rentText: rentText, rentType: "utility", diceRoll: sumOfTwoDice, multiplier: multiplier}
    }else{
        console.log(tile)
        console.log(tile.type)
        console.error("tile type not recognized "+tile.type);
    }
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
    shuffle(chanceCards, Math.random())
    shuffle(chestCards, Math.random())
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
            debts: [],
            mortgaged: [],
            isInJail: false,
            jailRollAttempts: 0,
        })
    }
}

function getChance(){
    //TODO: complete this method
    gameInfo.chanceRotations.splice(0,1)
    gameInfo.chanceRotations.push(randomRotation(gameInfo.spread))

    drawStack("chance")

    card = chanceCards.splice(0,1)[0]
    chanceCards.push(card)
    console.log(card)
    return card
}

//TODO: complete this method
function getChest(){
    topCard = chestCards.splice(0,1)[0]
    chestCards.push(topCard)
    return topCard
}

function nextAction(){
    if(players[currentPlayer].debts.length > 0){
        debt = players[currentPlayer].debts[0]
        if(debt.owedTo == -1){
            console.log(debt.taxDescription)
            showOverlay({type: "tax", taxAmount: debt.amount, taxDescription: debt.taxDescription})
        }else{
            console.log(debt)
            showOverlay({type: "rent", rentAmount: debt.amount, rentText: debt.amount.rentText, recipient: debt.owedTo, property: debt.property})
        }
    }else if(players[currentPlayer].raisingFunds){
        propertyPurchase(players[currentPlayer].savingForProperty)
    }else if(players[currentPlayer].isInJail && players[currentPlayer].playing){
        showOverlay({type: "escapeJail", rollAttempts: players[currentPlayer].jailRollAttempts, hasGetOutOfJail: players[currentPlayer].getOutOfJail[0] || players[currentPlayer].getOutOfJail[1]})
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
        players[currentPlayer].doubles = false
        players[currentPlayer].playing = false
        sendToJail(players[currentPlayer], "doubles")
    }
    updateNextActionButton()
}

function rollForJailEscape(){
    diceRoll = rollDice()
    if(diceRoll.doubles){
        breakOutOfJail(players[currentPlayer])
        advancePiece(players[currentPlayer], diceRoll.sum)
        showOverlay({type: "alert", alertMessage: "Rolled doubles! You broke out."})
        players[currentPlayer].jailRollAttempts = 0
    }else{
        showOverlay({type: "alert", alertMessage: `Failed to roll doubles! ${2-players[currentPlayer].jailRollAttempts} rolls remaining.`})
        players[currentPlayer].jailRollAttempts++
    }
    if(players[currentPlayer].jailRollAttempts==3){
        showOverlay({type: "alert", alertMessage: "Out of rolls! The bank bailed you out, but now you owe them $50.", alertButtonAction: "failedToRollJailDoubles()"})
    }
    players[currentPlayer].playing = false
}

function failedToRollJailDoubles(){
    players[currentPlayer].jailRollAttempts = 0
    players[currentPlayer].debts.push({amount: 50, owedTo: -1, taxDescription: "Repay the bank for bailing you out!"})
    breakOutOfJail(players[currentPlayer])
    advancePiece(players[currentPlayer], diceRoll.sum)
}

function payForJailEscape(){
    if(canAfford(players[currentPlayer], 50)){
        players[currentPlayer].money -= 50
        breakOutOfJail(players[currentPlayer])
        showOverlay({type: "alert", alertMessage: "You're free!"})
    }
    else{
        showOverlay({type: "alert", alertMessage: "not enough money!"})
    }
    drawPossessions(players[currentPlayer])
}

function useGetOutOfJail(){
    if(players[currentPlayer].getOutOfJail[0]){
        players[currentPlayer].getOutOfJail[0] = false
    }else{
        players[currentPlayer].getOutOfJail[1] = false
    }
    breakOutOfJail(players[currentPlayer])
    drawPossessions(players[currentPlayer])
    hideCard()
}

function updateNextActionButton(){
    if(players[currentPlayer].debts.length > 0){
        buttonText = "Pay Debt"
    }else if(players[currentPlayer].raisingFunds){
        buttonText = "Raise Funds"
    }else if(players[currentPlayer].isInJail && players[currentPlayer].playing){
        buttonText = "Break Out"
    }else if(players[currentPlayer].playing){
        buttonText = "Roll Dice"
    }else{
        buttonText = "Next Player"
    }

    document.getElementById("nextAction").innerHTML = buttonText
}

function sendToJail(player, reason){
    jailMessage = ""
    if(reason == "chance" || reason=="chest"){ jailMessage="Unlucky Pull!" }
    else if(reason == "doubles"){ jailMessage = "Rolled doubles 3 times!" }
    else if(reason == "space"){ jailMessage = `Landed on "Go To Jail"!`}
    showOverlay({type: "alert", alertMessage: `${jailMessage} Go to jail!`})
    movePiece(player, "jl")
    player.isInJail = true
}

function breakOutOfJail(player){
    movePiece(player, "c1")
    player.isInJail = false
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
    }else{
        window.alert("not enough money!")
    }
    drawPossessions(player)
    updateNextActionButton()
}

currentAuction = {
    auctionInProgress: false, // not used
    property: null,
    currentBid: NaN,
    currentPlayer: NaN,
}

function getBids(currentBid){
    return [currentBid+5, 10*Math.ceil((currentBid+5)/10), 100*Math.ceil((currentBid+5)/100)]
}

function bidOnProperty(playerNum, price){
    currentAuction.currentPlayer = playerNum
    currentAuction.currentBid = price
    drawAuctionPrices()
}


//TODO: fix bug if current player wins auction
function endAuction(){
    players[currentAuction.currentPlayer].money -= currentAuction.currentBid
    addProperty(players[currentAuction.currentPlayer], currentAuction.property)
    currentAuction = {auctionInProgress: false,property: null,currentBid: NaN,currentPlayer: NaN,}
    players[currentPlayer].savingForProperty = null
    players[currentPlayer].raisingFunds = false
    drawPossessions(players[currentPlayer])
    updateNextActionButton()
    hideCard()
}

function drawAuctionPrices(){
    bidPrices = getBids(currentAuction.currentBid)
    auctionHTML = ""
    if(!isNaN(currentAuction.currentPlayer)){
        auctionHTML += `<div class="currentHighestBidder">Highest Bidder: ${players[currentAuction.currentPlayer].name} ($${currentAuction.currentBid})</div>`
    }
    for(i=0; i<players.length; i++){
        auctionHTML += `<div class="playerAuction"><div class="auctionName"><div>${players[i].name}</div><div>($${players[i].money})</div></div>`
        for(j=0; j<3; j++){
            if(canAfford(players[i], bidPrices[j])){
                auctionHTML += `<div class="auctionPrice customButton buttonClickable" onclick="bidOnProperty(${i}, ${bidPrices[j]})">$${bidPrices[j]}</div>`
            }else{
                auctionHTML += `<div class="cannotAffordAuctionPrice">$${bidPrices[j]}</div>`
            }
        }
        auctionHTML += `</div>`
    }
    if(!isNaN(currentAuction.currentPlayer)){
        auctionHTML += `<div class="endAuctionContainer"><div class="buttonClickable customButton" onclick="endAuction()">End Auction</div></div>`
    }
    document.getElementById("auctionOverlay").innerHTML = auctionHTML
}

function auctionProperty(player, location){
    hideCard()
    auctionHTML = ""
    currentAuction.currentBid = 0
    currentAuction.property = location
    currentAuction.auctionInProgress = true
    drawAuctionPrices()
    showOverlay({type: "auction"})

    //TODO: edge case: if nobody has $5
    
    //TODO: implement and fix this method
    //Groveopoly: error when raise funds button is pressed, then auction button is pressed
}

function checkSet(location){
    return tilesList[location].set
}

function addProperty(player, location){
    console.log("adding "+location+" to "+player.name)
    player.ownedProperties["set"+checkSet(location)].push(location)
}

function removeProperty(player, location){
    console.log("removing "+location+" from "+player.name)
    player.ownedProperties["set"+checkSet(location)].splice(player.ownedProperties["set"+checkSet(location)].indexOf(location), 1)
}

//TODO: lose condition