currentPlayer = ['r','#801500','Red']
oppPlayer = ['y','#CCAA00','Yellow']

gameOver = false

boardState = new Array(7)
//console.log(boardState)

function drawBoard(){

    gameBoard = ""
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
    document.getElementById("main").innerHTML = gameBoard

    if(!gameOver){
        document.getElementById("info").style.color = currentPlayer[1]
        document.getElementById("info").innerHTML = currentPlayer[2]
    }
}

function onLoad()
{
    for(i=0; i<7; i++){
        boardState[i] = new Array(6).fill("")
    }
    drawBoard()
}

function placePiece(column)
{
    if(gameOver)
    {
        return
    }

    //console.log(column)
    try
    {
        for(i=5; i>=0; i--)
        {
            if(boardState[column][i]=="")
            {
                boardState[column][i] = currentPlayer[0]
                //console.log(`placed in column ${column}`)
                document.getElementById("information").innerHTML = `Current Player: <span id="info"></span>`
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
        }
    }
    catch(e)
    {
        console.log(e)
        document.getElementById("information").innerHTML = `Column is full, try again! Current Player: <span id="info"></span>`
    }
    drawBoard()
}

function checkWin(player)
{
    //check vertical wins
    for(i=0; i<6; i++)
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

function newGame()
{
    //resets current player
    document.getElementById("information").innerHTML = `Current Player: <span id="info"></span>`

    //resets game board array
    boardState = new Array(7)
    onLoad()

    //allows user input
    gameOver = false

    //makes red first
    currentPlayer = ['r','#801500','Red']
    oppPlayer = ['y','#CCAA00','Yellow']

    //draws board
    drawBoard()
}