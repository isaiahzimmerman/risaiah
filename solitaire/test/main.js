function updateCard(target, value) {
    document.getElementById(target).src = ("../cards/" + value + ".svg")
}

function test(cards) {

    newValue = ""

    cards.forEach(function (item, index) {
        newValue += ("<img src='../cards/" + item[0] + '_' + item[1] + ".svg'>\n")
        
        console.log(item[1].toString() + ' of ' + item[0].toString());
    });


    console.log(newValue)

    document.getElementById("container").innerHTML = newValue
}