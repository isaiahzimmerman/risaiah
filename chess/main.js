cellGrid=[]

function initializeCellGrid(){
  for(i=0;i<8;i++){
    cellGrid.push([].fill(null, 0, 7))
    
    for(j=0;j<8;j++){
      if(i==0){
        if(j==0 || j==7){
          cellGrid[i][j] = {type: "rook", color: "white"}
        }else if(j==1 || j==6){
          cellGrid[i][j] = {type: "knight", color: "white"}
        }else if(j==2 || j==5){
          cellGrid[i][j] = {type: "bishop", color: "white"}
        }else if(j==3){
          cellGrid[i][j] = {type: "king", color: "white"}
        }else if(j==4){
          cellGrid[i][j] = {type: "queen", color: "white"}
        }
      }else if(i==1){
        cellGrid[i][j] = {type: "pawn", color: "white"}
      }else if(i==6){
        cellGrid[i][j] = {type: "pawn", color: "black"}
      }else if(i==7){
        if(j==0 || j==7){
          cellGrid[i][j] = {type: "rook", color: "black"}
        }else if(j==1 || j==6){
          cellGrid[i][j] = {type: "knight", color: "black"}
        }else if(j==2 || j==5){
          cellGrid[i][j] = {type: "bishop", color: "black"}
        }else if(j==3){
          cellGrid[i][j] = {type: "king", color: "black"}
        }else if(j==4){
          cellGrid[i][j] = {type: "queen", color: "black"}
        }
      }
      if(cellGrid[i][j] !=null){
        cellGrid[i][j].pos = {x:j,y:i}
      }
    }
  }
  console.log(cellGrid)
}

function drawBoard(){
  //TODO: make this whole system better
  boardHTML = ""
  for(i=0;i<8;i++){
    boardHTML += `<div class="cellRow">`
    for(j=0;j<8;j++){
      boardHTML += `<div class="cell ${(i+j)%2==1 ? "blackCell" : "whiteCell"}" id="cell${i}_${j}">`
      currentPiece = cellGrid[i][j]

      if(currentPiece != null){
          boardHTML+= `<div id="piece${i*8+j}" class="piece ${currentPiece.color}Piece"><img class="pieceImg" src="assets/pieces/${currentPiece.color}/${currentPiece.type}.png"></div>` 
      }

      boardHTML += `</div>`
    }
    boardHTML += `</div>`
  }
  document.getElementById("board").innerHTML=boardHTML

  for(i=0;i<8;i++){
    for(j=0;j<8;j++){
      if(cellGrid[i][j] != null){
        dragElement(document.getElementById(`piece${i*8+j}`))
      }
    }
  }
}

function initializeGame(){
  initializeCellGrid()
  drawBoard()
}


function updateBoard(){
  
}

//v from https://www.w3schools.com/howto/howto_js_draggable.asp

//Make the DIV element draggagle:


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
    elmnt.style.zIndex = "2"
    console.log(elmnt.style)
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = e.clientX - pos3;
    pos2 = e.clientY - pos4;
    
    elmnt.style.top = (pos2) + "px";
    elmnt.style.left = (pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;

    elmntBounds = elmnt.getBoundingClientRect()
    closestCell = getClosestCell(getCenter(elmntBounds))
    startingCell = getClosestCell({x: pos3, y: pos4})

    if(closestCell!=null){
      attemptMove(cellGrid[startingCell.y][startingCell.x], closestCell)
    }else{
      attemptMove(cellGrid[startingCell.y][startingCell.x], startingCell)
    }
  }
}

function getCenter(rect){
  return {y: (rect.top+rect.bottom)/2, x: (rect.left+rect.right)/2}
}

function getClosestCell(pos /* obj */){
  boardBounds = document.getElementById("board").getBoundingClientRect()
  cellWidth=boardBounds.width/8

  for(i=0;i<8;i++){
    for(j=0;j<8;j++){
      if(boardBounds.left+cellWidth*j < pos.x && pos.x < boardBounds.left+cellWidth*(j+1) && boardBounds.top+cellWidth*i < pos.y && pos.y < boardBounds.top+cellWidth*(i+1)){
        return({y:i,x:j})
      }
    }
  }
}

function getPiece(pos){
  return cellGrid[pos.y][pos.x]
}

function copyPiece(piece){
  return {type: piece.type, color: piece.color, pos: {x: piece.x, y: piece.y}}
}

function attemptMove(piece, destination){
  startingCell = {x: piece.pos.x, y: piece.pos.y}

  movedPiece = copyPiece(piece)
  movedPiece.pos = {x: destination.x, y: destination.y}

  cellGrid[startingCell.y][startingCell.x] = null
  cellGrid[destination.y][destination.x] = movedPiece
  drawBoard()
}

//^ from https://www.w3schools.com/howto/howto_js_draggable.asp

//TODO: resizeability