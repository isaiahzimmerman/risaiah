//card structure: ["type", value]
const cardTypes = ['clubs', 'diamonds', 'hearts', 'spades']
const cardNames = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace']

//table
var tableDeck
var playerCards = []

var deckOfCards = []
//initialize / deal deck
function initializeCards()
{
    deckOfCards = []
    playerCards = []
    for (let j = 0; j < 4; j++){
        suitIndex = j
        for (let i = 0; i < 13; i++){
            switch(suitIndex){
                case 0:
                    suit = 'diamonds'
                    break;
                case 1:
                    suit = 'hearts'
                    break;
                case 2:
                    suit = 'spades'
                    break;
                case 3:
                    suit = 'clubs'
                    break;
            }
            deckOfCards.push(new Card(suit, i))
        }
    }
    shuffle(deckOfCards)
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

function dealCards(playerCount, cardsPerPlayer, tableCardCount)
{
    initializeCards()
    tableCards = []
    for(let i=0; i<tableCardCount; i++)
    {
        tableCards.push(deckOfCards.shift())
    }
    for(let i=0; i<playerCount; i++)
    {
        playerNCards = []
        for(let j=0; j<cardsPerPlayer; j++)
        {
            playerNCards.push(deckOfCards.shift())
        }
        playerNDeck = new Deck(playerNCards)
        playerNHand = new Hand(new CardMat(new Deck(playerNCards, tableCards)), `player ${i+1}`, playerNDeck)
        playerNHand.evaluateHand()
        playerCards.push(playerNHand)
    }
    console.log("table cards:")
    console.log(tableCards)
    tableDeck = new Deck(tableCards)
}

//to type
var toType = function(obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

//
function newCardMat(){
    mat = []
    for(i=0; i<4; i++)
    {
        s = []
        for(j=0; j<14; j++)
        {
            s.push(false)
        }
        mat.push(s)
    }
    return mat
}

class Deck{
    constructor()
    {
        this.cards = []
        for(var i=0; i<arguments.length; i++)
        {
            if (toType(arguments[i]) == "array")
            {
                for(let j=0; j<arguments[i].length; j++)
                {
                    this.cards.push(arguments[i][j])
                }
            }
            else
            {
                this.cards.push(arguments[i])
            }
            
        }
    }
}

class Card{
    constructor(type, value)
    {
        this.type = type
        this.value = value
    }
}

class CardMat
{
    constructor(deck)
    {
        this.cardMatrix = newCardMat()
        for(var i=0; i<deck.cards.length; i++)
        {
            var curr = deck.cards[i]
            var type = cardTypes.indexOf(curr.type)
            var val = curr.value
            if(val == 0){ this.cardMatrix[type][13] = true }
            this.cardMatrix[type][val] = true
        }
    }
    invert(location)
    {
        this.cardMatrix[location[0]][location[1]] = !this.cardMatrix[location[0]][location[1]]
    }
    set(location, value)
    {
        this.cardMatrix[location[0]][location[1]] = value
    }
    getHighest()
    {
        for(let i=13; i>=0; i--)
        {
            for(let j=3; j>=0; j--)
            {
                if(this.cardMatrix[j][i])
                {
                    return [j, i]
                }
            }
        }
    }
}

//finds index of last 'true' value in array
function lastTrue(input, compare)
{
    for(let i = input.length-1; i>=0; i--)
    {
        if(input[i] == compare){ return i }
    }
    return -1
}

function countOccurrences(input)
{
    const counts = {};

    for (let i=0; i<input.length; i++)
    {
        num = input[i]
        counts[num] = (counts[num] ? counts[num] + 1 : 1)
    }

    return counts
}

function checkStraight(input)
{
    for(let i=input.length; i>=4; i--)
    {
        if(input[i-4] && input[i-3] && input[i-2] && input[i-1] && input[i])
        {
            console.log("straight!!!")
            return [true, i]
        }
    }
    return [false]
}

function checkFullHouse(input)
{
    for(let i = input[1].length-1; i>=0; i--)
    {
        for(let j=input[0].length-1; j>=0 ; j--)
        {
            if(input[0][j] != input[1][i])
            {
                console.log("full house detected")
                return [true, (input[0][j] > input[1][i] ? input[0][j] : input[1][i])]
            }
        }
    }
    return [false]
}

class Hand{
    constructor(cardMat, playerName, deck)
    {
        this.cardMat = cardMat
        this.deck = deck
        this.playerName = playerName
        this.value = {type: -1, high: -1, tiebreaker: -1, desc: "nothing"}
    }
    //types{
        //0 - high card
        //1 - pair
        //2 - two pair
        //3 - three of a kind
        //4 - straight
        //5 - flush
        //6 - full house
        //7 - four of a kind
        //8 - straight flush
        //9 - royal flush
    //}
    //high - high card in type
    //tiebreaker - high card other than type
    evaluateHand()
    {
        var tempCards = this.cardMat.cardMatrix

        //test for kind
        var sameKind = []
        for(let i=0; i<14; i++){
            sameKind.push(0)
            for(let j=0; j<4; j++)
            {
                if(tempCards[j][i])
                {
                    sameKind[i]++
                }
            }
        }
        console.log({sameKind})

        var sameKindMax = {
            four: lastTrue(sameKind, 4),
            three: lastTrue(sameKind, 3),
            pair1: -1,
            pair2: -1
        }
        
        console.log({sameKindMax})
        
        var hasAce = [false, []]
        for(var i = 0; i<4; i++)
        {
            if(tempCards[i][0])
            {
                hasAce[0] = true
                hasAce[1].push(i)
            }
        }
        console.log(hasAce)

        //royal flush
        if(hasAce[0]){
            for(let i = 0; i<hasAce[1].length; i++)
            {
                var isRoyalFlush = true
                for(var j = 9; j <= 13 && isRoyalFlush; j++)
                {
                    isRoyalFlush = tempCards[hasAce[1][i]][j]
                }
                if(isRoyalFlush)
                {
                    return this.value = {
                        type: 9, 
                        high: 13, 
                        tiebreaker: 13, 
                        desc: "Royal Flush!"
                    }
                }
            }
        }

        //straight flush
        for(let i=0; i<4; i++)
        {
            var isStraightFlush = checkStraight(tempCards[i])
            if(isStraightFlush[0])
            {
                return this.value = {
                    desc: `straight flush of ${cardTypes[i]}s with ${cardNames[isStraightFlush[1]]} high card.`
                }
            }
        }

        //four of a kind
        if(sameKindMax.four >= 0)
        {
            for(let i=0; i<4; i++)
            {
                this.cardMat.set([i,sameKindMax.four], false)
            }
            let highCard = this.cardMat.getHighest(tempCards)
            return this.value = {
                desc: `Quad ${cardNames[sameKindMax.four]}s! ${cardNames[highCard[1]]} high card.`
            }
        }
        
        //full house
        var fullHouse = [[],[]]
        for(let i=0; i<14; i++)
        {
            if(sameKind[i] >= 2){
                fullHouse[0].push(i)
            }
            if(sameKind[i] >= 3){
                fullHouse[1].push(i)
            }
        }
        var fullHouseChecker = checkFullHouse(fullHouse)
        if(fullHouseChecker[0])
        {
            return this.value = {
                desc: `Full house with ${cardNames[fullHouseChecker[1]]} high card`
            }
        }
        console.log({fullHouseChecker})

        //flush
        var flushes = []
        for(let i=0; i<4; i++)
        {
            var amtOfType = 0
            for(let j=0; j<13; j++)
            {
                if(tempCards[i][j]){ amtOfType++ }
                if(amtOfType >= 5)
                {
                    flushes.push(i)
                }
            }
        }
        if(flushes.length > 0)
        {
            console.log("glush")
            var maxFlush = lastTrue(tempCards[flushes[0]], true)
            var maxSuit = flushes[0]
            for(let i=1; i<flushes.length; i++)
            {
                var maxTest = lastTrue(tempCards[flushes[i]], true)
                if(maxTest > maxFlush){
                    maxFlush = maxTest
                    maxSuit = flushes[i]
                }
            }
            return this.value = {
                type: 5,
                high: maxFlush,
                tiebreaker: maxFlush,
                desc: `${cardTypes[maxSuit]} flush with ${cardNames[maxFlush]} high card.`
            }
            
        }

        //straight
        var straightCheck = []
        for(let i=0; i<13; i++)
        {
            straightCheck.push(
                tempCards[0][i] ||
                tempCards[1][i] ||
                tempCards[2][i] ||
                tempCards[3][i]
            )
        }
        var isStraight = checkStraight(straightCheck)
        if(isStraight[0])
        {
            return this.value = {
                desc: `straight with ${cardNames[isStraight[1]]} high card.`
            }
        }
        
        //three of a kind*
        if(sameKindMax.three >= 0)
        {
            let highCard = []
            let high1 = this.cardMat.getHighest(tempCards)
            highCard.push(high1[1])
            this.cardMat.set(high1, false)
            let high2 = this.cardMat.getHighest(tempCards)
            highCard.push(high2[1])
            return this.value = {
                desc: `triple ${cardNames[sameKindMax.three]}s, ${cardNames[highCard[0]]} and ${cardNames[highCard[1]]} high cards.`
            }
        }
        
        //two pair
        if(sameKind.indexOf(2) >= 0)
        {
            sameKind[0] = sameKind[13]
            var index = sameKind.indexOf(2)
            var maxTwoOfAKind = lastTrue(sameKind, 2)
            sameKind[index] = 0
            if(sameKind.indexOf(2) >= 0)
            {
                let highCard = this.cardMat.getHighest(tempCards)
                return this.value = {
                    desc: `two pair, high pair of ${cardNames[maxTwoOfAKind]}s with ${cardNames[highCard[1]]} high card.`
                }
            }
            else
            {
                sameKind[index] = 2
            }
        }

        //pair*
        if(sameKind.indexOf(2) >= 0)
        {
            var maxTwoOfAKind = lastTrue(sameKind, 2)
            let highCard = []
            let high1 = this.cardMat.getHighest(tempCards)
            highCard.push(high1[1])
            this.cardMat.set(high1, false)
            let high2 = this.cardMat.getHighest(tempCards)
            highCard.push(high2[1])
            this.cardMat.set(high2, false)
            let high3 = this.cardMat.getHighest(tempCards)
            highCard.push(high3[1])
            return this.value = {
                desc: `pair of ${cardNames[maxTwoOfAKind]}s, ${cardNames[highCard[0]]}, ${cardNames[highCard[1]]}, and ${cardNames[highCard[2]]} high cards.`
            }
        }

        return this.value = {type: 0, high: -2, tiebreaker: -2, desc: "Nothin"}
    }

}

//draw site
function drawTable()
{
    drawCards(tableDeck, "table")
}

function drawHands()
{
    handsHTML = ``
    for(let i=0; i<playerCards.length; i++)
    {
        handsHTML += `<h2>Hand ${i+1}</h2> <div id='hand${i}'></div> <h3>Current hand: ${playerCards[i].value.desc}</h3>`
    }
    document.getElementById('hands').innerHTML = handsHTML
    for(let i=0; i<playerCards.length; i++)
    {
        drawCards(playerCards[i].deck, `hand${i}`)
    }
}

function drawCards(deck, id)
{
    var temporary = ``
    for(i=0; i<deck.cards.length; i++)
    {
        temporary += `<img src='../cards/${deck.cards[i].type}_${deck.cards[i].value}.svg'>`
    }
    document.getElementById(id).innerHTML = temporary
}

function test()
{
    dealCards(2, 5, 5)
    // playerCards[0].deck = new Deck([
    //     new Card('clubs', 10),
    //     new Card('diamonds', 11),
    //     new Card('hearts', 12),
    //     new Card('spades', 10),
    //     new Card('clubs', 0)
    // ])
    // playerCards[0].cardMat = new CardMat(playerCards[0].deck)
    // playerCards[0].evaluateHand()
    drawTable()
    drawHands()
}