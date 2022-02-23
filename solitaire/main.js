selected = [false]

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

function addCard(card){
    if(card[0] == 'diamonds' || card[0] == 'hearts'){
        isRed = true
    }else{
        isRed = false
    }

    return [card[0], card[1], false, isRed]
}

board = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
]

function createBoard(){
    board[0] = []
    board[0].push(randomCard())
    board[1] = []
    board[1].push(randomCard())
    board[1].push(randomCard())
    board[2] = []
    board[2].push(randomCard())
    board[2].push(randomCard())
    board[2].push(randomCard())
    board[3] = []
    board[3].push(randomCard())
    board[3].push(randomCard())
    board[3].push(randomCard())
    board[3].push(randomCard())
    board[4] = []
    board[4].push(randomCard())
    board[4].push(randomCard())
    board[4].push(randomCard())
    board[4].push(randomCard())
    board[4].push(randomCard())
    board[5] = []
    board[5].push(randomCard())
    board[5].push(randomCard())
    board[5].push(randomCard())
    board[5].push(randomCard())
    board[5].push(randomCard())
    board[5].push(randomCard())
    board[6] = []
    board[6].push(randomCard())
    board[6].push(randomCard())
    board[6].push(randomCard())
    board[6].push(randomCard())
    board[6].push(randomCard())
    board[6].push(randomCard())
    board[6].push(randomCard())

    drawBoard()
}

function drawBoard(){
    board.forEach(function (item, index) {
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
            
        })
        

    });
}

function isValid(column1, row1, column2, row2) {
    if(!((board[column2][row2][1] + 1 == board[column1][row1][1]) || (board[column1][row1][3] == board[column2][row2][3]))){
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

function moveStack(move1, move2, target1, target2){
    cardsToMove = board[move1].length - move2
    for (let i = 0; i < cardsToMove; i++) {
        board[target1].push(board[move1][move2+i])
    }
    for (let i = 0; i < cardsToMove; i++) {
        board[move1].pop()
    }
    
    drawBoard()
}

function select(index1, index2){
    if(selected[0]){
        console.log('j')
        if(validStack(index1, index2)){
            console.log('i')
            if(board[index1][board[index1].length - 1] == undefined){
                if(board[selected[1]][board[selected[1]].length - 1][1]==13){
                    console.log('king to blanks')
                    moveStack(selected[1], selected[2], index1, index2)
                }
                
            }else if(isValid(index1, index2, [selected[1]], [selected[2]]) && board[index1][index2][1] == board[selected[1]][selected[2]][1]+1){
                moveStack(selected[1], selected[2], index1, index2)
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

function placeOnDeck(deck){
    console.log('SElected: '+board[selected[1]][selected[2]][1]+' target: '+solvePile[deck][1]+1)
    if(selected[0]){
        if(solvePile[deck][1]+1 == board[selected[1]][selected[2]][1]){
            console.log("./cards/"+board[selected[1]][selected[2]][0]+"_"+board[selected[1]][selected[2]][1])
            document.getElementById('pile'+deck).src = "./cards/"+board[selected[1]][selected[2]][0]+"_"+board[selected[1]][selected[2]][1]+'.svg'
            board[selected[1]].pop()
            selected[0] = !selected[0]
            drawBoard()
        }
    }
}