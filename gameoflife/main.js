var gameBoard
let boardSize
let playing = false

function initializeBoard(numRows, numCols) {
    boardSize = {rows: numRows, cols: numCols}
    createGameBoard(numRows, numCols)
    drawGrid()
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
    document.getElementById("numCols").innerHTML = `.gameRow {grid-template-columns: repeat(${numCols}, 15px);}`
}

function clearBoard()
{
    stopPlaying()
    document.getElementById("playButton").src = "icons/play.svg"
    gameBoard = createBooleanArray(boardSize.rows, boardSize.cols)
    updateGrid()
}

function drawGrid()
{
    gameGrid = ""
    for(i = 0; i<boardSize.rows; i++)
    {
        gameGrid += `<div class = "gameRow">`
        for(j=0; j< boardSize.cols; j++)
        {
            gameGrid += `<div class = "cell" onclick="switchColor(${i},${j})" id="cell${i},${j}"></div>`
        }
        gameGrid += `</div>`
    }
    document.getElementById("gameGrid").innerHTML = gameGrid
}

function updateGrid()
{
    for(i = 0; i<boardSize.rows; i++)
    {
        for(j=0; j< boardSize.cols; j++)
        {
            document.getElementById(`cell${i},${j}`).style.backgroundColor = (gameBoard[i][j] ? "black" : "transparent")
        }
    }
}

function switchColor(xPos, yPos){
    if(playing){return}
    gameBoard[xPos][yPos] = !gameBoard[xPos][yPos]
    updateCell(xPos,yPos)
}

function updateCell(xPos,yPos)
{
    document.getElementById(`cell${xPos},${yPos}`).style.backgroundColor = (gameBoard[xPos][yPos] ? "black" : "transparent")
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
                        j+j2 >= 0 && j+j2 < boardSize.cols &&
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
    updateGrid()
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

function togglePlay()
{
    if(playing){
        stopPlaying()
        document.getElementById("playButton").src = "icons/play.svg"
        
    }
    else
    {
        startPlaying()
        document.getElementById("playButton").src = "icons/pause.svg"
        
    }
}