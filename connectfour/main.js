currentPlayer = ['r','#801500','Red']
oppPlayer = ['y','#CCAA00','Yellow']

gameOver = false

turnGoing = false

boardState = new Array(7)
//console.log(boardState)

function preloadImage(url){
    new Image().src=url;
    // console.log(url)
}

function drawBoard(){
    gameBoardMask = `<img src="gameMask.svg" class="gameBoardMask">`

    gameBoard = `<div id="main" class="main">`
    for(i=0; i<6; i++)
    {
        gameBoard += `<div class = "row">`
        for(j=0; j<7; j++)
        {
            piece = ""
            if(boardState[j][i] != ""){
                if(boardState[j][i] == 'r'){
                    piece = `<img class="piece" src="red_piece.svg">`
                }
                else
                {
                    piece = `<img class="piece" src="yellow_piece.svg">`
                    
                }
            }
            //console.log(bgc)

            gameBoard += `<div id="${i},${j}" class = "col" onclick="placePiece(${j})">${piece}</div>`
            //console.log(boardState[j][i])
            
        }
        gameBoard += `</div>`
    }
    gameBoard += `${gameBoardMask}</div>`

    document.getElementById("mainContainer").innerHTML = gameBoard

    if(!gameOver){
        document.getElementById("info").style.color = currentPlayer[1]
        document.getElementById("info").innerHTML = currentPlayer[2]
    }
}

var fallingSound
var hitSound

function onLoad()
{
    preloadImage("red_piece.svg")
    preloadImage("yellow_piece.svg")
    preloadImage("retry.svg")

    for(i=0; i<7; i++){
        boardState[i] = new Array(6).fill("")
    }
    drawBoard()
    fallingSound = new Howl({
        src: ['connect4_1.mp3']
    });
    hitSound = new Howl({
        src: ['connect4_2.mp3']
    });
}

function placePiece(column)
{
    if (turnGoing){return}
    turnGoing = true
    if(gameOver)
    {
        return
    }

    fallTime = 0

    //console.log(column)
    try
    {
        for(i=5; i>=0; i--)
        {
            if(boardState[column][i]=="")
            {
                fallingSound.play()
                boardState[column][i] = currentPlayer[0]
                console.log(`placed in column ${column}`)
                document.getElementById(`${i},${column}`).innerHTML=`<img id="piece${i},${column}" class="piece up${i+1}" src="${currentPlayer[0] == "r" ? "red_piece.svg" : "yellow_piece.svg"}">`
                piece = document.getElementById(`piece${i},${column}`)
                fallTime = Math.sqrt((i+1)/60)*1000
                piece.style["transition-duration"] = `${fallTime/1000}s`
                console.log(piece.style)
                setTimeout(() => {
                    piece.classList.toggle("inPlace")
                    piece.classList.toggle(`up${i+1}`)
                }, 0);
                
                break
            }
            if(i==0){
                throw new Exception()
            }
        }

        //switches players
        if(currentPlayer[0] == 'r')
        {
            currentPlayer = ['y','#CCAA00','Yellow']
            oppPlayer = ['r','#801500','Red']
        }
        else
        {
            currentPlayer = ['r','#801500','Red']
            oppPlayer = ['y','#CCAA00','Yellow']
        }

        if(checkWin(oppPlayer[0]))
        {
            //console.log(document.getElementById("information"))
            document.getElementById("information").innerHTML = `${oppPlayer[2]} has won! <span onclick="newGame()" class="retry"><img src="retry.svg"></span>`
            gameOver = true;
            turnGoing = false
        }

        if(isFull())
        {
            document.getElementById("information").innerHTML = `It's a draw! <span onclick="newGame()" class="retry"><img src="retry.svg"></span>`
            gameOver = true;
            turnGoing = false
        }
    }
    catch(e)
    {
        console.log(e)
        document.getElementById("information").innerHTML = `Column is full, try again! Current Player: <span id="info"></span>`
    }
    //wait .5 s
    setTimeout(() => {
        drawBoard()
        turnGoing = false
        hitSound.play()
    }, fallTime);
}

function checkWin(player)
{
    //check vertical wins
    for(i=0; i<7; i++)
    {
        for(j=0;j<3;j++)
        {
            if(boardState[i][j] == player && boardState[i][j+1] == player && boardState[i][j+2] == player && boardState[i][j+3] == player)
            {
                //console.log("vertical W")
                return true
            }
        }
    }
    

    //check horizontal wins
    for(i=0; i<6; i++)
    {
        for(j=0;j<4;j++)
        {
            if(boardState[j][i] == player && boardState[j+1][i] == player && boardState[j+2][i] == player && boardState[j+3][i] == player)
            {
                //console.log("horizontal W")
                return true
            }
        }
    }

    //check diagonal wins like [/]
    for(i=5; i>=3; i--)
    {
        for(j=0;j<4;j++)
        {
            if(boardState[j][i] == player && boardState[j+1][i-1] == player && boardState[j+2][i-2] == player && boardState[j+3][i-3] == player)
            {
                //console.log("diagonal [/] W")
                return true
            }
        }
    }


    //check diagonal wins like [\]
    for(i=5; i>=3; i--)
    {
        for(j=0;j<4;j++)
        {
            if(boardState[j][i-3] == player && boardState[j+1][i-2] == player && boardState[j+2][i-1] == player && boardState[j+3][i] == player)
            {
                //console.log("diagonal [mirrored /] W")
                return true
            }
        }
    }

    return false
}

function showCredits(){
    document.getElementById("credits").style.display="flex"
}

function hideCredits(){
    document.getElementById("credits").style.display="none"
}

function newGame()
{
    //resets current player
    document.getElementById("information").innerHTML = `Current Player: <span id="info"></span>`

    //resets game board array
    boardState = new Array(7)
    onLoad()

    //allows user input
    gameOver = false
    turnGoing = false

    //makes red first
    currentPlayer = ['r','#801500','Red']
    oppPlayer = ['y','#CCAA00','Yellow']

    //draws board
    drawBoard()
}

function isFull()
{
    for(i=0; i<6; i++)
    {
        for(j=0; j<7; j++)
        {
            if(boardState[j][i] == "")
            {
                return false
            }
        }
    }
    return true
}