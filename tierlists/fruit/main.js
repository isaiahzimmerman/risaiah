list = [
    ['apple'],
    ['grapes', 'watermelon', 'pineapple', 'mango', 'blueberries'],
    ['banana', 'cherries', 'strawberry', 'orange', 'peach'],
    ['pomegranate', 'razzberries', 'blackberries', 'bloodOrange'],
    ['avocado', 'cantaloupe'],
    []
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