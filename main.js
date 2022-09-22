//lol
var siteList = [
    {title: 'Solitaire', path: '/solitaire/', icon: '/assets/joker.png'},
    {title: 'Tic-Tac-Toe', path: '/tictactoe/', icon: '/assets/x.png'},
    {title: 'Triangle Calculator', path: '/trianglecalc/', icon: '/assets/protractor.png'},
    {title: 'Molar Mass Calculator', path: '/molarmass/', icon: '/assets/balance.png'},
    {title: 'Squid Game in Python', path: '/squidgame/', icon: '/assets/squid.png'},
    {title: 'Fruit Tier List', path: '/tierlists/fruit/', icon: '/assets/apple.png'},
    {title: 'Squares Game', path: '/squaresgame/', icon: '/assets/square.png'},
    {title: 'Morse Code Practice', path: '/morsecodepractice/', icon: '/assets/imposter.png'},
    {title: 'Birthday Calculator', path: '/birthdaycalculator/', icon: '/assets/cake.png'},
    {title: 'Linear Regression Calculator', path: '/linreg/', icon: '/assets/chart.png'},
    {title: 'Compañeros Generator', path: '/companeros/', icon:'/assets/spainflag.png'},
    
    //keep last
    {title: 'About', path: '/about/', icon: '/assets/thinking.png'},
]

bodyHTML = ""

function loadSite(){
    siteList.forEach(function(currentValue, index){
        if(index%4==0){
            bodyHTML+=`<div class="container">`
        }

        bodyHTML +=
        `<div class="item">
            <a href="`+currentValue.path+`"> 
                <img src="`+currentValue.icon+`"/>
                <span class="caption">`+currentValue.title+`</span>
            </a>
        </div>`

        if(index%4==3){
            bodyHTML+=`</div>`
        }
    })

    document.getElementById("bodyHTML").innerHTML = bodyHTML
}