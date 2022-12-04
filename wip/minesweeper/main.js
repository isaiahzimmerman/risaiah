function fillDiv(){
    for(i=0; i<16; i++){
        for(j=0; j<16; j++){
            document.getElementById("gameContainer").innerHTML += ("<div class='cell'>"+i+" "+j+"</div>")
        }
    }
}