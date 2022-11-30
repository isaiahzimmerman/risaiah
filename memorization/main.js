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
function getWords(){
    toMemorize = document.getElementById("toMemorize").value.replace(/(\r\n|\n|\r)/gm, " ");
    words = toMemorize.split(" ")
    words.unshift('?')
    return words.filter(element => {
        return element !== '';
    });
}

function genGame(){
    words = getWords()
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

function restart(){
    document.getElementById("results").innerHTML = ""
    gameStarted = false
    currentWord = 0;
    words=[]
    correct = 0
    showElement("startField")
    hideElement("results")
}

function finishGame(){
    gameStarted = false
    console.log('done!')
    hideElement("gameArea")
    showElement("results")
    document.getElementById("results").innerHTML += "<span>("+correct+"/"+(currentWord-1)+" correct)</span> <button onclick='retry()'>Retry</button> <button onclick='restart()'>Go Back</button>"
    document.getElementById("currentWord").style.color = "black"
}

function pressKey(key){
    if(!document.getElementById('gameArea').hidden){
        key = key.toLowerCase()
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
    
}

function readTextFile(file)
{
    fetch(file)
    .then(response => response.text())
    .then(text => {
        console.log(text)
        return text.toString()
    })
}

function replaceText(input){
    newText = ''
    switch(input){
        case 'CTPrologue.txt':
            newText = `Whan that Aprille with his shoures soote,
The droghte of March hath perced to the roote,
And bathed every veyne in swich licóur
Of which vertú engendred is the flour;
Whan Zephirus eek with his swete breeth
Inspired hath in every holt and heeth
The tendre croppes, and the yonge sonne
Hath in the Ram his halfe cours y-ronne,
And smale foweles maken melodye,
That slepen al the nyght with open eye,
So priketh hem Natúre in hir corages,
Thanne longen folk to goon on pilgrimages,
And palmeres for to seken straunge strondes,
To ferne halwes, kowthe in sondry londes;
And specially, from every shires ende
Of Engelond, to Caunterbury they wende,
The hooly blisful martir for to seke,
That hem hath holpen whan that they were seeke.`
        break
        case 'OCOCE1-2.txt':
            newText = `O come, O come, Emmanuel,
And ransom captive Israel;
That mourns in lonely exile here,
Until the Son of God appear.
Rejoice! Rejoice! Emmanuel
Shall come to thee, O Israel.

O come, Thou Rod of Jesse, free
Thine own from Satan's tyranny;
From depths of hell Thy people save,
And give them victory o'er the grave.
Rejoice! Rejoice! Emmanuel
Shall come to thee, O Israel.`
    }
    document.getElementById("toMemorize").value = newText

}

function drawKeyboard(){
    document.getElementById('showKeyboard').checked = false
    keyboardDiv = ''
    keys = [
        ['Q','W','E','R','T','Y','U','I','O','P'],
        ['A','S','D','F','G','H','J','K','L'],
        ['Z','X','C','V','B','N','M']
    ]
    keys.forEach(function(element, index){
        keyboardDiv += '<div>'
        element.forEach(function (element2, index2) {
            keyboardDiv += `<div class="key" onclick="pressKey('`+element2+`')">`+element2+`</div>`
        })
        keyboardDiv += '</div>'
    })
    document.getElementById('keyboard').innerHTML = keyboardDiv
}

function updateKeyboard(){
    document.getElementById('keyboardHider').hidden = !document.getElementById('showKeyboard').checked
}