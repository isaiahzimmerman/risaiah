

let xturn= true
let gameOver= false


let winner= document.getElementById("winner")
let board= [
    '','','',
    '','','',
    '','','',
]

var boxZero= document.getElementById("box0")
var boxOne= document.getElementById("box1")
var boxTwo= document.getElementById("box2")
var boxThree= document.getElementById("box3")
var boxFour= document.getElementById("box4")
var boxFive= document.getElementById("box5")
var boxSix= document.getElementById("box6")
var boxSeven= document.getElementById("box7")
var boxEight= document.getElementById("box8")


function winCheck(){
    //Top Row Horizontal
    if((board[0]===board[1] && board[0]===board[2])){
        if(board[0]==="X"){
            winner.innerHTML="X Wins!"
            gameOver=true
            boxZero.style.color="#B1717D"
            boxOne.style.color="#B1717D"
            boxTwo.style.color="#B1717D"
        }else if(board[0]==="O"){
            winner.innerHTML="O Wins!"
            gameOver=true
            boxZero.style.color="#B1717D"
            boxOne.style.color="#B1717D"
            boxTwo.style.color="#B1717D"
        }
        
    }
    //Middle Row Horizontal
    if((board[3]===board[4] && board[3]===board[5])){
        if(board[3]==="X"){
            winner.innerHTML="X Wins!"
            gameOver=true
            boxThree.style.color="#B1717D"
            boxFour.style.color="#B1717D"
            boxFive.style.color="#B1717D"
        }else if(board[3]==="O"){
            winner.innerHTML="O Wins!"
            gameOver=true
            boxThree.style.color="#B1717D"
            boxFour.style.color="#B1717D"
            boxFive.style.color="#B1717D"
        }

    }
    //Bottom Row Horizontal
    if((board[6]===board[7] && board[6]===board[8])){
        if(board[6]==="X"){
            winner.innerHTML="X Wins!"
            gameOver=true
            boxSix.style.color="#B1717D"
            boxSeven.style.color="#B1717D"
            boxEight.style.color="#B1717D"            
        }else if(board[6]==="O"){
            winner.innerHTML="O Wins!"
            gameOver=true
            boxSix.style.color="#B1717D"
            boxSeven.style.color="#B1717D"
            boxEight.style.color="#B1717D"             
        }

    }
    //Left Row Vertical
    if((board[0]===board[3] && board[0]===board[6])){
        if(board[0]==="X"){
            winner.innerHTML="X Wins!"
            gameOver=true
            boxZero.style.color="#B1717D"
            boxThree.style.color="#B1717D"
            boxSix.style.color="#B1717D"             
        }else if(board[0]==="O"){
            winner.innerHTML="O Wins!"
            gameOver=true
            boxZero.style.color="#B1717D"
            boxThree.style.color="#B1717D"
            boxSix.style.color="#B1717D"    
        }

    }
    //Middle Row Vertical
    if((board[1]===board[4] && board[1]===board[7])){
        if(board[1]==="X"){
            winner.innerHTML="X Wins!"
            gameOver=true
            boxOne.style.color="#B1717D"
            boxFour.style.color="#B1717D"
            boxSeven.style.color="#B1717D"    
        }else if(board[1]==="O"){
            winner.innerHTML="O Wins!"
            gameOver=true
            boxOne.style.color="#B1717D"
            boxFour.style.color="#B1717D"
            boxSeven.style.color="#B1717D"  
        }

    }
    //Right Row Vertical
    if((board[2]===board[5] && board[2]===board[8])){
        if(board[2]==="X"){
            winner.innerHTML="X Wins!"
            gameOver=true
            boxTwo.style.color="#B1717D"
            boxFive.style.color="#B1717D"
            boxEight.style.color="#B1717D"  
        }else if(board[2]==="O"){
            winner.innerHTML="O Wins!"
            gameOver=true
            boxTwo.style.color="#B1717D"
            boxFive.style.color="#B1717D"
            boxEight.style.color="#B1717D"  
        }

    }
    //Top Left - Bottom Right
    if((board[0]===board[4] && board[0]===board[8])){
        if(board[0]==="X"){
            winner.innerHTML="X Wins!"
            gameOver=true
            boxZero.style.color="#B1717D"
            boxFour.style.color="#B1717D"
            boxEight.style.color="#B1717D"  
        }else if(board[0]==="O"){
            winner.innerHTML="O Wins!"
            gameOver=true
            boxZero.style.color="#B1717D"
            boxFour.style.color="#B1717D"
            boxEight.style.color="#B1717D" 
        }

    }
    //Top Right- Bottom Left
    if((board[2]===board[4] && board[2]===board[6])){
        if(board[2]==="X"){
            winner.innerHTML="X Wins!"
            gameOver=true
            boxTwo.style.color="#B1717D"
            boxFour.style.color="#B1717D"
            boxSix.style.color="#B1717D" 
        }else if(board[2]==="O"){
            winner.innerHTML="O Wins!"
            gameOver=true
            boxTwo.style.color="#B1717D"
            boxFour.style.color="#B1717D"
            boxSix.style.color="#B1717D"    
        }

    }
   
}
function drawBoard(){
    for (let i=0; i<9; i++){
        document.getElementById("box" + i).innerHTML= board[i];

    }
}
function turn(number){
    let boxnumber= document.getElementById("box"+number)
    if (boxnumber.innerHTML== "" && gameOver==false){

        if(xturn){
            board[number]="X";
        }else {
            board[number]="O";
        }
        xturn =! xturn
        drawBoard()
        winCheck()
    }
}
function restart(){
    if(gameOver==true){
        //clears board
        board= [
            '','','',
            '','','',
            '','','',
        ];

        //resets colors
        boxZero.style.color="#1A2930"
        boxOne.style.color="#1A2930"
        boxTwo.style.color="#1A2930"
        boxThree.style.color="#1A2930"
        boxFour.style.color="#1A2930"
        boxFive.style.color="#1A2930"
        boxSix.style.color="#1A2930"
        boxSeven.style.color="#1A2930"
        boxEight.style.color="#1A2930"

        //winner message remove
        winner.innerHTML=""

        //restarts game to make it playable
        gameOver=false

        drawBoard()
    }



}