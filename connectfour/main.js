currentPlayer = ['r','#801500','Red']
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
                    piece = `<img src="red_piece.svg">`
                }
                else
                {
                    piece = `<img src="yellow_piece.svg">`
                    
                }
            }
            //console.log(bgc)

            gameBoard += `<div id="${i},${j}" class = "col" onclick="placePiece(${j})">${piece}</div>`
            //console.log(boardState[j][i])
            
        }
        gameBoard += `</div>`
    }
    document.getElementById("main").innerHTML = gameBoard
    document.getElementById("info").style.color = currentPlayer[1]
    document.getElementById("info").innerHTML = currentPlayer[2]
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
    //console.log(column)
    try
    {
        for(i=5; i>=0; i--)
        {
            if(boardState[column][i]=="")
            {
                boardState[column][i] = currentPlayer[0]
                //console.log(`placed in column ${column}`)
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
        }
        else
        {
            currentPlayer = ['r','#801500','Red']
        }
    }
    catch
    {
        window.alert("Invalid move! This column is full!")
    }
    drawBoard()
}