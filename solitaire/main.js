selected = [false]

currentDrawnCard = -1

solvePile = [['',0],['',0],['',0],['',0]]

const deckOfCards = []

for (let i = 0; i < 4; i++){
    suitIndex = i
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
        deckOfCards.push([suit, i+1])
    }
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

shuffledDeck = shuffle(deckOfCards)

Math.randInt = function(max) {
    return Math.floor(Math.random()*max)
}

function updateCard(target, value) {
    document.getElementById(target).src = ("./cards/" + value + ".svg")
}

function randomCard(){
    c = Math.floor(Math.random()*4)
    switch(c){
        case 0:
            suit = 'diamonds'
            break;
        case 1:
            suit = 'hearts'
            break;
        case 2:
            suit = 'clubs'
            break;
        case 3:
            suit = 'spades'
            break;

    }

    if(suit == 'diamonds' || suit == 'hearts'){
        isRed = true
    }else{
        isRed = false
    }

    return [suit, (Math.randInt(13)+1), false, isRed]
}

board = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
]

function addCard(card){
    if(card[0] == 'diamonds' || card[0] == 'hearts'){
        isRed = true
    }else{
        isRed = false
    }

    return [card[0], card[1], false, isRed]
}

drawPile = []

function createBoard(){
    cardNumber = 0
    for(let i = 0; i<7; i++){
        column = i
        for(let i = 0; i<column+1; i++){
            board[column].push(addCard(shuffledDeck[cardNumber]))
            cardNumber++
        }
    }

    for(let i = 0; i<24; i++){
        drawPile.push(shuffledDeck[cardNumber])
        cardNumber++
    }

    drawBoard()
}

function drawBoard(){
    board.forEach(function (item, index) {
        if(index<7){
            newValue = ''
            topIndex = index
            item.forEach(function (item, index){
                //flips top card
                if(item != undefined){
                    if(!item[2] && (board[topIndex].length == (index+1))){
                        item[2] = true
                    }

                    //determines if card face is visible
                    if(item[2]){
                        source = "./cards/"+item[0]+'_'+item[1]+".svg"
                    }else{
                        source = "./cards/back.svg"
                    }

                    newValue += "<img class='card' onclick='select("+topIndex+","+index+")' id='play"+topIndex+"_"+index+"' src="+source+">"
                }
            })
            document.getElementById('play'+index).innerHTML = newValue
            if(item[0] == undefined){
                document.getElementById('play'+index).innerHTML = "<img class='card' onclick='select("+index+",0)' id='play"+index+"_0' src='./cards/blank.svg'>"
            }
            
            item.forEach(function (item, index){
                if(item!=undefined){
                    document.getElementById('play'+topIndex+"_"+index).style.top = (index*18 + '%')
                }
                
            })}
    });
    if(currentDrawnCard>=0){
        document.getElementById('deck1').src = "./cards/"+drawPile[currentDrawnCard][0]+"_"+drawPile[currentDrawnCard][1]+'.svg'
        board[7][0] = addCard([drawPile[currentDrawnCard][0],drawPile[currentDrawnCard][1]])
    }else{
        document.getElementById('deck1').src = "./cards/blank.svg"
    }

    if(checkWin()){
        window.location.href = "./youwin"
    }
}

function checkWin(){
    if(solvePile[0][1] == solvePile[1][1] == solvePile[2][1] == solvePile[3][1] == 13){
        return true
    }
}

function isValid(column1, row1, column2, row2) {
    if((!(board[column2][row2][1] + 1 == board[column1][row1][1]) || (board[column1][row1][3] == board[column2][row2][3]))){
        return false
    }
    return true
}

function validStack(column, startPos){
    checks = board[column].length - startPos - 1

    for (let i = 0; i < checks; i++) {
        console.log(board[column][i+startPos][0])
        if(!isValid(column+i, startPos+i, column+i+1, startPos+i+1)){
            return false
        }
    }

    return true
}

function moveStack(move1, move2, target1){

        cardsToMove = board[move1].length - move2
        for (let i = 0; i < cardsToMove; i++) {
            board[target1].push(board[move1][move2+i])
        }
        for (let i = 0; i < cardsToMove; i++) {
            board[move1].pop()
        }

        if(selected[1] == 7){
            drawPile.splice(currentDrawnCard, 1)
            currentDrawnCard-=1
        }
        console.log('ffffffds')
        drawBoard()
    
}

function select(index1, index2){
    if(selected[0]){
        console.log('j')
        if(validStack(index1, index2)){
            console.log('i')
            if(board[index1][index2] == undefined){
                if(board[selected[1]][selected[2]][1] == 13){
                    console.log('king to blanks')
                    moveStack(selected[1], selected[2], index1)
                }
                
            }else if(isValid(index1, index2, selected[1], selected[2]) && (board[index1][board[index1].length-1][1] == board[selected[1]][selected[2]][1]+1)){
                moveStack(selected[1], selected[2], index1)
            }
        }
        selected[0] = !selected[0]
    }else{
        if(board[index1][board[index1].length - 1] != undefined){
            selected[1] = index1
            selected[2] = index2
            selected[0] = !selected[0]
        }
    }
}

function drawCard(){
    currentDrawnCard++

    if(currentDrawnCard == drawPile.length){
        currentDrawnCard = -1
    }

    if(currentDrawnCard+1 == drawPile.length){
        document.getElementById('deck0').src = './cards/blank.svg'
    }else{
        document.getElementById('deck0').src = './cards/back.svg'
    }

    if(currentDrawnCard>=0){
        board[7][0] = addCard([drawPile[currentDrawnCard][0],drawPile[currentDrawnCard][1]])
    }
    
    drawBoard()
}

function fromDrawPile(){
    console.log('fff')
    if(selected[0]){
    }else{
        selected = [!selected[0], 7, 0]
    }

    drawBoard()
}

function placeOnDeck(deck){
    console.log('SElected: '+board[selected[1]][selected[2]][1]+' target: '+solvePile[deck][1]+1)
    if(selected[0]){
        if(solvePile[deck][1]+1 == board[selected[1]][selected[2]][1]){
            console.log("./cards/"+board[selected[1]][selected[2]][0]+"_"+board[selected[1]][selected[2]][1])
            document.getElementById('pile'+deck).src = "./cards/"+board[selected[1]][selected[2]][0]+"_"+board[selected[1]][selected[2]][1]+'.svg'
            board[selected[1]].pop()
            solvePile[deck][1]++
            selected[0] = !selected[0]
        }

        if(selected[1] == 7){
            drawPile.splice(currentDrawnCard, 1)
            currentDrawnCard-=1
        }

        drawBoard()
    }
}