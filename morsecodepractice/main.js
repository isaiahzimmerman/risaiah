score=0

if(document.cookie == ''){
    document.cookie = "highScore02=0; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/morsecodepractice;";
}
let highScore = document.cookie;
let highScoreValue = parseInt(highScore.substring(12), 10)

morseMode = true
mode = [0,1]

function updateMode() {
    if(document.getElementById('input-type').value == 'standard') {
        newMode = true
    } else {
        newMode = false
    }
    
    if(morseMode != newMode){
        morseMode = newMode
        if(morseMode){
            mode = [0,1]
        } else {
            mode = [1,0]
        }
        newLetter()
    }
}

function updateHighScore() {
    document.getElementById('highScore').innerHTML = 'High Score: '+highScoreValue
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

document.addEventListener('keydown', function (event) {
    console.log(event.key)
    if(event.key == 'Enter') {
        guess(document.getElementById('textBox').value)
    }
});

let morseAlphabet = [['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],['.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..']]

letter = 0

function newLetter() {
    letter = getRandomInt(26)
    document.getElementById('problem').innerHTML = morseAlphabet[mode[0]][letter]
    document.getElementById('textBox').value = ''
}

function guess(value) {
    console.log('guess '+value+', correct '+morseAlphabet[mode[1]][letter])
    if(value == morseAlphabet[mode[1]][letter]){
        score+=1
        newLetter()
        if(score>highScoreValue){
            highScoreValue = score
            document.cookie = "highScore02="+highScoreValue+"; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/morsecodepractice;"
            updateHighScore()
        }
        console.log('u right')
    } else if(value != '') {
        score=0
        window.alert("Sorry, that's wrong. Correct answer is '"+morseAlphabet[mode[1]][letter]+"'")
        newLetter()
        console.log('u rong')
    }
    document.getElementById('score').innerHTML = 'Score: '+score.toString()
}