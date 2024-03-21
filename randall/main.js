people = [
    "Livy",
    "Isaiah",
    "Jonathan",
    "Alex",
    "Juan Carlos",
    "Ruby",
    "Autumn",
    "Katie",
    "Lauren",
    "Erin"
]

function drawPyramid(tiers)
{
    pyramidHTML = ""
    personCount = -1
    for(i=tiers;i>=1;i--)
    {
        pyramidHTML += `<div class="tier">`
        for(j=i; j<= tiers; j++)
        {
            personCount ++
            pyramidHTML += `<div class="box">${(personCount < people.length ? people[personCount] : "person "+(personCount+1))}</div>`
        }
        pyramidHTML += `</div>`
    }
    document.getElementById("main").innerHTML = pyramidHTML
}