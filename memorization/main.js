document.addEventListener('keydown', function (event) {
    if(gameStarted) {
        pressKey(event.key)
    }
});

gameStarted = false
currentWord = 0;
words=[]
correct = 0

function hideElement(id){
    document.getElementById(id).hidden = true
}

function showElement(id){
    document.getElementById(id).hidden = false
}

function updateWord(){
    document.getElementById("currentWord").innerHTML = words[currentWord]
    currentWord++
}

function genGame(){
    toMemorize = document.getElementById("toMemorize").value.replace(/(\r\n|\n|\r)/gm, " ");
    words = toMemorize.split(" ")
    words.unshift('?')
    words = words.filter(element => {
        return element !== '';
    });
    gameStarted = true
    updateWord()
    hideElement("startField")
    showElement("gameArea")
}

function retry(){
    currentWord = 0
    correct = 0
    gameStarted = true
    updateWord()
    document.getElementById("results").innerHTML = ""
    hideElement("results")
    hideElement("startField")
    showElement("gameArea")
}

function finishGame(){
    gameStarted = false
    console.log('done!')
    hideElement("gameArea")
    showElement("results")
    document.getElementById("results").innerHTML += "<span>("+correct+"/"+(currentWord-1)+" correct)</span> <button onclick='retry()'>Retry</button>"
}

function pressKey(key){
    if(currentWord < words.length){
        if(key==words[currentWord].toLowerCase().substring(0,1)){
            document.getElementById("currentWord").style.color = "green"
            document.getElementById("results").innerHTML += "<span class='green'>"+words[currentWord]+"</span> "
            correct++
        }else{
            document.getElementById("currentWord").style.color = "red"
            document.getElementById("results").innerHTML += "<span class='red'>"+words[currentWord]+"</span> "
        }
        updateWord()
    }
    if(currentWord >= words.length)
        finishGame()
}