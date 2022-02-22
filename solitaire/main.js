function drawStack() {}

const deckOfCards = [
    []
]

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
    return [suit, (Math.randInt(13)+1), false]
}

board = [
    [
        ['diamonds', 1, false],
        ['clubs', 2, false],
        ['hearts', 13, true]
    ],
    [
        ['diamonds', 1, true]
    ],
    [
        ['diamonds', 1, false]
    ],
    [
        ['diamonds', 1, false]
    ],
    [
        ['diamonds', 1, true]
    ],
    [
        ['diamonds', 1, false]
    ],
    [
        ['diamonds', 1, false]
    ],
]

function randomBoard(){
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
            if(!item[2] && (board[topIndex].length == (index+1))){
                item[2] = true
            }

            //determines if card face is visible
            if(item[2]){
                source = "./cards/"+item[0]+'_'+item[1]+".svg"
            }else{
                source = "./cards/back.svg"
            }


            newValue += "<img class='card' id='play"+topIndex+"_"+index+"' src="+source+">"
            
            console.log("topIndex "+topIndex+", index "+index)
            console.log(newValue)
        })
        document.getElementById('play'+index).innerHTML = newValue
        
        item.forEach(function (item, index){
            console.log('play'+topIndex+"_"+index)
            document.getElementById('play'+topIndex+"_"+index).style.top = (index*18 + '%')
            
        })
    });
}