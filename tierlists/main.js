list = [
    [],
    [],
    [],
    ['fruit'],
    [],
    []
]

function loadPage(){
    list.forEach(function(element, index){
        elementText = ''
        console.log(element)
        element.forEach(function(item){
            elementText+=(`<a href="`+item+`"><img class="tierItem" src="images/`+item+`.png"></a>`)
        })
        document.getElementById('items'+index).innerHTML = elementText
    });
}