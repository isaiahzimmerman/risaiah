list = [
    ['razzberries','peach'],
    ['cherries','mango','strawberry'],
    ['watermelon','pineapple','blackberries'],
    ['pomegranate','grapes','blueberries','apple'],
    [],
    ['cantaloupe']
]

function loadPage(){
    list.forEach(function(element, index){
        elementText = ''
        console.log(element)
        element.forEach(function(item){
            elementText+=(`<img class="tierItem" src="images/`+item+`.png">`)
        })
        document.getElementById('items'+index).innerHTML = elementText
    });
}