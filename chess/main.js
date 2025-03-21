cellGrid=[]
boardSize = {x: 8, y: 8}
whiteMove = true

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
  highlightHTML = ""
  for(i=0;i<8;i++){
    boardHTML += `<div class="cellRow">`
    highlightHTML+=`<div class="highlightRow">`
    for(j=0;j<8;j++){
      boardHTML += `<div class="cell ${(i+j)%2==1 ? "blackCell" : "whiteCell"}" id="cell${j}_${i}">`
      currentPiece = cellGrid[i][j]

      if(currentPiece != null){
          boardHTML+= `<div id="piece${i*8+j}" class="piece ${currentPiece.color}Piece"><img class="pieceImg" src="assets/pieces/${currentPiece.color}/${currentPiece.type}.png"></div>` 
      }

      boardHTML += `</div>`
      highlightHTML+=`<div class="highlight" id="highlight${j}_${i}"></div>`
    }
    boardHTML += `</div>`
    highlightHTML += `</div>`
  }
  document.getElementById("board").innerHTML=boardHTML
  document.getElementById("highlights").innerHTML=highlightHTML

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
    startingCell = getClosestCell({x: pos3, y: pos4})

    if(cellGrid[startingCell.y][startingCell.x].color == "white" && whiteMove || cellGrid[startingCell.y][startingCell.x].color == "black" && !whiteMove){
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
      elmnt.style.zIndex = "2"
      highlightMoves(getValidMoves(cellGrid[startingCell.y][startingCell.x]))
    }


    // console.log(getValidMoves(cellGrid[startingCell.y][startingCell.x]))
    

    // highlightMoves(getValidMoves(cellGrid[startingCell.y][startingCell.x])) 
    //TODO: add back
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
    var closestCell = getClosestCell(getCenter(elmntBounds))
    startingCell = getClosestCell({x: pos3, y: pos4})

    // console.log(closestCell, startingCell)
    // if(closestCell.x != startingCell.x && closestCell.y != startingCell.y){
      attemptMove(cellGrid[startingCell.y][startingCell.x], closestCell)
    // }
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

  console.log((startingCell.x == destination.x && startingCell.y == destination.y))
  if(startingCell.x != destination.x || startingCell.y != destination.y)
    whiteMove = !whiteMove

  movedPiece = copyPiece(piece)
  movedPiece.pos = {x: destination.x, y: destination.y}

  cellGrid[startingCell.y][startingCell.x] = null
  cellGrid[destination.y][destination.x] = movedPiece
  
  if(whiteMove){
    document.getElementById("turn").innerHTML = "white"
  }else{
    document.getElementById("turn").innerHTML = "black"
  }
  drawBoard()
}

function inBounds(pos){
  return (0 <= pos.x && pos.x < boardSize.x && 0 <= pos.y && pos.y < boardSize.y)
}

function isBlocked(pos){
  if(cellGrid[pos.y][pos.x] == null){return false}
  return cellGrid[pos.y][pos.x].color
}

function getMovesInOneDimension(dimension, distance){
  
}

function getValidMovesFromPattern(piece, pattern){
  vmfp = []
  if(pattern.type == "horizontal"){
    for(i = 1; i<=pattern.distance; i++){
      newPos = {x: piece.pos.x + i, y: piece.pos.y}
      if(!inBounds(newPos)){break}
      blocked = isBlocked(newPos)

      if(blocked){
        if(
          (blocked == "white" && pattern.canTake && piece.color == "black") ||
          (blocked == "black" && pattern.canTake && piece.color == "white")
        ){
          vmfp.push(newPos)
        }
        break
      }
      if(inBounds(newPos))
        vmfp.push(newPos)
    }
    for(i = -1; i>= -pattern.distance; i--){
      newPos = {x: piece.pos.x + i, y: piece.pos.y}
      if(!inBounds(newPos)){break}
      blocked = isBlocked(newPos)

      if(blocked){
        if(
          (blocked == "white" && pattern.canTake && piece.color == "black") ||
          (blocked == "black" && pattern.canTake && piece.color == "white")
        ){
          vmfp.push(newPos)
        }
        break
      }
      if(inBounds(newPos))
        vmfp.push(newPos)
    }
  }else if(pattern.type == "vertical"){
    for(i = -1; i>= -pattern.distance; i--){
      newPos = {x: piece.pos.x, y: piece.pos.y + i}
      if(!inBounds(newPos)){break}
      blocked = isBlocked(newPos)

      if(blocked){
        if(
          (blocked == "white" && pattern.canTake && piece.color == "black") ||
          (blocked == "black" && pattern.canTake && piece.color == "white")
        ){
          vmfp.push(newPos)
        }
        break
      }
      if(inBounds(newPos))
        vmfp.push(newPos)
    }
    for(i = 1; i<= pattern.distance; i++){
      newPos = {x: piece.pos.x, y: piece.pos.y + i}
      if(!inBounds(newPos)){break}
      blocked = isBlocked(newPos)

      if(blocked){
        if(
          (blocked == "white" && pattern.canTake && piece.color == "black") ||
          (blocked == "black" && pattern.canTake && piece.color == "white")
        ){
          vmfp.push(newPos)
        }
        break
      }
      if(inBounds(newPos))
        vmfp.push(newPos)
    }
  }else if(pattern.type == "vertical+"){
    if(piece.color=="white"){
      for(i = 1; i <= pattern.distance; i++){
        newPos = {x: piece.pos.x, y: piece.pos.y + i}
        if(!inBounds(newPos)){break}
        blocked = isBlocked(newPos)
  
        if(blocked){
          if(
            (blocked == "white" && pattern.canTake && piece.color == "black") ||
            (blocked == "black" && pattern.canTake && piece.color == "white")
          ){
            vmfp.push(newPos)
          }
          break
        }
        if(inBounds(newPos))
          vmfp.push(newPos)
      }
    }else{
      for(i = 1; i <= pattern.distance; i++){
        newPos = {x: piece.pos.x, y: piece.pos.y - i}
        if(!inBounds(newPos)){break}
        blocked = isBlocked(newPos)
  
        if(blocked){
          if(
            (blocked == "white" && pattern.canTake && piece.color == "black") ||
            (blocked == "black" && pattern.canTake && piece.color == "white")
          ){
            vmfp.push(newPos)
          }
          break
        }
        if(inBounds(newPos))
          vmfp.push(newPos)
      }
      
    }
  }else if(pattern.type == "diagonal"){
    for(i = 1; i <= pattern.distance; i++){
      newPos = {x: piece.pos.x + i, y: piece.pos.y + i}
      if(!inBounds(newPos)){break}
      blocked = isBlocked(newPos)

      if(blocked){
        if(
          (blocked == "white" && pattern.canTake && piece.color == "black") ||
          (blocked == "black" && pattern.canTake && piece.color == "white")
        ){
          vmfp.push(newPos)
        }
        break
      }
      if(inBounds(newPos))
        vmfp.push(newPos)
    }
    for(i = 1; i <= pattern.distance; i++){
      newPos = {x: piece.pos.x - i, y: piece.pos.y + i}
      if(!inBounds(newPos)){break}
      blocked = isBlocked(newPos)

      if(blocked){
        if(
          (blocked == "white" && pattern.canTake && piece.color == "black") ||
          (blocked == "black" && pattern.canTake && piece.color == "white")
        ){
          vmfp.push(newPos)
        }
        break
      }
      if(inBounds(newPos))
        vmfp.push(newPos)
    }
    for(i = 1; i <= pattern.distance; i++){
      newPos = {x: piece.pos.x + i, y: piece.pos.y - i}
      if(!inBounds(newPos)){break}
      blocked = isBlocked(newPos)

      if(blocked){
        if(
          (blocked == "white" && pattern.canTake && piece.color == "black") ||
          (blocked == "black" && pattern.canTake && piece.color == "white")
        ){
          vmfp.push(newPos)
        }
        break
      }
      if(inBounds(newPos))
        vmfp.push(newPos)
    }
    for(i = 1; i <= pattern.distance; i++){
      newPos = {x: piece.pos.x - i, y: piece.pos.y - i}
      if(!inBounds(newPos)){break}
      blocked = isBlocked(newPos)

      if(blocked){
        if(
          (blocked == "white" && pattern.canTake && piece.color == "black") ||
          (blocked == "black" && pattern.canTake && piece.color == "white")
        ){
          vmfp.push(newPos)
        }
        break
      }
      if(inBounds(newPos))
        vmfp.push(newPos)
    }
  }else if(pattern.type == "diagonal+"){
    for(i = 1; i <= pattern.distance; i++){
      newPos = {x: piece.pos.x + 1, y: piece.pos.y + (piece.color =="black" ? i : -i)}
      if(!inBounds(newPos)){break}
      var blocked = isBlocked(newPos)
      if(!blocked && pattern.mustTake){break}
      if(blocked){
        if(
          (blocked == "white" && pattern.canTake && piece.color == "black") ||
          (blocked == "black" && pattern.canTake && piece.color == "white")
        ){
          vmfp.push(newPos)
        }
        break
      }
      if(inBounds(newPos))
        vmfp.push(newPos)
    }
    for(i = 1; i <= pattern.distance; i++){
      newPos = {x: piece.pos.x - 1, y: piece.pos.y + (piece.color =="black" ? i : -i)}
      if(!inBounds(newPos)){break}
      var blocked = isBlocked(newPos)
      if(!blocked && pattern.mustTake){break}

      if(blocked){
        if(
          (blocked == "white" && pattern.canTake && piece.color == "black") ||
          (blocked == "black" && pattern.canTake && piece.color == "white")
        ){
          vmfp.push(newPos)
        }
        break
      }
      if(inBounds(newPos))
        vmfp.push(newPos)
    }
  }
  return vmfp
  //still need to test validity of moves
  //todo: remove highlight from cell of piece
  //todo: remove out of bounds elements
}

function mergeMoves(moves1, moves2){
  moves2.forEach(element => {
    if(!(moves1.indexOf(element) >= 0)){
      moves1.push(element)
    }
  });

  return moves1
}

function getValidMoves(piece){
  x = piece.pos.x
  y = piece.pos.y
  if(piece.type=="king"){
    movePatterns = [
      {type: "horizontal", distance: 1, jumps: false, canTake: true, mustTake: false},
      {type: "vertical", distance: 1, jumps: false, canTake: true, mustTake: false},
      {type: "diagonal", distance: 1, jumps: false, canTake: true, mustTake: false},
    ]
  }
  else if(piece.type=="pawn"){
    if(piece.color=="black" && piece.pos.y==6 || piece.color=="white" && piece.pos.y==1){
      movePatterns = [
        {type: "vertical+", distance: 2, jumps: false, canTake: false, mustTake: false},
        {type: "diagonal+", distance: 1, jumps: false, canTake: true, mustTake: true},
      ]
    }else{
      movePatterns = [
        {type: "vertical+", distance: 1, jumps: false, canTake: false, mustTake: false},
        {type: "diagonal+", distance: 1, jumps: false, canTake: true, mustTake: true},
      ]
    }
  }else if(piece.type=="rook"){
    movePatterns = [
      {type: "vertical", distance: 7, jumps: false, canTake: true, mustTake: false},
      {type: "horizontal", distance: 7, jumps: false, canTake: true, mustTake: false},
    ]
  }else if(piece.type=="bishop"){
    movePatterns = [
      {type: "diagonal", distance: 7, jumps: false, canTake: true, mustTake: false}
    ]
  }else if(piece.type=="queen"){
    movePatterns = [
      {type: "vertical", distance: 7, jumps: false, canTake: true, mustTake: false},
      {type: "horizontal", distance: 7, jumps: false, canTake: true, mustTake: false},
      {type: "diagonal", distance: 7, jumps: false, canTake: true, mustTake: false}
    ]
  }

  validMoves = []
    for(h=0; h<movePatterns.length; h++){
      vmfp = getValidMovesFromPattern(piece, movePatterns[h])
      validMoves = mergeMoves(validMoves, vmfp)
    }
    return(validMoves)
}

function highlightMoves(moves){
  moves.forEach(element => {
    console.log(`highlight${element.x}_${element.y}`)
    document.getElementById(`highlight${element.x}_${element.y}`).style.backgroundColor = 'green'
  });
}

//^ from https://www.w3schools.com/howto/howto_js_draggable.asp

//TODO: resizeability