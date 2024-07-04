// const Ably = require('ably');

// async function publishSubscribe() {

//   // Connect to Ably with your API key
//   const ably = new Ably.Realtime("")
//   ably.connection.once("connected", () => {
//     console.log("Connected to Ably!")
//   })

//   // Create a channel called 'get-started' and register a listener to subscribe to all messages with the name 'first'
//   const channel = ably.channels.get("get-started")
//   await channel.subscribe("first", (message) => {
//     console.log("Message received: " + message.data)
//   });

//   // Publish a message with the name 'first' and the contents 'Here is my first message!'
//   await channel.publish("first", "Here is my first message!")

//   // Close the connection to Ably after a 5 second delay
//   setTimeout(async () => {
//     // ably.connection.close();
//     //   await ably.connection.once("closed", function () {
//     //     console.log("Closed the connection to Ably.")
//     //   });
//   }, 5000);
// }

// publishSubscribe();

API_KEY = null

let ably
let channel

questionPoints = 0

let gameInfo = {
    familyScore1: 0,
    familyScore2: 0,
    view: null,
}

var wrongSound
var rightSound


async function startAbly(){
    ably = new Ably.Realtime(API_KEY);
    ably.connection.once("connected", () => {
        console.log("Connected to Ably!")
    })
    channel = ably.channels.get("get-started")
    await channel.subscribe("first", (message) => {
        console.log(message.data.property+" : " + message.data.value)
        if(message.data.property == "question"){
            drawQuestion(message.data.value)
        }else if(message.data.property == "x"){
            if(gameInfo.view=="questions"){
                showFFXs(parseInt(message.data.value), 1)
            }
        }else if(message.data.property=="sound"){
            if(gameInfo.view=="questions"){
                if(message.data.value=="right"){
                    console.log("rigjt")
                    rightSound.play()
                }
            }
        }else{
            document.getElementById(message.data.property).innerHTML = message.data.value
        }
    });

    rightSound = new Howl({
        src: ['assets/right.mp3']
    });
    wrongSound = new Howl({
        src: ['assets/wrong.mp3']
    });
}

async function sendUpdate(property, value){
    await channel.publish("first", {property: property, value: value})
}

function sendQuestionUpdate(){
    dropdownChoice = document.getElementById('questionDropdown').value
    questionPoints = 0
    if(dropdownChoice != "none"){
        currentQuestion = questions[document.getElementById('questionDropdown').value]
        for(i=0; i<currentQuestion.answers.length; i++){
            currentQuestion.answers[i].answered = document.getElementById(`cpShowAnswerBox${i}`).checked
            currentQuestion.answers[i].addToScore = document.getElementById(`cpAddToScoreBox${i}`).checked
            if(document.getElementById(`cpAddToScoreBox${i}`).checked){
                questionPoints += currentQuestion.answers[i].points
            }
        }
        sendUpdate('question', currentQuestion)
        sendUpdate('questionsScore', questionPoints)
        
        if(document.getElementById("playRightAnswerSound").checked){
            sendUpdate('sound', 'right')

            document.getElementById("playRightAnswerSound").outerHTML = `<input type="checkbox" name="playRightAnswerSound" id="playRightAnswerSound">`
        }
        
    }else{
        sendUpdate('question', {answers: []})
        sendUpdate('questionsScore', 0)
    }
    sendUpdate('cphypotheticalScore1', ` + ${questionPoints} = ${gameInfo.familyScore1 + questionPoints}`)
    sendUpdate('cphypotheticalScore2', ` + ${questionPoints} = ${gameInfo.familyScore2 + questionPoints}`)
}

function chooseView(view){
    document.getElementById("startOptions").style.display = "none"
    document.getElementById(view).style.display = "flex"
    initializeControlPanel()
    drawQuestion({answers: []})
    gameInfo.view = view
}

function updateNameByID(team, id){
    sendUpdate(`familyName${team}`, document.getElementById(id).value)
    sendUpdate(`cpfamilyName${team}`, document.getElementById(id).value)
    document.getElementById(id).value = ""
}

function updateScoreByID(team, id){
    sendUpdate(`familyScore${team}`, document.getElementById(id).value)
    gameInfo[`familyScore${team}`] = parseInt(document.getElementById(id).value)
    sendUpdate(`cpfamilyScore${team}`, document.getElementById(id).value)
    sendUpdate(`cphypotheticalScore${team}`, ` + ${questionPoints} = ${gameInfo[`familyScore${team}`] + questionPoints}`)
    
    document.getElementById(id).value = ""
}

function registerAPIKey(){
    API_KEY = document.getElementById("apiKeyInput").value
    try{
        startAbly()
        document.getElementById("startOptions").style.display = "unset"
        document.getElementById("apiKeyContainer").style.display = "none"
    }catch (e){
        console.log(e)
    }
}

function cpupdateQuestion(){
    cpQuestionHTML = ""
    questionSelection = document.getElementById("questionDropdown").value
    if(questionSelection == "none"){

    }else if(questions[questionSelection] == null){

    }else{
        currentQuestion = questions[questionSelection]
        currentQuestion.answers.forEach(function(element, index) {
            cpQuestionHTML += `<div>${element.answer}: ${element.points} points. Show answer? <input type="checkbox" id="cpShowAnswerBox${index}" ${element.answered ? "checked" : ""}> Add to score? <input type="checkbox" id="cpAddToScoreBox${index}" ${element.addToScore != null && element.addToScore == true ? "checked" : ""}></div>`
        });
    }
    document.getElementById("cpQuestion").innerHTML = cpQuestionHTML
}

function initializeControlPanel(){
    questionDropdownHTML = "<option value='none'>none</option>"
    questions.forEach(function(element,index) {
        questionDropdownHTML += `<option value=${index}>${element.question}</option>`
    });
    document.getElementById("questionDropdown").innerHTML = questionDropdownHTML
    document.getElementById("questionDropdown").onchange = cpupdateQuestion;
}

function drawQuestion(question){
    q = 0
    for(i=1; i<=8; i++){
        numAnswers = question.answers.length
        questionHTML = ""
        if((i<=4 && Math.ceil(numAnswers/2) - (i) < 0) || (i<=8 && i>=5 && Math.floor(numAnswers/2) - (i - 4) < 0)){
            questionHTML += `<div class="question unansweredQuestion" id="question${i}"></div>`
        }else 
        {
            element = question.answers[q]
            if(element.answered){
                questionHTML += `<div class="question answeredQuestion" id="question${i}">
                    <div class="answeredQuestionTextContainer"><div class="answeredQuestionText" id="answeredQuestionText${i}">${element.answer}</div></div>
                    <div class="answeredQuestionPoints">${element.points}</div>
                </div>`
            }else{
                questionHTML += `<div class="question unansweredQuestion" id="question${i}"><div class="unansweredQuestionNum">${q+1}</div></div>`
            }
            q++
        }
        document.getElementById(`question${i}`).outerHTML = questionHTML
    };
    
    q=0
    numAnswers = question.answers.length
    for(i=1; i<=numAnswers; i++){
        element = question.answers[q]
        if(element.answered){
            aqtbcr = document.getElementById(`answeredQuestionText${i}`).getBoundingClientRect()
            if(aqtbcr.width/aqtbcr.height > 6.603){
                document.getElementById(`answeredQuestionText${i}`).style.transform = `scale(${6.603/(aqtbcr.width/aqtbcr.height)}, 1)`
                document.getElementById(`answeredQuestionText${i}`).style.marginLeft = `${(get1vh() - (1-6.603/(aqtbcr.width/aqtbcr.height))*aqtbcr.width/2)/get1vh()}vh`
            }
        }
        q++
    };
}

function get1vh(){
    return document.getElementById("vh1").getBoundingClientRect().height
}

function showFFXs(amount, seconds){
    xsHTML = ""
    for(i=0; i<amount; i++){
        xsHTML += `<img class="familyFeudX" src="assets/familyFeudX.png" alt="">`
    }
    document.getElementById("wrongAnswers").innerHTML = xsHTML
    wrongSound.play()
    setTimeout(() => {
        document.getElementById("wrongAnswers").innerHTML = ""
    }, seconds * 1000);
}