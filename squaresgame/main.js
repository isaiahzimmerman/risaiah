mainNumber = [
    '_','_','_','_'
]

filledSpaces = 0
answer = 0

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
                play()
            }else{
                console.log('rong')
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
    problem = getRandomInt(8) + 2;
    answer = problem ** 2
    document.getElementById("puzzle").innerHTML = (problem.toString()+'²');
}
