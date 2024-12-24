tradeInfo = {
    playerNums: [NaN, NaN],
    offers: {properties:[null, null], money: [0, 0]},
    accepted: [false, false],
}

function startTrade(playerNum1, playerNum2){
    tradeInfo = {
        playerNums: [NaN, NaN],
        offers: {properties:[null, null], money: [0, 0]},
        accepted: [false, false],
    }
    hideCard()
    document.getElementById("tradeOverlay").style.display = "flex"

    document.getElementById("player1Trade").innerHTML = getTradePlayerHTML(playerNum1)
    document.getElementById("player2Trade").innerHTML = getTradePlayerHTML(playerNum2)

    tradeInfo.playerNums = [playerNum1, playerNum2]

    document.getElementById(`tradeMoneySlider${playerNum1}`).addEventListener('input', function (evt) {
        document.getElementById("tradeMoney"+playerNum1).value=(this.value);
        tradeInfo.offers.money[getPlayerNum(playerNum1)] = this.value
        cancelAcceptance()
    });
    document.getElementById(`tradeMoney${playerNum1}`).addEventListener('input', function (evt) {
        this.value = Math.floor(this.value)
        if(isNaN(this.value)){
            this.value = 0
        }
        if(this.value>players[playerNum1].money){
            this.value = players[playerNum1].money
        }
        document.getElementById("tradeMoneySlider"+playerNum1).value=(this.value=="" ? 0 : this.value);
        tradeInfo.offers.money[getPlayerNum(playerNum1)] = (this.value=="" ? 0 : this.value)
        cancelAcceptance()
    });
    document.getElementById(`tradeMoneySlider${playerNum2}`).addEventListener('input', function (evt) {
        document.getElementById("tradeMoney"+playerNum2).value=(this.value);
        tradeInfo.offers.money[getPlayerNum(playerNum2)] = this.value
        cancelAcceptance()
    });
    document.getElementById(`tradeMoney${playerNum2}`).addEventListener('input', function (evt) {
        this.value = Math.floor(this.value)
        if(isNaN(this.value)){
            this.value = 0
        }
        if(this.value>players[playerNum2].money){
            this.value = players[playerNum2].money
        }
        document.getElementById("tradeMoneySlider"+playerNum2).value=(this.value=="" ? 0 : this.value);
        tradeInfo.offers.money[getPlayerNum(playerNum2)] = (this.value=="" ? 0 : this.value)
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
        // console.log(`selected player ${playerNum} card ${cardNum} location ${loc}`)
        document.getElementById(`tradeCardOverlay${playerNum},${cardNum}`).style.display = "flex"
        tradeInfo.offers.properties[getPlayerNum(playerNum)].push(loc)
    }else{
        //remove selected card
        // console.log(`unselected player ${playerNum} card ${cardNum} location ${loc}`)
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
    let propertiesHTML = ""

    let player = players[playerNum]
    let showHouseWarning = false

    cardNum = 0
    for(let i=1;i<10;i++){
        amountInSet = player.ownedProperties[`set${i}`].length
        if(amountInSet!=0){
            for(let j=0;j<amountInSet;j++){
                let tileLoc = player.ownedProperties[`set${i}`][j]
                let tile = tilesList[tileLoc]

                if(canMortgage(playerNum, tileLoc))
                {
                    console.log(`${player.name} can mortgage ${getName(tile)}`)
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
                }else{
                    console.log(`${player.name} cannot mortgage ${getName(tile)}`)
                    showHouseWarning = true
                }
            }
        }
    }

    if(showHouseWarning)
        propertiesHTML = "<span style='font-size: 2vw'>Warning: you must sell all houses/hotels on properties before attempting to trade them.</span>" + propertiesHTML

    for(let k=0;k<2;k++){
        if(player.getOutOfJail[k]){
            let cardPaths = ["./assets/chance/chance-template.svg", "./assets/chest/chest-template.svg"]
            propertiesHTML +=
            `<div class="trade_jail_card" onclick="selectTradeCard(${playerNum},${cardNum}, 'jl${k}')">
                <div class="chanceOverlay" style="display: flex; z-index: 5">
                    <img  src="${cardPaths[k]}" class="chanceOverlayImage">
                    <div class="chanceInfo" id="chanceInfo">
                        <div class="chanceDesc" id="chanceDesc">GET OUT OF JAIL FREE. YOU MAY STASH THIS CARD AND SAVE IT FOR LATER.</div>
                        <div class="chanceInfoImg" id="chanceInfoImg"><img src="assets/cards/card-images/happy.png"></div>
                    </div>
                </div>
                <div class="tradeCardOverlay" id="tradeCardOverlay${playerNum},${cardNum}"><img src="./assets/gui/check.svg">
            </div></div>`
            cardNum ++
        }
    }

    possessionsHTML = `${propertiesHTML}`
    return possessionsHTML
}

function getTradePlayerHTML(playerNum){
    //make money clickable and editable as a text box
    player = players[playerNum]
    tradePlayerHTML = `<div class="tradeName">${player.name}</div>
    $<input type="number" min="0" max="${player.money}" value="0" class="tradeMoney" id="tradeMoney${playerNum}">
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
    let player1Offer = ""
    let player2Offer = ""

    for(i=0; i<2; i++){
        let currentPlayerNum = args["offer"+i].playerNum
        let otherPlayer = (i==0 ? 1 : 0)
        let otherPlayerNum = args["offer"+otherPlayer].playerNum

        for(j=0; j<args["offer"+otherPlayer].properties.length; j++){
            offeredProperty = args["offer"+otherPlayer].properties[j]

            if(i==0){
                if(j == args["offer"+otherPlayer].properties.length - 1){
                    if(args["offer"+otherPlayer].properties.length > 1 || args["offer"+otherPlayer].properties.length > 0 && args["offer"+otherPlayer].money > 0)
                        player2Offer += " and "
                }else{
                    player2Offer += ", "
                }
                
                if(offeredProperty.substring(0,2) == "jl"){
                    player2Offer += "A Get out of Jail Free Card"
                }else{
                    player2Offer += getName(tilesList[offeredProperty])
                }
            }else{
                if(j == args["offer"+otherPlayer].properties.length - 1){
                    if(args["offer"+otherPlayer].properties.length > 1 || args["offer"+otherPlayer].properties.length > 0 && args["offer"+otherPlayer].money > 0)
                        player1Offer += " and "
                }else{
                    player1Offer += ", "
                }

                if(offeredProperty.substring(0,2) == "jl"){
                    player1Offer += "a Get out of Jail Free Card"
                }else{
                    player1Offer += getName(tilesList[offeredProperty])
                }
            }

            if(offeredProperty.substring(0,2) == "jl"){
                players[currentPlayerNum].getOutOfJail[parseInt(offeredProperty.substring(2,3))] = true
            }else{
                addProperty(players[currentPlayerNum], offeredProperty)

                //if property is mortgaged
                if(players[otherPlayerNum].mortgaged.indexOf(offeredProperty) >= 0){
                    players[currentPlayerNum].mortgaged.push(offeredProperty)
                }
            }
        }
    }
    for(i=0; i<2; i++){
        currentPlayerNum = args["offer"+i].playerNum
        otherPlayer = (i==0 ? 1 : 0)
        otherPlayerNum = args["offer"+otherPlayer].playerNum

        for(j=0; j<args["offer"+i].properties.length; j++){
            offeredProperty = args["offer"+i].properties[j]

            if(offeredProperty.substring(0,2) == "jl"){
                players[currentPlayerNum].getOutOfJail[parseInt(offeredProperty.substring(2,3))] = false
            }else{
                removeProperty(players[currentPlayerNum], offeredProperty)

                //if property is mortgaged
                if(players[currentPlayerNum].mortgaged.indexOf(offeredProperty) >= 0){
                    removeFromArray(players[currentPlayerNum].mortgaged, offeredProperty)
                }
            }
        }
    }

    players[args.offer0.playerNum].money += args.offer1.money - args.offer0.money
    players[args.offer1.playerNum].money += args.offer0.money - args.offer1.money

    chat.log(
        `${players[args.offer0.playerNum].name} traded ${args.offer0.money == 0 ? "" : `$${args.offer0.money}`}${player1Offer}${args.offer0.money == 0 && args["offer0"].properties.length == 0 ? "nothing" : ""} to ${players[args.offer1.playerNum].name} for ${args.offer1.money == 0 ? "" : `$${args.offer1.money}`}${player2Offer}${args.offer1.money == 0 && args["offer1"].properties.length == 0 ? "nothing" : ""}.`
    )

    drawPossessions(players[currentPlayer])
}