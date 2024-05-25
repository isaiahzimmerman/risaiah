cellGrid=[]

function initializeCellGrid(){
  for(i=0;i<8;i++){
    cellGrid.push([].fill(null, 0, 7))
    
    for(j=0;j<8;j++){
      if(i==0){
        if(j==0 || j==7){
          cellGrid[i][j] = {type: "rook", color: "white"}
          cellGrid[i][j].pos = {x:i,y:j}
        }else if(j==1 || j==6){
          cellGrid[i][j] = {type: "knight", color: "white"}
          cellGrid[i][j].pos = {x:i,y:j}
        }else if(j==2 || j==5){
          cellGrid[i][j] = {type: "bishop", color: "white"}
          cellGrid[i][j].pos = {x:i,y:j}
        }else if(j==3){
          cellGrid[i][j] = {type: "king", color: "white"}
          cellGrid[i][j].pos = {x:i,y:j}
        }else if(j==4){
          cellGrid[i][j] = {type: "queen", color: "white"}
          cellGrid[i][j].pos = {x:i,y:j}
        }
      }else if(i==1){
        cellGrid[i][j] = {type: "pawn", color: "white"}
        cellGrid[i][j].pos = {x:i,y:j}
      }else if(i==6){
        cellGrid[i][j] = {type: "pawn", color: "black"}
        cellGrid[i][j].pos = {x:i,y:j}
      }else if(i==7){
        if(j==0 || j==7){
          cellGrid[i][j] = {type: "rook", color: "black"}
          cellGrid[i][j].pos = {x:i,y:j}
        }else if(j==1 || j==6){
          cellGrid[i][j] = {type: "knight", color: "black"}
          cellGrid[i][j].pos = {x:i,y:j}
        }else if(j==2 || j==5){
          cellGrid[i][j] = {type: "bishop", color: "black"}
          cellGrid[i][j].pos = {x:i,y:j}
        }else if(j==3){
          cellGrid[i][j] = {type: "king", color: "black"}
          cellGrid[i][j].pos = {x:i,y:j}
        }else if(j==4){
          cellGrid[i][j] = {type: "queen", color: "black"}
          cellGrid[i][j].pos = {x:i,y:j}
        }
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
          boardHTML+= `<div id="piece${i*8+j}" class="piece ${currentPiece.color}Piece">${currentPiece.type}</div>` 
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

  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    elmntBounds = elmnt.getBoundingClientRect()
    startingCell = getClosestCell({x: elmntBounds.x, y: elmntBounds.y})
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = e.clientX - pos3;
    pos2 = e.clientY - pos4;
    // set the element's new position:
    // console.log(elmnt)

    //objective position of cell top = o
    //pos - o
    elmnt.style.top = (pos2) + "px";
    elmnt.style.left = (pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;

    elmntBounds = elmnt.getBoundingClientRect()
    closestCell = getClosestCell({x: elmntBounds.x, y: elmntBounds.y})
    cellGrid[closestCell.y][closestCell.x] = cellGrid[startingCell.y][startingCell.x]
    cellGrid[startingCell.y][startingCell.x] = null
    drawBoard()
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

//^ from https://www.w3schools.com/howto/howto_js_draggable.asp

//TODO: resizeability