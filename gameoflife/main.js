var gameBoard
let boardSize
let playing = false

function initializeBoard(numRows, numCols) {
    boardSize = {rows: numRows, cols: numCols}
    createGameBoard(numRows, numCols)
    drawGrid(numRows, numCols)
}

function createBooleanArray(numRows, numCols)
{
    output = new Array(numRows)
    for(i=0; i<numRows; i++)
    {
        output[i] = new Array(numCols).fill(false)
    }
    return output
}

function createGameBoard(numRows, numCols)
{
    gameBoard = createBooleanArray(numRows, numCols)
    document.getElementById("numCols").innerHTML = `.gameRow {grid-template-columns: repeat(${numCols}, 20px);}`
}

function drawGrid()
{
    gameGrid = ""
    for(i = 0; i<boardSize.rows; i++)
    {
        gameGrid += `<div class = "gameRow">`
        for(j=0; j< boardSize.cols; j++)
        {
            gameGrid += `<div class = "cell" onclick="switchColor(${i},${j})" style="background-color: ${(gameBoard[i][j] ? "black" : "none")};"></div>`
        }
        gameGrid += `</div>`
    }
    document.getElementById("gameGrid").innerHTML = gameGrid
}

function switchColor(xPos, yPos){
    gameBoard[xPos][yPos] = !gameBoard[xPos][yPos]
    drawGrid()
}

function takeStep()
{
    newBoard = createBooleanArray(boardSize.rows, boardSize.cols)
    for(i=0; i<boardSize.rows; i++)
    {
        for(j=0; j<boardSize.cols; j++)
        {
            isAlive = gameBoard[i][j]
            liveAround = 0
            for(i2 = -1; i2 <= 1; i2++)
            {
                for(j2 = -1; j2 <= 1; j2++)
                {
                    if(
                        !(i2 == 0 && j2 == 0) &&
                        i+i2 >= 0 && i+i2 < boardSize.rows &&
                        j+j2 >= 0 && j+j2 < boardSize.rows &&
                        gameBoard[i+i2][j+j2]
                    )
                    {
                        liveAround ++
                    }
                }
            }

            if(
                (isAlive && liveAround>=2 && liveAround<=3) || 
                (!isAlive && liveAround==3))
            {
                newBoard[i][j] = true
            }
            else{
                newBoard[i][j] = false
            }
        }
    }
    gameBoard = newBoard
    drawGrid()
}

function play() {
    setTimeout(() => {
      // Your logic here
      takeStep()

      if(playing){
        play()
      };
    }, 100);
}
  
function startPlaying(){
    playing = true
    play()
}

function stopPlaying()
{
    playing = false
}