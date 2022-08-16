//lol
var siteList = [
    {title: 'Solitaire', path: '/solitaire/', icon: '/assets/joker.png'},
    {title: 'Tic-Tac-Toe', path: '/tictactoe/', icon: '/assets/joker.png'},
    {title: 'Triangle Calculator', path: '/trianglecalc/', icon: '/assets/joker.png'},
    {title: 'Molar Mass Calculator', path: '/molarmass/', icon: '/assets/joker.png'},
    {title: 'Squid Game in Python', path: '/squidgame/', icon: '/assets/joker.png'},
    {title: 'Fruit Tier List', path: '/tierlists/fruit/', icon: '/assets/joker.png'},
    {title: 'Squares Game', path: '/squaresgame/', icon: '/assets/joker.png'},
    {title: 'Morse Code Practice', path: '/morsecodepractice/', icon: '/assets/joker.png'},
    {title: 'Birthday Calculator', path: '/birthdaycalculator/', icon: '/assets/joker.png'},
]

bodyHTML = ""

function loadSite(){
    siteList.forEach(function(currentValue, index){
        if(index%3==0){
            bodyHTML+=`<div class="container">`
        }

        bodyHTML +=
        `<div class="item">
            <a href="`+currentValue.path+`"> 
                <img src="`+currentValue.icon+`"/>
                <span class="caption">`+currentValue.title+`</span>
            </a>
        </div>`

        if(index%3==2){
            bodyHTML+=`</div>`
        }
    })

    document.getElementById("bodyHTML").innerHTML = bodyHTML
}