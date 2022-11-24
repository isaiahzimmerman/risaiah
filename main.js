//lol
var siteList = [
    {title: 'Solitaire', path: '/solitaire/', icon: '/assets/joker.png', author: ['isaiah', 'ryan']},
    {title: 'Tic-Tac-Toe', path: '/tictactoe/', icon: '/assets/x.png', author: ['ryan']},
    {title: 'Triangle Calculator', path: '/trianglecalc/', icon: '/assets/protractor.png', author: ['isaiah']},
    {title: 'Molar Mass Calculator', path: '/molarmass/', icon: '/assets/balance.png', author: ['isaiah']},
    {title: 'Squid Game in Python', path: '/squidgame/', icon: '/assets/squid.png', author: ['isaiah']},
    {title: 'Fruit Tier List', path: '/tierlists/fruit/', icon: '/assets/apple.png', author: ['isaiah']},
    {title: 'Squares Game', path: '/squaresgame/', icon: '/assets/square.png', author: ['isaiah']},
    {title: 'Morse Code Practice', path: '/morsecodepractice/', icon: '/assets/imposter.png', author: ['isaiah']},
    {title: 'Birthday Calculator', path: '/birthdaycalculator/', icon: '/assets/cake.png', author: ['ryan']},
    {title: 'Linear Regression Calculator', path: '/linreg/', icon: '/assets/chart.png', author: ['isaiah']},
    {title: 'Compañeros Generator', path: '/companeros/', icon:'/assets/spainflag.png', author: ['isaiah']},
    
    //keep last
    {title: 'About', path: '/about/', icon: '/assets/thinking.png', author: []},
]

bodyHTML = ""
sitesPerRow = 3;

function loadSite(){
    siteList.forEach(function(currentValue, index){
        if(index%sitesPerRow==0){
            bodyHTML+=`<div class="container">`
        }

        bodyHTML +=
        `<div class="item">
            <a href="`+currentValue.path+`"> 
                <img src="`+currentValue.icon+`"/>
                <span class="caption">`+currentValue.title+`</span>
            </a>`
        for(i=0; i<currentValue.author.length; i++){
            bodyHTML += `<a href="`+currentValue.author[i]+`">
                <div class="image-cropper" style="right: `+4.5*i+`vw">
                    <img src="/assets/`+currentValue.author[i]+`.jpg" class="rounded" />
                </div>
            </a>`

        }
            
        bodyHTML += `</div>`

        if(index%sitesPerRow==2){
            bodyHTML+=`</div>`
        }
    })

    document.getElementById("bodyHTML").innerHTML = bodyHTML
}