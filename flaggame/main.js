function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

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
    }
}

//both
function changeFlag(flag){
    document.getElementById('flag').src = 'flags/'+flag+'.svg'
}

flags = [
    ['mexico'],
    ['guatemala'],
    ['honduras'],
    ['el_salvador']
]

function randomFlag(){
    changeFlag(flags[getRandomInt(4)][0])
}

//matching


//typing