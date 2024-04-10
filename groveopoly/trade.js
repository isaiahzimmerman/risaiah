tradeInfo = {
    playerNums: [NaN, NaN],
    offers: {properties:[null, null], money: [0, 0]},
    accepted: [false, false],
}

function startTrade(playerNum1, playerNum2){
    hideCard()
    document.getElementById("tradeOverlay").style.display = "flex"

    document.getElementById("player1Trade").innerHTML = getTradePlayerHTML(playerNum1)
    document.getElementById("player2Trade").innerHTML = getTradePlayerHTML(playerNum2)

    tradeInfo.playerNums = [playerNum1, playerNum2]

    document.getElementById(`tradeMoneySlider${playerNum1}`).addEventListener('input', function (evt) {
        document.getElementById("tradeMoney"+playerNum1).innerHTML="$"+(this.value);
        tradeInfo.offers.money[getPlayerNum(playerNum1)] = this.value
        cancelAcceptance()
    });
    document.getElementById(`tradeMoneySlider${playerNum2}`).addEventListener('input', function (evt) {
        document.getElementById("tradeMoney"+playerNum2).innerHTML="$"+(this.value);
        tradeInfo.offers.money[getPlayerNum(playerNum2)] = this.value
        cancelAcceptance()
    });

    
    tradeInfo.offers.properties = [[],[]]
}

//gets player num (0 or 1) from objective in-game player number
function getPlayerNum(playerNum){
    return tradeInfo.playerNums.indexOf(playerNum)
}

function endTrade(){
    document.getElementById("tradeOverlay").style.display = "none"
}

function selectTradeCard(playerNum, cardNum, loc){
    cardSelected = document.getElementById(`tradeCardOverlay${playerNum},${cardNum}`).style.display == "flex"
    
    if(!cardSelected){
        //add selected card
        console.log(`selected player ${playerNum} card ${cardNum}`)
        document.getElementById(`tradeCardOverlay${playerNum},${cardNum}`).style.display = "flex"
        tradeInfo.offers.properties[getPlayerNum(playerNum)].push(loc)
    }else{
        //remove selected card
        console.log(`unselected player ${playerNum} card ${cardNum}`)
        document.getElementById(`tradeCardOverlay${playerNum},${cardNum}`).style.display = "none"
        removeFromArray(tradeInfo.offers.properties[getPlayerNum(playerNum)], loc)
    }

    cancelAcceptance()

}

function updateAcceptanceButtons(){
    //TODO: complete method
    for(i=0; i<2; i++){
        document.getElementById("acceptTradeButton"+tradeInfo.playerNums[i]).style.backgroundColor = (tradeInfo.accepted[i] ? "green" : "white")
        document.getElementById("acceptTradeButton"+tradeInfo.playerNums[i]).innerHTML = (tradeInfo.accepted[i] ? "Cancel" : "Accept")
        document.getElementById("acceptTradeButton"+tradeInfo.playerNums[i]).style.color = (tradeInfo.accepted[i] ? "white" : "black")
    }
}

function toggleAcceptTrade(playerNum){
    tradeInfo.accepted[getPlayerNum(playerNum)] = !tradeInfo.accepted[getPlayerNum(playerNum)]
    updateAcceptanceButtons()
    //trade is accepted by both
    if(tradeInfo.accepted[0] && tradeInfo.accepted[1]){
        endTrade()
        exchangeProperties({
            offer0: {playerNum: tradeInfo.playerNums[0], money: parseInt(tradeInfo.offers.money[0]), properties: tradeInfo.offers.properties[0]},
            offer1: {playerNum: tradeInfo.playerNums[1], money: parseInt(tradeInfo.offers.money[1]), properties: tradeInfo.offers.properties[1]}
        })
        drawPossessions(players[currentPlayer])
    }
}

function cancelAcceptance(){
    tradeInfo.accepted=[false, false]
    updateAcceptanceButtons()
}

function removeFromArray(array, value){
    if(array.indexOf(value) == -1) {
        console.error(`value ${value} is not found in array [${array}]!`);
    }else{
        array.splice(array.indexOf(value), 1)
        return array
    }   
}

function getTradePossessionsHTML(playerNum){
    propertiesHTML = ""

    player = players[playerNum]

    cardNum = 0
    for(i=1;i<10;i++){
        amountInSet = player.ownedProperties[`set${i}`].length
        if(amountInSet!=0){
            for(j=0;j<amountInSet;j++){
                tile = tilesList[player.ownedProperties[`set${i}`][j]]
                cardSource = `'./assets/properties/${player.ownedProperties[`set${i}`][j]}.svg'`
                
                overlayZ = `style = "z-index: 5"`
                overlayType = "propertyCardPreview"
                
                //TODO: consolidate
                if(player.mortgaged.indexOf(tile.loc) >= 0){
                    propertiesHTML += `<div class="mortgagedCard propertyCard" onclick="selectTradeCard(${playerNum},${cardNum}, '${tile.loc}')" ${overlayZ}>${(tile.type=="property" ? tile.location : tile.name)} (Mortgaged)
                    <div class="tradeCardOverlay" id="tradeCardOverlay${playerNum},${cardNum}"><img src="./assets/gui/check.svg"></div>
                    </div>`
                }else{
                    propertiesHTML += `<div class="propertyCard" onclick="selectTradeCard(${playerNum},${cardNum}, '${tile.loc}')">
                    <img class="propertyCardImg" ${overlayZ} src=${cardSource}>
                    <div class="tradeCardOverlay"  id="tradeCardOverlay${playerNum},${cardNum}"><img src="./assets/gui/check.svg"></div></div>`
                }
                cardNum ++
            }
        }
    }

    possessionsHTML = `<div class="tradeOwnedProperties" id="tradeOwnedProperties">${propertiesHTML}</div>`
    return possessionsHTML
}

function getTradePlayerHTML(playerNum){
    //make money clickable and editable as a text box
    player = players[playerNum]
    tradePlayerHTML = `<div class="tradeName">${player.name}</div>
    <div class="tradeMoney" id="tradeMoney${playerNum}">$0</div>
    <div class="tradeMoneySliderContainer">
        <input type="range" min="0" max="${player.money}" value="0" id="tradeMoneySlider${playerNum}" class="tradeMoneySlider">
    </div>
    <div class="tradePossessions" id="tradePossessions1">
        ${getTradePossessionsHTML(playerNum)}
    </div>
    <div class="tradeButtons">
        <div class="exitTradeButton tradeButton customButton buttonClickable" onclick="endTrade()">Exit</div>
        <div id="acceptTradeButton${playerNum}" class="acceptTradeButton tradeButton customButton buttonClickable" onclick="toggleAcceptTrade(${playerNum})">Accept</div>
    </div>`
    return tradePlayerHTML
}



//i think this function working
//args = {offer0, offer1}
//offerN = {playerNum: num, money: amount, properties: [locations]}
function exchangeProperties(args){
    for(i=0; i<2; i++){
        currentPlayerNum = args["offer"+i].playerNum
        otherPlayer = (i==0 ? 1 : 0)
        otherPlayerNum = args["offer"+otherPlayer].playerNum

        for(j=0; j<args["offer"+otherPlayer].properties.length; j++){
            offeredProperty = args["offer"+otherPlayer].properties[j]

            addProperty(players[currentPlayerNum], offeredProperty)

            //if property is mortgaged
            if(players[otherPlayerNum].mortgaged.indexOf(offeredProperty) >= 0){
                players[currentPlayerNum].mortgaged.push(offeredProperty)
            }
        }
    }
    for(i=0; i<2; i++){
        currentPlayerNum = args["offer"+i].playerNum
        otherPlayer = (i==0 ? 1 : 0)
        otherPlayerNum = args["offer"+otherPlayer].playerNum

        for(j=0; j<args["offer"+i].properties.length; j++){
            offeredProperty = args["offer"+i].properties[j]

            removeProperty(players[currentPlayerNum], offeredProperty)

            //if property is mortgaged
            if(players[currentPlayerNum].mortgaged.indexOf(offeredProperty) >= 0){
                removeFromArray(players[currentPlayerNum].mortgaged, offeredProperty)
            }
        }
    }

    players[args.offer0.playerNum].money += args.offer1.money - args.offer0.money
    players[args.offer1.playerNum].money += args.offer0.money - args.offer1.money

    drawPossessions(players[currentPlayer])
}