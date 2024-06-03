var siteList = [
    {title: 'Groveopoly', path: '/groveopoly/', icon: ['/assets/icons/groveopoly.svg', '/assets/icons/darkgroveopoly.svg'], author: ['isaiah']},
    {title: 'Solitaire', path: '/solitaire/', icon: ['/assets/icons/joker.svg', '/assets/icons/darkjoker.svg'], author: ['isaiah', 'ryan']},
    {title: 'Connect Four', path: '/connectfour/', icon: ['/assets/icons/connectfour.svg', '/assets/icons/darkconnectfour.svg'], author: ['isaiah']},
    {title: "Conway's Game of Life", path: '/gameoflife/', icon: ['/assets/icons/glider.svg', '/assets/icons/darkglider.svg'], author: ['isaiah']},
    {title: 'Tic-Tac-Toe', path: '/tictactoe/', icon: ['/assets/icons/tictactoe.svg', '/assets/icons/darktictactoe.svg'], author: ['ryan']},
    // {title: 'Triangle Calculator', path: '/trianglecalc/', icon: ['/assets/icons/protractor.svg', '/assets/icons/darkprotractor.svg'], author: ['isaiah']},
    {title: 'Molar Mass Calculator', path: '/molarmass/', icon: ['/assets/icons/beaker.svg', '/assets/icons/darkbeaker.svg'], author: ['isaiah']},
    {title: 'Squid Game in Python', path: '/squidgame/', icon: ['/assets/icons/squid.svg', '/assets/icons/darksquid.svg'], author: ['isaiah']},
    {title: 'Fruit Tier List', path: '/tierlists/fruit/', icon: ['/assets/icons/apple.svg', '/assets/icons/darkapple.svg'], author: ['isaiah']},
    {title: 'Squares Game', path: '/squaresgame/', icon: ['/assets/icons/xsquared.svg', '/assets/icons/darkxsquared.svg'], author: ['isaiah']},
    {title: 'Morse Code Practice', path: '/morsecodepractice/', icon: ['/assets/icons/morse.svg', '/assets/icons/darkmorse.svg'], author: ['isaiah']},
    {title: 'Birthday Calculator', path: '/birthdaycalc/', icon: ['/assets/icons/cake.svg', '/assets/icons/darkcake.svg'], author: ['ryan']},
    {title: 'Linear Regression Calculator', path: '/linreg/', icon: ['/assets/icons/graph.svg', '/assets/icons/darkgraph.svg'], author: ['isaiah']},
    {title: 'Compañeros Generator', path: '/companeros/', icon:['/assets/icons/eslang.svg', '/assets/icons/darkeslang.svg'], author: ['isaiah']},
    {title: 'Memory Game', path: '/memorization/', icon:['/assets/icons/brain.svg', '/assets/icons/darkbrain.svg'], author: ['isaiah', 'ryan']},
    
    //keep last
    {title: 'About', path: '/about/', icon: ['/assets/icons/questionmark.svg', '/assets/icons/darkquestionmark.svg'], author: []},
]

function loadSite(){
    bodyHTML = ""

    siteList.forEach(function(element, index){
        bodyHTML+=`
        <a href="`+element.path+`">
            <div class="siteIcon">
                <img class="iconIMG lightIMG" src="`+element.icon[0]+`"><img class="iconIMG darkIMG" src="`+element.icon[1]+`">
                <span class="caption">`+element.title+`</span>
            </div>
        </a>
        `
    })

    document.getElementById("bodyHTML").innerHTML = bodyHTML
}