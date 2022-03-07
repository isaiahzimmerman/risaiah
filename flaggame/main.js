function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

var currentFlagIndex;

//index
function playGame(mode){
    //gets gamemode html page
    var ajax = new XMLHttpRequest();
    ajax.open("GET", mode+".htm", false);
    ajax.send();
    document.getElementById('mainContainer').innerHTML = ajax.responseText;
    //changes class to custom class
    document.getElementById("mainContainer").classList.remove('mainContainer');
    document.getElementById("mainContainer").classList.add(mode);

    if(mode=='matching'){
        console.log(';ehl')
        document.getElementById('title').innerHTML = 'Match the Flag to its Country.'
        nextFlag()
    }
}

function gameOver() {
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "gameOver.htm", false);
    ajax.send();
    document.getElementById('mainContainer').innerHTML = ajax.responseText
}

//both
function changeFlag(flag){
    document.getElementById('flag').src = 'flags/'+flag+'.svg'
}

flags = [
    ['mexico'],
    ['guatemala'],
    ['honduras'],
    ['el_salvador'],
    ['nicaragua'],
    ['costa_rica'],
    ['panama'],
    ['cuba'],
    ['dominican_republic'],
    ['puerto_rico'],
    ['venezuela'],
    ['columbia'],
    ['ecuador'],
    ['peru'],
    ['bolivia'],
    ['paraguay'],
    ['chile'],
    ['argentina'],
    ['uruguay'],
    ['spain'],
    ['equatorial_guinea']
]

gameOrder = shuffle(flags)

//matching

var options;
currentFlagIndex = 0
var score=0;

function matchingDrawOptions(){
    options = []
    while(options.length < 4){
        var r = Math.floor(Math.random() * 21);
        if(options.indexOf(r) === -1) options.push(r);
    }

    if(options.indexOf(currentFlagIndex) === -1){
        options[getRandomInt(4)] = currentFlagIndex
    }

    for(i=0; i<4; i++){
        document.getElementById('matching_option'+(i)).innerHTML = flags[options[i]][0]
    }
}

function nextFlag(){
    changeFlag(gameOrder[currentFlagIndex][0])
    matchingDrawOptions()
}

function matchingGuessFlag(guess){
    if(currentFlagIndex > 20){
        document.getElementById("matching_score").innerHTML = "Score: "+score+'/'+(21)
        gameOver('Matching')
    }else{
        console.log (guess+' '+options.indexOf(currentFlagIndex-1))
        if(guess == options.indexOf(currentFlagIndex-1)){
            correctAnswer = true
        }else{
            correctAnswer = false
        }
        console.log(correctAnswer)
        if(correctAnswer){
            score++
        }
        document.getElementById("matching_score").innerHTML = "Score: "+score+'/'+(currentFlagIndex)
        nextFlag()
        currentFlagIndex += 1
    }
}
//typing