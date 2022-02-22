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
    return [suit, (Math.randInt(13)+1), true]
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

    drawBoard()
}

function test(){
    randomCard('play1')
    randomCard('play2')
    randomCard('play3')
    randomCard('play4')
    randomCard('play5')
    randomCard('play6')
    randomCard('play7')
}

function drawBoard(){
    board.forEach(function (item, index) {
        newValue = ''
        topIndex = index
        item.forEach(function (item, index){
            console.log(item[2])

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
        
        item.forEach(function (index){
            document.getElementById('play'+topIndex+"_"+index).style.top = (index*18 + '%')
        })
    });
}