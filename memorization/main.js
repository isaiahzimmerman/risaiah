document.addEventListener('keydown', function (event) {
    if(gameStarted) {
        pressKey(event.key)
    }
});

gameStarted = false
currentWord = 0;
words=[]
words2=[]
correct = 0
results = ''

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

function getWords2(){
    words2 = document.getElementById('toMemorize2').value;
    return words2;
    
}


function genGame(){
    words = getWords()
    gameStarted = true
    updateWord()
    hideElement("startField")
    showElement("gameArea")
}

function genGame2(){
    words2 = getWords2();
    hideElement("startScreen");
    hideElement('retry2');
    hideElement('goBack2');
    showElement('checkButton');
    showElement("gameArea2");
}

function retry(){
    currentWord = 0
    correct = 0
    gameStarted = true
    updateWord()
    results = ""
    hideElement("results")
    hideElement("startField")
    showElement("gameArea")

    //full word stuff
    hideElement("solutionBox");
    hideElement('retry2');
    hideElement('goBack2');
    showElement('checkButton')
    document.getElementById('guessBox').value="";


}


function restart(){
    results = ""
    gameStarted = false
    currentWord = 0;
    words=[]
    correct = 0
    showElement("startField")
    hideElement("results")
}

function restart2(){
    words2=[];
    hideElement('gameArea2');
    hideElement('solutionBox');
    showElement("startScreen");
    
    
}

function finishGame(){
    gameStarted = false
    console.log('done!')
    hideElement("gameArea")
    showElement("results")
    results += "<div>("+correct+"/"+(currentWord-1)+" correct) <button onclick='retry()'>Retry</button> <button onclick='restart()'>Go Back</button></div>"
    document.getElementById("currentWord").style.color = "black"
    document.getElementById("results").innerHTML = results
}

function pressKey(key){
    if(!document.getElementById('gameArea').hidden){
        key = key.toLowerCase()
        if(currentWord < words.length){
            if(key==words[currentWord].toLowerCase().substring(0,1)){
                document.getElementById("currentWord").style.color = "var(--theme-green-0)"
                results += "<span class='green'>"+words[currentWord]+"</span> "
                correct++
            }else{
                document.getElementById("currentWord").style.color = "var(--theme-red-0)"
                results += "<span class='red'>"+words[currentWord]+"</span> "
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
That hem hath holpen whan that they were seeke.

Bifel that in that sesoun on a day
In Southwerk at the Tabard, as I lay
Redy to wenden on my pilgrymage
To Caunterbury with ful devout corage,
At nyght was come into that hostelrye
Wel nyne- and- twenty in a compaignye
Of sondry folk by aventure y-falle
In felaweshipe, and pilgrymages were they alle
That toward Caunterbury wolden ryde.
The chambres and the stables weren wyde,
And wel we weren esed atte beste;
And shortly, whan the sonne was to reste,
So hadde I spoken with hem evrichon
That I was of hir felaweshipe anon;
And made forward erly for to ryse
To take oure wey ther as I yow devyse.

But, nathelees, whil I have tyme and space,
Er that I ferther in this tale pace,
Me thynketh it acordant to resoun
To telle yow al the condicioun
Of ech of hem so as it semed me,
And whiche they weren, and of what degree,
And eek in what array they were inne;
And at a kynght than wol I first bigynne.`
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
        break

        case 'James1ESV.txt':
            newText = `James, a servant of God and of the Lord Jesus Christ,

To the twelve tribes in the Dispersion:

Greetings.

Count it all joy, my brothers, when you meet trials of various kinds, for you know that the testing of your faith produces steadfastness. And let steadfastness have its full effect, that you may be perfect and complete, lacking in nothing.`

// If any of you lacks wisdom, let him ask God, who gives generously to all without reproach, and it will be given him. 6 But let him ask in faith, with no doubting, for the one who doubts is like a wave of the sea that is driven and tossed by the wind. 7 For that person must not suppose that he will receive anything from the Lord; 8 he is a double-minded man, unstable in all his ways.

// 9 Let the lowly brother boast in his exaltation, 10 and the rich in his humiliation, because like a flower of the grass[c] he will pass away. 11 For the sun rises with its scorching heat and withers the grass; its flower falls, and its beauty perishes. So also will the rich man fade away in the midst of his pursuits.

// 12 Blessed is the man who remains steadfast under trial, for when he has stood the test he will receive the crown of life, which God has promised to those who love him. 13 Let no one say when he is tempted, “I am being tempted by God,” for God cannot be tempted with evil, and he himself tempts no one. 14 But each person is tempted when he is lured and enticed by his own desire. 15 Then desire when it has conceived gives birth to sin, and sin when it is fully grown brings forth death.

// Do not be deceived, my beloved brothers. 17 Every good gift and every perfect gift is from above, coming down from the Father of lights, with whom there is no variation or shadow due to change.[d] 18 Of his own will he brought us forth by the word of truth, that we should be a kind of firstfruits of his creatures.

//Know this, my beloved brothers: let every person be quick to hear, slow to speak, slow to anger; for the anger of man does not produce the righteousness of God. Therefore put away all filthiness and rampant wickedness and receive with meekness the implanted word, which is able to save your souls.

//But be doers of the word, and not hearers only, deceiving yourselves. For if anyone is a hearer of the word and not a doer, he is like a man who looks intently at his natural face in a mirror. For he looks at himself and goes away and at once forgets what he was like. But the one who looks into the perfect law, the law of liberty, and perseveres, being no hearer who forgets but a doer who acts, he will be blessed in his doing.

//If anyone thinks he is religious and does not bridle his tongue but deceives his heart, this person's religion is worthless. Religion that is pure and undefiled before God the Father is this: to visit orphans and widows in their affliction, and to keep oneself unstained from the world.


    }
    document.getElementById("toMemorize").value = newText;
    document.getElementById("toMemorize2").value = newText

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

function showSolution(){
    
    document.getElementById('solutionBox').value=words2;
    showElement('solutionBox');
    hideElement('checkButton');
    showElement('retry2');
    showElement('goBack2');

}