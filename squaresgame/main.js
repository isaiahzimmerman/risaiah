mainNumber = [
    '_','_','_','_'
]

filledSpaces = 0
answer = 0
level = 1
score = 0
oldproblem = 0
problem = 1

//cookie
document.cookie = "highScore=0; expires=Fri, 31 Dec 9999 23:59:59 GMT";
let highScore = document.cookie;
let highScoreValue = parseInt(highScore.substring(10), 10)

if(highScoreValue == 0){
  console.log('lol')
} else {
  console.log('noo')
}

document.addEventListener('keydown', function (event) {
    console.log(event.key)
    if(!isNaN(event.key/1)) {
        updateField(event.key, 'num')
    } else if(event.key === 'Enter' || event.key === 'Backspace') {
        updateField(event.key, 'not')
    }
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function updateField(key, type) {
    if(type == 'num'){
        if(filledSpaces<=3){
            mainNumber[3] = mainNumber[2]
            mainNumber[2] = mainNumber[1]
            mainNumber[1] = mainNumber[0]
            mainNumber[0] = key
            
            filledSpaces += 1
        }
    } else {
        if(key === 'Enter'){
            playerAnswer = 0
            mainNumber.forEach(function (item, index) {
                console.log(item, index);
                if(!isNaN(item/1)) {
                   playerAnswer += (item * 10**index)
                }
                console.log(playerAnswer)
            });
            if(playerAnswer == answer) {
                console.log('cottrfct!')
                mainNumber = ['_','_','_','_']
                filledSpaces = 0;
                
                score+=1
                if(score==10){
                    level+=1
                    score = 0
                }
                play(level)
                if(highScoreValue < ((level-1)*10+score)){
                  highScoreValue = (level-1)*10+score
                  document.cookie = 'highScore='+highScoreValue.toString()
                }
                
                document.getElementById("level").innerHTML = 'Level: ' + level.toString()
                document.getElementById("score").innerHTML = 'Score: ' + score.toString() + '/10'
            }else{
                console.log('rong')
                mainNumber = ['_','_','_','_']
                filledSpaces = 0
                score=0
                level=1
                
                window.alert("That's wrong! Correct answer is "+answer.toString()+".")
                
                play(1)
                
                document.getElementById("level").innerHTML = 'Level: ' + level.toString()
                document.getElementById("score").innerHTML = 'Score: ' + score.toString() + '/10'
            }
        } else if(key === 'Backspace'){
            mainNumber[0] = mainNumber[1]
            mainNumber[1] = mainNumber[2]
            mainNumber[2] = mainNumber[3]
            mainNumber[3] = '_'
            
            filledSpaces -= 1
        }
    }
    document.getElementById("input1").innerHTML = mainNumber[3];
    document.getElementById("input2").innerHTML = mainNumber[2];
    document.getElementById("input3").innerHTML = mainNumber[1];
    document.getElementById("input4").innerHTML = mainNumber[0];
}

function play(level) {
    oldproblem = problem
    while(problem == oldproblem) {
        problem = getRandomInt(10) + 1 + 10*(level-1);
    }
    answer = problem ** 2
    document.getElementById("puzzle").innerHTML = (problem.toString()+'²');
}
