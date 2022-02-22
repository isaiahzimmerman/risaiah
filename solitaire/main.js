selected = [false]

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

function moveStack(move1, move2, target1, target2){
    board[target1].push(board[move1][move2])
    board[move1].pop()
    drawBoard()
}

function select(index1, index2){
    console.log(board[index1][board[index1].length - 1])
    if(selected[0]){
        selected[0] = !selected[0]
        if(board[index1][board[index1].length - 1] == undefined){
            console.log(board[selected[1]][board[selected[1]].length - 1][1])
            if(board[selected[1]][board[selected[1]].length - 1][1]==13){
                moveStack(selected[1], selected[2], index1, index2)
            }
        }else{
            moveStack(selected[1], selected[2], index1, index2)
        }
    }else{
        if(board[index1][board[index1].length - 1] != undefined){
            selected[1] = index1
            selected[2] = index2
            selected[0] = !selected[0]
        }
    }
    
}