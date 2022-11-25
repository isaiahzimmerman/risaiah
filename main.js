var siteList = [
    {title: 'Solitaire', path: '/solitaire/', icon: ['/assets/icons/joker.svg', '/assets/icons/darkjoker.svg'], author: ['isaiah', 'ryan']},
    {title: 'Tic-Tac-Toe', path: '/tictactoe/', icon: ['/assets/x.png'], author: ['ryan']},
    {title: 'Triangle Calculator', path: '/trianglecalc/', icon: ['/assets/protractor.png'], author: ['isaiah']},
    {title: 'Molar Mass Calculator', path: '/molarmass/', icon: ['/assets/balance.png'], author: ['isaiah']},
    {title: 'Squid Game in Python', path: '/squidgame/', icon: ['/assets/squid.png'], author: ['isaiah']},
    {title: 'Fruit Tier List', path: '/tierlists/fruit/', icon: ['/assets/apple.png'], author: ['isaiah']},
    {title: 'Squares Game', path: '/squaresgame/', icon: ['/assets/square.png'], author: ['isaiah']},
    {title: 'Morse Code Practice', path: '/morsecodepractice/', icon: ['/assets/imposter.png'], author: ['isaiah']},
    {title: 'Birthday Calculator', path: '/birthdaycalculator/', icon: ['/assets/cake.png'], author: ['ryan']},
    {title: 'Linear Regression Calculator', path: '/linreg/', icon: ['/assets/chart.png'], author: ['isaiah']},
    {title: 'Compañeros Generator', path: '/companeros/', icon:['/assets/spainflag.png'], author: ['isaiah']},
    
    //keep last
    {title: 'About', path: '/about/', icon: ['/assets/thinking.png'], author: []},
]

function loadSite(){
    bodyHTML = ""

    siteList.forEach(function(element, index){
        bodyHTML+=`
        <a href="`+element.path+`"
            <div class="siteIcon">
                <img class="iconIMG" src="`+element.icon[0]+`">
                <span class="caption">`+element.title+`</span>
            </div>
        </a>
        `
    })

    document.getElementsByClassName("bodyHTML")[0].innerHTML = bodyHTML
    setColorScheme(getPreferredColorScheme())
}

function setColorScheme(scheme) {
    if(scheme == 'dark'){
        // Dark
        console.log('dark')
        $(".caption").css("color", "#E7F6F2")
        $("body").css("background-color", "#2C3333") 
        $("h1").css("color", "#A5C9CA")
        $(".iconIMG").each(function(index){
            var $img = $(this)
            $img.attr("src", siteList[index].icon[1])
            console.log(index)
        })
    }else{
        // Default
        $(".caption").css("color", "#3A8891")
        $("body").css("background-color", "#FFEFD6") 
        $("h1").css("color", "#0E5E6F")
        $(".iconIMG").each(function(index){
            var $img = $(this)
            $img.attr("src", siteList[index].icon[0])
            console.log(index)
        console.log('default')
        })
    }
  }
  
  function getPreferredColorScheme() {
    if (window.matchMedia) {
      if(window.matchMedia('(prefers-color-scheme: dark)').matches){
        return 'dark';
      } else {
        return 'light';
      }
    }
    return 'light';
  }
  
  if(window.matchMedia){
    var colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeQuery.addEventListener('change', setColorScheme(getPreferredColorScheme()));
  }