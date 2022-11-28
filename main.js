var siteList = [
    {title: 'Solitaire', path: '/solitaire/', icon: ['/assets/icons/joker.svg', '/assets/icons/darkjoker.svg'], author: ['isaiah', 'ryan']},
    {title: 'Tic-Tac-Toe', path: '/tictactoe/', icon: ['/assets/icons/tictactoe.svg', '/assets/icons/darktictactoe.svg'], author: ['ryan']},
    {title: 'Triangle Calculator', path: '/trianglecalc/', icon: ['/assets/icons/protractor.svg', '/assets/icons/darkprotractor.svg'], author: ['isaiah']},
    {title: 'Molar Mass Calculator', path: '/molarmass/', icon: ['/assets/icons/beaker.svg', '/assets/icons/darkbeaker.svg'], author: ['isaiah']},
    {title: 'Squid Game in Python', path: '/squidgame/', icon: ['/assets/icons/squid.svg', '/assets/icons/darksquid.svg'], author: ['isaiah']},
    {title: 'Fruit Tier List', path: '/tierlists/fruit/', icon: ['/assets/icons/apple.svg', '/assets/icons/darkapple.svg'], author: ['isaiah']},
    {title: 'Squares Game', path: '/squaresgame/', icon: ['/assets/icons/xsquared.svg', '/assets/icons/darkxsquared.svg'], author: ['isaiah']},
    {title: 'Morse Code Practice', path: '/morsecodepractice/', icon: ['/assets/icons/morse.svg', '/assets/icons/darkmorse.svg'], author: ['isaiah']},
    {title: 'Birthday Calculator', path: '/birthdaycalc/', icon: ['/assets/icons/cake.svg', '/assets/icons/darkcake.svg'], author: ['ryan']},
    {title: 'Linear Regression Calculator', path: '/linreg/', icon: ['/assets/icons/graph.svg', '/assets/icons/darkgraph.svg'], author: ['isaiah']},
    {title: 'Compañeros Generator', path: '/companeros/', icon:['/assets/icons/eslang.svg', '/assets/icons/darkeslang.svg'], author: ['isaiah']},
    
    //keep last
    {title: 'About', path: '/about/', icon: ['/assets/icons/questionmark.svg', '/assets/icons/darkquestionmark.svg'], author: []},
]

function loadSite(){
    bodyHTML = ""

    siteList.forEach(function(element, index){
        bodyHTML+=`
        <a href="`+element.path+`">
            <div class="siteIcon">
                <img class="iconIMG" src="`+element.icon[0]+`">
                <span class="caption">`+element.title+`</span>
            </div>
        </a>
        `
    })

    document.getElementsByClassName("bodyHTML")[0].innerHTML = bodyHTML
    setColorScheme(getPreferredColorScheme())
    cacheSiteImages();
}

function setColorScheme(scheme) {
    if(scheme == 'dark'){
        // Dark
        console.log('dark')
        $(".caption").css("color", "#E7F6F2")
        $("body").css("background-color", "#2C3333") 
        $("h1").css("color", "#A5C9CA")
        $(".bottomMessage").css("color", "#E7F6F2")
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
        $(".bottomMessage").css("color", "#3A8891")
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
/*  
  if(window.matchMedia){
    var colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    colorSchemeQuery.addEventListener('change', setColorScheme(getPreferredColorScheme()));
  }
}
*/

function cacheSiteImages(){
    imgsList = []
    siteList.forEach(function(element, index){
        element.icon.forEach(function(element2, index2){
            imgsList.push(element2);
        })
    }) 
    cacheImages(imgsList)
}

function cacheImages(array)
{
    if (!cacheImages.list) {
        cacheImages.list = [];
    }
    var list = cacheImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}